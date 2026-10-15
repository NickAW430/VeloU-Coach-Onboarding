// VeloU Shoulder Lab · procedural anatomy rig (stylised, to scale in cm).
// World frame: +X = subject's right (lateral for the modelled right shoulder), +Y = up, -Z = anterior.
import * as THREE from 'three';

const { Vector3: V3, Group, Mesh } = THREE;
const RAD = Math.PI / 180;
const AX = new V3(1, 0, 0), AY = new V3(0, 1, 0);
const v = (x, y, z) => new V3(x, y, z);

export const COL = {
  bone: 0xe4dac4, boneDark: 0xc9bea5, cart: 0x78c6ff, lab: 0x9fd8ff, lig: 0xd4f57a, tend: 0xf3efe4,
  cuff: 0xe5534b, sup: 0xa8564a, mid: 0xcf8d45, arm: 0x9a7a6a, capsule: 0x8fd0ff, bursa: 0x59d2c0,
};

const mat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.58, metalness: 0.03, ...o });

function disposeChildren(g) {
  for (let i = g.children.length - 1; i >= 0; i--) {
    const c = g.children[i];
    g.remove(c);
    c.traverse(o => { if (o.geometry) o.geometry.dispose(); });
  }
}

/* ---------- spine / thorax model ---------- */
const LV = ['L5', 'L4', 'L3', 'L2', 'L1', 'T12', 'T11', 'T10', 'T9', 'T8', 'T7', 'T6', 'T5', 'T4', 'T3', 'T2', 'T1', 'C7', 'C6', 'C5', 'C4', 'C3', 'C2', 'C1'];
const RIB_A = [4.6, 6.8, 8.8, 10.2, 11.3, 12.0, 12.5, 12.6, 12.4, 11.8];
const RIB_D = [7.5, 10, 12, 13.5, 14.8, 15.6, 16.2, 16.5, 16.3, 15.8];
const RIB_DROP = [4.5, 4.8, 4.5, 4.2, 4.0, 3.8, 3.6, 3.4, 3.2, 3.0];

function spineModel(kyph, fwd) {
  const out = [];
  const p = v(0, 0, 0);
  LV.forEach((n, i) => {
    let ang;
    if (i < 5) ang = 20 - 8 * i;
    else if (i < 17) ang = -12 + (i - 5) * kyph / 11;
    else { const top = -12 + kyph, target = fwd * 28; ang = top + (target - top) * ((i - 16) / 7); }
    out.push({ n, p: p.clone(), a: ang });
    const len = i < 5 ? 2.5 : i < 17 ? 2.4 : 1.7;
    p.add(v(0, Math.cos(ang * RAD) * len, -Math.sin(ang * RAD) * len));
  });
  const t7 = out.find(o => o.n === 'T7').p.clone();
  const off = v(0, -1.5, 7.5).sub(t7);
  out.forEach(o => o.p.add(off));
  return out;
}

/* ---------- bone builders ---------- */
function buildScapula(m) {
  const g = new Group();
  const S = 0.93;
  const pts = [[0.3, 2.2], [-1.0, 3.0], [-3.2, 3.9], [-5.5, 5.0], [-9.0, 7.4], [-10.3, 5.5], [-10.2, 2], [-9.6, -6], [-7.6, -10.2], [-4.2, -7.2], [-2, -4.6], [-0.3, -3.3]]
    .map(([x, y]) => v(x * S, y * S, 0));
  const curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
  const shape = new THREE.Shape(curve.getPoints(90).map(p => new THREE.Vector2(p.x, p.y)));
  const blade = new THREE.ExtrudeGeometry(shape, { depth: 0.35, bevelEnabled: true, bevelThickness: 0.28, bevelSize: 0.4, bevelSegments: 3, curveSegments: 6 });
  blade.translate(0, 0, -0.17);
  const bladeM = new Mesh(blade, m); bladeM.userData.part = 'scapula'; g.add(bladeM);

  const spine = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([v(-9.6, 1.5, 0.35), v(-7.2, 2.1, 0.75), v(-4.4, 2.7, 1.05), v(-2.0, 3.1, 1.2)]), 16, 0.6, 8);
  const spineM = new Mesh(spine, m); spineM.userData.part = 'scapula'; g.add(spineM);

  const acr = new THREE.Shape(
    [[-3.0, 1.8], [-0.5, 2.0], [2.4, 0.8], [4.4, -0.9], [4.8, -2.6], [3.6, -3.0], [1.2, -1.6], [-1.2, -0.8], [-3.0, 0.2]].map(([x, z]) => new THREE.Vector2(x, z)));
  const acrG = new THREE.ExtrudeGeometry(acr, { depth: 0.8, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.3, bevelSegments: 2 });
  acrG.rotateX(Math.PI / 2); acrG.translate(0, 3.9, 0);
  const acrM = new Mesh(acrG, m); acrM.userData.part = 'scapula'; g.add(acrM);

  const cor = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([v(0.0, 2.0, -0.3), v(-0.1, 3.0, -1.3), v(0.8, 3.3, -3.2), v(2.6, 2.6, -4.9), v(3.6, 1.4, -5.3)]), 20, 0.7, 8);
  const corM = new Mesh(cor, m); corM.userData.part = 'scapula'; g.add(corM);
  const tip = new Mesh(new THREE.SphereGeometry(0.72, 12, 10), m); tip.position.set(3.6, 1.4, -5.3); g.add(tip);

  // glenoid: bone + cartilage + labrum
  const gl = new Mesh(new THREE.CylinderGeometry(1, 1, 0.5, 28), m);
  gl.rotation.z = -Math.PI / 2; gl.scale.set(1, 1.75, 1.3); gl.position.set(0.1, -0.5, -0.1);
  const wrap = new Group(); wrap.add(gl); g.add(wrap);
  const cartMat = mat(COL.cart, { roughness: 0.4, transparent: true, opacity: 0.92 });
  const gc = new Mesh(new THREE.CylinderGeometry(1, 1, 0.3, 28), cartMat);
  gc.rotation.z = -Math.PI / 2; gc.scale.set(1, 1.6, 1.15); gc.position.set(0.5, -0.5, -0.1);
  gc.userData.part = 'glenoid-cartilage'; g.add(gc);
  const lab = new Mesh(new THREE.TorusGeometry(1, 0.2, 8, 36), mat(COL.lab, { roughness: 0.5 }));
  lab.rotation.y = Math.PI / 2; lab.scale.set(1.3, 1.78, 1); lab.position.set(0.55, -0.5, -0.1);
  lab.userData.part = 'labrum'; g.add(lab);
  g.userData = { cartilage: [gc, lab] };
  return g;
}

