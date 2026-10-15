// VeloU Shoulder Lab · anatomy rig built on the real mesh set (Z-Anatomy / BodyParts3D, CC BY-SA).
// Same public surface as rig.js so the step code does not care which one it gets.
import * as THREE from 'three';
import { COL } from './rig.js?v=14';

const { Vector3: V3, Matrix4: M4, Quaternion: Q4, Group, Mesh } = THREE;
const RAD = Math.PI / 180;
const v = (x, y, z) => new V3(x, y, z);
const AX = v(1, 0, 0), AY = v(0, 1, 0), AZ = v(0, 0, 1);

const rotAbout = (pivot, axis, ang) => new M4().makeTranslation(pivot.x, pivot.y, pivot.z)
  .multiply(new M4().makeRotationAxis(axis, ang)).multiply(new M4().makeTranslation(-pivot.x, -pivot.y, -pivot.z));
const quatAbout = (pivot, q) => new M4().makeTranslation(pivot.x, pivot.y, pivot.z)
  .multiply(new M4().makeRotationFromQuaternion(q)).multiply(new M4().makeTranslation(-pivot.x, -pivot.y, -pivot.z));

const ORD = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

/* ---------- static helpers (cached on the anatomy object) ---------- */
function boneVerts(A, names) {
  const pts = [];
  for (const n of names) for (const pr of (A.bones.get(n) || [])) {
    const p = pr.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) pts.push(p.getX(i), p.getY(i), p.getZ(i));
  }
  return new Float32Array(pts);
}

function makeHash(pts, cell = 3.5) {
  const map = new Map();
  const key = (x, y, z) => ((x * 73856093) ^ (y * 19349663) ^ (z * 83492791)) | 0;
  for (let i = 0; i < pts.length; i += 3) {
    const k = key(Math.floor(pts[i] / cell), Math.floor(pts[i + 1] / cell), Math.floor(pts[i + 2] / cell));
    let a = map.get(k); if (!a) map.set(k, a = []); a.push(i);
  }
  return { pts, map, cell, key };
}
function nearestDist(h, x, y, z) {
  const c = h.cell, cx = Math.floor(x / c), cy = Math.floor(y / c), cz = Math.floor(z / c);
  let best = Infinity;
  for (let r = 1; r <= 6; r++) {
    for (let dx = -r; dx <= r; dx++) for (let dy = -r; dy <= r; dy++) for (let dz = -r; dz <= r; dz++) {
      if (Math.max(Math.abs(dx), Math.abs(dy), Math.abs(dz)) !== r && r > 1) continue;
      const a = h.map.get(h.key(cx + dx, cy + dy, cz + dz)); if (!a) continue;
      for (const i of a) { const ex = h.pts[i] - x, ey = h.pts[i + 1] - y, ez = h.pts[i + 2] - z; const d = ex * ex + ey * ey + ez * ez; if (d < best) best = d; }
    }
    if (best < (r * c) * (r * c)) break;
  }
  return Math.sqrt(best);
}

const BONE_SETS = (A) => {
  if (A._sets) return A._sets;
  const all = [...A.bones.keys()];
  const ribsR = [], ribsAll = all.filter(n => /rib\.[lr]$/.test(n));
  const set = {
    pelvis: all.filter(n => /^(Sacrum|Coccyx|Hip bone|Vertebra L)/.test(n) || /^(Tenth|Eleventh|Twelfth) rib/.test(n) || /^Vertebra T1[0-2]/.test(n)),
    thorax: all.filter(n => /^Vertebra T[1-9]$/.test(n) || /^(First|Second|Third|Fourth|Fifth|Sixth|Seventh|Eighth|Ninth) rib/.test(n) || /^Costal cartilage of (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth) /.test(n) || /^(Manubrium|Body of sternum|Xiphoid)/.test(n)),
    head: all.filter(n => /^Vertebra C/.test(n) || /^(Atlas|Axis)/.test(n) || /^(Frontal|Occipital|Parietal|Temporal|Sphenoid|Ethmoid|Maxilla|Zygomatic|Nasal|Mandible|Vomer)/.test(n)),
    scap: ['Scapula.r'], clav: ['Clavicle.r'], hum: ['Humerus.r'], humP: ['Humerus.r'], ulna: ['Ulna.r'],
    rad: all.filter(n => /^Radius\.r$/.test(n) || (/\.r$/.test(n) && /scaphoid|lunate|triquetrum|pisiform|trapezium|trapezoid bone|capitate|hamate|metacarp|phalan/i.test(n))),
  };
  void ribsR; void ribsAll;
  A._sets = set; return set;
};

function solveAffine(src, dst) {
  // least squares 3x4 affine mapping src->dst (arrays of V3). Returns Matrix4.
  const n = src.length;
  const ATA = Array.from({ length: 4 }, () => new Array(4).fill(0));
  const ATb = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  for (let i = 0; i < n; i++) {
    const r = [src[i].x, src[i].y, src[i].z, 1], d = [dst[i].x, dst[i].y, dst[i].z];
    for (let a = 0; a < 4; a++) { for (let b = 0; b < 4; b++) ATA[a][b] += r[a] * r[b]; for (let k = 0; k < 3; k++) ATb[k][a] += r[a] * d[k]; }
  }
  for (let a = 0; a < 4; a++) ATA[a][a] += 1e-6;
  const solve = (b) => {
    const m = ATA.map((row, i) => [...row, b[i]]);
    for (let c = 0; c < 4; c++) {
      let p = c; for (let r = c + 1; r < 4; r++) if (Math.abs(m[r][c]) > Math.abs(m[p][c])) p = r;
      [m[c], m[p]] = [m[p], m[c]];
      for (let r = c + 1; r < 4; r++) { const f = m[r][c] / m[c][c]; for (let k = c; k < 5; k++) m[r][k] -= f * m[c][k]; }
    }
    const x = [0, 0, 0, 0];
    for (let r = 3; r >= 0; r--) { let s = m[r][4]; for (let k = r + 1; k < 4; k++) s -= m[r][k] * x[k]; x[r] = s / m[r][r]; }
    return x;
  };
  const X = [solve(ATb[0]), solve(ATb[1]), solve(ATb[2])];
  return new M4().set(X[0][0], X[0][1], X[0][2], X[0][3], X[1][0], X[1][1], X[1][2], X[1][3], X[2][0], X[2][1], X[2][2], X[2][3], 0, 0, 0, 1);
}

