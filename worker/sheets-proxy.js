// VeloU data proxy for the Player Report (Cloudflare Worker).
//
// The Player Report page asks this Worker for Google Sheet data instead of calling Google
// directly, so the sheet IDs never appear in the public repo or in the page.
//
// Route:      coachesvelou.com/api/sheets*   (the Cloudflare Access app already covers the hostname)
// Secrets:    SHEET_ATHLETES, SHEET_TRACKMAN, SHEET_INSEASON   (the three Google Sheet IDs)
// Variables:  TEAM_DOMAIN  e.g. velouniversity.cloudflareaccess.com
//             POLICY_AUD   the Application Audience (AUD) tag of the Access application
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
    if (!aud.includes(env.POLICY_AUD)) return false;
    return true;
  } catch (e) {
    return false;
  }
}

// ---- Proxy ----------------------------------------------------------------------------

export default {
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
