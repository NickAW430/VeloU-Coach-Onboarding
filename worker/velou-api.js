// VeloU API (Cloudflare Worker + D1). Stores athletes, assessments and measurements.
//
// Route:      coachesvelou.com/api/v1/*   (the Cloudflare Access app already covers the hostname)
// Bindings:   DB            the D1 database (schema in schema.sql)
//             FILES         the R2 bucket for photos, videos and reports
// Variables:  TEAM_DOMAIN   e.g. velouniversity.cloudflareaccess.com
//             POLICY_AUD    the Application Audience (AUD) tag of the Access application
//             ALLOWED_ORIGIN  optional, defaults to https://coachesvelou.com (writes must come from this origin)
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
const MAX_BODY = 256 * 1024;
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
  for (const a of athletes) {
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
    },
    arm_drop_flag_pct: ARM_DROP_FLAG * 100,
    last_sync: await env.DB.prepare('SELECT finished_at, ok, stats, error FROM sync_runs ORDER BY id DESC LIMIT 1').first().catch(() => null),
    coaches: coachRows.map(r => r.c),
    athletes,
  };
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

async function fetchTab(id, tab, tq) {
  const u = new URL(`https://docs.google.com/spreadsheets/d/${id}/gviz/tq`);
  u.searchParams.set('tqx', 'out:csv');
  u.searchParams.set('sheet', tab);
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
  const [a, b, c] = parts;

  if (a === 'me' && !b && method === 'GET') return [200, coach];

  if (a === 'overview' && !b && method === 'GET') return [200, await overview(env, url)];
  if (a === 'admin' && b === 'sync' && !c && method === 'POST') return [200, await runSyncLogged(env)];

  if (a === 'athletes') {
    if (!b) {
      if (method === 'GET') return [200, await listAthletes(env, url)];
      if (method === 'POST') return [201, await createAthlete(env, await readJson(request), coach)];
    } else if (!c) {
      if (method === 'GET') {
        const athlete = await getAthlete(env, b);
        athlete.assessments = await athleteAssessments(env, b);
        athlete.files = await athleteFiles(env, b);
        return [200, athlete];
      }
      if (method === 'PATCH') return [200, await updateAthlete(env, b, await readJson(request))];
    } else if (c === 'measurements' && method === 'GET') {
      return [200, await athleteMeasurements(env, b, url)];
    } else if (c === 'files' && method === 'POST') {
      return [201, await uploadFile(env, request, b, url, coach)];
    }
  }

  if (a === 'files' && b && !c && method === 'GET') return [200, await serveFile(env, b), true];

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
        const allowed = env.ALLOWED_ORIGIN || 'https://coachesvelou.com';
        if (request.headers.get('Origin') !== allowed) throw new HttpError(403, 'bad origin');
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