function buildHumerus(m, withForearm = true) {
  // O frame: origin = shaft axis at surgical neck, shaft runs down -Y.
  const o = new Group();
  const mk = (geo, x, y, z, part = 'humerus', mm = m) => { const q = new Mesh(geo, mm); q.position.set(x, y, z); q.userData.part = part; o.add(q); return q; };
  const shaft = new THREE.CylinderGeometry(1.35, 0.95, 28, 18); shaft.translate(0, -14, 0);
  const sh = new Mesh(shaft, m); sh.userData.part = 'humerus'; o.add(sh);
  const meta = new THREE.CylinderGeometry(1.8, 1.35, 5.2, 20); meta.translate(0, 2.6, 0);
  const mt = new Mesh(meta, m); mt.userData.part = 'humerus'; o.add(mt);
  const gt = mk(new THREE.SphereGeometry(1, 18, 14), 1.2, 4.1, 0.3); gt.scale.set(1.25, 1.7, 1.35); gt.userData.part = 'greater-tubercle';
  const lt = mk(new THREE.SphereGeometry(1, 16, 12), 0.2, 3.8, -2.0); lt.scale.set(0.95, 1.25, 0.95); lt.userData.part = 'lesser-tubercle';
  const dt = mk(new THREE.SphereGeometry(1, 14, 10), 1.3, -13, 0.0); dt.scale.set(0.7, 2.2, 0.6); dt.userData.part = 'deltoid-tuberosity';
  // epicondyles + trochlea
  mk(new THREE.SphereGeometry(0.95, 12, 10), 2.4, -29.2, 0.1, 'epicondyle');
  mk(new THREE.SphereGeometry(1.05, 12, 10), -2.5, -29.2, 0.3, 'epicondyle');
  const tr = new Mesh(new THREE.CylinderGeometry(1.25, 1.25, 4.6, 18), m); tr.rotation.z = Math.PI / 2; tr.position.set(0, -30.2, -0.2); tr.userData.part = 'humerus'; o.add(tr);
  // bicipital groove (visual)
  const grv = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([v(0.75, 3.8, -1.55), v(0.8, 0.5, -1.45), v(0.7, -6, -1.35)]), 14, 0.22, 6);
  o.add(new Mesh(grv, mat(0x6f664f)));

  // head: separate frame (rotates by retroversion about the shaft)
  const head = new Group();
  const hb = new Mesh(new THREE.SphereGeometry(2.3, 36, 24), m); hb.userData.part = 'humeral-head'; head.add(hb);
  const hc = new Mesh(new THREE.SphereGeometry(2.4, 36, 20, 0, Math.PI * 2, 0, 1.5), mat(COL.cart, { roughness: 0.35, transparent: true, opacity: 0.9 }));
  hc.rotation.z = 53 * RAD; hc.userData.part = 'head-cartilage'; head.add(hc);
  o.add(head);
  const neck = new Mesh(new THREE.CylinderGeometry(1.9, 2.2, 1, 18), m); neck.userData.part = 'humerus'; o.add(neck);

  const fore = new Group(); fore.position.set(0, -30.2, -0.2); o.add(fore);
  const fpron = new Group(); fore.add(fpron);
  if (withForearm) {
    const rad = new THREE.CylinderGeometry(0.7, 0.55, 24, 12); rad.translate(0.7, -12, 0);
    const uln = new THREE.CylinderGeometry(0.75, 0.5, 25, 12); uln.translate(-0.6, -12.5, 0.35);
    fpron.add(new Mesh(rad, m)); fpron.add(new Mesh(uln, m));
    const hand = new Mesh(new THREE.BoxGeometry(3.6, 9, 1.8), mat(COL.boneDark)); hand.position.set(0, -29, 0); fpron.add(hand);
    const thumb = new Mesh(new THREE.CylinderGeometry(0.55, 0.45, 4.5, 8), mat(COL.boneDark)); thumb.position.set(2.2, -26, 0); thumb.rotation.z = 0.35; fpron.add(thumb);
  }
  o.userData = { head, neck, fore, fpron, gt, lt };
  return o;
}

