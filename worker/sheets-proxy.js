// VeloU data proxy for the Player Report (Cloudflare Worker).
//
// The Player Report page asks this Worker for Google Sheet data instead of calling Google
// directly, so the sheet IDs never appear in the public repo or in the page.
//
// Route:      velou.coach/api/sheets*   (the Cloudflare Access app already covers the hostname)
// Secrets:    SHEET_ATHLETES, SHEET_TRACKMAN, SHEET_INSEASON   (the three Google Sheet IDs)
// Variables:  TEAM_DOMAIN  e.g. velouniversity.cloudflareaccess.com
//             POLICY_AUD   the Application Audience (AUD) tag of the Access application
//             TRAINING_AUD the AUD tag of the Access application on velou.training (coaches and athletes sign in there)
//
// Cloudflare Access already blocks anyone who is not signed in before a request reaches here.
// The Worker re-checks the Access token anyway, so a request that skips Access still gets nothing.

const SOURCES = {
  athletes: 'SHEET_ATHLETES',
  trackman: 'SHEET_TRACKMAN',
  inseason: 'SHEET_INSEASON',
};

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'private, no-store',
  'X-Content-Type-Options': 'nosniff',
};

function reply(status, body) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

// ---- Cloudflare Access JWT check ------------------------------------------------------

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
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  try {
    const header = JSON.parse(new TextDecoder().decode(b64urlToBytes(parts[0])));
    const payload = JSON.parse(new TextDecoder().decode(b64urlToBytes(parts[1])));
    if (header.alg !== 'RS256') return false;

    const keys = await getKeys(env);
    const jwk = keys.find(k => k.kid === header.kid);
    if (!jwk) return false;
    const key = await crypto.subtle.importKey(
      'jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const ok = await crypto.subtle.verify(
      'RSASSA-PKCS1-v1_5', key, b64urlToBytes(parts[2]),
      new TextEncoder().encode(parts[0] + '.' + parts[1]));
    if (!ok) return false;

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) return false;
    if (payload.nbf && payload.nbf > now + 60) return false;
    if (payload.iss !== `https://${env.TEAM_DOMAIN}`) return false;
    const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
    const coachApp = aud.includes(env.POLICY_AUD);
    const trainingApp = !!env.TRAINING_AUD && aud.includes(env.TRAINING_AUD);
    if (!coachApp && !trainingApp) return false;
    return { email: payload.email || '', training: trainingApp && !coachApp };
  } catch (e) {
    return false;
  }
}

// ---- Proxy ----------------------------------------------------------------------------

// ---- Athletes (velou.training) --------------------------------------------------------------------
// Coaches and athletes sign in on velou.training through its own Access application (TRAINING_AUD). A coach (a coach record,
// or a @velouniversity.com address) gets the sheets as before. An athlete is exactly one athlete's email, and what they get is
// their own rows: the Worker keeps only the columns they asked for and replaces the "where" with their own name.
// Needs the D1 binding DB (the same database as velou-api).
const COACH_DOMAIN = '@velouniversity.com';
const ATHLETE_TABS = new Set(['Athlete Mainframe', 'Athlete Score Comparison', 'Program Board', 'VeloU On-Site Athlete Evaluation',
  'CMJ', 'IMTP', 'Squat Jump', 'CMJR', 'Plyo Pushup', 'Energy Interference', 'Energy Transference']);

async function whoIs(env, email) {
  const e = email.toLowerCase().trim();
  if (e.endsWith(COACH_DOMAIN) || await env.DB.prepare('SELECT 1 AS x FROM coaches WHERE email = ?').bind(e).first()) return 'coach';
  const { results } = await env.DB.prepare('SELECT first_name, last_name FROM athletes WHERE lower(trim(email)) = ? LIMIT 2').bind(e).all();
  return results.length === 1 ? { name: `${results[0].first_name} ${results[0].last_name}` } : null;
}

// the same pattern the athlete app builds for the name (a quote mark may be any quote mark, spaces may repeat)
function namePattern(name) {
  return name.replace(/"/g, '').trim().toLowerCase().split('').map(ch => /['’‘`´]/.test(ch) ? "['’‘`´]?" : /\s/.test(ch) ? ' *' : /[.*+?^${}()|[\]\\]/.test(ch) ? '[' + ch + ']' : ch).join('').replace(/( \*)+/g, ' *');
}

export default {
  async fetch(request, env) {
    if (request.method !== 'GET' || new URL(request.url).pathname !== '/api/sheets') return proxy.fetch(request, env);
    const who = await verifyAccess(request, env);
    if (!who || !who.training) return proxy.fetch(request, env);
    if (!env.DB) return reply(503, { status: 'error', errors: ['not set up'] });
    const me = await whoIs(env, who.email);
    if (me === 'coach') return proxy.fetch(request, env);
    if (!me) return reply(403, { status: 'error', errors: ['not set up for VeloU Training'] });

    const url = new URL(request.url);
    const src = url.searchParams.get('src'), sheet = url.searchParams.get('sheet');
    const asked = /^\s*select\s+(\*|[A-Z]{1,2}(\s*,\s*[A-Z]{1,2})*)(\s+where\b[\s\S]*)?$/i.exec(url.searchParams.get('tq') || '');
    if (!asked || !((src === 'athletes' && ATHLETE_TABS.has(sheet)) || (src === 'trackman' && !sheet))) {
      return reply(403, { status: 'error', errors: ['not available'] });
    }
    url.searchParams.set('tq', `select ${asked[1]} where lower(A) matches " *${namePattern(me.name)} *"`);
    return proxy.fetch(new Request(url.toString(), request), env);
  },
};

const proxy = {
  async fetch(request, env) {
    if (request.method !== 'GET') return reply(405, { status: 'error', errors: ['method'] });

    const url = new URL(request.url);
    if (url.pathname !== '/api/sheets') return reply(404, { status: 'error', errors: ['not found'] });

    if (!(await verifyAccess(request, env))) return reply(401, { status: 'error', errors: ['unauthorized'] });

    const secretName = SOURCES[url.searchParams.get('src')];
    const id = secretName && env[secretName];
    if (!id) return reply(400, { status: 'error', errors: ['unknown source'] });

    const sheet = url.searchParams.get('sheet');
    const tq = url.searchParams.get('tq');
    if ((tq && tq.length > 4000) || (sheet && sheet.length > 200)) {
      return reply(400, { status: 'error', errors: ['too long'] });
    }

    const g = new URL(`https://docs.google.com/spreadsheets/d/${id}/gviz/tq`);
    g.searchParams.set('tqx', 'out:json');
    g.searchParams.set('headers', '1');
    if (sheet) g.searchParams.set('sheet', sheet);
    if (tq) g.searchParams.set('tq', tq);

    let res;
    try {
      res = await fetch(g.toString(), { cf: { cacheTtl: 120, cacheEverything: true } });
    } catch (e) {
      return reply(502, { status: 'error', errors: ['upstream'] });
    }
    if (!res.ok) return reply(502, { status: 'error', errors: ['upstream ' + res.status] });

    const text = await res.text();
    // Google wraps the JSON in a function call: /*O_o*/ google.visualization.Query.setResponse({...});
    const m = text.match(/setResponse\(([\s\S]*)\);?\s*$/);
    if (!m) return reply(502, { status: 'error', errors: ['unexpected reply (sheet not readable?)'] });

    return new Response(m[1], { status: 200, headers: JSON_HEADERS });
  },
};
