// VeloU API (Cloudflare Worker + D1). Stores athletes, assessments and measurements.
//
// Route:      velou.coach/api/v1/*   (the Cloudflare Access app already covers the hostname)
// Bindings:   DB            the D1 database (schema in schema.sql)
//             FILES         the R2 bucket for photos, videos and reports
// Variables:  TEAM_DOMAIN   e.g. velouniversity.cloudflareaccess.com
//             POLICY_AUD    the Application Audience (AUD) tag of the Access application
//             ALLOWED_ORIGIN  optional, defaults to https://velou.coach (writes must come from this origin; several can be listed, comma separated)
//
// Cloudflare Access blocks anyone who is not signed in before a request reaches here. The Worker checks the
// Access token again, and uses the email inside it to know which coach is acting.
//
// Routes (all JSON):
//   GET   /api/v1/me
//   GET   /api/v1/overview?segment=&coach=&status=&q=   the Athlete Management overview (arm score, programs, injury)
//   GET   /api/v1/athletes?q=&status=&limit=&offset=
//   POST  /api/v1/athletes
//   POST  /api/v1/admin/sync                         read the sheets now (also runs on a schedule)
//   GET   /api/v1/athletes/:id                       athlete + their assessments
//   PATCH /api/v1/athletes/:id
//   GET   /api/v1/athletes/:id/measurements?metric=  time series for charts
//   GET   /api/v1/athletes/:id/scores                the Energy Scores over time (rebuilt from the tests, plus snapshots)
//   POST  /api/v1/admin/scores/rebuild               build the rebuilt scores again from the tests
//   GET   /api/v1/athletes/:id/messages?after=       the athlete's thread with their coaches (after = the last message id you have)
//   POST  /api/v1/athletes/:id/messages              { body, att?, as?: 'athlete' } write to the thread (as athlete = a test from the preview)
//   POST  /api/v1/athletes/:id/messages/read         { reader: 'coach' | 'athlete' } mark the other side's messages read
//   POST  /api/v1/athletes/:id/messages/upload?name= raw photo or video body; the answer is the att to send with the message
//   DELETE /api/v1/athletes/:id/messages?test=1      remove the test messages (and their files)
//   GET   /api/v1/messages/:id/file                  a message's photo or video (byte ranges supported)
//   POST  /api/v1/athletes/:id/files?kind=&assessment_id=&name=   raw file body (photo, video, report) into R2
//   GET   /api/v1/files/:id                          the file itself
//   POST  /api/v1/assessments
//   GET   /api/v1/assessments/:id                    assessment + its measurements
//   PUT   /api/v1/assessments/:id

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'private, no-store',
  'X-Content-Type-Options': 'nosniff',
};

const LEVELS = ['basic', 'advanced', 'premier'];
const SECTIONS = ['movement-screen', 'force-plates', 'athletic-testing', 'throwing', 'mound', 'body-comp', 'mental-skills'];
const EXAM_SECTIONS = ['mental-skills', 'nutrition'];
const ATHLETE_STATUSES = ['lead', 'active', 'paused', 'alumni'];
const MAX_BODY = 1024 * 1024;
const SEGMENTS = ['on-site', 'remote', 'black-label', 'evaluation'];
const ARM_DROP_FLAG = 0.10; // flag an athlete whose latest arm score is 10% or more below their previous test
const FILE_KINDS = ['headshot', 'shirtless', 'mechanics_video', 'trackman_report', 'trackman_video', 'mound_plate_report', 'mocap_report', 'report'];
const FILE_TYPES = /^(image\/(jpeg|png|webp|heic|heif)|video\/(mp4|quicktime|webm|x-m4v)|application\/pdf|text\/csv|application\/vnd\.ms-excel|application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet)$/;
const MAX_FILE = 100 * 1024 * 1024; // Workers accept request bodies up to 100 MB

class HttpError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

function reply(status, body) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

// ---- Cloudflare Access JWT check (returns the token payload, or null) ----------------------

let jwksCache = { keys: null, at: 0 };

async function getKeys(env) {
  if (jwksCache.keys && Date.now() - jwksCache.at < 10 * 60 * 1000) return jwksCache.keys;
  const res = await fetch(`https://${env.TEAM_DOMAIN}/cdn-cgi/access/certs`);
  if (!res.ok) throw new Error('certs');
  const { keys } = await res.json();
  jwksCache = { keys, at: Date.now() };
  return keys;
}

function b64urlToBytes(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  s += '='.repeat((4 - (s.length % 4)) % 4);
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function verifyAccess(request, env) {
  const token = request.headers.get('Cf-Access-Jwt-Assertion');
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    const header = JSON.parse(new TextDecoder().decode(b64urlToBytes(parts[0])));
    const payload = JSON.parse(new TextDecoder().decode(b64urlToBytes(parts[1])));
    if (header.alg !== 'RS256') return null;

    const keys = await getKeys(env);
    const jwk = keys.find(k => k.kid === header.kid);
    if (!jwk) return null;
    const key = await crypto.subtle.importKey(
      'jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const ok = await crypto.subtle.verify(
      'RSASSA-PKCS1-v1_5', key, b64urlToBytes(parts[2]),
      new TextEncoder().encode(parts[0] + '.' + parts[1]));
    if (!ok) return null;

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) return null;
    if (payload.nbf && payload.nbf > now + 60) return null;
    if (payload.iss !== `https://${env.TEAM_DOMAIN}`) return null;
    const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
    if (!aud.includes(env.POLICY_AUD)) return null;
    if (!payload.email) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

// ---- Validation helpers ---------------------------------------------------------------------

const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const nowIso = () => new Date().toISOString();
const today = () => new Date().toISOString().slice(0, 10);

function str(v, name, { max = 200, required = false } = {}) {
  if (v === undefined || v === null || v === '') {
    if (required) throw new HttpError(400, `${name} is required`);
    return null;
  }
  if (typeof v !== 'string') throw new HttpError(400, `${name} must be text`);
  const t = v.trim();
  if (!t && required) throw new HttpError(400, `${name} is required`);
  if (t.length > max) throw new HttpError(400, `${name} is too long`);
  return t || null;
}

function day(v, name, { required = false } = {}) {
  const t = str(v, name, { max: 10, required });
  if (t === null) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t) || Number.isNaN(Date.parse(t))) throw new HttpError(400, `${name} must be YYYY-MM-DD`);
  return t;
}

function oneOf(v, list, name, { required = false } = {}) {
  if (v === undefined || v === null || v === '') {
    if (required) throw new HttpError(400, `${name} is required`);
    return null;
  }
  if (!list.includes(v)) throw new HttpError(400, `${name} must be one of: ${list.join(', ')}`);
  return v;
}

function jsonText(v, name, max = 200 * 1024) {
  if (v === undefined || v === null) return '{}';
  if (!isObj(v)) throw new HttpError(400, `${name} must be an object`);
  const t = JSON.stringify(v);
  if (t.length > max) throw new HttpError(400, `${name} is too large`);
  return t;
}

function parseMeasurements(list, athleteId, assessmentId, measuredOn) {
  if (list === undefined || list === null) return [];
  if (!Array.isArray(list) || list.length > 500) throw new HttpError(400, 'measurements must be a list of up to 500');
  return list.map((m, i) => {
    if (!isObj(m)) throw new HttpError(400, `measurements[${i}] must be an object`);
    const metric = str(m.metric, `measurements[${i}].metric`, { max: 64, required: true });
    if (!/^[a-z0-9_.-]+$/.test(metric)) throw new HttpError(400, `measurements[${i}].metric must be lowercase letters, numbers, . _ -`);
    let value = null;
    if (m.value !== undefined && m.value !== null && m.value !== '') {
      value = Number(m.value);
      if (!Number.isFinite(value)) throw new HttpError(400, `measurements[${i}].value must be a number`);
    }
    const textValue = str(m.text_value, `measurements[${i}].text_value`, { max: 200 });
    if (value === null && textValue === null) throw new HttpError(400, `measurements[${i}] needs a value or text_value`);
    const unit = str(m.unit, `measurements[${i}].unit`, { max: 16 });
    const side = oneOf(m.side, ['L', 'R', 'B'], `measurements[${i}].side`);
    return { assessmentId, athleteId, metric, value, textValue, unit, side, measuredOn };
  });
}

function measurementStatement(db, m) {
  return db.prepare(
    'INSERT INTO measurements (assessment_id, athlete_id, metric, value, text_value, unit, side, measured_on) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
  ).bind(m.assessmentId, m.athleteId, m.metric, m.value, m.textValue, m.unit, m.side, m.measuredOn);
}

// ---- Coaches --------------------------------------------------------------------------------

async function currentCoach(env, email) {
  const t = nowIso();
  const name = email.split('@')[0];
  await env.DB.prepare(
    `INSERT INTO coaches (id, email, name, created_at, last_seen) VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(email) DO UPDATE SET last_seen = excluded.last_seen`
  ).bind(crypto.randomUUID(), email.toLowerCase(), name, t, t).run();
  return env.DB.prepare('SELECT id, email, name, role FROM coaches WHERE email = ?').bind(email.toLowerCase()).first();
}

// ---- Athletes -------------------------------------------------------------------------------

const ATHLETE_FIELDS = {
  first_name: v => str(v, 'first_name', { max: 80, required: true }),
  last_name: v => str(v, 'last_name', { max: 80, required: true }),
  dob: v => day(v, 'dob'),
  email: v => str(v, 'email', { max: 200 }),
  phone: v => str(v, 'phone', { max: 40 }),
  parent_name: v => str(v, 'parent_name', { max: 120 }),
  parent_email: v => str(v, 'parent_email', { max: 200 }),
  parent_phone: v => str(v, 'parent_phone', { max: 40 }),
  playing_level: v => str(v, 'playing_level', { max: 60 }),
  residence: v => str(v, 'residence', { max: 120 }),
  sport: v => str(v, 'sport', { max: 60 }),
  position: v => str(v, 'position', { max: 60 }),
  team: v => str(v, 'team', { max: 120 }),
  grad_year: v => {
    if (v === undefined || v === null || v === '') return null;
    const n = Number(v);
    if (!Number.isInteger(n) || n < 1990 || n > 2100) throw new HttpError(400, 'grad_year must be a year');
    return n;
  },
  dominant_hand: v => oneOf(v, ['R', 'L', 'S'], 'dominant_hand'),
  status: v => oneOf(v, ATHLETE_STATUSES, 'status'),
  segment: v => oneOf(v, SEGMENTS, 'segment'),
  throwing_coach: v => str(v, 'throwing_coach', { max: 60 }),
  strength_coach: v => str(v, 'strength_coach', { max: 60 }),
  injury_status: v => str(v, 'injury_status', { max: 40 }),
  injury_location: v => str(v, 'injury_location', { max: 120 }),
  injury_notes: v => str(v, 'injury_notes', { max: 2000 }),
  coach_id: v => str(v, 'coach_id', { max: 64 }),
};

async function requireCoach(env, id) {
  if (id && !(await env.DB.prepare('SELECT 1 AS x FROM coaches WHERE id = ?').bind(id).first())) throw new HttpError(400, 'coach_id does not exist');
}