/* ---------- Rig ---------- */
export class Rig {
  constructor(opts = {}) {
    this.root = new Group();
    this.pose = { elev: 0, plane: 40, er: 0, elbow: 90, pron: 90, scapUp: 0, scapTilt: 0, scapIR: 0, prot: 0, shrug: 0, rhythm: true, gain: 1, retro: 30, kyph: 35, fwd: 0, scapAuto: true };
    this.mats = { bone: mat(COL.bone, { side: THREE.DoubleSide }), boneDark: mat(COL.boneDark, { side: THREE.DoubleSide }) };
    this.cats = {};              // category -> Group  (for visibility toggles)
    ['thorax', 'scapula', 'clavicle', 'humerus', 'muscles', 'ligaments', 'cartilage', 'soft', 'left', 'overlay'].forEach(k => {
      const g = new Group(); g.name = k; this.cats[k] = g; this.root.add(g);
    });
    this.thx = new Group(); this.cats.thorax.add(this.thx);
    this.thorax = { named: {}, vs: [], sub: {} };

    // right scapula chain
    this.scapAnchor = new Group();
    this.scapRot = new Group();
    this.scapContent = new Group();
    this.scapAnchor.add(this.scapRot); this.scapRot.add(this.scapContent);
    this.cats.scapula.add(this.scapAnchor);
    this.PIVOT = v(-5, -1.5, 0);
    this.scapContent.position.copy(this.PIVOT).multiplyScalar(-1);
    this.scapMesh = buildScapula(this.mats.bone);
    this.scapContent.add(this.scapMesh);
    this.HS = v(2.9, -0.5, -0.1); // head centre, scapula-local

    // humerus chain
    this.humRoot = new Group(); this.humRoot.position.copy(this.HS);
    this.scapContent.add(this.humRoot);
    this.shaft = buildHumerus(this.mats.bone, true);
    this.humRoot.add(this.shaft);
    this.hdata = this.shaft.userData;

    // clavicle (dynamic tube)
    this.clavMesh = new Mesh(new THREE.BufferGeometry(), this.mats.bone);
    this.clavMesh.userData.part = 'clavicle';
    this.cats.clavicle.add(this.clavMesh);
    this.clavCurve = null;

    // left side (static comparison)
    if (opts.left !== false) this._buildLeft();

    // overlay + soft-tissue
    this._buildSoft();
    this.muscles = {};
    this._buildMuscleDefs();
    this._styleDirty = true;
    this.update(true);
  }

  /* ----- left side ----- */
  _buildLeft() {
    const L = this.cats.left;
    this.leftWrap = new Group(); this.leftWrap.scale.x = -1;
    this.leftAnchor = new Group(); this.leftRot = new Group(); this.leftContent = new Group();
    this.leftWrap.add(this.leftAnchor); this.leftAnchor.add(this.leftRot); this.leftRot.add(this.leftContent);
    this.leftContent.position.copy(this.PIVOT).multiplyScalar(-1);
    this.leftScap = buildScapula(this.mats.bone);
    this.leftContent.add(this.leftScap);
    this.leftHumRoot = new Group(); this.leftHumRoot.position.copy(this.HS);
    this.leftHum = buildHumerus(this.mats.bone, true);
    this.leftHumRoot.add(this.leftHum);
    this.leftContent.add(this.leftHumRoot);
    L.add(this.leftWrap);
    this.leftClav = new Mesh(new THREE.BufferGeometry(), this.mats.bone); L.add(this.leftClav);
  }

  /* ----- soft tissue ----- */
  _buildSoft() {
    const soft = this.cats.soft;
    this.capsule = new Mesh(new THREE.SphereGeometry(3.15, 28, 18), mat(COL.capsule, { transparent: true, opacity: 0.16, depthWrite: false, roughness: 0.2 }));
    this.capsule.userData.part = 'capsule';
    soft.add(this.capsule);
    this.bursa = new Mesh(new THREE.SphereGeometry(1, 20, 14), mat(COL.bursa, { transparent: true, opacity: 0.35, depthWrite: false }));
    this.bursa.scale.set(3.3, 0.55, 2.6); this.bursa.userData.part = 'bursa';
    soft.add(this.bursa);
    // ligament definitions: [id, name, pts, radius]
    this.ligDefs = [
      { id: 'conoid', name: 'Conoid (CC lig.)', r: 0.28, pts: [['S', -0.2, 3.2, -1.2], ['C', 0.80, -0.5]] },
      { id: 'trapezoid', name: 'Trapezoid (CC lig.)', r: 0.28, pts: [['S', 0.9, 3.4, -3.0], ['C', 0.88, -0.5]] },
      { id: 'acl', name: 'AC ligament', r: 0.2, pts: [['C', 0.96, 0.3], ['S', 1.3, 4.3, -1.3]] },
      { id: 'cal', name: 'Coracoacromial ligament', r: 0.22, pts: [['S', 2.9, 2.9, -4.2], ['S', 3.6, 3.5, -3.0], ['S', 4.4, 3.4, -2.2]] },
      { id: 'sghl', name: 'Superior GH ligament', r: 0.2, pts: [['S', 0.6, 1.5, -0.5], ['Hd', 0.2, 2.4, -1.0], ['Hd', 1.3, 1.5, -1.2]] },
      { id: 'mghl', name: 'Middle GH ligament', r: 0.24, pts: [['S', 0.6, 0.2, -1.3], ['Hd', -0.5, 0.2, -2.3], ['Hd', 0.5, -0.2, -2.3]] },
      { id: 'ighl-a', name: 'IGHL · anterior band', r: 0.28, pts: [['S', 0.6, -1.4, -1.2], ['Hd', -1.1, -1.4, -1.7], ['Hd', -0.3, -1.6, -1.7]] },
      { id: 'ighl-p', name: 'IGHL · posterior band', r: 0.28, pts: [['S', 0.6, -1.4, 1.1], ['Hd', -1.1, -1.4, 1.7], ['Hd', -0.3, -1.6, 1.7]] },
      { id: 'thl', name: 'Transverse humeral lig.', r: 0.17, pts: [['H', 0.15, 3.4, -2.1], ['H', 0.9, 3.5, -1.8], ['H', 1.5, 3.6, -1.1]] },
    ];
    this.ligs = {};
    this.ligDefs.forEach(d => {
      const m = mat(COL.lig, { roughness: 0.5, emissive: 0x000000 });
      const mesh = new Mesh(new THREE.BufferGeometry(), m);
      mesh.userData.lig = d.id;
      this.cats.ligaments.add(mesh);
      this.ligs[d.id] = { def: d, mesh, mat: m, base: COL.lig };
    });
    // cartilage-only extras: AC disc, costal cartilage live in thorax; labrum + glenoid cartilage in scapula
  }