/* ---------- per-anatomy derived data ---------- */
function derive(A) {
  if (A.derived) return A.derived;
  const L = A.landmarks, D = {};
  const bone = (n) => (A.bones.get(n) || [])[0];
  const meanOf = (name) => { const pr = A.bones.get(name); const c = new V3(); let k = 0; for (const p of pr) { const a = p.geometry.attributes.position; for (let i = 0; i < a.count; i++) { c.x += a.getX(i); c.y += a.getY(i); c.z += a.getZ(i); k++; } } return c.multiplyScalar(1 / k); };
  const allVerts = (name) => { const out = []; for (const p of (A.bones.get(name) || [])) { const a = p.geometry.attributes.position; for (let i = 0; i < a.count; i++) out.push(new V3(a.getX(i), a.getY(i), a.getZ(i))); } return out; };

  // scapula frame
  D.scapC = meanOf('Scapula.r');
  const glen = L['Glenoid fossa'], sup = L['Superior angle of scapula'], inf = L['Inferior angle of scapula'], med = L['Medial border of scapula'];
  let si = sup.clone().sub(inf).normalize();
  let ml = glen.clone().sub(med).normalize();
  let n = new V3().crossVectors(ml, si).normalize();
  if (n.z < 0) n.negate();
  ml = new V3().crossVectors(si, n).normalize(); if (ml.x < 0) { ml.negate(); n.negate(); }
  si = new V3().crossVectors(n, ml).normalize(); if (si.y < 0) si.negate();
  D.sAxes = { n, ml, si };

  // humerus
  const hv = allVerts('Humerus.r');
  const neck = L['Surgical neck of humerus'];
  let c = L['Head of humerus'].clone();
  for (let it = 0; it < 4; it++) {
    const pts = hv.filter(p => p.distanceTo(c) < 3.3 && p.y > neck.y + 0.5);
    if (pts.length < 20) break;
    // algebraic sphere fit
    const m = pts.reduce((a, p) => a.add(p), new V3()).multiplyScalar(1 / pts.length);
    let sx = 0, sy = 0, sz = 0, sxx = 0, syy = 0, szz = 0, sxy = 0, sxz = 0, syz = 0, sd = [0, 0, 0];
    const A3 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], b3 = [0, 0, 0];
    let r2 = 0;
    for (const p of pts) { const q = p.clone().sub(m); const w = q.lengthSq(); r2 += w; A3[0][0] += q.x * q.x; A3[0][1] += q.x * q.y; A3[0][2] += q.x * q.z; A3[1][1] += q.y * q.y; A3[1][2] += q.y * q.z; A3[2][2] += q.z * q.z; b3[0] += q.x * w; b3[1] += q.y * w; b3[2] += q.z * w; }
    A3[1][0] = A3[0][1]; A3[2][0] = A3[0][2]; A3[2][1] = A3[1][2];
    const Mx = new THREE.Matrix3().set(A3[0][0], A3[0][1], A3[0][2], A3[1][0], A3[1][1], A3[1][2], A3[2][0], A3[2][1], A3[2][2]);
    if (Math.abs(Mx.determinant()) < 1e-9) break;
    const inv = Mx.clone().invert();
    const sol = new V3(b3[0] / 2, b3[1] / 2, b3[2] / 2).applyMatrix3(inv);
    c = m.clone().add(sol);
    void sx; void sy; void sz; void sxx; void syy; void szz; void sxy; void sxz; void syz; void sd; void r2;
  }
  D.H0 = c;
  {
    const cp = (A.bones.get('Humerus.r') || []).find(p => /^Cartilage/.test(p.material));
    if (cp) {
      const a = cp.geometry.attributes.position, s = new V3();
      for (let i = 0; i < a.count; i++) { s.x += a.getX(i); s.y += a.getY(i); s.z += a.getZ(i); }
      D.artC = s.multiplyScalar(1 / a.count);
    } else D.artC = c.clone().add(v(-2, 1, 1));
  }
  D.N0 = neck.clone();
  D.E0 = L['Lateral epicondyle of humerus'].clone().add(L['Medial epicondyle of humerus']).multiplyScalar(0.5);
  D.elbowAxis = L['Lateral epicondyle of humerus'].clone().sub(L['Medial epicondyle of humerus']).normalize();
  if (D.elbowAxis.x < 0) D.elbowAxis.negate();
  const uv = allVerts('Ulna.r'); let wy = Infinity; uv.forEach(p => { wy = Math.min(wy, p.y); });
  const low = uv.filter(p => p.y < wy + 1.5); D.W0 = low.reduce((a, p) => a.add(p), new V3()).multiplyScalar(1 / low.length);
  D.restDown = D.E0.clone().sub(D.H0).normalize();
  D.align = new Q4().setFromUnitVectors(D.restDown, v(0, -1, 0));

  // clavicle centre line + ends
  const cv = allVerts('Clavicle.r');
  let S0 = cv[0], A0 = cv[0];
  cv.forEach(p => { if (p.x < S0.x) S0 = p; if (p.x > A0.x) A0 = p; });
  D.S0 = S0.clone(); D.A0 = A0.clone();
  const axis = A0.clone().sub(S0), len2 = axis.lengthSq();
  const bins = 24, sum = Array.from({ length: bins }, () => new V3()), cnt = new Array(bins).fill(0);
  cv.forEach(p => { const t = Math.min(0.9999, Math.max(0, p.clone().sub(S0).dot(axis) / len2)); const b = Math.floor(t * bins); sum[b].add(p); cnt[b]++; });
  const line = []; for (let b = 0; b < bins; b++) if (cnt[b]) line.push(sum[b].multiplyScalar(1 / cnt[b]));
  D.clavCurve = new THREE.CatmullRomCurve3(line, false, 'centripetal');

  // old-frame landmark correspondences -> affine fits
  const Ls = (n) => L[n];
  const sPairs = [
    [[4.4, 4.4, -1.2], 'Acromion'], [[3.6, 1.4, -5.3], 'Coracoid process'], [[0.6, -0.5, -0.1], 'Glenoid fossa'], [[-6, 2.4, 1.5], 'Spine of scapula'],
    [[-8.4, 6.9, 0.2], 'Superior angle of scapula'], [[-7.1, -9.5, 0.2], 'Inferior angle of scapula'], [[-9.6, -3.5, 0.2], 'Medial border of scapula'],
    [[-3.8, -7, 0.2], 'Lateral border of scapula'], [[-3.0, 3.7, 0.0], 'Scapular notch'], [[-7, 4.6, 0.9], 'Supraspinous fossa'], [[-7, -3, 0.9], 'Infraspinous fossa'],
    [[-6, -1, -0.8], 'Subscapular fossa'], [[0.2, -3.0, 0.6], 'Infraglenoid tubercle'], [[0.3, 1.7, -0.3], 'Supraglenoid tubercle'],
  ].filter(p => Ls(p[1]));
  D.fitS = solveAffine(sPairs.map(p => v(...p[0])), sPairs.map(p => Ls(p[1])));
  const hPairs = [
    [[0, 0, 0], neck], [[-1.73, 4.2, 1.0], D.H0], [[2.4, 4.2, 0.3], Ls('Greater tubercle')], [[0.2, 3.8, -2.4], Ls('Lesser tubercle')],
    [[0.8, 0.5, -1.45], Ls('Intertubercular sulcus')], [[1.9, -13, 0], Ls('Deltoid tuberosity')], [[3.3, -29.2, 0.1], Ls('Lateral epicondyle of humerus')],
    [[-3.5, -29.2, 0.4], Ls('Medial epicondyle of humerus')], [[0, -28.5, 1.8], Ls('Olecranon fossa')],
  ].filter(p => p[1]);
  D.fitH = solveAffine(hPairs.map(p => v(...p[0])), hPairs.map(p => p[1]));

  // thorax named points (rest)
  const names = {};
  const bmesh = (n) => { const out = []; for (const p of (A.bones.get(n) || [])) { const a = p.geometry.attributes.position; for (let i = 0; i < a.count; i++) out.push(new V3(a.getX(i), a.getY(i), a.getZ(i))); } return out; };
  const bodyOfVert = (n) => (/^Vertebra L|^Sacrum/.test(n) || /^Vertebra T1[0-2]$/.test(n)) ? 'pelvis' : 'thorax';
  for (let i = 1; i <= 12; i++) {
    const pts = bmesh('Vertebra T' + i); if (!pts.length) continue;
    const bb = new THREE.Box3().setFromPoints(pts);
    let post = pts[0]; pts.forEach(p => { if (p.z > post.z) post = p; });
    names['spinous.T' + i] = { p: post.clone().add(v(0, 0, 0.3)), body: i <= 9 ? 'thorax' : 'pelvis' };
    names['body.T' + i] = { p: bb.getCenter(new V3()), body: i <= 9 ? 'thorax' : 'pelvis' };
  }
  for (let i = 3; i <= 7; i++) {
    const pts = bmesh('Vertebra C' + i); if (!pts.length) continue;
    let post = pts[0]; pts.forEach(p => { if (p.z > post.z) post = p; });
    names['spinous.C' + i] = { p: post.clone(), body: 'head' };
    const bb = new THREE.Box3().setFromPoints(pts); names['body.C' + i] = { p: bb.getCenter(new V3()), body: 'head' };
  }
  for (let i = 1; i <= 5; i++) {
    const pts = bmesh('Vertebra L' + i); if (!pts.length) continue;
    let post = pts[0]; pts.forEach(p => { if (p.z > post.z) post = p; });
    names['spinous.L' + i] = { p: post.clone(), body: 'pelvis' };
    names['body.L' + i] = { p: new THREE.Box3().setFromPoints(pts).getCenter(new V3()), body: 'pelvis' };
  }
  const sac = bmesh('Sacrum'); if (sac.length) { let post = sac[0]; sac.forEach(p => { if (p.z > post.z) post = p; }); names['sacrum'] = { p: post, body: 'pelvis' }; }
  for (const side of ['R', 'L']) {
    const hip = bmesh('Hip bone.' + side.toLowerCase()); if (hip.length) { let top = hip[0]; hip.forEach(p => { if (p.y > top.y) top = p; }); names['iliac.' + side] = { p: top.clone(), body: 'pelvis' }; }
  }
  for (let i = 1; i <= 10; i++) {
    const rib = bmesh(ORD[i - 1][0].toUpperCase() + ORD[i - 1].slice(1) + ' rib.r'); if (!rib.length) continue;
    let lat = rib[0]; rib.forEach(p => { if (p.x > lat.x) lat = p; });
    const cost = bmesh('Costal cartilage of ' + ORD[i - 1] + ' rib.r');
    let end = (cost.length ? cost : rib)[0]; (cost.length ? cost : rib).forEach(p => { if (p.x < end.x && p.z < lat.z) end = p; });
    const mid = lat.clone().lerp(end, 0.55); let ant = rib[0]; rib.forEach(p => { if (p.distanceTo(mid) < ant.distanceTo(mid)) ant = p; });
    const body = i <= 9 ? 'thorax' : 'pelvis';
    names['rib' + i + '.lat'] = { p: lat.clone(), body }; names['rib' + i + '.end'] = { p: end.clone(), body }; names['rib' + i + '.ant'] = { p: ant.clone(), body };
  }
  const st = [...bmesh('Manubrium of sternum'), ...bmesh('Body of sternum'), ...bmesh('Xiphoid process')];
  if (st.length) {
    const bb = new THREE.Box3().setFromPoints(st);
    for (let i = 1; i <= 7; i++) {
      const y = bb.max.y - (i - 1) / 6 * (bb.max.y - bb.min.y) * 0.85;
      let best = st[0]; st.forEach(p => { if (Math.abs(p.y - y) < 0.8 && p.z < (Math.abs(best.y - y) < 0.8 ? best.z : 1e9)) best = p; });
      names['sternum.' + i] = { p: best.clone().add(v(0, 0, -0.4)), body: 'thorax' };
    }
    names['sternum.top'] = { p: v(0, bb.max.y + 1, (bb.min.z + bb.max.z) / 2 - 1), body: 'thorax' };
    names['jugular'] = { p: v(0, bb.max.y + 0.5, bb.max.z), body: 'thorax' };
  }
  names['sc.R'] = { p: D.S0.clone(), body: 'thorax' };
  const lc = bmesh('Clavicle.l'); if (lc.length) { let s = lc[0]; lc.forEach(p => { if (p.x > s.x) s = p; }); names['sc.L'] = { p: s.clone(), body: 'thorax' }; }
  const sk = [...bmesh('Frontal bone'), ...bmesh('Occipital bone'), ...bmesh('Parietal bone.r'), ...bmesh('Parietal bone.l')];
  if (sk.length) {
    const bb = new THREE.Box3().setFromPoints(sk), ctr = bb.getCenter(new V3());
    names['skull'] = { p: ctr, body: 'head' };
    names['ear'] = { p: ctr.clone().add(v(bb.max.x - ctr.x, -1.5, 0.8)), body: 'head' };
    names['occiput'] = { p: v(ctr.x, bb.min.y + 2.5, bb.max.z), body: 'head' };
    names['occiput.R'] = { p: v(ctr.x + 3.0, bb.min.y + 2.5, bb.max.z - 0.5), body: 'head' };
    names['mastoid.R'] = { p: v(ctr.x + 5.4, bb.min.y + 1.2, ctr.z + 3.2), body: 'head' };
    names['mastoid.L'] = { p: v(ctr.x - 5.4, bb.min.y + 1.2, ctr.z + 3.2), body: 'head' };
  }
  D.names = names;
  // for acromiohumeral clearance
  const acrP = L['Acromion'], gtP = L['Greater tubercle'];
  D.acrIdx = allVerts('Scapula.r').filter(p => p.distanceTo(acrP) < 4.2);
  D.gtIdx = hv.filter(p => p.distanceTo(gtP) < 3.2 && p.y > neck.y + 0.5);
  A.derived = D;
  return D;
}

