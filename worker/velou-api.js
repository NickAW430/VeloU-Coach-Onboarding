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
//   GET   /api/v1/athletes?q=&status=&limit=&offset=
//   POST  /api/v1/athletes
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
const SECTIONS = ['biometrics', 'force-plates', 'athletic-testing', 'throwing', 'mound', 'body-comp', 'mental-skills'];
const ATHLETE_STATUSES = ['lead', 'active', 'paused', 'alumni'];
const MAX_BODY = 256 * 1024;
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
       sport, position, team, grad_year, dominant_hand, status, coach_id, profile, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(id, row.first_name, row.last_name, row.dob, row.email, row.phone, row.parent_name, row.parent_email, row.parent_phone,
    row.playing_level, row.residence, row.sport, row.position, row.team, row.grad_year,
    row.dominant_hand, row.status, row.coach_id, profile, t, t).run();
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
  const type = oneOf(body.type, ['intake', 'retest'], 'type', { required: true });
  let level = null, section = null;
  if (type === 'intake') {
    level = oneOf(body.level, LEVELS, 'level', { required: true });
    if (body.section) throw new HttpError(400, 'an intake has a level, not a section');
  } else {
    section = oneOf(body.section, SECTIONS, 'section', { required: true });
    if (body.level) throw new HttpError(400, 'a re-test has a section, not a level');
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