  /* ----- coordinates ----- */
  pt(spec) {
    if (typeof spec === 'function') return spec();
    const k = spec[0];
    const o = v(spec[1], spec[2], spec[3]);
    switch (k) {
      case 'S': return this.scapContent.localToWorld(o);
      case 'H': return this.shaft.localToWorld(o);
      case 'Hd': return this.hdata.head.localToWorld(o);
      case 'R': return this.humRoot.localToWorld(o);
      case 'F': return this.hdata.fpron.localToWorld(o);
      case 'T': return this.tpt(spec[1]);
      case 'C': return this.clavPoint(spec[1], spec[2] || 0);
      case 'W': return o;
    }
    return o;
  }
  tpt(name) { const p = this.thorax.named[name]; return p ? p.clone() : v(0, 0, 0); }
  clavPoint(t, off = 0) {
    if (!this.clavCurve) return v(0, 0, 0);
    const p = this.clavCurve.getPointAt(Math.min(1, Math.max(0, t)));
    p.y += off; return p;
  }

  /* ----- thorax ----- */
  _ring(level, th, side = 1) {
    const i0 = Math.max(0, Math.min(8, Math.floor(level) - 1)), f = Math.min(1, Math.max(0, level - 1 - i0));
    const va = this.thorax.vs.find(o => o.n === 'T' + (i0 + 1)), vb = this.thorax.vs.find(o => o.n === 'T' + (i0 + 2));
    const lerp = (a, b) => a + (b - a) * f;
    const A = lerp(RIB_A[i0], RIB_A[i0 + 1]), D = lerp(RIB_D[i0], RIB_D[i0 + 1]), dr = lerp(RIB_DROP[i0], RIB_DROP[i0 + 1]);
    const ang = lerp(va.a, vb.a), p = va.p.clone().lerp(vb.p, f);
    const s = Math.sin(th), c = Math.cos(th);
    const loc = v(side * (1.2 + (A - 1.2) * s), -dr * (1 - c) / 2, -D * (1 - c) / 2);
    const dx = side * (A - 1.2) * c, dz = -D * s / 2;
    const n = v(-dz, 0, dx); // outward normal (right side) — local
    if (side < 0) n.x *= -1;
    n.normalize();
    n.applyAxisAngle(AX, -ang * RAD);
    return { p: p.add(loc.applyAxisAngle(AX, -ang * RAD)), n };
  }