/* ---------- muscle / ligament tables ---------- */
const CORE = [
  ['supraspinatus', 'Supraspinatus', 3, ['Supraspinatus muscle.r'], ['scap', 'humP']],
  ['infraspinatus', 'Infraspinatus', 3, ['Infraspinatus muscle.r'], ['scap', 'humP']],
  ['teres-minor', 'Teres minor', 3, ['Teres minor muscle.r'], ['scap', 'humP']],
  ['subscapularis', 'Subscapularis', 3, ['Subscapularis muscle.r'], ['scap', 'humP']],
  ['deltoid-ant', 'Deltoid · anterior', 1, ['Clavicular part of deltoid muscle.r'], ['clav', 'hum']],
  ['deltoid-mid', 'Deltoid · middle', 1, ['Acromial part of deltoid muscle.r'], ['scap', 'hum']],
  ['deltoid-post', 'Deltoid · posterior', 1, ['Scapular spinal part of deltoid muscle.r'], ['scap', 'hum']],
  ['trapezius-upper', 'Trapezius · upper', 1, ['Descending part of trapezius muscle.r'], ['head', 'clav', 'scap']],
  ['trapezius-mid', 'Trapezius · middle', 1, ['Transverse part of trapezius muscle.r'], ['thorax', 'scap']],
  ['trapezius-lower', 'Trapezius · lower', 1, ['Ascending part of trapezius muscle.r'], ['thorax', 'scap']],
  ['latissimus', 'Latissimus dorsi', 1, ['Latissimus dorsi muscle.r'], ['pelvis', 'thorax', 'hum']],
  ['pec-major-clav', 'Pec major · clavicular', 1, ['Clavicular head of pectoralis major muscle.r'], ['clav', 'hum']],
  ['pec-major-stern', 'Pec major · sternocostal', 1, ['Sternocostal head of pectoralis major muscle.r', '(Abdominal part of pectoralis major muscle).r'], ['thorax', 'hum']],
  ['rhomboids', 'Rhomboids', 2, ['Rhomboid major muscle.r', 'Rhomboid minor muscle.r'], ['thorax', 'scap']],
  ['levator', 'Levator scapulae', 2, ['Levator scapulae.r'], ['head', 'scap']],
  ['serratus', 'Serratus anterior', 2, ['Serratus anterior muscle.r'], ['thorax', 'scap']],
  ['pec-minor', 'Pec minor', 2, ['Pectoralis minor muscle.r'], ['thorax', 'scap']],
  ['teres-major', 'Teres major', 2, ['Teres major muscle.r'], ['scap', 'hum']],
  ['biceps-lh', 'Biceps · long head', 2, ['Long head of biceps brachii.r'], ['scap', 'rad']],
  ['biceps-sh', 'Biceps · short head', 2, ['Short head of biceps brachii.r'], ['scap', 'rad']],
  ['triceps-lh', 'Triceps · long head', 2, ['Long head of triceps brachii.r'], ['scap', 'ulna']],
];
const SUPERFICIAL_EXTRA = /sternocleidomastoid|external abdominal oblique|rectus abdominis|lateral head of triceps|brachioradialis|extensor digitorum|flexor carpi|palmaris|platysma|erector|iliocostalis|longissimus thoracis/i;
function extraBones(name) {
  if (/coracobrachialis/i.test(name)) return ['scap', 'hum'];
  if (/lateral head of triceps|medial head of triceps|brachialis|anconeus/i.test(name)) return ['hum', 'ulna'];
  if (/brachioradialis|supinator|pronator|extensor carpi radialis/i.test(name)) return ['hum', 'rad'];
  if (/pollicis|digitorum|digiti|indicis|carpi|palmaris|flexor|extensor/i.test(name)) return ['hum', 'ulna', 'rad'];
  if (/subclavius/i.test(name)) return ['thorax', 'clav'];
  if (/omohyoid/i.test(name)) return ['head', 'scap'];
  if (/intercostal|serratus posterior|levatores|transvers/i.test(name)) return ['thorax'];
  if (/abdominal|rectus abdominis|oblique|quadratus lumborum|psoas/i.test(name)) return ['pelvis', 'thorax'];
  if (/scalen|sternocleido|splenius|longus colli|longus capitis|semispinalis capitis|spinalis capitis|multifidus colli|interspinales colli/i.test(name)) return ['thorax', 'head'];
  return ['pelvis', 'thorax', 'head'];
}
const LIGS = [
  ['conoid', 'Conoid (CC lig.)', 'Conoid ligament.r', ['scap', 'clav']],
  ['trapezoid', 'Trapezoid (CC lig.)', 'Trapezoid ligament.r', ['scap', 'clav']],
  ['acl', 'AC ligament', 'Acromioclavicular ligament.r', ['clav', 'scap']],
  ['cal', 'Coracoacromial ligament', 'Coraco-acromial ligament.r', ['scap']],
  ['sghl', 'Superior GH ligament', 'Superior glenohumeral ligament.r', ['scap', 'humP']],
  ['mghl', 'Middle GH ligament', 'Middle glenohumeral ligament.r', ['scap', 'humP']],
  ['ighl-a', 'IGHL · anterior band', 'Inferior glenohumeral ligament.r', ['scap', 'humP']],
  ['ighl-p', 'IGHL · posterior band', 'Inferior glenohumeral ligament.r', ['scap', 'humP']],
  ['thl', 'Transverse humeral lig.', 'Transverse humeral ligament.r', ['humP']],
  ['chl', 'Coracohumeral ligament', 'Coracohumeral ligament.r', ['scap', 'humP']],
];
const SOFT_OBJ = [
  ['capsule', 'Articular capsule of glenohumeral joint.r', ['scap', 'humP']],
  ['bursa', 'Subacromial bursa.r', ['scap', 'humP']],
  ['subdeltoid', 'Subdeltoid bursa.r', ['scap', 'hum']],
  ['acCapsule', 'Articular capsule of acromioclavicular joint.r', ['clav', 'scap']],
  ['scCapsule', 'Articular capsule of sternoclavicular joint.r', ['thorax', 'clav']],
  ['elbowCapsule', 'Articular capsule of elbow joint.r', ['hum', 'ulna']],
];
const RIGID_JOINT = [
  ['Glenoid labrum.r', ['scap']], ['Articular disc of acromioclavicular joint.r', ['clav']], ['Articular disc of sternoclavicular joint.r', ['clav']],
  ['Anterior sternoclavicular ligament.r', ['thorax', 'clav']], ['Posterior sternoclavicular ligament.r', ['thorax', 'clav']], ['Costoclavicular ligament.r', ['thorax', 'clav']],
  ['Interclavicular ligament.r', ['thorax', 'clav']], ['Superior transverse scapular ligament.r', ['scap']], ['Inferior transverse scapular ligament.r', ['scap']],
];