async function createAthlete(env, body, coach) {
  if (!isObj(body)) throw new HttpError(400, 'body must be an object');
  const id = crypto.randomUUID();
  const t = nowIso();
  const row = {};
  for (const [k, check] of Object.entries(ATHLETE_FIELDS)) row[k] = check(body[k]);
  row.status = row.status || 'active';
  await requireCoach(env, row.coach_id);
  row.coach_id = row.coach_id || coach.id;
  const profile = jsonText(body.profile, 'profile', 50 * 1024);
  await env.DB.prepare(
    `INSERT INTO athletes (id, first_name, last_name, dob, email, phone, parent_name, parent_email, parent_phone, playing_level, residence,
       sport, position, team, grad_year, dominant_hand, status, coach_id, profile, created_at, updated_at,
       segment, throwing_coach, strength_coach, injury_status, injury_location, injury_notes, source)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(id, row.first_name, row.last_name, row.dob, row.email, row.phone, row.parent_name, row.parent_email, row.parent_phone,
    row.playing_level, row.residence, row.sport, row.position, row.team, row.grad_year,
    row.dominant_hand, row.status, row.coach_id, profile, t, t,
    row.segment, row.throwing_coach, row.strength_coach, row.injury_status, row.injury_location, row.injury_notes, 'app').run();
  return getAthlete(env, id);
}

async function getAthlete(env, id) {
  const a = await env.DB.prepare('SELECT * FROM athletes WHERE id = ?').bind(id).first();
  if (!a) throw new HttpError(404, 'athlete not found');
  a.profile = JSON.parse(a.profile || '{}');
  return a;
}

async function updateAthlete(env, id, body) {
  if (!isObj(body)) throw new HttpError(400, 'body must be an object');
  await getAthlete(env, id);
  const sets = [], vals = [];
  for (const [k, check] of Object.entries(ATHLETE_FIELDS)) {
    if (!(k in body)) continue;
    sets.push(`${k} = ?`);
    vals.push(check(body[k]));
  }
  if ('profile' in body) { sets.push('profile = ?'); vals.push(jsonText(body.profile, 'profile', 50 * 1024)); }
  if ('coach_id' in body) await requireCoach(env, body.coach_id);
  if (!sets.length) throw new HttpError(400, 'nothing to update');
  sets.push('updated_at = ?'); vals.push(nowIso());
  await env.DB.prepare(`UPDATE athletes SET ${sets.join(', ')} WHERE id = ?`).bind(...vals, id).run();
  return getAthlete(env, id);
}

async function listAthletes(env, url) {
  const q = (url.searchParams.get('q') || '').trim().slice(0, 80);
  const status = url.searchParams.get('status');
  const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') || '50', 10) || 50, 1), 200);
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10) || 0, 0);
  const where = [], vals = [];
  if (q) {
    const like = `%${q.replace(/[\\%_]/g, m => '\\' + m)}%`;
    where.push("(first_name LIKE ? ESCAPE '\\' OR last_name LIKE ? ESCAPE '\\' OR (first_name || ' ' || last_name) LIKE ? ESCAPE '\\')");
    vals.push(like, like, like);
  }
  if (status) { oneOf(status, ATHLETE_STATUSES, 'status'); where.push('status = ?'); vals.push(status); }
  const sql = `SELECT a.id, a.first_name, a.last_name, a.sport, a.position, a.team, a.status, a.coach_id,
      (SELECT MAX(assessed_on) FROM assessments s WHERE s.athlete_id = a.id AND s.status = 'submitted') AS last_assessed_on
    FROM athletes a ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
    ORDER BY a.last_name, a.first_name LIMIT ? OFFSET ?`;
  const { results } = await env.DB.prepare(sql).bind(...vals, limit, offset).all();
  return { athletes: results, limit, offset };
}

// ---- Assessments ----------------------------------------------------------------------------

function parseAssessmentCommon(body) {
  const status = oneOf(body.status, ['draft', 'submitted'], 'status') || 'draft';
  return {
    status,
    assessedOn: day(body.assessed_on, 'assessed_on') || today(),
    formVersion: str(body.form_version, 'form_version', { max: 40 }),
    data: jsonText(body.data, 'data'),
  };
}

async function createAssessment(env, body, coach) {
  if (!isObj(body)) throw new HttpError(400, 'body must be an object');
  const athleteId = str(body.athlete_id, 'athlete_id', { max: 64, required: true });
  await getAthlete(env, athleteId);
  const type = oneOf(body.type, ['intake', 'retest', 'exam'], 'type', { required: true });
  let level = null, section = null;
  if (type === 'intake') {
    level = oneOf(body.level, LEVELS, 'level', { required: true });
    if (body.section) throw new HttpError(400, 'an intake has a level, not a section');
  } else {
    section = oneOf(body.section, type === 'exam' ? EXAM_SECTIONS : SECTIONS, 'section', { required: true });
    if (body.level) throw new HttpError(400, 'a ' + (type === 'exam' ? 'exam' : 're-test') + ' has a section, not a level');
  }
  const c = parseAssessmentCommon(body);
  const id = crypto.randomUUID();
  const t = nowIso();
  const ms = parseMeasurements(body.measurements, athleteId, id, c.assessedOn);
  await env.DB.batch([
    env.DB.prepare(
      `INSERT INTO assessments (id, athlete_id, type, level, section, assessed_on, coach_id, status, form_version, data, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(id, athleteId, type, level, section, c.assessedOn, coach.id, c.status, c.formVersion, c.data, t, t),
    ...ms.map(m => measurementStatement(env.DB, m)),
  ]);
  return getAssessment(env, id);
}

async function getAssessment(env, id) {
  const a = await env.DB.prepare('SELECT * FROM assessments WHERE id = ?').bind(id).first();
  if (!a) throw new HttpError(404, 'assessment not found');
  a.data = JSON.parse(a.data || '{}');
  const { results } = await env.DB.prepare(
    'SELECT metric, value, text_value, unit, side FROM measurements WHERE assessment_id = ? ORDER BY id'
  ).bind(id).all();
  a.measurements = results;
  return a;
}

async function updateAssessment(env, id, body) {
  if (!isObj(body)) throw new HttpError(400, 'body must be an object');
  const existing = await env.DB.prepare('SELECT athlete_id, assessed_on FROM assessments WHERE id = ?').bind(id).first();
  if (!existing) throw new HttpError(404, 'assessment not found');
  const sets = ['updated_at = ?'], vals = [nowIso()];
  let assessedOn = existing.assessed_on;
  if ('status' in body) { sets.push('status = ?'); vals.push(oneOf(body.status, ['draft', 'submitted'], 'status', { required: true })); }
  if ('assessed_on' in body) { assessedOn = day(body.assessed_on, 'assessed_on', { required: true }); sets.push('assessed_on = ?'); vals.push(assessedOn); }
  if ('form_version' in body) { sets.push('form_version = ?'); vals.push(str(body.form_version, 'form_version', { max: 40 })); }
  if ('data' in body) { sets.push('data = ?'); vals.push(jsonText(body.data, 'data')); }
  const stmts = [env.DB.prepare(`UPDATE assessments SET ${sets.join(', ')} WHERE id = ?`).bind(...vals, id)];
  if ('measurements' in body || 'assessed_on' in body) {
    // replace the measurement rows so they always match the saved answers
    const ms = 'measurements' in body ? parseMeasurements(body.measurements, existing.athlete_id, id, assessedOn) : null;
    if (ms) {
      stmts.push(env.DB.prepare('DELETE FROM measurements WHERE assessment_id = ?').bind(id));
      for (const m of ms) stmts.push(measurementStatement(env.DB, m));
    } else {
      stmts.push(env.DB.prepare('UPDATE measurements SET measured_on = ? WHERE assessment_id = ?').bind(assessedOn, id));
    }
  }
  await env.DB.batch(stmts);
  return getAssessment(env, id);
}

async function athleteMeasurements(env, athleteId, url) {
  await getAthlete(env, athleteId);
  const metric = url.searchParams.get('metric');
  const sql = `SELECT assessment_id, metric, value, text_value, unit, side, measured_on FROM measurements
    WHERE athlete_id = ? ${metric ? 'AND metric = ?' : ''} ORDER BY measured_on, id LIMIT 2000`;
  const binds = metric ? [athleteId, metric] : [athleteId];
  const { results } = await env.DB.prepare(sql).bind(...binds).all();
  return { measurements: results };
}

const PROGRAM_CATEGORIES = ['throwing', 'patterning', 'lifting', 'speed', 'arm_care', 'mobility'];

function daysLeft(endsOn) {
  if (!endsOn) return null;
  const end = Date.parse(endsOn + 'T00:00:00Z');
  if (Number.isNaN(end)) return null;
  const today = Date.parse(new Date().toISOString().slice(0, 10) + 'T00:00:00Z');
  return Math.round((end - today) / 86400000);
}

async function overview(env, url) {
  const segment = url.searchParams.get('segment');
  const coach = (url.searchParams.get('coach') || '').trim();
  const status = url.searchParams.get('status') || 'active';
  const q = (url.searchParams.get('q') || '').trim().slice(0, 80);
  const where = [], vals = [];
  if (segment) { oneOf(segment, SEGMENTS, 'segment'); where.push('a.segment = ?'); vals.push(segment); }
  if (coach) { where.push('(a.throwing_coach = ? OR a.strength_coach = ?)'); vals.push(coach, coach); }
  if (status !== 'all') { oneOf(status, ATHLETE_STATUSES, 'status'); where.push('a.status = ?'); vals.push(status); }
  if (q) {
    const like = `%${q.replace(/[\\%_]/g, m => '\\' + m)}%`;
    where.push("(a.first_name || ' ' || a.last_name) LIKE ? ESCAPE '\\'");
    vals.push(like);
  }
  const clause = where.length ? 'WHERE ' + where.join(' AND ') : '';
  const { results: athletes } = await env.DB.prepare(
    `SELECT a.id, a.first_name, a.last_name, a.status, a.segment, a.throwing_coach, a.strength_coach, a.injury_status, a.injury_location,
       (SELECT arm_score FROM arm_scores s WHERE s.athlete_id = a.id AND s.arm_score IS NOT NULL ORDER BY exam_on DESC LIMIT 1) AS arm_score,
       (SELECT exam_on FROM arm_scores s WHERE s.athlete_id = a.id AND s.arm_score IS NOT NULL ORDER BY exam_on DESC LIMIT 1) AS arm_exam_on,
       (SELECT arm_score FROM arm_scores s WHERE s.athlete_id = a.id AND s.arm_score IS NOT NULL ORDER BY exam_on DESC LIMIT 1 OFFSET 1) AS arm_previous
     FROM athletes a ${clause} ORDER BY a.last_name, a.first_name LIMIT 2000`
  ).bind(...vals).all();
  const { results: programs } = await env.DB.prepare(
    `SELECT p.athlete_id, p.category, p.program, p.starts_on, p.ends_on FROM program_assignments p JOIN athletes a ON a.id = p.athlete_id ${clause}
     ORDER BY p.starts_on`
  ).bind(...vals).all();
  const byAthlete = new Map();
  for (const p of programs) {
    if (!byAthlete.has(p.athlete_id)) byAthlete.set(p.athlete_id, {});
    byAthlete.get(p.athlete_id)[p.category] = { program: p.program, starts_on: p.starts_on, ends_on: p.ends_on, days_left: daysLeft(p.ends_on) };
  }
  const { results: unread } = await env.DB.prepare(
    "SELECT athlete_id, COUNT(*) AS n FROM messages WHERE sender = 'athlete' AND is_test = 0 AND read_by_coach_at IS NULL GROUP BY athlete_id"
  ).all().catch(() => ({ results: [] }));
  const unreadBy = new Map(unread.map(r => [r.athlete_id, r.n]));
  for (const a of athletes) {
    a.unread_messages = unreadBy.get(a.id) || 0;
    a.programs = byAthlete.get(a.id) || {};
    // flagged only when the latest test is 10% or more below the one before it
    a.arm_drop_pct = a.arm_score !== null && a.arm_previous ? Math.round(((a.arm_previous - a.arm_score) / a.arm_previous) * 1000) / 10 : null;
    a.arm_flag = a.arm_drop_pct !== null && a.arm_drop_pct >= ARM_DROP_FLAG * 100;
  }
  const { results: coachRows } = await env.DB.prepare(
    `SELECT throwing_coach AS c FROM athletes WHERE throwing_coach IS NOT NULL AND throwing_coach <> ''
     UNION SELECT strength_coach FROM athletes WHERE strength_coach IS NOT NULL AND strength_coach <> '' ORDER BY 1`
  ).all();
  return {
    counts: {
      athletes: athletes.length,
      flagged: athletes.filter(a => a.arm_flag).length,
      injured: athletes.filter(a => a.injury_status === 'Currently Injured' || a.injury_status === 'Rehabbing Injury').length,
      unread_messages: athletes.reduce((n, a) => n + a.unread_messages, 0),
    },
    arm_drop_flag_pct: ARM_DROP_FLAG * 100,
    last_sync: await env.DB.prepare('SELECT finished_at, ok, stats, error FROM sync_runs ORDER BY id DESC LIMIT 1').first().catch(() => null),
    coaches: coachRows.map(r => r.c),
    athletes,
  };
}