  buildThorax() {
    const { kyph, fwd } = this.pose;
    const vs = spineModel(kyph, fwd);
    this.thorax.vs = vs;
    const nm = {};
    this.thorax.named = nm;
    disposeChildren(this.thx);
    const g = (n) => { const q = new Group(); q.name = n; this.thx.add(q); return q; };
    const sp = g('spine'), rb = g('ribs'), st = g('sternum'), sk = g('skull'), pv = g('pelvis'), cg = g('costal');
    this.thorax.sub = { spine: sp, ribs: rb, sternum: st, skull: sk, pelvis: pv, costal: cg };
    const mB = this.mats.boneDark, mR = this.mats.bone, mC = mat(COL.cart, { roughness: 0.4, transparent: true, opacity: 0.9, emissive: 0x000000 });
    this.costMat = mC;
    const rot = (p, a) => p.applyAxisAngle(AX, -a * RAD);

    vs.forEach(o => {
      const isL = o.n[0] === 'L', isC = o.n[0] === 'C';
      const r = isL ? 2.4 : isC ? 1.3 : 1.8, h = isL ? 2.2 : isC ? 1.4 : 1.9;
      const body = new Mesh(new THREE.CylinderGeometry(r, r * 1.05, h, 14), mB);
      body.position.copy(o.p); body.rotation.x = -o.a * RAD; body.userData.part = 'vertebra'; sp.add(body);
      const spn = new Mesh(new THREE.BoxGeometry(0.7, 0.8, 3.2), mB);
      const sp0 = rot(v(0, -0.6, 3.0), o.a).add(o.p); spn.position.copy(sp0); spn.rotation.x = (-o.a + 18) * RAD; sp.add(spn);
      nm['spinous.' + o.n] = rot(v(0, -1.0, 4.3), o.a).add(o.p);
      nm['body.' + o.n] = o.p.clone();
      nm['tp.R.' + o.n] = rot(v(3.2, 0, 1.8), o.a).add(o.p);
      nm['tp.L.' + o.n] = rot(v(-3.2, 0, 1.8), o.a).add(o.p);
    });
    // sacrum / pelvis block
    const L5 = vs[0], L4 = vs[1];
    const sac = new Mesh(new THREE.BoxGeometry(7, 7, 3.2), mB); sac.position.copy(L5.p).add(v(0, -5, 1.2)); sp.add(sac);
    [1, -1].forEach(s => {
      const w = new Mesh(new THREE.SphereGeometry(1, 16, 12), mB);
      w.scale.set(1.8, 5.5, 4.6); w.position.copy(L4.p).add(v(s * 8.8, -3.5, 0.0)); pv.add(w);
      nm[(s > 0 ? 'iliac.R' : 'iliac.L')] = L4.p.clone().add(v(s * 11.2, -1.5, 1.2));
    });
    nm['sacrum'] = L5.p.clone().add(v(0, -5, 3.0));

    // ribs + costal cartilage
    for (let i = 1; i <= 10; i++) {
      const vert = vs.find(o => o.n === 'T' + i);
      [1, -1].forEach(side => {
        const A = RIB_A[i - 1], D = RIB_D[i - 1], dr = RIB_DROP[i - 1];
        const pt = (th) => {
          const s = Math.sin(th), c = Math.cos(th);
          const l = v(side * (1.2 + (A - 1.2) * s), -dr * (1 - c) / 2, -D * (1 - c) / 2 + (th < 0.25 ? 1.2 * (1 - th / 0.25) : 0));
          return rot(l, vert.a).add(vert.p);
        };
        const th1 = i <= 7 ? 0.8 : 0.72, th2 = i <= 7 ? 1.0 : 0.9;
        const bone = [], cart = [];
        for (let k = 0; k <= 16; k++) bone.push(pt(Math.PI * th1 * k / 16));
        for (let k = 0; k <= 6; k++) cart.push(pt(Math.PI * (th1 + (th2 - th1) * k / 6)));
        const rM = new Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(bone), 28, i === 1 ? 0.75 : 0.5, 6), mR);
        rM.userData.part = 'rib'; rb.add(rM);
        const cM = new Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cart), 8, i === 1 ? 0.7 : 0.45, 6), mC);
        cM.userData.part = 'costal-cartilage'; cg.add(cM);
        if (side > 0) {
          nm['rib' + i + '.ant'] = pt(Math.PI * 0.62);
          nm['rib' + i + '.lat'] = pt(Math.PI * 0.5);
          nm['rib' + i + '.end'] = pt(Math.PI * th2);
        }
      });
    }
    // sternum
    const sc = [];
    for (let i = 1; i <= 7; i++) { const p = nm['rib' + i + '.end'].clone(); p.x = 0; sc.push(p); nm['sternum.' + i] = p.clone().add(v(0.0, 0, -0.9)); }
    nm['jugular'] = sc[0].clone().add(v(0, 2.4, 0.4));
    const man = new Mesh(new THREE.BoxGeometry(5.2, 3.4, 1.3), mR); man.position.copy(sc[0]).add(v(0, 0.6, 0)); man.userData.part = 'sternum'; st.add(man);
    for (let i = 0; i < 6; i++) {
      const a = sc[i], b = sc[i + 1], len = a.distanceTo(b);
      const box = new Mesh(new THREE.BoxGeometry(3.6, len + 0.2, 1.1), mR);
      box.position.copy(a).add(b).multiplyScalar(0.5);
      box.quaternion.setFromUnitVectors(AY, a.clone().sub(b).normalize());
      box.userData.part = 'sternum'; st.add(box);
    }
    nm['sternum.top'] = sc[0].clone().add(v(0, 1.8, -0.6));
    // skull
    const c1 = vs[vs.length - 1];
    const skullC = c1.p.clone().add(v(0, 8.0, -0.8));
    const skull = new Mesh(new THREE.SphereGeometry(1, 28, 20), mR); skull.scale.set(7.2, 8.0, 9.0); skull.position.copy(skullC); sk.add(skull);
    const jaw = new Mesh(new THREE.SphereGeometry(1, 20, 14), mB); jaw.scale.set(5.2, 3.6, 5.6); jaw.position.copy(skullC).add(v(0, -6.0, -3.4)); sk.add(jaw);
    const nose = new Mesh(new THREE.ConeGeometry(1.1, 2.6, 8), mB); nose.rotation.x = -Math.PI / 2; nose.position.copy(skullC).add(v(0, -1.6, -9.4)); sk.add(nose);
    nm['skull'] = skullC;
    nm['ear'] = skullC.clone().add(v(7.0, -1.8, 0.8));
    nm['occiput'] = skullC.clone().add(v(0, -3.5, 8.2));
    nm['occiput.R'] = skullC.clone().add(v(3.0, -3.8, 7.6));
    nm['mastoid.R'] = skullC.clone().add(v(5.2, -5.0, 3.8));
    nm['mastoid.L'] = skullC.clone().add(v(-5.2, -5.0, 3.8));
    // left clavicle sternal side helper
    nm['sc.R'] = sc[0].clone().add(v(2.2, 1.6, 0.0)).add(v(0, 0, 0.4));
    nm['sc.L'] = sc[0].clone().add(v(-2.2, 1.6, 0.0)).add(v(0, 0, 0.4));
    this._thxVis = this._thxVis || {};
    Object.keys(this.thorax.sub).forEach(k => { if (this._thxVis[k] === false) this.thorax.sub[k].visible = false; });
    if (this._cartVis === false) cg.visible = false;
  }

  /* ----- pose ----- */
  setPose(p) { Object.assign(this.pose, p); this._dirty = true; }
  update(force) {
    const P = this.pose;
    const needThx = force || P.kyph !== this._lk || P.fwd !== this._lf;
    if (needThx) { this.buildThorax(); this._lk = P.kyph; this._lf = P.fwd; }

    // elevation dependent scapular contribution
    let up = P.scapUp, tilt = P.scapTilt, ir = P.scapIR;
    if (P.rhythm && P.scapAuto) {
      const e = Math.max(0, P.elev - 30);
      up = P.scapUp + e * 0.4 * P.gain;
      tilt = P.scapTilt + P.elev * 0.13;           // posterior tilt with elevation
      ir = P.scapIR - P.elev * 0.09;               // external rotation of the scapula
    }
    this._scapUpEff = up;

    // scapula anchor on the rib cage (level 4.5, protraction moves it round the chest wall)
    const th = (50 + P.prot * 20) * RAD;
    const ring = this._ring(4.5, th);
    const anchor = ring.p.clone().add(ring.n.clone().multiplyScalar(1.9));
    anchor.y += P.shrug;
    this.scapAnchor.position.copy(anchor);
    this.scapAnchor.rotation.set(0, (36 + P.prot * 24) * RAD, 0);
    this.scapRot.rotation.set((tilt - 8) * RAD, ir * RAD, up * RAD, 'XYZ');

    if (this.leftAnchor) {
      const la = this._ring(4.5, 50 * RAD, 1);
      this.leftAnchor.position.copy(la.p.clone().add(la.n.clone().multiplyScalar(1.9)));
      this.leftAnchor.rotation.set(0, 36 * RAD, 0);
      this.leftRot.rotation.set(-8 * RAD, 0, 0);
      const ql = new THREE.Quaternion().setFromEuler(new THREE.Euler(-8 * RAD, 36 * RAD, 0, 'YXZ'));
      this.leftHumRoot.quaternion.copy(ql.invert());
      const ho = v(-2.0 * Math.cos(30 * RAD), 4.2, 2.0 * Math.sin(30 * RAD));
      const lu = this.leftHum.userData;
      this.leftHum.position.copy(ho).multiplyScalar(-1);
      lu.head.position.copy(ho); lu.head.rotation.y = 30 * RAD;
      lu.neck.position.copy(ho).multiplyScalar(0.5); lu.neck.scale.set(1, ho.length(), 1);
      lu.neck.quaternion.setFromUnitVectors(AY, ho.clone().normalize());
      lu.fore.rotation.x = 90 * RAD; lu.fpron.rotation.y = 90 * RAD;
      this.leftWrap.updateMatrixWorld(true);
    }

    this.scapAnchor.updateMatrixWorld(true);

    // humerothoracic orientation
    const phi = P.plane * RAD, th2 = P.elev * RAD;
    const u = v(Math.cos(phi), 0, -Math.sin(phi));
    const axis = v(-u.z, 0, u.x);
    const q1 = new THREE.Quaternion().setFromAxisAngle(axis, th2);
    const qa = new THREE.Quaternion().setFromAxisAngle(AY, -P.er * RAD);
    const qW = q1.multiply(qa);
    const qS = new THREE.Quaternion(); this.scapContent.getWorldQuaternion(qS);
    this.humRoot.quaternion.copy(qS.invert().multiply(qW));
    // retroversion: head frame rotates about the shaft, shaft is displaced so head centre stays put
    const d = P.retro * RAD;
    const ho = v(-2.0 * Math.cos(d), 4.2, 2.0 * Math.sin(d));
    this.shaft.position.copy(ho).multiplyScalar(-1);
    this.hdata.head.position.copy(ho); this.hdata.head.rotation.y = d;
    this.hdata.neck.position.copy(ho).multiplyScalar(0.5);
    this.hdata.neck.scale.set(1, ho.length(), 1);
    this.hdata.neck.quaternion.setFromUnitVectors(AY, ho.clone().normalize());
    this.hdata.fore.rotation.x = P.elbow * RAD;
    this.hdata.fpron.rotation.y = P.pron * RAD;
    this.humRoot.updateMatrixWorld(true);

    this._updateClavicle();
    this._updateSoft();
    this._updateMuscles();
    this._dirty = false;
  }

  _updateClavicle() {
    const mk = (S, A, flip = 1) => {
      const dir = A.clone().sub(S);
      const bow = (t, a, b) => S.clone().addScaledVector(dir, t).add(v(0, a * 0.3, b));
      const c = new THREE.CatmullRomCurve3([S, bow(0.22, 0.4, -1.1), bow(0.52, 0.9, -1.0), bow(0.82, 0.5, 0.5), A], false, 'centripetal');
      return c;
    };
    const S = this.tpt('sc.R'), A = this.pt(['S', 1.6, 4.55, -1.6]);
    this.clavCurve = mk(S, A);
    this.clavMesh.geometry.dispose();
    this.clavMesh.geometry = new THREE.TubeGeometry(this.clavCurve, 26, 0.72, 8);
    if (this.leftClav) {
      const Sl = this.tpt('sc.L');
      const Al = this.leftContent.localToWorld(v(1.6, 4.55, -1.6));
      this.leftClav.geometry.dispose();
      this.leftClav.geometry = new THREE.TubeGeometry(mk(Sl, Al), 26, 0.72, 8);
    }
  }

  _updateSoft() {
    const hc = this.humRoot.getWorldPosition(v(0, 0, 0));
    this.capsule.position.copy(hc);
    const b = this.pt(['S', 1.6, 3.0, -0.3]);
    this.bursa.position.copy(b);
    this.scapContent.getWorldQuaternion(this.bursa.quaternion);
    this.bursa.position.copy(this.pt(['S', 1.4, 2.9, 0.0]));
    Object.values(this.ligs).forEach(l => {
      const pts = l.def.pts.map(s => this.pt(s));
      const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
      l.mesh.geometry.dispose();
      l.mesh.geometry = new THREE.TubeGeometry(curve, 10, l.def.r, 6);
    });
  }

  /* ----- muscles ----- */
  _fan(origins, via, ins, opt = {}) {
    // origins: list of specs, via: list of specs shared (may be []), ins: spec or list parallel to origins
    return origins.map((o, i) => ({ pts: [o, ...via, Array.isArray(ins[0]) ? ins[i % ins.length] : ins], td: opt.td || [[0.84, 1]] }));
  }
  _buildMuscleDefs() {
    const S = (x, y, z) => ['S', x, y, z], H = (x, y, z) => ['H', x, y, z], Rr = (x, y, z) => ['R', x, y, z], T = n => ['T', n];
    const C = (t, o = 0) => ['C', t, o];
    const defs = [];
    const add = (id, name, layer, color, r, fibers, info = {}) => defs.push({ id, name, layer, color, r, fibers, info });
    // --- rotator cuff (layer 3)
    add('supraspinatus', 'Supraspinatus', 3, COL.cuff, 0.42, this._fan(
      [S(-9.2, 5.3, 0.9), S(-7.6, 4.3, 1.0), S(-6.0, 3.9, 1.0), S(-4.5, 3.8, 0.9)],
      [S(-2.0, 2.6, 0.7), Rr(-0.9, 2.9, 0.1), Rr(1.4, 2.7, 0.0)], H(1.3, 5.4, 0.1), { td: [[0.72, 1]] }));
    add('infraspinatus', 'Infraspinatus', 3, COL.cuff, 0.42, this._fan(
      [S(-9.0, 0.2, 0.9), S(-8.4, -3.0, 0.9), S(-7.0, -6.0, 0.9), S(-4.8, -1.8, 0.9)],
      [S(-1.0, 0.4, 1.9), Rr(1.2, 0.4, 2.8)], H(1.9, 4.3, 0.9), { td: [[0.78, 1]] }));
    add('teres-minor', 'Teres minor', 3, COL.cuff, 0.4, this._fan(
      [S(-4.0, -5.0, 0.9), S(-5.4, -7.4, 0.9)],
      [S(0.2, -2.6, 1.8), Rr(1.6, -1.2, 2.6)], H(1.9, 3.0, 1.0), { td: [[0.82, 1]] }));
    add('subscapularis', 'Subscapularis', 3, COL.cuff, 0.45, this._fan(
      [S(-9.0, 3.0, -0.9), S(-9.3, -1.0, -0.9), S(-8.4, -5.5, -0.9), S(-5.6, -6.0, -0.9), S(-4.2, -2.5, -0.9), S(-6.0, 1.0, -0.9)],
      [S(-0.2, 0.3, -2.3), Rr(0.7, 0.6, -3.0)], H(0.2, 3.7, -2.6), { td: [[0.8, 1]] }));
    // --- superficial (layer 1)
    add('deltoid-ant', 'Deltoid · anterior', 1, COL.sup, 0.7, [0.62, 0.72, 0.82].map(t => ({ pts: [C(t, 0.4), Rr(4.9, 1.2, -3.2), H(1.7, -13, -0.5)], td: [[0.9, 1]] })));
    add('deltoid-mid', 'Deltoid · middle', 1, COL.sup, 0.85, [S(4.8, 3.9, -2.2), S(4.8, 3.7, -0.5), S(3.8, 3.6, 0.9)].map(o => ({ pts: [o, Rr(5.6, 1.0, 0.0), H(1.9, -13, 0)], td: [[0.9, 1]] })));
    add('deltoid-post', 'Deltoid · posterior', 1, COL.sup, 0.7, [S(-6.0, 2.5, 1.9), S(-4.3, 3.0, 1.9), S(-2.6, 3.3, 1.8)].map(o => ({ pts: [o, Rr(5.0, 1.0, 3.6), H(1.6, -13, 0.6)], td: [[0.9, 1]] })));
    add('trapezius-upper', 'Trapezius · upper', 1, COL.sup, 0.5, [T('occiput.R'), T('spinous.C4'), T('spinous.C6')].map((o, i) => ({ pts: [o, C(0.78 + i * 0.07, 1.0)], td: [[0.88, 1]] })));
    add('trapezius-mid', 'Trapezius · middle', 1, COL.sup, 0.45, ['T1', 'T2', 'T3', 'T4'].map((t, i) => ({ pts: [T('spinous.' + t), S(3.6 - i * 2.0, 3.4, 1.9)], td: [[0.85, 1]] })));
    add('trapezius-lower', 'Trapezius · lower', 1, COL.sup, 0.45, ['T6', 'T8', 'T10', 'T12'].map((t, i) => ({ pts: [T('spinous.' + t), S(-9.9, 1.0, 1.0)], td: [[0.82, 1]] })));
    add('latissimus', 'Latissimus dorsi', 1, COL.sup, 0.5, [T('spinous.T7'), T('spinous.T9'), T('spinous.T11'), T('spinous.L2'), T('iliac.R')].map(o => ({ pts: [o, S(-6.2, -9.8, 1.5), ['R', 1.5, -6.0, 3.4], H(0.3, -6.5, -1.5)], td: [[0.9, 1]] })));
    add('pec-major-clav', 'Pec major · clavicular', 1, COL.sup, 0.55, [0.18, 0.3, 0.42].map(t => ({ pts: [C(t, -0.4), Rr(3.4, -2.5, -4.2), H(1.0, -6.0, -1.5)], td: [[0.88, 1]] })));
    add('pec-major-stern', 'Pec major · sternocostal', 1, COL.sup, 0.55, [2, 3, 4, 5, 6].map(i => ({ pts: [T('sternum.' + i), ['R', 4.0, -4.5 - i * 0.2, -5.6], H(1.0, -6.0, -1.5)], td: [[0.9, 1]] })));
    // --- intermediate (layer 2)
    add('rhomboids', 'Rhomboids', 2, COL.mid, 0.4, [['spinous.C7', -10.2, 1.7], ['spinous.T1', -10.1, 0.5], ['spinous.T2', -9.9, -1.2], ['spinous.T3', -9.6, -3.2], ['spinous.T4', -9.2, -5.2]].map(([n, x, y]) => ({ pts: [T(n), S(x, y, 0.55)], td: [[0.9, 1]] })));
    add('levator', 'Levator scapulae', 2, COL.mid, 0.42, [T('tp.R.C2'), T('tp.R.C4'), T('tp.R.C5')].map((o, i) => ({ pts: [o, S(-8.6 - i * 0.4, 6.6 - i * 1.6, 0.5)], td: [[0.9, 1]] })));
    add('serratus', 'Serratus anterior', 2, COL.mid, 0.45, [
      ['rib2.lat', S(-8.4, 6.2, -0.7)], ['rib3.lat', S(-9.6, 3.4, -0.7)], ['rib4.lat', S(-9.9, 0.6, -0.7)], ['rib5.lat', S(-9.4, -3.0, -0.7)],
      ['rib6.lat', S(-8.3, -6.3, -0.7)], ['rib7.lat', S(-7.2, -8.8, -0.7)]].map(([r, s]) => ({ pts: [T(r), s], td: [[0.94, 1]] })));
    add('pec-minor', 'Pec minor', 2, COL.mid, 0.5, [3, 4, 5].map(i => ({ pts: [T('rib' + i + '.ant'), S(3.5, 1.3, -5.3)], td: [[0.86, 1]] })));
    add('teres-major', 'Teres major', 2, COL.mid, 0.5, [S(-7.5, -8.6, 0.9), S(-6.7, -7.6, 0.9)].map(o => ({ pts: [o, H(0.3, -3.2, 2.0), H(0.1, -6.8, -1.4)], td: [[0.88, 1]] })));
    add('biceps-lh', 'Biceps · long head', 2, COL.arm, 0.55, [{ pts: [S(0.3, 1.7, -0.3), Rr(0.9, 2.7, -0.5), H(0.8, 3.7, -1.55), H(0.75, -5.0, -1.7), H(0.2, -18, -1.9), H(0.0, -27, -1.9), ['F', 0.3, -2.8, -0.3]], td: [[0, 0.25], [0.93, 1]] }]);
    add('biceps-sh', 'Biceps · short head', 2, COL.arm, 0.5, [{ pts: [S(3.5, 1.4, -5.3), H(0.3, -7.0, -2.4), H(0.1, -18, -2.2), H(0.0, -27, -1.9), ['F', 0.3, -2.8, -0.3]], td: [[0, 0.1], [0.93, 1]] }]);
    add('triceps-lh', 'Triceps · long head', 2, COL.arm, 0.62, [{ pts: [S(0.2, -3.1, 0.8), H(0.4, -5.0, 1.9), H(0.1, -18, 1.9), H(0, -28.5, 1.6)], td: [[0, 0.06], [0.93, 1]] }]);

    this.muscleDefs = defs;
    defs.forEach(d => {
      const grp = new Group(); grp.userData.muscle = d.id;
      const bm = mat(d.color, { roughness: 0.55, transparent: true, opacity: 1, emissive: 0x000000 });
      const tm = mat(COL.tend, { roughness: 0.5, transparent: true, opacity: 1, emissive: 0x000000 });
      this.cats.muscles.add(grp);
      this.muscles[d.id] = { def: d, group: grp, belly: bm, tendon: tm, visible: true, baseColor: d.color, opacity: 1, glow: 0 };
    });
  }

  _updateMuscles() {
    for (const m of Object.values(this.muscles)) {
      if (!m.visible && !m.forceBuild) { m.group.visible = false; continue; }
      m.group.visible = true;
      disposeChildren(m.group);
      m.def.fibers.forEach(f => {
        const pts = f.pts.map(s => this.pt(s));
        if (pts.length < 2) return;
        const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
        const N = 32;
        const samples = Array.from({ length: N + 1 }, (_, i) => curve.getPointAt(i / N));
        const inTd = (u) => (f.td || []).some(([a, b]) => u >= a && u <= b);
        let run = [], cur = null;
        const flush = (td) => {
          if (run.length > 1) {
            const geo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(run), Math.max(4, run.length), td ? m.def.r * 0.5 : m.def.r, 6);
            const me = new Mesh(geo, td ? m.tendon : m.belly);
            me.userData.muscle = m.def.id; m.group.add(me);
          }
        };
        samples.forEach((p, i) => {
          const td = inTd(i / N);
          if (cur === null) cur = td;
          if (td !== cur) { run.push(p); flush(cur); run = [p]; cur = td; }
          else run.push(p);
        });
        flush(cur);
      });
    }
    this._applyStyles();
  }

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
    m.group.visible = m.visible;
    this._applyStyles();
  }
  muscleIds(layerOrGroup) {
    return this.muscleDefs.filter(d => d.layer === layerOrGroup).map(d => d.id);
  }
  resetMuscles() {
    for (const m of Object.values(this.muscles)) { m.visible = true; m.baseColor = m.def.color; m.opacity = 1; m.glow = 0; }
  }
  setLig(id, st) {
    const l = this.ligs[id]; if (!l) return;
    if (st.color !== undefined) l.mat.color.setHex(st.color);
    if (st.glow !== undefined) l.mat.emissive.setHex(l.mat.color.getHex()).multiplyScalar(st.glow);
    if (st.visible !== undefined) l.mesh.visible = st.visible;
    if (st.scale !== undefined) l.mesh.scale.setScalar(1);
  }
  resetLigs() { Object.values(this.ligs).forEach(l => { l.mat.color.setHex(COL.lig); l.mat.emissive.setHex(0); l.mesh.visible = true; }); }

  show(cat, on) {
    switch (cat) {
      case 'scapula': this.scapMesh.visible = on; if (this.leftScap) this.leftScap.visible = on; break;
      case 'clavicle': this.clavMesh.visible = on; if (this.leftClav) this.leftClav.visible = on; break;
      case 'humerus': this.shaft.visible = on; if (this.leftHum) this.leftHum.visible = on; break;
      case 'forearm': this.hdata.fpron.visible = on; break;
      case 'cartilage': {
        const hs = [this.scapMesh.userData.cartilage, [this.hdata.head.children[1]], this.thorax.sub.costal ? [this.thorax.sub.costal] : []].flat();
        hs.forEach(o => { o.visible = on; });
        this._cartVis = on; break;
      }
      default: if (this.cats[cat]) this.cats[cat].visible = on;
    }
  }
  setBoneOpacity(a) {
    [this.mats.bone, this.mats.boneDark].forEach(m => { m.transparent = a < 1; m.opacity = a; m.depthWrite = a > 0.6; });
  }
  showThorax(part, on) { this._thxVis = this._thxVis || {}; this._thxVis[part] = on; const g = this.thorax.sub[part]; if (g) g.visible = on; }
  dispose() { this.root.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }

  // acromiohumeral clearance: GT top vs acromion underside (cm)
  clearance() {
    const gt = [this.pt(['H', 1.3, 5.6, 0.1]), this.pt(['H', 1.2, 5.0, -0.8]), this.pt(['H', 1.8, 4.8, 0.9])];
    const ac = [['S', 1.0, 3.0, -0.8], ['S', 2.8, 3.0, -1.0], ['S', 4.2, 3.0, -2.0], ['S', 0.0, 3.0, 0.8], ['S', 3.0, 3.0, 0.2]].map(s => this.pt(s));
    let m = 99;
    gt.forEach(a => ac.forEach(b => { m = Math.min(m, a.distanceTo(b)); }));
    return m;
  }
  glenohumeralElev() { return this.pose.elev - this._scapUpEff; }
  scapularUp() { return this._scapUpEff; }
}