/* ---------- skinning ---------- */
class Skin {
  // prims: [{geometry, material}], keys: bone key list (candidates)
  constructor(rig, id, prims, keys, mats, fast = false) {
    this.rig = rig; this.keys = keys; this.fast = fast; this.meshes = []; this.rigid = keys.length === 1;
    const A = rig.A;
    prims.forEach((pr, pi) => {
      const g = new THREE.BufferGeometry();
      const src = pr.geometry;
      const pos = src.attributes.position.array.slice();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
      if (src.attributes.normal) g.setAttribute('normal', new THREE.BufferAttribute(src.attributes.normal.array.slice(), 3).setUsage(THREE.DynamicDrawUsage));
      if (src.index) g.setIndex(src.index);
      const mesh = new Mesh(g, mats(pr.material, pi));
      mesh.frustumCulled = false;
      this.meshes.push({ mesh, rest: src.attributes.position.array, restN: src.attributes.normal ? src.attributes.normal.array : null, id: id + ':' + pi });
    });
    if (!this.rigid) {
      this.data = this.meshes.map(m => A.skins.get(m.id + '|' + keys.join(',')) || this._compute(m, keys));
      this.meshes.forEach((m, i) => A.skins.set(m.id + '|' + keys.join(','), this.data[i]));
    }
  }
  _compute(m, keys) {
    const A = this.rig.A, n = m.rest.length / 3;
    const i0 = new Uint8Array(n), i1 = new Uint8Array(n), w = new Float32Array(n);
    if (this.fast && keys.length > 1) {
      // cheap weights: project onto the polyline through the bones' centroids (used for the large context muscles)
      const cs = keys.map(k => this.rig.centroidFor(k));
      for (let i = 0; i < n; i++) {
        const px = m.rest[i * 3], py = m.rest[i * 3 + 1], pz = m.rest[i * 3 + 2];
        let bestD = Infinity, bs = 0, bt = 0;
        for (let s = 0; s < cs.length - 1; s++) {
          const a = cs[s], b = cs[s + 1];
          const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
          const l2 = abx * abx + aby * aby + abz * abz || 1;
          let t = ((px - a.x) * abx + (py - a.y) * aby + (pz - a.z) * abz) / l2; t = Math.max(0, Math.min(1, t));
          const dx = px - (a.x + abx * t), dy = py - (a.y + aby * t), dz = pz - (a.z + abz * t);
          const d = dx * dx + dy * dy + dz * dz;
          if (d < bestD) { bestD = d; bs = s; bt = t; }
        }
        // sharpen so most of a muscle belly stays rigid with the nearer bone
        const tt = Math.max(0, Math.min(1, (bt - 0.25) / 0.5));
        i0[i] = bs; i1[i] = bs + 1; w[i] = tt * tt * (3 - 2 * tt);
      }
      return { i0, i1, w };
    }
    const hashes = keys.map(k => this.rig.hashFor(k));
    const K = keys.length, sv = new Float32Array(K);
    for (let i = 0; i < n; i++) {
      const x = m.rest[i * 3], y = m.rest[i * 3 + 1], z = m.rest[i * 3 + 2];
      let top = 0, sec = -1;
      for (let k = 0; k < K; k++) { const dd = nearestDist(hashes[k], x, y, z); sv[k] = 1 / (dd * dd + 0.05); }
      for (let k = 1; k < K; k++) if (sv[k] > sv[top]) top = k;
      for (let k = 0; k < K; k++) if (k !== top && (sec < 0 || sv[k] > sv[sec])) sec = k;
      i0[i] = top;
      if (sec < 0) { i1[i] = top; w[i] = 0; } else { i1[i] = sec; w[i] = sv[sec] / (sv[top] + sv[sec]); }
    }
    void A;
    return { i0, i1, w };
  }
  update(M) {
    if (this.rigid) return;
    const mats = this.keys.map(k => M[k].elements);
    this.meshes.forEach((m, mi) => {
      const { i0, i1, w } = this.data[mi];
      const out = m.mesh.geometry.attributes.position.array, rest = m.rest;
      const nOut = m.restN ? m.mesh.geometry.attributes.normal.array : null, nRest = m.restN;
      const n = rest.length / 3;
      for (let i = 0; i < n; i++) {
        const x = rest[i * 3], y = rest[i * 3 + 1], z = rest[i * 3 + 2];
        const a = mats[i0[i]], wi = w[i];
        let px = a[0] * x + a[4] * y + a[8] * z + a[12], py = a[1] * x + a[5] * y + a[9] * z + a[13], pz = a[2] * x + a[6] * y + a[10] * z + a[14];
        let nx, ny, nz;
        if (nRest) { const u = nRest[i * 3], vv = nRest[i * 3 + 1], ww = nRest[i * 3 + 2]; nx = a[0] * u + a[4] * vv + a[8] * ww; ny = a[1] * u + a[5] * vv + a[9] * ww; nz = a[2] * u + a[6] * vv + a[10] * ww; }
        if (wi > 0.001) {
          const b = mats[i1[i]];
          const qx = b[0] * x + b[4] * y + b[8] * z + b[12], qy = b[1] * x + b[5] * y + b[9] * z + b[13], qz = b[2] * x + b[6] * y + b[10] * z + b[14];
          px += (qx - px) * wi; py += (qy - py) * wi; pz += (qz - pz) * wi;
          if (nRest) { const u = nRest[i * 3], vv = nRest[i * 3 + 1], ww = nRest[i * 3 + 2]; nx += (b[0] * u + b[4] * vv + b[8] * ww - nx) * wi; ny += (b[1] * u + b[5] * vv + b[9] * ww - ny) * wi; nz += (b[2] * u + b[6] * vv + b[10] * ww - nz) * wi; }
        }
        out[i * 3] = px; out[i * 3 + 1] = py; out[i * 3 + 2] = pz;
        if (nOut) { const l = Math.hypot(nx, ny, nz) || 1; nOut[i * 3] = nx / l; nOut[i * 3 + 1] = ny / l; nOut[i * 3 + 2] = nz / l; }
      }
      m.mesh.geometry.attributes.position.needsUpdate = true;
      if (nOut) m.mesh.geometry.attributes.normal.needsUpdate = true;
      m.mesh.geometry.computeBoundingSphere();
    });
  }
}