// ---- Athlete calendar -----------------------------------------------------------------------
// Sessions come from the VeloU Program Library sheet (read only). An athlete with a published plan in
// "Athlete Plans" uses that plan. Everyone else is built from the program assigned on the Program Board:
// throwing from "Program Schedules", lifting from "Strength Schedules" (plus its prep program).
// Day 1 is the program's start date, the same as the programming tool.

const PLAN_TAB = 'Athlete Plans';
const addDays = (iso, n) => new Date(Date.parse(iso + 'T00:00:00Z') + n * 86400000).toISOString().slice(0, 10);
const dayDiff = (a, b) => Math.round((Date.parse(a + 'T00:00:00Z') - Date.parse(b + 'T00:00:00Z')) / 86400000);
const joinChunks = cells => cells.filter(Boolean).map(c => (c[0] === '~' ? c.slice(1) : c)).join('');
const safeLink = v => (/^https?:\/\//.test(v || '') ? v : null);

const libCache = new Map();
async function libTab(env, tab, tq, ttl = 300000) {
  const key = tab + '|' + tq;
  const hit = libCache.get(key);
  if (hit && Date.now() - hit.at < ttl) return hit.rows;
  const raw = await fetchTab(env.SHEET_PROGRAMLIB, tab, tq);
  const head = raw[0] || [];
  const rows = raw.slice(1).map(r => Object.fromEntries(head.map((h, i) => [h, r[i] == null ? '' : r[i]])));
  libCache.set(key, { at: Date.now(), rows });
  if (libCache.size > 200) libCache.delete(libCache.keys().next().value);
  return rows;
}
const gv = v => String(v).replace(/'/g, "\\'");

// Where a date falls in a program: week number, day 1-7 and why it is outside. Day 1 is the program's start date,
// the same as the programming tool.
function locate(program, date) {
  if (!program || !program.starts_on) return { state: 'none' };
  const off = dayDiff(date, program.starts_on);
  if (off < 0) return { state: 'before', first: program.starts_on };
  if (program.ends_on && date > program.ends_on) return { state: 'after' };
  return { state: 'in', week: Math.floor(off / 7) + 1, dow: (off % 7) + 1 };
}
const fmtDay = iso => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
function outsideMessage(loc, program) {
  if (loc.state === 'before') return `Starts ${fmtDay(loc.first)}.`;
  if (loc.state === 'after') return `Ended ${fmtDay(program.ends_on)}. The next program is not on the Program Board yet.`;
  return 'No program assigned.';
}

// ---- published plans (Athlete Plans tab)

async function readPlan(env, name) {
  const lit = name.includes("'") ? '"' + name.replace(/"/g, '') + '"' : "'" + name + "'";
  const rows = await fetchTab(env.SHEET_PROGRAMLIB, PLAN_TAB, `select * where lower(B) = ${lit.toLowerCase()}`);
  const h = rows[0] || [];
  const body = rows.slice(1).filter(r => r.length > 5 && normName(r[1]) === normName(name) && String(r[3]).toLowerCase() !== 'no');
  if (!body.length || h[0] !== 'Code') return null;
  body.sort((x, y) => (isoDate(y[2]) || '').localeCompare(isoDate(x[2]) || ''));
  try {
    const plan = JSON.parse(joinChunks(body[0].slice(4)));
    return plan && Array.isArray(plan.weeks) && plan.start ? plan : null;
  } catch (e) { return null; }
}

function throwingDay(plan, w, i) {
  const items = ((w.days && w.days[i]) || []).map(e => {
    const d = plan.drills[e[0]] || [];
    const [nm, variant] = String(d[0] || '').split('*');
    return { name: variant ? `${nm} · ${variant}` : nm, link: safeLink(d[1]),
      detail: [e[1], e[2] && e[3] ? `${e[2]} × ${e[3]}` : null, e[4] ? `${e[4]}%` : null, e[5]].filter(Boolean).join(' · ') };
  });
  return { title: (w.sums && w.sums[i]) || null, summary: null, items };
}

function liftingDay(w, i) {
  const s = w.str && w.str.days && w.str.days[i];
  if (!s) return { title: null, summary: null, items: [] };
  return { title: s.t || null, summary: s.pm || null,
    items: (s.l || []).map(x => ({ name: `${x[0]}. ${x[1]}`, link: null, detail: x[3] || '' })) };
}

function planDays(plan, dates, kind) {
  return dates.map(date => {
    const offset = dayDiff(date, plan.start);
    if (offset < 0 || offset >= plan.weeks.length * 7) return { date, message: 'Outside the current plan.' };
    const w = plan.weeks[Math.floor(offset / 7)];
    const d = kind === 'throwing' ? throwingDay(plan, w, offset % 7) : liftingDay(w, offset % 7);
    const phase = plan.phases && plan.phases[w.code] ? plan.phases[w.code].name : w.code;
    return { date, week: w.n, phase, focus: w.focus || null, ...d, rest: d.items.length === 0 };
  });
}

// ---- throwing from the library

const PHASES = ['REVO', 'REIN', 'ENVO', 'ENIN', 'WATT', 'INT', 'REF', 'ENG'];
const PHASE_NAMES = { REVO: 'Restructure Volume', REIN: 'Restructure Intensity', ENVO: 'Energy Volume', ENIN: 'Energy Intensity', WATT: 'Wattage', INT: 'Integrate', REF: 'Refine', ENG: 'Engage' };

function parseThrowing(name) {
  const n = String(name || '').trim();
  if (/^shut ?down/i.test(n)) return { shutdown: n };
  const m = n.match(/^THR•(?:BSU•)?([A-Z]{3,4})•L([123])•(\d+)W•(.+)$/i);
  if (m && PHASES.includes(m[1].toUpperCase())) return { phase: m[1].toUpperCase(), level: +m[2], focus: m[4].trim() };
  return { exact: n };
}

async function libraryThrowing(env, program, dates) {
  if (!program) return dates.map(date => ({ date, message: 'No throwing program assigned.' }));
  const t = parseThrowing(program.program);
  if (t.shutdown) return dates.map(date => ({ date, rest: true, message: `${t.shutdown} - no throwing.` }));
  const sheetProgram = t.phase || t.exact;
  const [rows, drills] = await Promise.all([
    libTab(env, 'Program Schedules', `select * where A = '${gv(sheetProgram)}'`),
    libTab(env, 'Drills', 'select A, C', 600000),
  ]);
  if (!rows.length) return dates.map(date => ({ date, message: 'This program is not in the program library yet.' }));
  const videos = new Map(drills.map(r => [r.Drill, safeLink(r['Video Link'])]));
  const maxWeek = Math.max(...rows.map(r => parseFloat(r.Week) || 0));
  const focus = (t.focus || '').toLowerCase();
  return dates.map(date => {
    const loc = locate(program, date);
    if (loc.state !== 'in') return { date, message: outsideMessage(loc, program) };
    const label = t.phase ? PHASE_NAMES[t.phase] : program.program;
    if (loc.week > maxWeek) return { date, week: loc.week, phase: label, message: `Past week ${maxWeek} of the library schedule.` };
    const day = rows.filter(r => (parseFloat(r.Week) || 0) === loc.week && (parseFloat(r.Day) || 0) === loc.dow
      && (!t.phase || ['all', focus].includes(String(r.Focus).toLowerCase())))
      .sort((a, b) => (parseFloat(a.Slot) || 0) - (parseFloat(b.Slot) || 0));
    const base = { date, week: loc.week, phase: label, focus: t.focus ? t.focus.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()) : null };
    if (!day.length) return { ...base, title: null, summary: null, items: [], rest: true };
    const level = t.level || 1;
    const section = (day.find(r => r.Section) || {}).Section || null;
    return { ...base, summary: null, rest: false,
      title: section ? section.replace(/^\d+\s*-\s*/, '') : null,
      items: day.map(r => {
        const [nm, variant] = String(r.Drill).split('*');
        const ball = r[`Ball L${level}`] || r['Ball L1'] || r['Ball L2'] || r['Ball L3'];
        const sets = parseFloat(r.Sets), reps = parseFloat(r.Reps), pct = parseFloat(r['Intensity %']);
        return { name: nm ? (variant ? `${nm} · ${variant}` : nm) : 'Throws', link: videos.get(r.Drill) || (nm && videos.get(nm)) || null,
          detail: [ball, sets && reps ? `${sets} × ${reps}` : null, pct ? `${pct}%` : null].filter(Boolean).join(' · ') };
      }) };
  });
}

// ---- lifting from the library

const FAMILIES = { 'tension literacy': 'TL', 'force control': 'FC', 'acceleration': 'AC', 'applied power': 'AP', 'movement literacy': 'ML' };
// the split follows the athlete's current throwing phase (VeloU Strength onboarding: "Loading Splits")
const PHASE_SPLIT = { REVO: ['Axial', 6], REIN: ['Axial', 6], ENVO: ['Axial', 5], ENIN: ['Axial', 5], WATT: ['Non-Axial', 5], INT: ['Non-Axial', 5], REF: ['Non-Axial', 4], ENG: ['Non-Axial', 4] };
const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

function parseLifting(name) {
  const parts = String(name || '').split('•').map(x => x.trim());
  const family = FAMILIES[(parts[0] || '').toLowerCase()];
  const ph = (parts[1] || '').match(/^P([123])\b/i);
  if (!family || !ph) return null;
  const weeks = parts.map(x => x.match(/^(\d+)W$/i)).find(Boolean);
  const days = parts.map(x => x.match(/^(\d)D$/i)).find(Boolean);
  return { family, phase: +ph[1], weeks: weeks ? +weeks[1] : null, days: days ? +days[1] : null,
    split: /non[ -]?axial/i.test(name) ? 'Non-Axial' : /(^|•)axial(•|$)/i.test(name) ? 'Axial' : null };
}

function pickStrengthProgram(ids, t, throwingPhase) {
  const [defSplit, defDays] = PHASE_SPLIT[throwingPhase] || PHASE_SPLIT.REVO;
  const split = t.family === 'ML' ? 'Axial' : t.split || defSplit;
  const days = t.family === 'ML' ? 6 : t.days || (t.split && t.split !== defSplit ? (split === 'Axial' ? 5 : 4) : defDays);
  const id = (sp, d) => `${t.family}•${sp}•P${t.phase}•${d}D`;
  if (ids.has(id(split, days))) return { id: id(split, days), split, days };
  const pool = [...ids].filter(x => !x.includes('Prep') && x.startsWith(`${t.family}•`) && x.includes(`•P${t.phase}•`)).map(x => {
    const m = x.split('•'); return { id: x, split: m[1], days: parseInt(m[3], 10) };
  });
  pool.sort((a, b) => (Math.abs(a.days - days) + (a.split === split ? 0 : 0.5)) - (Math.abs(b.days - days) + (b.split === split ? 0 : 0.5)));
  return pool[0] || null;
}

const tidy = s => String(s || '').replace(/\s*⊃\s*superset/g, '').replace(/\s*\[[^\]]*\]\s*$/, '').trim();

async function libraryLifting(env, program, throwing, dates) {
  if (!program) return dates.map(date => ({ date, message: 'No lifting program assigned.' }));
  const t = parseLifting(program.program);
  const notInLibrary = { message: 'Older program. Its sessions are not in the program library.' };
  if (!t) return dates.map(date => ({ date, ...notInLibrary }));
  const tp = parseThrowing(throwing && throwing.program);
  const programs = await libTab(env, 'Strength Programs', 'select A', 600000);
  const ids = new Set(programs.map(r => r.Program));
  const pick = pickStrengthProgram(ids, t, tp.phase);
  if (!pick) return dates.map(date => ({ date, ...notInLibrary }));
  const prepId = pick.days === 6 ? `${t.family}•Prep•P${t.phase}•6D` : `${t.family}•Prep ${pick.split}•P${t.phase}•${pick.days}D`;
  const durations = [t.weeks, 8, 4, 2, 12].filter((v, i, a) => v && a.indexOf(v) === i);
  let rows = [], prep = [], duration = null;
  for (const dur of durations) {
    [rows, prep] = await Promise.all([
      libTab(env, 'Strength Schedules', `select * where A = '${gv(pick.id)}' and B = ${dur}`),
      ids.has(prepId) ? libTab(env, 'Strength Schedules', `select * where A = '${gv(prepId)}' and B = ${dur}`) : [],
    ]);
    if (rows.length) { duration = dur; break; }
  }
  if (!rows.length) return dates.map(date => ({ date, ...notInLibrary }));
  const label = `${(program.program.split('•')[0] || '').trim()} P${t.phase}`;
  return dates.map(date => {
    const loc = locate(program, date);
    if (loc.state !== 'in') return { date, message: outsideMessage(loc, program) };
    const base = { date, week: loc.week, phase: label, focus: `${pick.split} · ${pick.days}-day` };
    if (loc.week > duration) return { ...base, message: `Past week ${duration} of the library schedule.` };
    const key = pick.days === 6 ? (loc.dow <= 6 ? `D${loc.dow}` : null) : WEEKDAYS[loc.dow - 1];
    const dayRows = key ? rows.filter(r => r.Day === key) : [];
    if (!dayRows.length) return { ...base, title: null, summary: null, items: [], rest: true };
    const wk = `W${loc.week}`;
    const prepRows = key ? prep.filter(r => r.Day === key && r[wk]) : [];
    return { ...base, rest: false, title: dayRows[0]['Day Title'] || null,
      summary: prepRows.length ? `Prep first ${(prepRows[0]['Prep Minutes'] || '').split('·')[0].trim()}`.trim() : null,
      prep: prepRows.map(r => ({ name: tidy(r.Exercise), detail: r[wk] })),
      items: dayRows.filter(r => r[wk]).map(r => ({ name: `${r.Slot}. ${tidy(r.Exercise)}`, link: null, detail: r[wk] })) };
  });
}

async function athleteCalendar(env, athleteId, url) {
  const a = await getAthlete(env, athleteId);
  const today = /^\d{4}-\d{2}-\d{2}$/.test(url.searchParams.get('today') || '') ? url.searchParams.get('today') : new Date().toISOString().slice(0, 10);
  const count = Math.min(14, Math.max(1, parseInt(url.searchParams.get('days'), 10) || 3));
  const dates = Array.from({ length: count }, (_, i) => addDays(today, i));
  const { results } = await env.DB.prepare(
    "SELECT category, program, starts_on, ends_on FROM program_assignments WHERE athlete_id = ? AND category IN ('throwing', 'lifting')").bind(athleteId).all();
  const assigned = Object.fromEntries(results.map(r => [r.category, { program: r.program, starts_on: r.starts_on, ends_on: r.ends_on, days_left: daysLeft(r.ends_on) }]));
  let plan = null, error = false;
  try { plan = await readPlan(env, `${a.first_name} ${a.last_name}`); } catch (e) { error = true; }
  const section = async (kind, build) => {
    if (plan) return { source: 'plan', program: assigned[kind] || null, plan: plan.program, days: planDays(plan, dates, kind) };
    let days;
    try { days = await build(); } catch (e) { error = true; days = dates.map(date => ({ date, message: 'Could not read the program library.' })); }
    return { source: 'library', program: assigned[kind] || null, plan: null, days };
  };
  const [throwing, lifting] = await Promise.all([
    section('throwing', () => libraryThrowing(env, assigned.throwing, dates)),
    section('lifting', () => libraryLifting(env, assigned.lifting, assigned.throwing, dates)),
  ]);
  return { athlete_id: a.id, today, dates, plan_error: error, throwing, lifting };
}

// ---- Saved plans (Programming tab) ----------------------------------------------------------
// The programming tool keeps each plan as JSON under keys like "velou.plan.<athlete name>". The page saves
// those keys here so every coach and device sees the same plan. Last save wins.

const PLAN_KEY = /^(velou\.plan\.|velou\.history\.)[^\n]{1,120}$|^velou\.drills\.custom$/;
const MAX_PLAN = 900 * 1024;

// A coach's saved plan from the team sheet (the old plan tool wrote its state there), used until the plan is saved here.
async function readCoachPlan(env, name) {
  const lit = name.includes("'") ? '"' + name.replace(/"/g, '') + '"' : "'" + name + "'";
  const rows = await fetchTab(env.SHEET_PROGRAMLIB, 'Coach Plans', `select * where lower(A) = ${lit.toLowerCase()}`);
  const row = rows.slice(1).find(r => r.length > 3 && normName(r[0]) === normName(name));
  if (!row) return null;
  try {
    const j = JSON.parse(joinChunks(row.slice(3)));
    return j && j.state && j.state.startDate ? { state: j.state, hist: Array.isArray(j.hist) ? j.hist : [], updated: Number(row[1]) || 0 } : null;
  } catch (e) { return null; }
}

async function listPlans(env, url) {
  const id = url.searchParams.get('athlete') || '';
  const a = id ? await getAthlete(env, id) : null;
  let items = [], store = true;
  try {
    items = (await env.DB.prepare("SELECT scope, key, data, updated_at, updated_by FROM plan_store WHERE scope = '*' OR scope = ?").bind(id).all()).results;
  } catch (e) { store = false; }
  if (a) {
    const name = `${a.first_name} ${a.last_name}`, pk = 'velou.plan.' + name, hk = 'velou.history.' + name;
    if (!items.some(i => i.key === pk)) {
      try {
        const seed = await readCoachPlan(env, name);
        if (seed) {
          items.push({ scope: id, key: pk, data: JSON.stringify(seed.state), updated_at: null, updated_by: 'team sheet', seed: true });
          if (seed.hist.length && !items.some(i => i.key === hk)) items.push({ scope: id, key: hk, data: JSON.stringify(seed.hist), updated_at: null, updated_by: 'team sheet', seed: true });
        }
      } catch (e) { /* the sheet is optional here */ }
    }
  }
  return { items, store };
}

async function savePlan(env, body, coach) {
  const scope = String(body.athlete || '');
  const key = String(body.key || '');
  if (!PLAN_KEY.test(key)) throw new HttpError(400, 'unsupported key');
  if (typeof body.data !== 'string' || body.data.length > MAX_PLAN) throw new HttpError(400, 'plan data too large or missing');
  try { JSON.parse(body.data); } catch (e) { throw new HttpError(400, 'plan data is not JSON'); }
  if (key === 'velou.drills.custom') { if (scope !== '*') throw new HttpError(400, 'drill library is shared'); }
  else { if (scope === '*') throw new HttpError(400, 'plans belong to an athlete'); await getAthlete(env, scope); }
  const at = nowIso();
  await env.DB.prepare(
    `INSERT INTO plan_store (scope, key, data, updated_at, updated_by) VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(scope, key) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at, updated_by = excluded.updated_by`
  ).bind(scope, key, body.data, at, coach.email).run();
  return { ok: true, updated_at: at };
}

async function deletePlan(env, body) {
  const scope = String(body.athlete || ''), key = String(body.key || '');
  if (!PLAN_KEY.test(key)) throw new HttpError(400, 'unsupported key');
  await env.DB.prepare('DELETE FROM plan_store WHERE scope = ? AND key = ?').bind(scope, key).run();
  return { ok: true };
}

// ---- Program library tabs for the Programming tab -------------------------------------------
const LIB_TABS = new Set(['Phases', 'Focuses', 'Drills', 'Program Schedules', 'Intensity Reference', 'Patterning Blocks',
  'Patterning Scheme', 'Patterning Library', 'Strength Programs', 'Strength Schedules']);
const libJson = new Map();

async function libraryTab(env, url) {
  const name = url.searchParams.get('name') || '';
  if (!LIB_TABS.has(name)) throw new HttpError(400, 'unknown tab');
  const hit = libJson.get(name);
  let body;
  if (hit && Date.now() - hit.at < 300000) body = hit.body;
  else {
    // the day-schematic grid has no header row; every other tab does (and needs it kept intact)
    const raw = await fetchTab(env.SHEET_PROGRAMLIB, name, undefined, name === 'Patterning Scheme');
    body = JSON.stringify({ rows: raw.map(r => r.map(c => String(c == null ? '' : c).trim())) });
    libJson.set(name, { at: Date.now(), body });
  }
  return new Response(body, { status: 200, headers: { ...JSON_HEADERS, 'Cache-Control': 'private, max-age=300' } });
}

async function athleteFiles(env, athleteId) {
  const { results } = await env.DB.prepare(
    'SELECT id, assessment_id, kind, content_type, size, original_name, created_at FROM files WHERE athlete_id = ? ORDER BY created_at DESC'
  ).bind(athleteId).all();
  return results;
}

async function uploadFile(env, request, athleteId, url, coach) {
  await getAthlete(env, athleteId);
  if (!env.FILES) throw new HttpError(500, 'file storage is not connected');
  const kind = oneOf(url.searchParams.get('kind'), FILE_KINDS, 'kind', { required: true });
  const assessmentId = str(url.searchParams.get('assessment_id'), 'assessment_id', { max: 64 });
  if (assessmentId) {
    const a = await env.DB.prepare('SELECT athlete_id FROM assessments WHERE id = ?').bind(assessmentId).first();
    if (!a || a.athlete_id !== athleteId) throw new HttpError(400, 'assessment does not belong to this athlete');
  }
  const contentType = (request.headers.get('Content-Type') || '').split(';')[0].trim().toLowerCase();
  if (!FILE_TYPES.test(contentType)) throw new HttpError(415, 'file type not allowed');
  const size = parseInt(request.headers.get('Content-Length') || '', 10);
  if (!Number.isFinite(size) || size <= 0) throw new HttpError(411, 'content length required');
  if (size > MAX_FILE) throw new HttpError(413, 'file too large (100 MB max)');
  const name = (str(url.searchParams.get('name'), 'name', { max: 150 }) || kind).replace(/[^A-Za-z0-9._ -]/g, '_');
  const id = crypto.randomUUID();
  const key = `athletes/${athleteId}/${kind}/${id}-${name.replace(/ /g, '_')}`;
  await env.FILES.put(key, request.body, { httpMetadata: { contentType } });
  await env.DB.prepare(
    'INSERT INTO files (id, athlete_id, assessment_id, kind, r2_key, content_type, size, original_name, uploaded_by, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  ).bind(id, athleteId, assessmentId, kind, key, contentType, size, name, coach.id, nowIso()).run();
  return { id, kind, content_type: contentType, size, original_name: name, assessment_id: assessmentId };
}

async function serveFile(env, id) {
  const row = await env.DB.prepare('SELECT r2_key, content_type, original_name FROM files WHERE id = ?').bind(id).first();
  if (!row) throw new HttpError(404, 'file not found');
  const obj = await env.FILES.get(row.r2_key);
  if (!obj) throw new HttpError(404, 'file not found');
  return new Response(obj.body, {
    status: 200,
    headers: {
      'Content-Type': row.content_type,
      'Content-Disposition': `inline; filename="${(row.original_name || 'file').replace(/"/g, '')}"`,
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

async function athleteAssessments(env, athleteId) {
  const { results } = await env.DB.prepare(
    'SELECT id, type, level, section, assessed_on, status, coach_id FROM assessments WHERE athlete_id = ? ORDER BY assessed_on DESC, created_at DESC'
  ).bind(athleteId).all();
  return results;
}


// ---- Sync from the Google Sheets (read-only) -----------------------------------------------
// Reads the Athlete Mainframe and Program Library sheets through their public CSV address and mirrors them into D1.
// It never writes to a sheet. Secrets: SHEET_MAINFRAME and SHEET_PROGRAMLIB (the two sheet ids).
// Runs every few minutes (cron trigger) and on demand (POST /api/v1/admin/sync).

function parseCsv(t) {
  const rows = [];
  let row = [], f = '', q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) {
      if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; }
    else if (c !== '\r') f += c;
  }
  if (f !== '' || row.length) { row.push(f); rows.push(row); }
  return rows;
}

const normName = s => String(s || '').replace(/[‘’`´]/g, "'").replace(/\s+/g, ' ').trim().toLowerCase();
const cleanText = s => String(s == null ? '' : s).replace(/\s+/g, ' ').trim();
const numOrNull = v => { const n = parseFloat(String(v).replace(/[^0-9.\-]/g, '')); return Number.isFinite(n) ? n : null; };
function isoDate(v) {
  const s = String(v || '').trim();
  let m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (m) return `${m[3]}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')}`;
  m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}
const colLetter = i => { let s = ''; for (i += 1; i > 0; i = Math.floor((i - 1) / 26)) s = String.fromCharCode(65 + ((i - 1) % 26)) + s; return s; };

async function fetchTab(id, tab, tq, noHeader) {
  const u = new URL(`https://docs.google.com/spreadsheets/d/${id}/gviz/tq`);
  u.searchParams.set('tqx', 'out:csv');
  u.searchParams.set('sheet', tab);
  if (noHeader) u.searchParams.set('headers', '0');
  if (tq) u.searchParams.set('tq', tq);
  const res = await fetch(u.toString());
  if (!res.ok) throw new Error(`could not read the "${tab}" tab (${res.status})`);
  const text = await res.text();
  if (text.startsWith('<')) throw new Error(`the "${tab}" tab is not readable (sheet not shared?)`);
  return parseCsv(text);
}

const headerIndex = rows => Object.fromEntries(rows[0].map((h, i) => [h, i]));
const SEGMENT_MAP = { 'Black Label': 'black-label', 'VeloU': 'on-site', 'Remote': 'remote', 'zEvaluation': 'evaluation' };
const BOARD_CATEGORIES = [['throwing', 'Throwing Program'], ['patterning', 'Patterning Program'], ['lifting', 'Lifting Program'],
  ['speed', 'Speed Program'], ['arm_care', 'Arm Care Program'], ['mobility', 'Mobility Program']];

async function runBatches(env, stmts, size = 90) {
  for (let i = 0; i < stmts.length; i += size) await env.DB.batch(stmts.slice(i, i + size));
}

// ---- Energy score history -----------------------------------------------------------------------
// The Athlete Mainframe scores an athlete from their latest tests. The functions below repeat that scoring for every
// date a test was taken, so an athlete's Total Energy Score can be charted over time. The numbers are the Mainframe's
// own: Energy Potential (column Q), Energy Production (U) and Total Energy Score (AG) on the Athlete Mainframe tab,
// the per-exam score on the Energy Interference tab, and the estimated velocities on the Energy Transference tab.

const ET_SCALE = [2.194, 1.871, 1.2162195, 1 / 0.9]; // 2 lb ball, 1 lb ball, kneeling and split-stance throws -> estimated mph
const SNAPSHOT_GAP = 2; // save the Mainframe's own numbers when ours are further than this from its Total Energy Score

const round2 = n => Math.round(n * 100) / 100;

function clockSecs(v) {
  const m = String(v || '').trim().match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AaPp][Mm])?$/);
  if (!m) return 0;
  const h = m[4] ? (+m[1] % 12) + (/p/i.test(m[4]) ? 12 : 0) : +m[1];
  return h * 3600 + +m[2] * 60 + +(m[3] || 0);
}

function energyPotential(height, bw) {
  const ratio = bw / height;
  return 2.45478 + 1.081613 * height + 0.050937 * bw - 7.388152 * (ratio - 2.85) ** 2;
}

const energyProduction = (pp, ci, pfv) => 45.29562052 + 0.06711046 * pp + 0.11689371 * ci + 0.30463901 * pfv;

// one ArmCare exam: the Energy Interference tab's formula (strengths in pounds, arm score from ArmCare)
function energyInterference(e) {
  const ir = e.ir || 0, er = e.er || 0, scap = e.scap || 0, grip = e.grip || 0, arm = e.arm || 0, total = e.total || 0;
  return ((ir * 0.18 + er * 0.48 + scap * 0.22 + grip * 0.12 + arm * 0.15 - Math.abs(er - ir * 0.8) * 0.3 + 18.5) + total / 2) / 2;
}

function energyTotal(q, u, z, af, catcher) {
  const t = -3.553169 + 0.256066 * q + 0.179293 * u + 0.593479 * z + 0.019408 * af - 0.01 * (q - u) ** 2 - 0.01 * (u - z) ** 2;
  return catcher ? t * 0.95 : t;
}

// Energy Transference tab: the athlete's best of each throw so far (0 when never thrown), mean of the four estimates
function transferPeak(rows) {
  const best = [0, 0, 0, 0];
  for (const r of rows) r.v.forEach((x, i) => { if (x > best[i]) best[i] = x; });
  return best.reduce((s, b, i) => s + b * ET_SCALE[i], 0) / 4;
}

// Energy Transference Old tab: the row listed first scores itself, over the throws it has
function transferFirst(rows) {
  let first = rows[0];
  for (const r of rows) if (r.i < first.i) first = r;
  const est = first.v.map((x, i) => (x > 0 ? x * ET_SCALE[i] : null)).filter(x => x !== null);
  return est.length ? est.reduce((s, x) => s + x, 0) / est.length : null;
}

const lastOn = (list, on) => { for (let i = list.length - 1; i >= 0; i--) if (list[i].on <= on) return list[i]; return null; };

// Every date an athlete tested, with the scores as the Mainframe would have shown them that day (oldest first).
// `a` holds the athlete's height and position, their CMJ / IMTP tests (`on`, `t` time of day, `i` row in the tab),
// the Energy Transference rows (`on`, `i`, `v` the four throws) and ArmCare exams. A date with a missing test is skipped.
function energySeries(a) {
  if (!(a.height > 0)) return [];
  // oldest first; of two tests in the same minute, the one listed first in the sheet counts as the later one
  const older = (x, y) => (x.on < y.on ? -1 : x.on > y.on ? 1 : x.t - y.t || y.i - x.i);
  const cmj = [...a.cmj].sort(older), imtp = [...a.imtp].sort(older);
  const exams = [...a.exams].sort((x, y) => (x.on < y.on ? -1 : x.on > y.on ? 1 : 0));
  const dates = new Set();
  for (const list of [cmj, imtp, a.etNew, a.etOld, exams]) for (const r of list) dates.add(r.on);
  const out = [];
  for (const on of [...dates].sort()) {
    const c = lastOn(cmj, on);
    if (!c || !(c.bw > 0) || c.pp == null || c.ci == null) continue;
    let pfv = 0; // an athlete with no IMTP at all is scored with none, as the Mainframe does
    if (imtp.length) { const m = lastOn(imtp, on); if (!m || !(m.pfv > 0)) continue; pfv = m.pfv; }
    const nw = a.etNew.filter(r => r.on <= on);
    let z = null;
    if (nw.length) z = transferPeak(nw);
    else { const od = a.etOld.filter(r => r.on <= on); if (od.length) z = transferFirst(od); }
    if (z === null) continue;
    const q = energyPotential(a.height, c.bw), u = energyProduction(c.pp, c.ci, pfv);
    const e = lastOn(exams, on);
    const af = e ? energyInterference(e) : exams.length ? 0 : a.fallback || 0;
    const total = energyTotal(q, u, z, af, a.catcher);
    if (![q, u, z, af, total].every(Number.isFinite)) continue;
    out.push({ on, potential: round2(q), production: round2(u), transference: round2(z), interference: round2(af), total: round2(total) });
  }
  return out;
}

// Reads the tests from the Mainframe workbook, rebuilds every athlete's series and saves what is new. Rows built from
// the tests are marked 'rebuilt' and are refreshed when the tests change. When the Mainframe's own Total Energy Score
// is more than SNAPSHOT_GAP away from the newest point we hold (the formulas were changed, or a score was typed over
// by hand), its numbers are saved as a 'snapshot' for today, which is never overwritten.
async function syncScoreHistory(env, mainframe, hA, byKey, stats, now) {
  const columns = async (tab, names) => {
    const head = headerIndex(await fetchTab(env.SHEET_MAINFRAME, tab, 'select * limit 1'));
    for (const n of names) if (head[n] === undefined) throw new Error(`the ${tab} tab has no "${n}" column`);
    return (await fetchTab(env.SHEET_MAINFRAME, tab, 'select ' + names.map(n => colLetter(head[n])).join(','))).slice(1);
  };
  const [cmjRows, imtpRows, etNewRows, etOldRows] = await Promise.all([
    columns('CMJ', ['Athlete Name', 'Date', 'Time', 'Bodyweight in Pounds [lbs]', 'Peak Power / BM [W/kg]', 'Concentric Impulse [N s]']),
    columns('IMTP', ['Athlete Name', 'Date', 'Time', 'Peak Vertical Force / BM [N/kg]']),
    columns('Energy Transference', ['Athlete Name', '2 LB Medball Throw Velocity (MPH)', '1 LB Medball Throw Velocity (MPH)',
      'Half Kneeling Baseball Throw Velocity (MPH)', 'Split Stance Baseball Throw Velocity (MPH)', 'Submitted At']),
    columns('Energy Transference Old', ['Athlete Name', '2lb Medball Velocity (MPH)', '1lb Medball Velocity (MPH)',
      'Half Kneeling Baseball Throw Velocity (MPH)', 'Split Stance Rounded', 'Submitted At']),
  ]);
  const group = (rows, make) => {
    const m = new Map();
    rows.forEach((r, i) => {
      const t = make(r, i), k = normName(r[0]);
      if (!t || !k) return;
      if (!m.has(k)) m.set(k, []);
      m.get(k).push(t);
    });
    return m;
  };
  const cmj = group(cmjRows, (r, i) => { const on = isoDate(r[1]); return on && { on, t: clockSecs(r[2]), i, bw: numOrNull(r[3]), pp: numOrNull(r[4]), ci: numOrNull(r[5]) }; });
  const imtp = group(imtpRows, (r, i) => { const on = isoDate(r[1]); return on && { on, t: clockSecs(r[2]), i, pfv: numOrNull(r[3]) }; });
  const throws = (r, i) => { const on = isoDate(r[5]); return on && { on, i, v: [numOrNull(r[1]), numOrNull(r[2]), numOrNull(r[3]), numOrNull(r[4])] }; };
  const etNew = group(etNewRows, throws), etOld = group(etOldRows, throws);

  const { results: examRows } = await env.DB.prepare(
    'SELECT athlete_id, exam_on, ir, er, scap, grip, total_strength, arm_score FROM arm_scores ORDER BY athlete_id, exam_on').all();
  const exams = new Map();
  for (const r of examRows) {
    if (!exams.has(r.athlete_id)) exams.set(r.athlete_id, []);
    exams.get(r.athlete_id).push({ on: r.exam_on, ir: r.ir, er: r.er, scap: r.scap, grip: r.grip, total: r.total_strength, arm: r.arm_score });
  }
  const { results: haveRows } = await env.DB.prepare(
    'SELECT athlete_id, as_of, potential, production, transference, interference, total, source FROM score_history').all();
  const stored = new Map();
  for (const r of haveRows) {
    if (!stored.has(r.athlete_id)) stored.set(r.athlete_id, new Map());
    stored.get(r.athlete_id).set(r.as_of, r);
  }

  const cols = 'athlete_id, as_of, potential, production, transference, interference, total, source, created_at';
  const rebuild = env.DB.prepare(`INSERT INTO score_history (${cols}) VALUES (?, ?, ?, ?, ?, ?, ?, 'rebuilt', ?)
    ON CONFLICT (athlete_id, as_of) DO UPDATE SET potential = excluded.potential, production = excluded.production,
      transference = excluded.transference, interference = excluded.interference, total = excluded.total
    WHERE score_history.source = 'rebuilt'`);
  const snapshot = env.DB.prepare(`INSERT INTO score_history (${cols}) VALUES (?, ?, ?, ?, ?, ?, ?, 'snapshot', ?)
    ON CONFLICT (athlete_id, as_of) DO UPDATE SET potential = excluded.potential, production = excluded.production,
      transference = excluded.transference, interference = excluded.interference, total = excluded.total, source = 'snapshot'`);
  const differs = (x, y) => ['potential', 'production', 'transference', 'interference', 'total'].some(f => Math.abs((x[f] ?? 0) - (y[f] ?? 0)) > 0.004);
  const stmts = [], seen = new Set();
  const added = { built: 0, updated: 0, snapshots: 0 };
  const day = now.slice(0, 10);
  for (const r of mainframe.slice(1)) {
    const name = cleanText(r[hA['Athlete Name']]), k = normName(name);
    const a = name && !seen.has(k) ? byKey.get(k) : null;
    if (!a || a.source === 'app') continue;
    seen.add(k);
    const series = energySeries({
      height: numOrNull(r[hA['Height (Inches)']]), catcher: cleanText(r[hA['Position']]).toLowerCase() === 'catcher',
      cmj: cmj.get(k) || [], imtp: imtp.get(k) || [], etNew: etNew.get(k) || [], etOld: etOld.get(k) || [],
      exams: exams.get(a.id) || [], fallback: (numOrNull(r[hA['Total Shoulder Strength']]) || 0) / 2,
    });
    const mine = new Map(stored.get(a.id) || []);
    for (const p of series) {
      const have = mine.get(p.on);
      if (have && (have.source !== 'rebuilt' || !differs(have, p))) continue;
      stmts.push(rebuild.bind(a.id, p.on, p.potential, p.production, p.transference, p.interference, p.total, now));
      mine.set(p.on, Object.assign({ source: 'rebuilt' }, p));
      if (have) added.updated++; else added.built++;
    }
    const total = numOrNull(r[hA['Total Energy Score']]);
    let newest = null;
    for (const [on, p] of mine) if (!newest || on > newest.on) newest = { on, total: p.total };
    if (total !== null && (!newest || Math.abs(newest.total - total) > SNAPSHOT_GAP)) {
      const n = f => numOrNull(r[hA[f]]);
      stmts.push(snapshot.bind(a.id, day, n('Energy Potential Score'), n('Energy Production Score'), n('Energy Transference Score'),
        n('Energy Interference Score'), total, now));
      added.snapshots++;
    }
  }
  await runBatches(env, stmts);
  stats.score_points_added = added.built;
  stats.score_points_updated = added.updated;
  stats.score_snapshots = added.snapshots;
}

async function athleteScores(env, athleteId) {
  await getAthlete(env, athleteId);
  const { results } = await env.DB.prepare(
    'SELECT as_of, potential, production, transference, interference, total, source FROM score_history WHERE athlete_id = ? ORDER BY as_of').bind(athleteId).all();
  return { scores: results.map(r => ({ on: r.as_of, potential: r.potential, production: r.production, transference: r.transference,
    interference: r.interference, total: r.total, source: r.source })) };
}
// ---- end of energy score history -------------------------------------------------------------------

async function runSync(env) {
  if (!env.SHEET_MAINFRAME || !env.SHEET_PROGRAMLIB) throw new Error('sheet ids are not configured');
  const stats = { athletes_created: 0, athletes_updated: 0, programs_updated: 0, arm_scores_added: 0, arm_scores_unmatched: 0 };
  const now = nowIso();

  const [mainframe, roster, board, evals] = await Promise.all([
    fetchTab(env.SHEET_MAINFRAME, 'Athlete Mainframe'),
    fetchTab(env.SHEET_PROGRAMLIB, 'Roster'),
    fetchTab(env.SHEET_MAINFRAME, 'Program Board'),
    fetchTab(env.SHEET_MAINFRAME, 'VeloU On-Site Athlete Evaluation'),
  ]);
  const hA = headerIndex(mainframe), hB = headerIndex(board), hE = headerIndex(evals), hR = headerIndex(roster);

  // existing athletes, keyed by normalized name (and by ArmCare name)
  const { results: existing } = await env.DB.prepare('SELECT * FROM athletes').all();
  const byKey = new Map();
  for (const a of existing) byKey.set(normName(a.first_name + ' ' + a.last_name), a);
  const alias = new Map(byKey);
  for (const a of existing) if (a.armcare_name && !alias.has(normName(a.armcare_name))) alias.set(normName(a.armcare_name), a);

  // gather what the sheets say about each athlete
  const want = new Map(); // key -> fields
  const touch = (name, fields) => {
    const clean = cleanText(name);
    if (!clean) return;
    const k = normName(clean);
    want.set(k, Object.assign(want.get(k) || { name: clean }, fields));
  };
  for (const r of mainframe.slice(1)) {
    const name = cleanText(r[hA['Athlete Name']]);
    if (!name) continue;
    const seg = SEGMENT_MAP[cleanText(r[hA['Group']])] || null;
    touch(name, {
      dob: isoDate(r[hA['Date of Birth']]), segment: seg,
      playing_level: cleanText(r[hA['Current Level']]) || null, team: cleanText(r[hA['Current Team']]) || null,
      residence: cleanText(r[hA['Current Residence']]) || null, position: cleanText(r[hA['Position']]) || null,
      photo_url: cleanText(r[hA['Profile Picture']]) || null, mainframe_id: cleanText(r[hA['Unique ID']]) || null,
      vald_name: cleanText(r[hA['Vald Name']]) || null, armcare_name: cleanText(r[hA['Arm Care Name']]) || null,
      eval_name: cleanText(r[hA['Evaluation Name']]) || null, in_mainframe: true,
    });
  }
  for (const r of roster.slice(1)) {
    if (!cleanText(r[hR['Athlete']])) continue;
    const st = cleanText(r[hR['Status']]).toLowerCase();
    touch(r[hR['Athlete']], {
      status: ['active', 'paused', 'alumni'].includes(st) ? st : 'active',
      throwing_coach: cleanText(r[hR['Throwing Coach']]) || null, strength_coach: cleanText(r[hR['Strength Coach']]) || null, in_roster: true,
    });
  }
  const progByKey = new Map();
  const boardStart = BOARD_CATEGORIES.map(([c, h]) => [c, hB[h]]);
  for (const r of board.slice(1)) {
    const name = cleanText(r[hB['Athlete']]);
    if (!name || normName(name) === 'athlete') continue;
    const progs = [];
    for (const [c, i] of boardStart) {
      const p = cleanText(r[i]);
      if (p) progs.push({ category: c, program: p, starts_on: isoDate(r[i + 1]), ends_on: isoDate(r[i + 2]) });
    }
    progByKey.set(normName(name), progs);
    touch(name, { board_throwing: cleanText(r[hB['Throwing Coach']]) || null, board_lifting: cleanText(r[hB['Lifting Coach']]) || null,
      profile: { throwing_level: cleanText(r[hB['Throwing Level']]), performance_level: cleanText(r[hB['Performance Level']]), performance_recommendation: cleanText(r[hB['Performance Recommendation']]) } });
  }
  const injuries = new Map();
  for (const r of evals.slice(1)) {
    const n = normName(r[hE['Athlete Name']]);
    if (!n) continue;
    const t = Date.parse(r[hE['Submitted At']]) || 0;
    const cur = injuries.get(n);
    if (!cur || t >= cur.t) injuries.set(n, { t, status: cleanText(r[hE['Current Injury Status']]).replace(/^Injured$/, 'Currently Injured'),
      location: cleanText(r[hE['Injury Location']]), notes: cleanText(r[hE['Injury Notes and Context']]) });
  }

  // create missing athletes, update changed ones (never touch athletes created in the app)
  const stmts = [];
  const SHEET_FIELDS = ['dob', 'segment', 'playing_level', 'team', 'residence', 'position', 'photo_url', 'mainframe_id', 'vald_name', 'armcare_name', 'status', 'throwing_coach', 'strength_coach'];
  for (const [k, w] of want) {
    const coachT = w.throwing_coach || w.board_throwing || null, coachS = w.strength_coach || w.board_lifting || null;
    const inj = injuries.get(normName(w.eval_name || w.name)) || injuries.get(k);
    const fields = { dob: w.dob || null, segment: w.segment || null, playing_level: w.playing_level || null, team: w.team || null,
      residence: w.residence || null, position: w.position || null, photo_url: w.photo_url || null, mainframe_id: w.mainframe_id || null,
      vald_name: w.vald_name || null, armcare_name: w.armcare_name || null, throwing_coach: coachT, strength_coach: coachS,
      injury_status: inj ? inj.status || null : null, injury_location: inj ? inj.location || null : null, injury_notes: inj ? inj.notes || null : null };
    let a = byKey.get(k);
    if (!a) {
      const parts = w.name.split(' ');
      const status = w.status || (w.in_mainframe ? (w.segment === 'evaluation' ? 'lead' : 'alumni') : 'active');
      const id = crypto.randomUUID();
      a = Object.assign({ id, first_name: parts[0], last_name: parts.slice(1).join(' '), status, source: w.in_roster && !w.in_mainframe ? 'roster' : 'mainframe' }, fields);
      stmts.push(env.DB.prepare(
        `INSERT INTO athletes (id, first_name, last_name, dob, playing_level, team, residence, position, status, profile, created_at, updated_at,
           segment, throwing_coach, strength_coach, injury_status, injury_location, injury_notes, photo_url, mainframe_id, vald_name, armcare_name, source)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(id, a.first_name, a.last_name, fields.dob, fields.playing_level, fields.team, fields.residence, fields.position, status,
        JSON.stringify(w.profile || {}), now, now, fields.segment, fields.throwing_coach, fields.strength_coach,
        fields.injury_status, fields.injury_location, fields.injury_notes, fields.photo_url, fields.mainframe_id, fields.vald_name, fields.armcare_name, a.source));
      byKey.set(k, a); alias.set(k, a);
      if (a.armcare_name && !alias.has(normName(a.armcare_name))) alias.set(normName(a.armcare_name), a);
      stats.athletes_created++;
      continue;
    }
    if (a.source === 'app') continue; // athletes created in the app are owned by the app
    const sets = [], vals = [];
    const next = Object.assign({}, fields);
    if (w.status) next.status = w.status;
    for (const f of [...SHEET_FIELDS, 'injury_status', 'injury_location', 'injury_notes']) {
      if (!(f in next)) continue;
      // keep what the app already has when the sheet has nothing for a field
      if (next[f] === null || next[f] === undefined) continue;
      if ((a[f] ?? null) !== next[f]) { sets.push(`${f} = ?`); vals.push(next[f]); a[f] = next[f]; }
    }
    if (sets.length) {
      sets.push('updated_at = ?'); vals.push(now);
      stmts.push(env.DB.prepare(`UPDATE athletes SET ${sets.join(', ')} WHERE id = ?`).bind(...vals, a.id));
      stats.athletes_updated++;
    }
  }
  await runBatches(env, stmts);

  // programs: replace an athlete's assignments when the board changed
  const { results: curProgs } = await env.DB.prepare('SELECT athlete_id, category, program, starts_on, ends_on FROM program_assignments').all();
  const curByAthlete = new Map();
  for (const p of curProgs) { if (!curByAthlete.has(p.athlete_id)) curByAthlete.set(p.athlete_id, []); curByAthlete.get(p.athlete_id).push(p); }
  const sig = list => JSON.stringify([...list].map(p => [p.category, p.program, p.starts_on || '', p.ends_on || '']).sort());
  const progStmts = [];
  for (const [k, progs] of progByKey) {
    const a = byKey.get(k);
    if (!a || a.source === 'app') continue;
    if (sig(progs) === sig(curByAthlete.get(a.id) || [])) continue;
    progStmts.push(env.DB.prepare('DELETE FROM program_assignments WHERE athlete_id = ?').bind(a.id));
    for (const p of progs) progStmts.push(env.DB.prepare('INSERT INTO program_assignments (athlete_id, category, program, starts_on, ends_on, created_at) VALUES (?, ?, ?, ?, ?, ?)')
      .bind(a.id, p.category, p.program, p.starts_on, p.ends_on, now));
    stats.programs_updated++;
  }
  await runBatches(env, progStmts);

  // ArmCare exams: read only the columns we need, add exams we do not have yet
  const headerRow = await fetchTab(env.SHEET_MAINFRAME, 'Energy Interference', 'select * limit 1');
  const hI = headerIndex(headerRow);
  const need = ['Exam Date', 'ArmCare ID', 'Last Name', 'First Name', 'Exam Type', 'Arm Score', 'Total Strength', 'IRTARM Strength', 'ERTARM Strength', 'STARM Strength', 'GTARM Strength', 'Velo'];
  for (const n of need) if (hI[n] === undefined) throw new Error(`the Energy Interference tab has no "${n}" column`);
  const letters = need.map(n => colLetter(hI[n]));
  const arm = (await fetchTab(env.SHEET_MAINFRAME, 'Energy Interference', 'select ' + letters.join(','))).slice(1);
  const { results: haveRows } = await env.DB.prepare('SELECT athlete_id, exam_on FROM arm_scores').all();
  const have = new Set(haveRows.map(r => r.athlete_id + '|' + r.exam_on));
  const armStmts = [];
  const unmatched = new Set();
  for (const r of arm) {
    const d = isoDate(r[0]), first = cleanText(r[3]), last = cleanText(r[2]);
    const score = numOrNull(r[5]);
    if (!d || !first || !last || score === null) continue;
    const a = alias.get(normName(first + ' ' + last));
    if (!a) { unmatched.add(normName(first + ' ' + last)); continue; }
    const key = a.id + '|' + d;
    if (have.has(key)) continue;
    have.add(key);
    armStmts.push(env.DB.prepare('INSERT OR IGNORE INTO arm_scores (athlete_id, exam_on, arm_score, total_strength, ir, er, scap, grip, velo, exam_type, armcare_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
      .bind(a.id, d, score, numOrNull(r[6]), numOrNull(r[7]), numOrNull(r[8]), numOrNull(r[9]), numOrNull(r[10]), numOrNull(r[11]), cleanText(r[4]) || null, cleanText(r[1]) || null));
  }
  await runBatches(env, armStmts);
  stats.arm_scores_added = armStmts.length;
  stats.arm_scores_unmatched = unmatched.size;

  // score history: a problem here is reported in the run's stats and never stops the rest of the sync
  try { await syncScoreHistory(env, mainframe, hA, byKey, stats, now); }
  catch (e) { stats.score_history_error = String(e.message || e).slice(0, 200); }

  await env.DB.prepare('INSERT INTO sync_runs (started_at, finished_at, ok, stats, error) VALUES (?, ?, 1, ?, NULL)').bind(now, nowIso(), JSON.stringify(stats)).run();
  return stats;
}

async function runSyncLogged(env) {
  const started = nowIso();
  try { return await runSync(env); }
  catch (e) {
    await env.DB.prepare('INSERT INTO sync_runs (started_at, finished_at, ok, stats, error) VALUES (?, ?, 0, NULL, ?)').bind(started, nowIso(), String(e.message || e).slice(0, 500)).run().catch(() => {});
    throw e;
  }
}

// ---- Messages -----------------------------------------------------------------------------------
// One thread for each athlete, between the athlete and their coaches: text, photos and videos. The photos and videos live in the
// R2 bucket under messages/<athlete id>/. Until athletes sign in for themselves, the athlete's side is spoken for by the Athlete App
// preview in a coach's browser; those messages are marked as tests and never count as unread for the coaches.

const MESSAGE_TYPES = /^(image\/(jpeg|png|webp|heic|heif|gif)|video\/(mp4|quicktime|webm|x-m4v|3gpp))$/;
const MAX_MESSAGE_TEXT = 4000;

// "dr.nick" -> "Dr Nick": the name a coach's messages carry until a real name is saved for them
const coachLabel = c => {
  const n = String((c && (c.name || String(c.email || '').split('@')[0])) || 'Coach').trim();
  return /[._-]/.test(n) && !/\s/.test(n) ? n.split(/[._-]+/).filter(Boolean).map(w => w[0].toUpperCase() + w.slice(1)).join(' ') : n;
};

function messageOut(r) {
  return {
    id: r.id, sender: r.sender, coach: r.coach_name || null, body: r.body, channel: r.channel, test: !!r.is_test, at: r.created_at,
    seen_by_coach: r.read_by_coach_at || null, seen_by_athlete: r.read_by_athlete_at || null,
    att: r.att_key ? { type: r.att_type, size: r.att_size, name: r.att_name, url: `/api/v1/messages/${r.id}/file` } : null,
  };
}

// what is waiting to be read by each side, and how far each side has read (the newest message the other side has seen)
async function messageState(env, athleteId) {
  const row = await env.DB.prepare(
    `SELECT SUM(CASE WHEN sender = 'athlete' AND is_test = 0 AND read_by_coach_at IS NULL THEN 1 ELSE 0 END) AS coach,
            SUM(CASE WHEN sender = 'coach' AND read_by_athlete_at IS NULL THEN 1 ELSE 0 END) AS athlete,
            MAX(CASE WHEN sender = 'coach' AND read_by_athlete_at IS NOT NULL THEN id END) AS coach_seen,
            MAX(CASE WHEN sender = 'athlete' AND read_by_coach_at IS NOT NULL THEN id END) AS athlete_seen
     FROM messages WHERE athlete_id = ?`).bind(athleteId).first();
  return { unread: { coach: (row && row.coach) || 0, athlete: (row && row.athlete) || 0 }, seen: { coach: (row && row.coach_seen) || 0, athlete: (row && row.athlete_seen) || 0 } };
}

async function listMessages(env, athleteId, url) {
  await getAthlete(env, athleteId);
  const after = parseInt(url.searchParams.get('after') || '0', 10) || 0;
  const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') || '200', 10) || 200, 1), 500);
  const { results } = after
    ? await env.DB.prepare('SELECT * FROM messages WHERE athlete_id = ? AND id > ? ORDER BY id LIMIT ?').bind(athleteId, after, limit).all()
    : await env.DB.prepare('SELECT * FROM (SELECT * FROM messages WHERE athlete_id = ? ORDER BY id DESC LIMIT ?) ORDER BY id').bind(athleteId, limit).all();
  return Object.assign({ messages: results.map(messageOut) }, await messageState(env, athleteId));
}

// a coach writes to the athlete; with as: 'athlete' the Athlete App preview writes as the athlete, as a test
async function sendMessage(env, athleteId, body, coach) {
  await getAthlete(env, athleteId);
  if (!isObj(body)) throw new HttpError(400, 'body must be an object');
  const text = str(body.body, 'body', { max: MAX_MESSAGE_TEXT }) || '';
  let att = null;
  if (body.att !== undefined && body.att !== null) {
    if (!isObj(body.att)) throw new HttpError(400, 'att must be an object');
    const key = str(body.att.key, 'att.key', { max: 300, required: true });
    if (!key.startsWith(`messages/${athleteId}/`) || key.includes('..')) throw new HttpError(400, 'that attachment does not belong to this athlete');
    const type = str(body.att.type, 'att.type', { max: 60, required: true }).toLowerCase();
    if (!MESSAGE_TYPES.test(type)) throw new HttpError(400, 'attachment type not allowed');
    const size = Math.round(Number(body.att.size));
    att = { key, type, size: Number.isFinite(size) && size > 0 ? size : null, name: str(body.att.name, 'att.name', { max: 120 }) || 'attachment' };
    if (env.FILES && !(await env.FILES.head(key))) throw new HttpError(400, 'the attachment was not uploaded');
  }
  if (!text && !att) throw new HttpError(400, 'write a message or attach a video or photo');
  const asAthlete = body.as === 'athlete';
  const res = await env.DB.prepare(
    `INSERT INTO messages (athlete_id, sender, coach_id, coach_name, body, att_key, att_type, att_size, att_name, channel, is_test, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'app', ?, ?)`
  ).bind(athleteId, asAthlete ? 'athlete' : 'coach', coach.id, asAthlete ? null : coachLabel(coach), text,
    att ? att.key : null, att ? att.type : null, att ? att.size : null, att ? att.name : null, asAthlete ? 1 : 0, nowIso()).run();
  const row = await env.DB.prepare('SELECT * FROM messages WHERE id = ?').bind(res.meta.last_row_id).first();
  return { message: messageOut(row) };
}

// the reader has looked at the thread: what the other side wrote is marked read
async function markMessagesRead(env, athleteId, body) {
  await getAthlete(env, athleteId);
  const reader = isObj(body) && body.reader === 'athlete' ? 'athlete' : 'coach';
  const res = await env.DB.prepare(reader === 'coach'
    ? "UPDATE messages SET read_by_coach_at = ? WHERE athlete_id = ? AND sender = 'athlete' AND read_by_coach_at IS NULL"
    : "UPDATE messages SET read_by_athlete_at = ? WHERE athlete_id = ? AND sender = 'coach' AND read_by_athlete_at IS NULL"
  ).bind(nowIso(), athleteId).run();
  return Object.assign({ marked: (res.meta && res.meta.changes) || 0 }, await messageState(env, athleteId));
}

// a photo or video for a message: the raw file as the request body; the answer is what to attach to the message
async function uploadMessageFile(env, request, athleteId, url) {
  await getAthlete(env, athleteId);
  if (!env.FILES) throw new HttpError(500, 'file storage is not connected');
  const type = (request.headers.get('Content-Type') || '').split(';')[0].trim().toLowerCase();
  if (!MESSAGE_TYPES.test(type)) throw new HttpError(415, 'send a video or a photo');
  const size = parseInt(request.headers.get('Content-Length') || '', 10);
  if (!Number.isFinite(size) || size <= 0) throw new HttpError(411, 'content length required');
  if (size > MAX_FILE) throw new HttpError(413, 'file too large (100 MB max)');
  const name = (str(url.searchParams.get('name'), 'name', { max: 120 }) || 'attachment').replace(/[^A-Za-z0-9._ -]/g, '_');
  const key = `messages/${athleteId}/${crypto.randomUUID()}-${name.replace(/ /g, '_')}`;
  await env.FILES.put(key, request.body, { httpMetadata: { contentType: type } });
  return { att: { key, type, size, name } };
}

// the attachment itself, with byte ranges so that videos play and can be skipped through on phones
async function serveMessageFile(env, request, id) {
  const m = await env.DB.prepare('SELECT att_key, att_type, att_name, att_size FROM messages WHERE id = ?').bind(id).first();
  if (!m || !m.att_key || !env.FILES) throw new HttpError(404, 'file not found');
  const headers = {
    'Content-Type': m.att_type, 'Accept-Ranges': 'bytes', 'Cache-Control': 'private, max-age=3600', 'X-Content-Type-Options': 'nosniff',
    'Content-Disposition': `inline; filename="${String(m.att_name || 'attachment').replace(/"/g, '')}"`,
  };
  const want = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get('Range') || '');
  if (want && m.att_size && (want[1] !== '' || want[2] !== '')) {
    const size = m.att_size;
    const start = want[1] === '' ? Math.max(0, size - Number(want[2])) : Number(want[1]);
    const end = want[1] === '' || want[2] === '' ? size - 1 : Math.min(Number(want[2]), size - 1);
    if (start > end || start >= size) return new Response(null, { status: 416, headers: Object.assign(headers, { 'Content-Range': `bytes */${size}` }) });
    const obj = await env.FILES.get(m.att_key, { range: { offset: start, length: end - start + 1 } });
    if (!obj) throw new HttpError(404, 'file not found');
    return new Response(obj.body, { status: 206, headers: Object.assign(headers, { 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': String(end - start + 1) }) });
  }
  const obj = await env.FILES.get(m.att_key);
  if (!obj) throw new HttpError(404, 'file not found');
  if (m.att_size) headers['Content-Length'] = String(m.att_size);
  return new Response(obj.body, { status: 200, headers });
}

// the messages the preview sent as the athlete: remove them, and their attachments
async function clearTestMessages(env, athleteId) {
  await getAthlete(env, athleteId);
  const { results } = await env.DB.prepare('SELECT att_key FROM messages WHERE athlete_id = ? AND is_test = 1 AND att_key IS NOT NULL').bind(athleteId).all();
  if (env.FILES) for (const r of results) await env.FILES.delete(r.att_key).catch(() => {});
  const res = await env.DB.prepare('DELETE FROM messages WHERE athlete_id = ? AND is_test = 1').bind(athleteId).run();
  return { removed: (res.meta && res.meta.changes) || 0 };
}
// ---- end of messages --------------------------------------------------------------------------

// ---- Router ---------------------------------------------------------------------------------

async function readJson(request) {
  const type = request.headers.get('Content-Type') || '';
  if (!type.includes('application/json')) throw new HttpError(415, 'send application/json');
  const text = await request.text();
  if (text.length > MAX_BODY) throw new HttpError(413, 'body too large');
  try { return JSON.parse(text); } catch (e) { throw new HttpError(400, 'invalid JSON'); }
}

async function route(request, env, coach, url) {
  const parts = url.pathname.replace(/^\/api\/v1\/?/, '').split('/').filter(Boolean);
  const method = request.method;
  const [a, b, c, d] = parts;

  if (a === 'me' && !b && method === 'GET') return [200, coach];

  if (a === 'overview' && !b && method === 'GET') return [200, await overview(env, url)];
  if (a === 'admin' && b === 'sync' && !c && method === 'POST') return [200, await runSyncLogged(env)];
  if (a === 'admin' && b === 'scores' && c === 'rebuild' && method === 'POST') {
    await env.DB.prepare("DELETE FROM score_history WHERE source = 'rebuilt'").run(); // snapshots stay; the sync builds the rest again
    return [200, await runSyncLogged(env)];
  }
  if (a === 'library' && b === 'tab' && method === 'GET') return [200, await libraryTab(env, url), true];
  if (a === 'plans' && !b) {
    if (method === 'GET') return [200, await listPlans(env, url)];
    if (method === 'PUT') return [200, await savePlan(env, await readJson(request), coach)];
    if (method === 'DELETE') return [200, await deletePlan(env, await readJson(request))];
  }

  if (a === 'athletes') {
    if (!b) {
      if (method === 'GET') return [200, await listAthletes(env, url)];
      if (method === 'POST') return [201, await createAthlete(env, await readJson(request), coach)];
    } else if (!c) {
      if (method === 'GET') {
        const athlete = await getAthlete(env, b);
        athlete.assessments = await athleteAssessments(env, b);
        athlete.files = await athleteFiles(env, b);
        athlete.programs = (await env.DB.prepare(
          'SELECT category, program, starts_on, ends_on FROM program_assignments WHERE athlete_id = ? ORDER BY starts_on').bind(b).all()).results;
        return [200, athlete];
      }
      if (method === 'PATCH') return [200, await updateAthlete(env, b, await readJson(request))];
    } else if (c === 'calendar' && method === 'GET') {
      return [200, await athleteCalendar(env, b, url)];
    } else if (c === 'measurements' && method === 'GET') {
      return [200, await athleteMeasurements(env, b, url)];
    } else if (c === 'scores' && method === 'GET') {
      return [200, await athleteScores(env, b)];
    } else if (c === 'messages') {
      if (!d && method === 'GET') return [200, await listMessages(env, b, url)];
      if (!d && method === 'POST') return [201, await sendMessage(env, b, await readJson(request), coach)];
      if (!d && method === 'DELETE' && url.searchParams.get('test') === '1') return [200, await clearTestMessages(env, b)];
      if (d === 'read' && method === 'POST') return [200, await markMessagesRead(env, b, await readJson(request))];
      if (d === 'upload' && method === 'POST') return [201, await uploadMessageFile(env, request, b, url)];
    } else if (c === 'files' && method === 'POST') {
      return [201, await uploadFile(env, request, b, url, coach)];
    }
  }

  if (a === 'files' && b && !c && method === 'GET') return [200, await serveFile(env, b), true];
  if (a === 'messages' && /^\d+$/.test(b || '') && c === 'file' && method === 'GET') return [200, await serveMessageFile(env, request, parseInt(b, 10)), true];

  if (a === 'assessments') {
    if (!b && method === 'POST') return [201, await createAssessment(env, await readJson(request), coach)];
    if (b && !c && method === 'GET') return [200, await getAssessment(env, b)];
    if (b && !c && method === 'PUT') return [200, await updateAssessment(env, b, await readJson(request))];
  }

  throw new HttpError(404, 'not found');
}

export default {
  // cron trigger: keep the database in step with the sheets
  async scheduled(event, env, ctx) {
    ctx.waitUntil(runSyncLogged(env).catch(() => {}));
  },

  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      if (!url.pathname.startsWith('/api/v1/') && url.pathname !== '/api/v1') throw new HttpError(404, 'not found');

      const token = await verifyAccess(request, env);
      if (!token) throw new HttpError(401, 'unauthorized');

      // Writes must come from the site itself, so another website cannot post using a signed-in coach's cookie.
      if (request.method !== 'GET' && request.method !== 'HEAD') {
        // one address, or several separated by commas (e.g. https://velou.coach,https://velou.training)
        const allowed = (env.ALLOWED_ORIGIN || 'https://velou.coach').split(',').map((o) => o.trim());
        if (!allowed.includes(request.headers.get('Origin'))) throw new HttpError(403, 'bad origin');
      }

      const coach = await currentCoach(env, token.email);
      const [status, body, raw] = await route(request, env, coach, url);
      return raw ? body : reply(status, body);
    } catch (e) {
      if (e instanceof HttpError) return reply(e.status, { error: e.message });
      return reply(500, { error: 'server error' });
    }
  },
};