/* ---------- the rig ---------- */
export class RealRig {
  constructor(A) {
    this.A = A;
    this.D = derive(A);
    this.isReal = true;
    this.root = new Group();
    this.cats = {};
    ['thorax', 'scapula', 'clavicle', 'humerus', 'muscles', 'ligaments', 'cartilage', 'soft', 'left', 'overlay'].forEach(k => { const g = new Group(); g.name = k; this.cats[k] = g; this.root.add(g); });
    this.pose = { elev: 0, plane: 40, er: 0, elbow: 90, pron: 90, scapUp: 0, scapTilt: 0, scapIR: 0, prot: 0, shrug: 0, rhythm: true, gain: 1, antGlide: 0, supGlide: 0, retro: 30, kyph: 35, fwd: 0, scapAuto: true };
    this.M = {}; ['pelvis', 'thorax', 'head', 'scap', 'clav', 'hum', 'humP', 'ulna', 'rad'].forEach(k => { this.M[k] = new M4(); });
    this.hashes = {};
    this.mats = {
      bone: new THREE.MeshStandardMaterial({ color: COL.bone, roughness: 0.62, metalness: 0.02 }),
    };
    this.cartMat = { glenoid: this._cart(), head: this._cart(), labrum: this._cart(COL.lab), costal: this._cart() };
    this.costMat = this.cartMat.costal;
    this.catMeshes = { ribs: [], sternum: [], costal: [], skull: [], pelvis: [], spine: [] };
    this.bodyGroups = {};
    ['pelvis', 'thorax', 'head', 'scap', 'clav', 'humerus', 'ulna', 'rad', 'leftArm'].forEach(k => {
      const g = new Group(); g.matrixAutoUpdate = false; this.bodyGroups[k] = g;
    });
    this.cats.thorax.add(this.bodyGroups.pelvis, this.bodyGroups.thorax, this.bodyGroups.head);
    this.cats.scapula.add(this.bodyGroups.scap);
    this.cats.clavicle.add(this.bodyGroups.clav);
    this.cats.left.add(this.bodyGroups.leftArm);
    this.cats.humerus.add(this.bodyGroups.ulna, this.bodyGroups.rad);
    this.skins = [];
    this._buildBones();
    this._buildJoints();
    this._buildMuscles();
    this._compat();
    this.update(true);
  }
  _cart(color = COL.cart) { return new THREE.MeshStandardMaterial({ color, roughness: 0.4, emissive: 0x000000, transparent: true, opacity: 0.92 }); }
  centroidFor(k) {
    this.A._cent = this.A._cent || {};
    if (!this.A._cent[k]) {
      const pts = boneVerts(this.A, BONE_SETS(this.A)[k]); const c = new V3();
      for (let i = 0; i < pts.length; i += 3) { c.x += pts[i]; c.y += pts[i + 1]; c.z += pts[i + 2]; }
      this.A._cent[k] = c.multiplyScalar(3 / Math.max(3, pts.length));
    }
    return this.A._cent[k];
  }
  hashFor(k) {
    if (this.A._hash && this.A._hash[k]) return this.A._hash[k];
    const sets = BONE_SETS(this.A);
    this.A._hash = this.A._hash || {};
    const h = makeHash(boneVerts(this.A, sets[k]));
    // humP reuses the humerus point set; same for hum
    this.A._hash[k] = h; return h;
  }

  /* ---- bones ---- */
  _buildBones() {
    const A = this.A, S = BONE_SETS(A);
    const bodyOf = (n) => {
      if (S.pelvis.includes(n)) return 'pelvis'; if (S.thorax.includes(n)) return 'thorax'; if (S.head.includes(n)) return 'head';
      if (n === 'Scapula.r') return 'scap'; if (n === 'Clavicle.r') return 'clav'; if (n === 'Ulna.r') return 'ulna'; if (S.rad.includes(n)) return 'rad';
      if (n === 'Humerus.r') return 'humerus';
      if (/\.l$/.test(n) && /^(Scapula|Clavicle|Humerus|Radius|Ulna)\.l$|scaphoid|lunate|triquetrum|pisiform|trapezium|trapezoid bone|capitate|hamate|metacarp|phalan/i.test(n)) return 'leftArm';
      return null;
    };
    const categorize = (n) => {
      if (/rib\.[lr]$/.test(n)) return 'ribs'; if (/^Costal cartilage/.test(n)) return 'costal';
      if (/^(Manubrium|Body of sternum|Xiphoid)/.test(n)) return 'sternum';
      if (/^(Frontal|Occipital|Parietal|Temporal|Sphenoid|Ethmoid|Maxilla|Zygomatic|Nasal|Mandible|Vomer)/.test(n)) return 'skull';
      if (/^(Hip bone|Sacrum|Coccyx)/.test(n)) return 'pelvis';
      if (/^(Vertebra|Atlas|Axis)/.test(n)) return 'spine';
      return null;
    };
    const partFor = (n) => /rib\.[lr]$/.test(n) ? 'rib' : /^Costal/.test(n) ? 'costal-cartilage' : /^Vertebra|^Atlas|^Axis/.test(n) ? 'vertebra' : /^(Manubrium|Body of sternum|Xiphoid)/.test(n) ? 'sternum' : /^Scapula/.test(n) ? 'scapula' : /^Clavicle/.test(n) ? 'clavicle' : /^Humerus/.test(n) ? 'humerus' : 'bone';
    const matFor = (prim, n) => {
      if (prim.material.startsWith('Cartilage')) {
        if (/^Scapula/.test(n)) return this.cartMat.glenoid;
        if (/^Humerus/.test(n)) return this.cartMat.head;
        if (/^Costal cartilage/.test(n)) return this.cartMat.costal;
      }
      return this.mats.bone;
    };
    const rigidKeys = { pelvis: 'pelvis', thorax: 'thorax', head: 'head', scap: 'scap', clav: 'clav', ulna: 'ulna', rad: 'rad', leftArm: 'thorax' };
    this.cartMeshes = { glenoid: [], head: [], costal: [] };
    for (const [n, prims] of A.bones) {
      const b = bodyOf(n);
      if (!b) continue;
      const cat = categorize(n);
      if (b === 'humerus') {
        // twisted at the surgical neck: head piece rides humP, shaft rides hum
        const sk = new Skin(this, n, prims, ['humP', 'hum'], (mn, pi) => matFor(prims[pi], n));
        // override weights: smooth blend along the shaft axis between 2 cm below and 2.5 cm above the surgical neck
        const D = this.D;
        sk.meshes.forEach((m, mi) => {
          const nv = m.rest.length / 3, i0 = new Uint8Array(nv), i1 = new Uint8Array(nv), w = new Float32Array(nv);
          for (let i = 0; i < nv; i++) {
            const y = m.rest[i * 3 + 1];
            const t = Math.min(1, Math.max(0, (y - (D.N0.y - 1.0)) / 3.0));
            const s = t * t * (3 - 2 * t);
            i0[i] = 1; i1[i] = 0; w[i] = s; // idx0 = 'hum' (shaft), idx1 = 'humP' (head); w -> head weight
          }
          sk.data[mi] = { i0, i1, w };
        });
        sk.rigid = false;
        sk.meshes.forEach((m, pi) => {
          m.mesh.userData.part = prims[pi].material.startsWith('Cartilage') ? 'head-cartilage' : 'humerus';
          this.bodyGroups.humerus.add(m.mesh);
          if (prims[pi].material.startsWith('Cartilage')) this.cartMeshes.head.push(m.mesh);
        });
        this.humSkin = sk; this.skins.push(sk);
        this.cats.humerus.add(this.bodyGroups.humerus);
        continue;
      }
      prims.forEach(pr => {
        const mesh = new Mesh(pr.geometry, matFor(pr, n));
        mesh.userData.part = pr.material.startsWith('Cartilage') && /^(Scapula|Humerus|Costal)/.test(n) ? (/^Scapula/.test(n) ? 'glenoid-cartilage' : /^Humerus/.test(n) ? 'head-cartilage' : 'costal-cartilage') : partFor(n);
        mesh.frustumCulled = false;
        this.bodyGroups[b].add(mesh);
        if (cat && this.catMeshes[cat]) this.catMeshes[cat].push(mesh);
        if (pr.material.startsWith('Cartilage')) {
          if (/^Scapula/.test(n)) this.cartMeshes.glenoid.push(mesh); else if (/^Costal/.test(n)) this.cartMeshes.costal.push(mesh);
        }
      });
    }
    this.rigidKeys = rigidKeys;
  }

  /* ---- joints / ligaments / bursae ---- */
  _buildJoints() {
    const A = this.A;
    this.ligs = {}; this.ligDefs = [];
    const seen = new Map();
    for (const [id, name, obj, keys] of LIGS) {
      let rec = seen.get(obj);
      if (!rec) {
        const prims = A.joints.get(obj); if (!prims) continue;
        const mat = new THREE.MeshStandardMaterial({ color: COL.lig, roughness: 0.5, emissive: 0x000000 });
        const sk = new Skin(this, 'J:' + obj, prims, keys, () => mat);
        sk.meshes.forEach(m => { m.mesh.userData.lig = id; this.cats.ligaments.add(m.mesh); });
        this.skins.push(sk);
        rec = { sk, mat, mesh: sk.meshes[0].mesh };
        seen.set(obj, rec);
      }
      this.ligs[id] = { def: { id, name }, mesh: rec.mesh, mat: rec.mat, base: COL.lig, skin: rec.sk };
      const cen = () => this._centroid(rec.sk);
      this.ligDefs.push({ id, name, r: 0.2, pts: [cen, cen, cen] });
    }
    this.soft = {};
    for (const [id, obj, keys] of SOFT_OBJ) {
      const prims = A.joints.get(obj); if (!prims) continue;
      const mat = new THREE.MeshStandardMaterial({ color: id === 'bursa' || id === 'subdeltoid' ? COL.bursa : COL.capsule, roughness: 0.3, transparent: true, opacity: id === 'bursa' ? 0.35 : 0.16, depthWrite: false, side: THREE.DoubleSide });
      const sk = new Skin(this, 'J:' + obj, prims, keys, () => mat);
      sk.meshes.forEach(m => { m.mesh.userData.part = id === 'capsule' ? 'capsule' : id === 'bursa' ? 'bursa' : 'bursa'; this.cats.soft.add(m.mesh); });
      this.skins.push(sk);
      this.soft[id] = { mesh: sk.meshes[0].mesh, mat, sk };
    }
    this.capsule = this.soft.capsule ? this.soft.capsule.mesh : { material: { opacity: 0 }, visible: true };
    this.bursa = this.soft.bursa ? this.soft.bursa.mesh : { material: { opacity: 0 }, visible: true };
    for (const [obj, keys] of RIGID_JOINT) {
      const prims = A.joints.get(obj); if (!prims) continue;
      const isLab = /labrum/i.test(obj);
      const mat = isLab ? this.cartMat.labrum : (/disc/i.test(obj) ? this.cartMat.costal : new THREE.MeshStandardMaterial({ color: COL.lig, roughness: 0.5 }));
      const sk = new Skin(this, 'J:' + obj, prims, keys, () => mat);
      sk.meshes.forEach(m => {
        m.mesh.userData.part = isLab ? 'labrum' : /disc/i.test(obj) ? 'costal-cartilage' : 'capsule';
        (isLab || /disc/i.test(obj) ? this.cats.cartilage : this.cats.ligaments).add(m.mesh);
        if (isLab) this.cartMeshes.labrum = [m.mesh];
      });
      this.skins.push(sk);
    }
  }

  _centroid(sk) {
    const m = sk.meshes[0]; const a = m.mesh.geometry.attributes.position.array; const c = new V3(); const n = a.length / 3;
    for (let i = 0; i < n; i += 3) { c.x += a[i * 3]; c.y += a[i * 3 + 1]; c.z += a[i * 3 + 2]; }
    return c.multiplyScalar(1 / Math.ceil(n / 3)).applyMatrix4(sk.rigid ? this.M[sk.keys[0]] : new M4());
  }

  /* ---- muscles ---- */
  _buildMuscles() {
    const A = this.A;
    this.muscles = {}; this.muscleDefs = [];
    const used = new Set();
    const layerColor = { 1: COL.sup, 2: COL.mid, 3: COL.cuff };
    const add = (id, name, layer, objs, keys, fast = false) => {
      const prims = [];
      objs.forEach(o => { const p = A.muscles.get(o); if (p) { prims.push(...p); used.add(o); } });
      if (!prims.length) return;
      const bellyMat = new THREE.MeshStandardMaterial({ color: layerColor[layer], roughness: 0.58, transparent: true, opacity: 1, emissive: 0x000000, side: THREE.DoubleSide });
      const tendMat = new THREE.MeshStandardMaterial({ color: COL.tend, roughness: 0.45, transparent: true, opacity: 1, emissive: 0x000000, side: THREE.DoubleSide });
      const group = new Group(); group.userData.muscle = id;
      // flatten primitives of all member objects, remembering material kind
      const flat = prims.map(p => ({ geometry: p.geometry, material: p.material }));
      const sk = new Skin(this, 'M:' + id, flat, keys, (mat) => /^Tendon/i.test(mat) ? tendMat : bellyMat, fast);
      sk.meshes.forEach(m => { m.mesh.userData.muscle = id; group.add(m.mesh); });
      this.cats.muscles.add(group);
      this.skins.push(sk);
      const def = { id, name, layer, color: layerColor[layer], r: 0.5, fibers: [] };
      // origin / insertion anchors: vertices nearest each end bone
      const anchor = (which) => () => this._anchor(sk, which);
      def.fibers.push({ pts: [anchor(0), anchor(1)] });
      this.muscleDefs.push(def);
      this.muscles[id] = { def, group, belly: bellyMat, tendon: tendMat, visible: true, baseColor: layerColor[layer], opacity: 1, glow: 0, skin: sk };
    };
    CORE.forEach(([id, name, layer, objs, keys]) => add(id, name, layer, objs, keys));
    const SHOULDER_EXTRA = /^(Coracobrachialis|Brachialis|Lateral head of triceps|Medial head of triceps|Subclavius|Anconeus)/i;
    this._ctxList = [];
    for (const [oname] of A.muscles) {
      if (used.has(oname) || /\.l$/.test(oname)) continue;
      const base = oname.replace(/\.[lr]$/, '');
      const id = base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const layer = SUPERFICIAL_EXTRA.test(base) ? 1 : 2;
      if (SHOULDER_EXTRA.test(base)) add(id, base.replace(/ muscle$/i, ''), layer, [oname], extraBones(base));
      else this._ctxList.push([id, base.replace(/ muscle$/i, ''), layer, oname, extraBones(base)]);
    }
    this._addMuscle = add;
    this._ctxBuilt = false;
  }

  // surrounding upper-body muscles (back, abdomen, neck, forearm): built on demand
  showContext(on) {
    if (on && !this._ctxBuilt) {
      this._ctxBuilt = true;
      this._ctxIds = [];
      for (const [id, name, layer, oname, keys] of this._ctxList) { this._addMuscle(id, name, layer, [oname], keys, true); this._ctxIds.push(id); }
      this._ctxDefs = this.muscleDefs.filter(d => this._ctxIds.includes(d.id));
      // keep them out of the step code's muscleDefs loops
      this.muscleDefs = this.muscleDefs.filter(d => !this._ctxIds.includes(d.id));
      this._ctxIds.forEach(id => { this.muscles[id].opacity = 0.3; this.muscles[id].baseColor = 0x8a5a4e; });
      this._applyStyles();
    }
    (this._ctxIds || []).forEach(id => { const m = this.muscles[id]; m.visible = on; m.group.visible = on; m.skin._hidden = !on; });
    this._dirty = true;
  }

  _anchor(sk, which) {
    // centroid of the vertices that follow the first (origin) or last (insertion) bone most strongly
    if (!sk._anch) {
      const m = sk.meshes[0], n = m.rest.length / 3;
      const a0 = [], a1 = [];
      if (sk.rigid || !sk.data) {
        const c = new V3(); for (let i = 0; i < n; i++) { c.x += m.rest[i * 3]; c.y += m.rest[i * 3 + 1]; c.z += m.rest[i * 3 + 2]; }
        sk._anch = [c.multiplyScalar(1 / n), c.clone()]; sk._anchKeys = [sk.keys[0], sk.keys[0]];
      } else {
        const { i0, i1, w } = sk.data[0];
        const lo = new V3(), hi = new V3(); let nl = 0, nh = 0;
        const k0 = sk.keys[0], kLast = sk.keys[sk.keys.length - 1];
        let keyLo = k0, keyHi = kLast;
        // use first key as origin and the other one with highest weight as insertion
        const idxFirst = 0;
        for (let i = 0; i < n; i++) {
          const dom = w[i] < 0.5 ? i0[i] : i1[i];
          const wt = dom === i0[i] ? 1 - w[i] : w[i];
          if (dom === idxFirst && wt > 0.7) { lo.x += m.rest[i * 3]; lo.y += m.rest[i * 3 + 1]; lo.z += m.rest[i * 3 + 2]; nl++; }
          else if (dom !== idxFirst && wt > 0.7) { hi.x += m.rest[i * 3]; hi.y += m.rest[i * 3 + 1]; hi.z += m.rest[i * 3 + 2]; nh++; }
        }
        sk._anch = [nl ? lo.multiplyScalar(1 / nl) : new V3(), nh ? hi.multiplyScalar(1 / nh) : new V3()];
        sk._anchKeys = [keyLo, keyHi];
        void a0; void a1;
      }
    }
    const key = sk._anchKeys[which];
    return sk._anch[which].clone().applyMatrix4(this.M[key] || new M4());
  }

  /* ---- API compat shims for the step code ---- */
  _compat() {
    const self = this;
    this.scapMesh = { userData: { cartilage: [
      { material: this.cartMat.glenoid, set visible(v) { (self.cartMeshes.glenoid || []).forEach(m => { m.visible = v; }); } },
      { material: this.cartMat.labrum, set visible(v) { (self.cartMeshes.labrum || []).forEach(m => { m.visible = v; }); } },
    ] } };
    this.hdata = { head: { children: [null, { material: this.cartMat.head, set visible(v) { (self.cartMeshes.head || []).forEach(m => { m.visible = v; }); } }] } };
    this.humRoot = new THREE.Object3D(); this.root.add(this.humRoot);
    this.leftContent = { localToWorld: (p) => { const q = p.clone().applyMatrix4(this.D.fitS); q.x = -q.x; return q; } };
    this.thorax = { sub: {} };
  }

  /* ---- pose ---- */
  setPose(p) { Object.assign(this.pose, p); this._dirty = true; }
  pt(spec) {
    if (typeof spec === 'function') return spec();
    const k = spec[0], o = v(spec[1], spec[2], spec[3]);
    const D = this.D;
    switch (k) {
      case 'S': return o.applyMatrix4(D.fitS).applyMatrix4(this.M.scap);
      case 'H': { const r = o.clone().applyMatrix4(D.fitH); return r.applyMatrix4(spec[2] > 1.2 ? this.M.humP : this.M.hum); }
      case 'R': case 'Hd': return o.add(D.H0).applyMatrix4(this.M.humP);
      case 'F': return o.add(D.E0).applyMatrix4(this.M.ulna);
      case 'T': return this.tpt(spec[1]);
      case 'C': { const p = D.clavCurve.getPointAt(Math.min(1, Math.max(0, spec[1]))); p.y += (spec[2] || 0); return p.applyMatrix4(this.M.clav); }
      case 'W': return o;
    }
    return o;
  }
  tpt(name) {
    const n = this.D.names[name];
    if (!n) return v(0, 0, 0);
    return n.p.clone().applyMatrix4(this.M[n.body] || new M4());
  }
  clavPoint(t, off = 0) { return this.pt(['C', t, off]); }

  update() {
    const P = this.pose, D = this.D, M = this.M;
    // posture: upper body folds forward about T9/T10, head folds about C7
    const pivT = D.names['body.T10'] ? D.names['body.T10'].p : v(0, -12, 5);
    const pivC = D.names['body.C7'] ? D.names['body.C7'].p : v(0, 12, 4);
    const alpha = (P.kyph - 35) * 0.5 * RAD;
    const Mth = rotAbout(pivT, AX, -alpha);
    const Mhead = Mth.clone().multiply(rotAbout(pivC, AX, -(P.fwd * 24) * RAD));
    M.pelvis.identity(); M.thorax.copy(Mth); M.head.copy(Mhead);

    // scapula (relative to the thorax)
    let up = P.scapUp, tilt = P.scapTilt, ir = P.scapIR;
    if (P.rhythm && P.scapAuto) {
      const e = Math.max(0, P.elev - 30);
      up = P.scapUp + e * 0.4 * P.gain;
      tilt = P.scapTilt + P.elev * 0.13;
      ir = P.scapIR - P.elev * 0.09;
    }
    this._scapUpEff = up;
    const sa = D.sAxes, C = D.scapC;
    const Rs = new Q4().setFromAxisAngle(sa.n, up * RAD)
      .multiply(new Q4().setFromAxisAngle(sa.ml, tilt * RAD))
      .multiply(new Q4().setFromAxisAngle(sa.si, ir * RAD));
    const centre = D.names['body.T4'] ? D.names['body.T4'].p : v(0, 5, 5);
    const vertAxis = v(centre.x, 0, 0);
    const Rprot = rotAbout(v(0, 0, centre.z - 6), AY, P.prot * 14 * RAD);
    void vertAxis;
    const Msc = new M4().makeTranslation(0, P.shrug, 0).multiply(Rprot).multiply(quatAbout(C, Rs));
    M.scap.copy(Mth).multiply(Msc);

    // clavicle follows the acromial end
    const Aloc = D.A0.clone().applyMatrix4(Msc);
    const d0 = D.A0.clone().sub(D.S0).normalize(), d1 = Aloc.clone().sub(D.S0).normalize();
    const qc = new Q4().setFromUnitVectors(d0, d1);
    M.clav.copy(Mth).multiply(quatAbout(D.S0, qc));

    // humerus about the head centre
    const phi = P.plane * RAD, th = P.elev * RAD;
    const u = v(Math.cos(phi), 0, -Math.sin(phi));
    const axis = v(-u.z, 0, u.x);
    const q1 = new Q4().setFromAxisAngle(axis, th);
    const qa = new Q4().setFromAxisAngle(AY, -P.er * RAD);
    const qT = q1.multiply(qa).multiply(D.align);
    const Hloc = D.H0.clone().applyMatrix4(Msc).add(v(0, P.supGlide || 0, -(P.antGlide || 0)));
    const Mh = new M4().makeTranslation(Hloc.x, Hloc.y, Hloc.z).multiply(new M4().makeRotationFromQuaternion(qT)).multiply(new M4().makeTranslation(-D.H0.x, -D.H0.y, -D.H0.z));
    M.humP.copy(Mth).multiply(Mh);
    // more retroversion = head faces further back relative to the elbow, so with the head seated the shaft/forearm sits in more ER
    const twist = rotAbout(D.H0, AY, -(P.retro - 30) * RAD);
    M.hum.copy(Mth).multiply(Mh).multiply(twist);
    // forearm
    const flex = rotAbout(D.E0, D.elbowAxis, P.elbow * RAD);
    M.ulna.copy(M.hum).multiply(flex);
    const wristAxis = D.E0.clone().sub(D.W0).normalize();
    M.rad.copy(M.ulna).multiply(rotAbout(D.E0, wristAxis, (P.pron - PRON_REST) * RAD));

    // apply to rigid groups
    const g = this.bodyGroups;
    const set = (grp, m) => { grp.matrix.copy(m); grp.matrixWorldNeedsUpdate = true; };
    set(g.pelvis, M.pelvis); set(g.thorax, M.thorax); set(g.head, M.head); set(g.scap, M.scap); set(g.clav, M.clav);
    set(g.ulna, M.ulna); set(g.rad, M.rad); set(g.leftArm, M.thorax);
    set(g.humerus, new M4().identity()); // humerus is skinned, positions already include transforms
    // humRoot (for arm-space arrows)
    const hp = D.H0.clone().applyMatrix4(M.humP);
    this.humRoot.position.copy(hp);
    this.humRoot.quaternion.setFromRotationMatrix(new M4().extractRotation(M.humP));
    this.humRoot.updateMatrixWorld(true);

    // skins
    for (const sk of this.skins) {
      if (sk._hidden) continue;
      if (sk.rigid) { const mm = M[sk.keys[0]]; sk.meshes.forEach(m => { m.mesh.matrixAutoUpdate = false; m.mesh.matrix.copy(mm); m.mesh.matrixWorldNeedsUpdate = true; }); }
      else sk.update(M);
    }
    this._dirty = false;
  }

  /* ---- muscles / ligaments / visibility ---- */
  _applyStyles() {
    for (const m of Object.values(this.muscles)) {
      m.belly.color.setHex(m.baseColor);
      m.belly.opacity = m.opacity; m.tendon.opacity = m.opacity;
      m.belly.transparent = m.tendon.transparent = m.opacity < 1;
      m.belly.depthWrite = m.tendon.depthWrite = m.opacity > 0.6;
      m.belly.emissive.setHex(m.baseColor).multiplyScalar(m.glow);
      m.tendon.emissive.setHex(COL.tend).multiplyScalar(m.glow * 0.6);
    }
  }
  setMuscle(id, st) {
    const m = this.muscles[id]; if (!m) return;
    if (st.visible !== undefined) m.visible = st.visible;
    if (st.color !== undefined) m.baseColor = st.color;
    if (st.opacity !== undefined) m.opacity = st.opacity;
    if (st.glow !== undefined) m.glow = st.glow;
    m.group.visible = m.visible; m.skin._hidden = !m.visible;
    if (m.visible) this._dirty = true;
    this._applyStyles();
  }
  muscleIds(layer) { return this.muscleDefs.filter(d => d.layer === layer).map(d => d.id); }
  resetMuscles() {
    for (const [id, m] of Object.entries(this.muscles)) {
      if (this._ctxIds && this._ctxIds.includes(id)) continue;
      m.visible = true; m.baseColor = m.def.color; m.opacity = 1; m.glow = 0; m.group.visible = true; m.skin._hidden = false;
    }
    this._applyStyles(); this._dirty = true;
  }
  setLig(id, st) {
    const l = this.ligs[id]; if (!l) return;
    if (st.color !== undefined) l.mat.color.setHex(st.color);
    if (st.glow !== undefined) l.mat.emissive.setHex(l.mat.color.getHex()).multiplyScalar(st.glow);
    if (st.visible !== undefined) l.mesh.visible = st.visible;
  }
  resetLigs() { Object.values(this.ligs).forEach(l => { l.mat.color.setHex(COL.lig); l.mat.emissive.setHex(0); l.mesh.visible = true; }); }
  show(cat, on) {
    switch (cat) {
      case 'scapula': this.bodyGroups.scap.visible = on; break;
      case 'clavicle': this.bodyGroups.clav.visible = on; break;
      case 'humerus': this.bodyGroups.humerus.visible = on; this.bodyGroups.ulna.visible = on; this.bodyGroups.rad.visible = on; break;
      case 'forearm': this.bodyGroups.ulna.visible = on; this.bodyGroups.rad.visible = on; break;
      case 'cartilage': Object.values(this.cartMeshes).forEach(a => a.forEach(m => { m.visible = on; })); this.cats.cartilage.visible = on; this._cartVis = on; break;
      case 'left': this.cats.left.visible = on; break;
      case 'thorax': this.cats.thorax.visible = on; break;
      default: if (this.cats[cat]) this.cats[cat].visible = on;
    }
  }
  showThorax(part, on) { (this.catMeshes[part] || []).forEach(m => { m.visible = on; }); }
  setBoneOpacity(a) { const m = this.mats.bone; m.transparent = a < 1; m.opacity = a; m.depthWrite = a > 0.6; }
  dispose() {
    this.skins.forEach(sk => sk.meshes.forEach(m => m.mesh.geometry.dispose()));
    Object.values(this.muscles).forEach(m => { m.belly.dispose(); m.tendon.dispose(); });
  }

  // head articular axis (from the head centre toward the middle of the articular surface) and the line through the epicondyles, in world space
  headAxis() {
    const D = this.D, c = D.H0.clone().applyMatrix4(this.M.humP), t = D.artC.clone().applyMatrix4(this.M.humP);
    return { c, a: t.sub(c).normalize() };
  }
  epicondyleLine() {
    const L = this.A.landmarks;
    const m = L['Medial epicondyle of humerus'].clone().applyMatrix4(this.M.hum), l = L['Lateral epicondyle of humerus'].clone().applyMatrix4(this.M.hum);
    return { m, l };
  }
  // retroversion as measured on the current geometry (degrees, head axis behind the medial epicondylar direction)
  measuredRetro() {
    const { c, a } = this.headAxis(), { m, l } = this.epicondyleLine();
    const shaft = c.clone().sub(this.D.E0.clone().applyMatrix4(this.M.hum)).normalize();
    const med = m.clone().sub(l).normalize();
    const proj = (x) => x.clone().sub(shaft.clone().multiplyScalar(x.dot(shaft))).normalize();
    const u = proj(med), w = proj(AZ), pa = proj(a);
    return Math.atan2(pa.dot(w), pa.dot(u)) / RAD;
  }
  clearance() {
    const D = this.D, a = D.acrIdx.map(p => p.clone().applyMatrix4(this.M.scap));
    const g = D.gtIdx.map(p => p.clone().applyMatrix4(this.M.humP));
    let m = 1e9;
    for (const p of g) for (const q of a) { const d = p.distanceToSquared(q); if (d < m) m = d; }
    return Math.sqrt(m);
  }
  glenohumeralElev() { return this.pose.elev - this._scapUpEff; }
  scapularUp() { return this._scapUpEff; }
}

// rest forearm pronation in the source model (0 = palm forward / supinated). Tuned after viewing the rest pose.
const PRON_REST = 0;
