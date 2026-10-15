// Steps 1 to 5
import * as THREE from 'three';
import { COL } from './rig.js?v=3';
import { VIEWS } from './viewer.js?v=3';
import { $, h, POSE0, PART_NAMES, slider, toggle, btnGroup, tabs, listPicker, card, kv, Overlay, mountStage, stageTools, stageHint, stageReadout, tooltip, tweenPose } from './core.js?v=3';

export const hex = c => '#' + c.toString(16).padStart(6, '0');

export function baseline(v, o = {}) {
  const r = v.rig;
  r.setPose({ ...POSE0, ...(o.pose || {}) });
  r.resetMuscles(); r.resetLigs();
  r.show('muscles', !!o.muscles); r.show('ligaments', !!o.lig); r.show('soft', !!o.soft);
  r.show('left', o.left !== false); r.show('clavicle', true); r.show('scapula', true); r.show('humerus', true);
  r.show('thorax', o.thorax !== false); r.show('cartilage', o.cart !== false);
  r.setBoneOpacity(o.bone ?? 1);
  r.update();
  v.invalidate();
}
export function hoverTips(v, tip) {
  v.onHover = (info) => {
    if (!info) { tip.style.display = 'none'; return; }
    let t = '';
    if (info.type === 'muscle') t = v.rig.muscles[info.id].def.name;
    else if (info.type === 'lig') t = v.rig.ligs[info.id].def.name;
    else t = PART_NAMES[info.id] || info.id;
    tip.textContent = t; tip.style.display = '';
  };
}
export function viewBtns(v, host) {
  const items = [['post', 'Back'], ['ant', 'Front'], ['lat', 'Side'], ['sup', 'Top'], ['obl', '3/4']];
  return items.map(([k, t]) => h('button', { class: 'btn ghost sm', type: 'button', onclick: () => v.setView(k) }, t));
}

/* ======================= STEP 1 · BONES ======================= */
const LM = {
  Scapula: [
    ['Acromion', ['S', 4.4, 4.4, -1.2], 'The flat roof over the joint, continuous with the spine of the scapula.', 'Forms the top of the subacromial space. Its shape and tilt change how much room the cuff has.'],
    ['Coracoid process', ['S', 3.6, 1.4, -5.3], 'Hook-shaped projection from the front of the scapula.', 'Anchors pec minor, short head of biceps, coracobrachialis, and the coracoclavicular ligaments. Tight pec minor pulls the scapula forward and down from here.'],
    ['Glenoid fossa', ['S', 0.6, -0.5, -0.1], 'Shallow, pear-shaped socket that faces forward and slightly up and out.', 'Roughly a third the size of the humeral head. The labrum deepens it. Its orientation sets where the arm "wants" to sit.'],
    ['Spine of scapula', ['S', -6, 2.4, 1.5], 'Bony ridge across the back of the blade that ends as the acromion.', 'Separates the supraspinous and infraspinous fossae. Trapezius and deltoid both attach along it.'],
    ['Supraspinous fossa', ['S', -7, 4.6, 0.9], 'Shallow trough above the spine.', 'Origin of supraspinatus. Its tendon is squeezed under the acromion.'],
    ['Infraspinous fossa', ['S', -7, -3, 0.9], 'Large surface below the spine.', 'Origin of infraspinatus. Also the surface teres minor and teres major run over.'],
    ['Subscapular fossa', ['S', -6, -1, -0.8], 'The anterior (rib side) face of the blade.', 'Origin of subscapularis. This is where the scapula glides on the ribs, so rib and scapula position change what it can do.'],
    ['Superior angle', ['S', -8.4, 6.9, 0.2], 'Upper medial corner of the scapula, level with about T2.', 'Levator scapulae inserts here. A stiff, over-active levator drags it up.'],
    ['Inferior angle', ['S', -7.1, -9.5, 0.2], 'Lower tip of the blade, level with about T7.', 'The landmark you watch for winging and tipping. Serratus anterior and lower trapezius control it.'],
    ['Medial border', ['S', -9.6, -3.5, 0.2], 'Edge nearest the spine. Rhomboids and serratus attach along it.', 'When it lifts off the ribs you are seeing scapular internal rotation or winging.'],
    ['Lateral border', ['S', -3.8, -7, 0.2], 'Thick edge pointing toward the armpit.', 'Teres minor and teres major arise here.'],
    ['Suprascapular notch', ['S', -3.0, 3.7, 0.0], 'Small notch on the superior border, bridged by a ligament.', 'The suprascapular nerve runs under the ligament to supply supraspinatus and infraspinatus. A pinch point in overhead athletes.'],
  ],
  Clavicle: [
    ['Sternal end', ['C', 0.03, 0], 'The only bony connection between the arm and the trunk (the SC joint).', 'Every bit of shoulder girdle motion pivots through this small joint.'],
    ['Clavicle shaft', ['C', 0.5, 0], 'S-shaped strut. Convex forward in the medial two-thirds, concave in the lateral third.', 'Acts as a crank. The clavicle rotates back around its long axis as the arm goes overhead.'],
    ['Acromial end', ['C', 0.97, 0], 'Meets the acromion at the AC joint.', 'Held down by the coracoclavicular ligaments. AC sprains and separations happen here.'],
  ],
  Humerus: [
    ['Humeral head', ['R', -2.3, 1.2, 0.4], 'Rounded articular surface, about a half sphere, facing up, in, and back.', 'Rotated back (retroverted) about 30° relative to the elbow on average. Throwers build extra over time.'],
    ['Greater tubercle', ['H', 2.4, 4.2, 0.3], 'Lateral bump just below the head.', 'Three cuff tendons insert here: supraspinatus, infraspinatus, teres minor. It is also the part that meets the acromion in impingement.'],
    ['Lesser tubercle', ['H', 0.2, 3.8, -2.9], 'Smaller anterior bump.', 'Subscapularis inserts here.'],
    ['Bicipital groove', ['H', 0.8, -1.0, -1.6], 'Channel between the tubercles that guides the long head of biceps.', 'The tendon runs here under the transverse humeral ligament. Pec major, lat, and teres major insert along its lips.'],
    ['Deltoid tuberosity', ['H', 1.9, -13, 0], 'Roughened patch halfway down the lateral shaft.', 'The deltoid attaches here and pulls the humerus up and out.'],
    ['Lateral epicondyle', ['H', 3.3, -29.2, 0.1], 'Outside of the elbow end.', 'Reference for measuring how far the head is rotated back (retroversion) relative to the elbow.'],
  ],
  Thorax: [
    ['Sternum / manubrium', ['T', 'sternum.top'], 'Breastbone. Anchor for the SC joint and pec major.', 'Ribs 1 to 7 reach it through costal cartilage.'],
    ['Ribs', ['T', 'rib4.lat'], 'Twelve pairs. Ribs 2 to 7 sit under the scapula.', 'The scapula glides across them. Rib cage shape and position change scapular rest position.'],
    ['Thoracic spine', ['T', 'spinous.T6'], 'Twelve vertebrae with a natural forward-flexed (kyphotic) curve.', 'Needs extension and rotation for the scapula to tilt and rotate up. A stiff T-spine makes the shoulder do more.'],
    ['C7 spinous process', ['T', 'spinous.C7'], 'The prominent bump at the base of the neck.', 'Upper trapezius, levator, and rhomboid minor attach nearby. Handy palpation landmark.'],
  ],
};
const JOINTS = {
  GH: { name: 'Glenohumeral (GH)', spec: ['R', 0, 0, 0], text: 'Ball-and-socket. Three rotational degrees of freedom and almost no bony restraint, which is why it moves so much and gives so easily.' },
  AC: { name: 'Acromioclavicular (AC)', spec: ['S', 1.6, 4.5, -1.6], text: 'Small plane joint between acromion and clavicle. Lets the scapula rotate under the clavicle. Strong ligament support from the CC ligaments.' },
  SC: { name: 'Sternoclavicular (SC)', spec: ['T', 'sc.R'], text: 'The only true bony attachment of the arm to the trunk. Has a disc, and moves in elevation, protraction, and axial rotation.' },
  ST: { name: 'Scapulothoracic (ST)', spec: ['S', -5, -1.5, -0.8], text: 'Not a true joint. The scapula glides on the rib cage between serratus anterior and subscapularis. Muscle controls it, not ligaments.' },
};

export function step1(host, panel) {
  const st = { group: 'Scapula', pick: null, jt: null };
  let V = null, ov = null;
  const tip = tooltip(host);
  const readout = stageReadout(host); readout.style.display = 'none';
  const tools = stageTools(host);
  stageHint(host, 'Drag to rotate · scroll to zoom · click bone to name');

  const detail = card();
  const groups = tabs(Object.keys(LM).map(k => ({ id: k, label: k })), g => { st.group = g; renderList(); }, 'Scapula');
  const listBox = h('div');
  const jt = h('div', { class: 'btns' });
  Object.entries(JOINTS).forEach(([k, j]) => jt.append(h('button', { class: 'btn sm', type: 'button', onclick: () => showJoint(k) }, k)));
  const bonesTog = ['scapula', 'clavicle', 'humerus', 'thorax'].map(k => toggle(k[0].toUpperCase() + k.slice(1), true, on => { V && (k === 'thorax' ? V.rig.show('thorax', on) : V.rig.show(k, on)); V && V.invalidate(); }));
  const leftTog = toggle('Left side', true, on => { V && V.rig.show('left', on); V && V.invalidate(); });

  panel.append(
    card(h('span', { class: 'label' }, 'Landmarks'), groups.el, listBox),
    card(h('span', { class: 'label' }, 'The four joints'), jt),
    detail,
    card(h('span', { class: 'label' }, 'Show / hide'), h('div', { class: 'btns' }, ...bonesTog.map(t => t.el), leftTog.el)),
  );

  function mark(spec, name, cls = '') {
    ov.clear();
    ov.marker(spec, { color: 0xe5534b, r: 1.0, text: name, cls });
    V.focusWorld(V.rig.pt(spec), 52, 700);
  }
  function showLm(i) {
    const [name, spec, what, why] = LM[st.group][i];
    st.pick = i;
    detail.replaceChildren(h('span', { class: 'label red' }, st.group), h('h3', null, name), kv([['What', what], ['Why it matters', why]]));
    if (V) mark(spec, name);
    renderList();
  }
  function showJoint(k) {
    const j = JOINTS[k];
    detail.replaceChildren(h('span', { class: 'label red' }, 'Joint'), h('h3', null, j.name), h('p', null, j.text));
    if (V) mark(j.spec, k, 'lime');
  }
  function renderList() {
    listBox.replaceChildren(h('div', { class: 'list' }, ...LM[st.group].map((l, i) => h('button', { class: 'item' + (st.pick === i && false ? ' on' : ''), type: 'button', onclick: () => showLm(i) }, h('span', { class: 'sw-c' }), h('span', null, l[0])))));
  }
  renderList();
  detail.append(h('p', null, 'Pick a landmark from the list, or click a bone in the model.'));

  const m = mountStage(host, {
    view: 'post',
    attach(v) {
      V = v; ov = new Overlay(v);
      baseline(v, { muscles: false, lig: false });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.onPick = info => {
        if (!info) return;
        if (info.type === 'part') {
          const nm = PART_NAMES[info.id] || info.id;
          ov.clear(); ov.marker(() => info.point.clone(), { color: 0xe5534b, r: 0.8, text: nm });
          detail.replaceChildren(h('span', { class: 'label red' }, 'Clicked'), h('h3', null, nm), h('p', null, 'Use the landmark list for what it is and why it matters.'));
        }
      };
      v.setView('post', 0);
    },
    detach() { V = null; ov = null; },
  });
  tools.append(...[]);
}

/* ======================= STEP 2 · MOTION ======================= */
const THROW = [
  { n: 'Early cocking', p: { elev: 85, plane: -10, er: 55, elbow: 95, pron: 90 }, ms: 1100 },
  { n: 'Late cocking · max layback', p: { elev: 90, plane: -20, er: 165, elbow: 100, pron: 90 }, ms: 1000 },
  { n: 'Acceleration', p: { elev: 95, plane: 5, er: 120, elbow: 80, pron: 110 }, ms: 500 },
  { n: 'Release', p: { elev: 100, plane: 25, er: 85, elbow: 25, pron: 150 }, ms: 500 },
  { n: 'Deceleration / follow-through', p: { elev: 55, plane: 100, er: -35, elbow: 20, pron: 180 }, ms: 1300 },
];
export function step2(host, panel) {
  let V = null;
  const tip = tooltip(host);
  const ro = stageReadout(host);
  const tools = stageTools(host);
  stageHint(host, 'Move the sliders · drag to rotate');
  const S = {};
  const sl = {
    elev: slider({ label: 'Elevation', min: 0, max: 180, value: 0, ends: ['Arm at side', 'Overhead'], onInput: v => set({ elev: v }) }),
    plane: slider({ label: 'Plane of elevation', min: -40, max: 140, value: 40, ends: ['Behind (horiz abd)', 'In front (horiz add)'], onInput: v => set({ plane: v }) }),
    er: slider({ label: 'Humeral rotation', min: -80, max: 170, value: 0, ends: ['Internal', 'External'], onInput: v => set({ er: v }) }),
    elbow: slider({ label: 'Elbow flexion', min: 0, max: 140, value: 90, onInput: v => set({ elbow: v }) }),
  };
  const rhythm = toggle('Scapulohumeral rhythm on', true, on => { set({ rhythm: on }); });
  const presets = btnGroup([
    { id: 'rest', label: 'At side' }, { id: 'abd', label: 'Abduction 90' }, { id: 'scap', label: 'Scaption 120' }, { id: 'flex', label: 'Flexion 90' }, { id: 'over', label: 'Overhead 180' },
  ], id => {
    const P = {
      rest: { elev: 0, plane: 40, er: 0 }, abd: { elev: 90, plane: 0, er: 40 }, scap: { elev: 120, plane: 40, er: 30 }, flex: { elev: 90, plane: 90, er: 0 }, over: { elev: 180, plane: 40, er: 40 },
    }[id];
    anim(P);
  });
  const throwBtn = h('button', { class: 'btn', type: 'button' }, '▶ Play throw');
  const phase = h('div', { class: 'label' }, 'Throwing phase: ready');
  const jnote = card(h('span', { class: 'label' }, 'Roll and glide'), kv([
    ['Abduction', 'Head rolls up, glides down'],
    ['ER (layback)', 'Head spins and glides forward. The anterior capsule and subscapularis take the load.'],
    ['IR (acceleration)', 'Head spins and glides back'],
  ]));
  panel.append(
    card(h('span', { class: 'label' }, 'Position'), presets.el, sl.elev.el, sl.plane.el, sl.er.el, sl.elbow.el, rhythm.el),
    card(h('span', { class: 'label' }, 'Throwing arm'), h('p', null, 'Slow-motion of the arm path through a throw. The scapula and trunk contributions are modelled; trunk motion is not shown.'), throwBtn, phase),
    jnote,
    card(h('span', { class: 'label' }, 'Typical ranges'), kv([
      ['Flexion / abduction', '~180°'], ['Extension', '~50–60°'], ['ER at side', '~60–90°'], ['IR at side', '~70°'],
      ['Scapula, full elevation', '~50–60° up, ~20–30° back tilt, ~15–20° ER'],
      ['Clavicle, full elevation', '~30–35° elevation, ~40–50° back rotation'],
    ])),
  );

  function set(p) { S.p = { ...S.p, ...p }; if (V) { V.rig.setPose(p); readout(); } }
  function sync(p) { ['elev', 'plane', 'er', 'elbow'].forEach(k => { if (p[k] !== undefined) sl[k].set(Math.round(p[k]), true); }); }
  function anim(P) { if (!V) return; tweenPose(V, P, 800, p => { sync(p); readout(); }); }
  function readout() {
    const r = V.rig, e = r.pose.elev;
    const gh = r.glenohumeralElev(), st = r.scapularUp();
    const gap = r.clearance() * 10;
    ro.innerHTML = `<b>${Math.round(e)}°</b> total = <b style="color:var(--cool)">${Math.round(Math.max(0, gh))}°</b> GH + <b style="color:var(--lime)">${Math.round(st)}°</b> scapula<br><span class="muted">Subacromial clearance (model): <b style="color:${gap < 5 ? 'var(--red)' : 'var(--text)'};font-size:18px">${gap.toFixed(0)} mm</b></span>`;
  }

  throwBtn.addEventListener('click', () => {
    if (!V) return;
    let i = 0;
    const reset = { elev: 30, plane: 0, er: 0, elbow: 90, pron: 90 };
    const next = () => {
      if (i >= THROW.length) { phase.textContent = 'Throwing phase: done'; return; }
      const s = THROW[i++]; phase.textContent = 'Throwing phase: ' + s.n;
      tweenPose(V, s.p, s.ms, p => { sync(p); readout(); }, next);
    };
    tweenPose(V, reset, 500, p => { sync(p); readout(); }, next);
  });

  mountStage(host, {
    view: 'obl',
    attach(v) {
      V = v;
      baseline(v, { muscles: false, lig: false, left: false, thorax: true, pose: S.p || {} });
      v.rig.setPose({ ...(S.p || {}), rhythm: rhythm.get() });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.onPick = null;
      readout();
    },
    detach() { V = null; },
  });
}

/* ======================= STEP 3 · ROTATOR CUFF ======================= */
const CUFF = {
  supraspinatus: {
    name: 'Supraspinatus', origin: 'Supraspinous fossa of the scapula', ins: 'Superior facet of the greater tubercle', nerve: 'Suprascapular (C5–C6)',
    action: 'Assists abduction, compresses and centers the head in the first part of elevation',
    throw: 'Holds the head centered at the top of the arm path and helps resist distraction and upward translation.',
    note: 'The tendon passes under the acromion, and the area about 1 cm from its insertion is the least vascular part of the cuff.',
    act: { elev: 70, plane: 40, er: 0 },
  },
  infraspinatus: {
    name: 'Infraspinatus', origin: 'Infraspinous fossa of the scapula', ins: 'Middle facet of the greater tubercle', nerve: 'Suprascapular (C5–C6)',
    action: 'External rotation (strongest at the side), posterior stability',
    throw: 'The workhorse of deceleration. It generates braking force against internal rotation immediately after release.',
    note: 'Largest posterior cuff muscle. Shares its nerve with supraspinatus, so a suprascapular nerve problem can dim both.',
    act: { elev: 0, plane: 40, er: 70, elbow: 90 },
  },
  'teres-minor': {
    name: 'Teres minor', origin: 'Upper two-thirds of the lateral border of the scapula (back)', ins: 'Inferior facet of the greater tubercle', nerve: 'Axillary (C5–C6)',
    action: 'External rotation, helps pull the head down and back',
    throw: 'Works with infraspinatus to brake internal rotation and resist posterior-superior translation.',
    note: 'Smallest cuff muscle. Axillary nerve also supplies the deltoid, so the two tend to be hit together.',
    act: { elev: 0, plane: 40, er: 60, elbow: 90 },
  },
  subscapularis: {
    name: 'Subscapularis', origin: 'Subscapular fossa (the rib side of the scapula)', ins: 'Lesser tubercle', nerve: 'Upper and lower subscapular (C5–C7)',
    action: 'Internal rotation, anterior stability',
    throw: 'Drives internal rotation in acceleration and holds the head from sliding forward when the arm is laid back.',
    note: 'The largest cuff muscle and the only one on the front. Its tendon runs under the coracoid.',
    act: { elev: 0, plane: 40, er: -55, elbow: 90 },
  },
};
export function step3(host, panel) {
  let V = null, ov = null;
  const S = { id: 'supraspinatus', markers: true, ctx: false, bare: false };
  const tip = tooltip(host);
  const tools = stageTools(host);
  stageHint(host, 'Click a cuff muscle or choose below');
  const detail = card();
  const pick = listPicker(Object.entries(CUFF).map(([id, c]) => ({ id, label: c.name, color: hex(COL.cuff), sub: c.action })), id => { S.id = id; apply(); });
  const tMark = toggle('Origin + insertion markers', true, on => { S.markers = on; apply(); });
  const tCtx = toggle('Show other muscles (ghosted)', false, on => { S.ctx = on; apply(); });
  const tBare = toggle('Hide ribs and left side', false, on => { S.bare = on; apply(); });
  const actBtn = h('button', { class: 'btn', type: 'button' }, '▶ Show action');
  panel.append(card(h('span', { class: 'label' }, 'S · I · T · S'), pick.el, h('div', { class: 'btns' }, actBtn)), detail, card(tMark.el, tCtx.el, tBare.el));
  pick.set('supraspinatus');
  function apply() {
    const c = CUFF[S.id];
    detail.replaceChildren(h('span', { class: 'label red' }, 'Rotator cuff'), h('h3', null, c.name),
      kv([['Origin', c.origin], ['Insertion', c.ins], ['Nerve', c.nerve], ['Action', c.action], ['In throwing', c.throw], ['Worth knowing', c.note]]));
    if (!V) return;
    const r = V.rig;
    Object.keys(CUFF).forEach(id => r.setMuscle(id, { visible: true, opacity: id === S.id ? 1 : 0.28, glow: id === S.id ? 0.55 : 0 }));
    r.muscleDefs.filter(d => d.layer !== 3).forEach(d => r.setMuscle(d.id, { visible: S.ctx, opacity: 0.22 }));
    r.show('left', !S.bare); r.showThorax('ribs', !S.bare); r.showThorax('costal', !S.bare); r.showThorax('sternum', !S.bare);
    ov.clear();
    if (S.markers) {
      const def = r.muscles[S.id].def;
      def.fibers.forEach((f, i) => ov.marker(f.pts[0], { color: 0x7eb6ff, r: 0.5 }));
      ov.marker(def.fibers[0].pts[def.fibers[0].pts.length - 1], { color: 0xd4f57a, r: 0.75, text: 'Insertion', cls: 'lime' });
      ov.marker(def.fibers[0].pts[0], { color: 0x7eb6ff, r: 0.7, text: 'Origin', cls: 'cool' });
    }
    V.invalidate();
  }
  actBtn.addEventListener('click', () => {
    if (!V) return;
    const c = CUFF[S.id], from = { elev: 0, er: 0, plane: 40, elbow: 90 };
    tweenPose(V, from, 300, null, () => tweenPose(V, c.act, 1100, null, () => setTimeout(() => tweenPose(V, from, 900), 700)));
  });
  mountStage(host, {
    view: 'obl',
    attach(v) {
      V = v; ov = new Overlay(v);
      baseline(v, { muscles: true, lig: false, bone: 0.7 });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.onPick = info => { if (info && info.type === 'muscle' && CUFF[info.id]) { S.id = info.id; pick.set(info.id); apply(); } };
      apply();
    },
    detach() { V = null; ov = null; },
  });
}

/* ======================= STEP 4 · LAYERS ======================= */
const LAYER_NAMES = { 1: 'Superficial', 2: 'Intermediate', 3: 'Deep (rotator cuff)' };
const LAYER_COL = { 1: COL.sup, 2: COL.mid, 3: COL.cuff };
const OVER = {
  'deltoid-ant': 'Covers the front of the cuff and subscapularis tendon. A big abductor that pulls the head up unless the cuff holds it down.',
  'deltoid-mid': 'Sits directly on top of the supraspinatus and subacromial bursa. The shoulder cap.',
  'deltoid-post': 'Covers infraspinatus and teres minor. Also helps in deceleration.',
  'trapezius-upper': 'Lies over levator scapulae. Elevates and upwardly rotates the scapula.',
  'trapezius-mid': 'Sits over the rhomboids. Retracts the scapula.',
  'trapezius-lower': 'Pulls the scapula down and back from the spine of the scapula. A key upward rotator.',
  latissimus: 'Large sheet over the lower scapula and ribs. Crosses the shoulder, so a short lat limits overhead.',
  'pec-major-clav': 'Covers pec minor and the front of the joint. Flexes and internally rotates.',
  'pec-major-stern': 'Covers pec minor, ribs and sternum. Powerful internal rotator and adductor.',
  rhomboids: 'Under trapezius. Hold the medial border against the ribs.',
  levator: 'Under upper trapezius. Elevates and downwardly rotates the scapula.',
  serratus: 'Between scapula and ribs, hidden from behind. Wraps the scapula to the rib cage.',
  'pec-minor': 'Under pec major. Pulls the scapula forward and tips it. Short pec minor = anterior tilt.',
  'teres-major': 'Under the lat at the inferior angle. Assists IR and extension.',
  'biceps-lh': 'The long head crosses the top of the head inside the joint, deep to deltoid.',
  'biceps-sh': 'Rides with coracobrachialis from the coracoid.',
  'triceps-lh': 'Long head crosses the joint from the inferior glenoid. A weak extensor of the shoulder.',
  supraspinatus: 'Beneath trapezius and deltoid, above the head. First thing the acromion presses on.',
  infraspinatus: 'Beneath the deltoid and trapezius. The largest posterior cuff muscle.',
  'teres-minor': 'Just under the posterior deltoid, above teres major.',
  subscapularis: 'Between the ribs and scapula, in front of the joint.',
};
export function step4(host, panel) {
  let V = null, ov = null;
  const S = { stage: 0, ghost: true, couples: false, sel: null };
  const tip = tooltip(host);
  const tools = stageTools(host);
  stageHint(host, 'Peel the layers · click a muscle');
  const detail = card();
  const stageBtns = btnGroup([
    { id: 0, label: 'All layers' }, { id: 1, label: 'Peel superficial' }, { id: 2, label: 'Peel intermediate' }, { id: 3, label: 'Deep only' },
  ], id => { S.stage = id; apply(); }, { initial: 0 });
  const elev = slider({ label: 'Elevate the arm', min: 0, max: 150, value: 0, onInput: v => V && V.rig.setPose({ elev: v, plane: 40 }) });
  const tGhost = toggle('Ghost the removed layers', true, on => { S.ghost = on; apply(); });
  const tCouple = toggle('Show force couples', false, on => { S.couples = on; apply(); });
  const legend = h('div', { class: 'legend' },
    ...[1, 2, 3].map(l => h('span', { style: `--c:${hex(LAYER_COL[l])}` }, h('i'), LAYER_NAMES[l])));
  panel.append(card(h('span', { class: 'label' }, 'Layers'), stageBtns.el, elev.el, tGhost.el, tCouple.el, legend), detail);
  detail.append(h('p', null, 'Click any muscle in the model to see what it sits on top of.'));

  function select(id) {
    S.sel = id; apply();
    if (!V) return;
    const d = V.rig.muscles[id].def;
    detail.replaceChildren(h('span', { class: 'label', style: `color:${hex(LAYER_COL[d.layer])}` }, 'Layer ' + d.layer + ' · ' + LAYER_NAMES[d.layer]), h('h3', null, d.name), h('p', null, OVER[id] || ''));
  }
  function apply() {
    if (!V) return;
    const r = V.rig;
    r.muscleDefs.forEach(d => {
      const removed = d.layer <= S.stage;
      r.setMuscle(d.id, { visible: !removed || S.ghost, opacity: removed ? 0.13 : 1, glow: S.sel === d.id ? 0.6 : 0, color: LAYER_COL[d.layer] });
    });
    ov.clear();
    if (S.couples) {
      const up = (spec, dir, color, text, cls) => ov.arrow(spec, () => new THREE.Vector3(...dir), { color, len: 8, text, cls });
      up(['R', 5.5, 0, 0], [0.15, 1, 0], 0xe5534b, 'Deltoid: up', '');
      up(['R', -3.5, -3, 0], [0.1, -1, 0], 0xd4f57a, 'Cuff: down + in', 'lime');
      up(['R', 0, 0, -4], [0, 0, 1], 0xe5534b, 'Subscap: forward', '');
      up(['R', 0, 0, 4], [0, 0, -1], 0xd4f57a, 'Infraspinatus + teres minor: back', 'lime');
      up(['S', -2, 6, 1.5], [0.5, 1, 0], 0xe0c04a, 'Upper trap + upper serratus', '');
      up(['S', -7, -11, 1.5], [0.7, 0.2, 0], 0xe0c04a, 'Lower trap + lower serratus', '');
    }
    V.invalidate();
  }
  mountStage(host, {
    view: 'obl',
    attach(v) {
      V = v; ov = new Overlay(v);
      baseline(v, { muscles: true, lig: false, left: false, bone: 0.85 });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.onPick = info => { if (info && info.type === 'muscle') select(info.id); };
      apply();
    },
    detach() { V = null; ov = null; },
  });
}

/* ======================= STEP 5 · TENDON / LIGAMENT / CARTILAGE ======================= */
const TYPES = {
  tendon: { name: 'Tendon', c: COL.tend, join: 'Muscle → bone', text: 'Dense, parallel collagen that transmits muscle force to bone. Strong in tension, stiff but with some give. Limited blood supply, adapts slowly to load.' },
  ligament: { name: 'Ligament', c: COL.lig, join: 'Bone → bone', text: 'Dense collagen bands (and capsule) that guide motion and limit end range. Passive restraints with sensory receptors that tell the system where the joint is.' },
  cartilage: { name: 'Cartilage', c: COL.cart, join: 'Bone surface · cushion', text: 'Smooth, low-friction, load-sharing surface (hyaline) or tougher rim and discs (fibrocartilage). No blood supply, so repair is slow and limited.' },
};
const STRUCT = {
  tendon: [
    ['supraspinatus', 'Supraspinatus tendon', 'Crosses the top of the head under the acromion. First tendon to wear in impingement.'],
    ['infraspinatus', 'Infraspinatus tendon', 'Posterior cuff tendon. Takes the braking load in deceleration.'],
    ['teres-minor', 'Teres minor tendon', 'Smallest, lowest of the posterior tendons.'],
    ['subscapularis', 'Subscapularis tendon', 'Front of the joint. Wide tendon that also blends with the capsule.'],
    ['biceps-lh', 'Long head of biceps tendon', 'Runs inside the joint, over the head, and attaches to the top of the labrum. Stabilises the head and shares the SLAP lesion area.'],
  ],
  ligament: [
    ['conoid', 'Conoid ligament (CC)', 'Back half of the coracoclavicular ligament. Resists upward pull of the clavicle.'],
    ['trapezoid', 'Trapezoid ligament (CC)', 'Front half of the CC ligament. Resists AC compression.'],
    ['acl', 'AC ligament', 'Capsule of the AC joint. Controls horizontal translation of the clavicle.'],
    ['cal', 'Coracoacromial ligament', 'Forms the arch (roof) over the cuff with the acromion and coracoid.'],
    ['sghl', 'Superior GH ligament', 'Limits inferior translation and ER with the arm at the side.'],
    ['mghl', 'Middle GH ligament', 'Limits ER and anterior translation in the mid-range, around 45° of abduction.'],
    ['ighl-a', 'Inferior GH ligament · anterior band', 'The major static restraint to anterior translation with the arm at 90° and ER. Heavily loaded in layback.'],
    ['ighl-p', 'Inferior GH ligament · posterior band', 'Limits posterior translation and IR at 90°. Part of the posterior capsule that tightens in throwers.'],
    ['thl', 'Transverse humeral ligament', 'Bridge over the bicipital groove that keeps the biceps tendon in the groove.'],
  ],
  cartilage: [
    ['glenoid-cartilage', 'Glenoid articular cartilage', 'Thin hyaline cap, thicker at the edge. Shock-absorbs and lowers friction.'],
    ['head-cartilage', 'Humeral head articular cartilage', 'Thickest at the center of the head. Largely avascular.'],
    ['labrum', 'Glenoid labrum', 'Fibrocartilage ring that deepens the socket and anchors capsule ligaments and the biceps tendon.'],
    ['costal-cartilage', 'Costal cartilage', 'Hyaline bridge from ribs to sternum that lets the rib cage expand and recoil.'],
  ],
};
const POSITIONS = [
  { id: 'rest', label: 'At side', pose: { elev: 0, plane: 40, er: 0 }, lig: ['sghl'], text: 'SGHL (and the coracohumeral ligament) are the primary restraints to inferior translation and ER with the arm at the side.' },
  { id: '45', label: '45° abduction', pose: { elev: 45, plane: 0, er: 25 }, lig: ['mghl'], text: 'MGHL limits ER and front-to-back translation in the mid-range.' },
  { id: 'cock', label: '90° + ER (cocking)', pose: { elev: 90, plane: -10, er: 150, elbow: 100 }, lig: ['ighl-a'], text: 'Anterior band of the IGHL is the main static restraint here. This is the position every throw rides through.' },
  { id: 'ir', label: '90° + IR', pose: { elev: 90, plane: 40, er: -50 }, lig: ['ighl-p'], text: 'The posterior band of the IGHL and posterior capsule tighten. Chronic tightness here is part of GIRD.' },
  { id: 'cross', label: 'Cross-body', pose: { elev: 90, plane: 135, er: -40 }, lig: ['ighl-p', 'acl'], text: 'Posterior capsule stretch and AC compression. The reason the cross-body test can be positive for either.' },
];
export function step5(host, panel, defsHost) {
  let V = null, ov = null;
  const S = { type: 'ligament', sel: null, pos: null };
  const tip = tooltip(host);
  const tools = stageTools(host);
  stageHint(host, 'Pick a tissue type, then a structure');
  const defBtns = {};
  Object.entries(TYPES).forEach(([k, t]) => {
    const b = h('button', { class: 'def', type: 'button', style: `--c:${hex(t.c)}`, onclick: () => { S.type = k; S.sel = null; S.pos = null; render(); apply(); } },
      h('h3', null, t.name), h('span', { class: 'join' }, t.join), h('p', null, t.text));
    defsHost.append(b); defBtns[k] = b;
  });
  const listBox = h('div');
  const detail = card();
  const posBtns = btnGroup(POSITIONS.map(p => ({ id: p.id, label: p.label })), id => { S.pos = id; S.sel = null; applyPos(); });
  panel.append(card(h('span', { class: 'label' }, 'Structures'), listBox), detail,
    card(h('span', { class: 'label' }, 'Which ligament is working? Move the arm.'), posBtns.el));
  function render() {
    Object.entries(defBtns).forEach(([k, b]) => b.classList.toggle('on', k === S.type));
    const items = STRUCT[S.type].map(([id, name, text]) => ({ id, label: name, color: hex(TYPES[S.type].c) }));
    const lp = listPicker(items, id => { S.sel = id; S.pos = null; posBtns.set(null); showDetail(); apply(); });
    listBox.replaceChildren(lp.el);
    detail.replaceChildren(h('span', { class: 'label', style: `color:${hex(TYPES[S.type].c)}` }, TYPES[S.type].name), h('p', null, 'Choose a structure to see where it is and what it does.'));
  }
  function showDetail() {
    const row = STRUCT[S.type].find(r => r[0] === S.sel);
    if (!row) return;
    detail.replaceChildren(h('span', { class: 'label', style: `color:${hex(TYPES[S.type].c)}` }, TYPES[S.type].name), h('h3', null, row[1]), h('p', null, row[2]));
  }
  function applyPos() {
    const p = POSITIONS.find(x => x.id === S.pos);
    if (!V || !p) return;
    S.type = 'ligament'; render();
    detail.replaceChildren(h('span', { class: 'label lime' }, 'Tight in this position'), h('h3', null, p.label), h('p', null, p.text));
    tweenPose(V, { elbow: 90, pron: 90, ...p.pose }, 900);
    apply(p.lig);
  }
  function apply(ligFocus) {
    if (!V) return;
    const r = V.rig;
    r.resetMuscles(); r.resetLigs();
    const t = S.type;
    // dim everything by type
    r.muscleDefs.forEach(d => r.setMuscle(d.id, { visible: true, opacity: 0.18 }));
    Object.keys(r.ligs).forEach(id => r.setLig(id, { color: 0x5f6b3a, glow: 0 }));
    r.show('soft', true); r.show('ligaments', true);
    r.capsule.material.opacity = 0.1;
    const carts = [r.scapMesh.userData.cartilage[0].material, r.scapMesh.userData.cartilage[1].material, r.hdata.head.children[1].material, r.costMat];
    carts.forEach(m => m.emissive.setHex(0x000000));
    ov.clear();
    if (t === 'tendon') {
      r.muscleDefs.forEach(d => { const m = r.muscles[d.id]; m.tendon.emissive.setHex(0x000000); });
      const sel = S.sel;
      r.muscleDefs.forEach(d => r.setMuscle(d.id, { visible: true, opacity: STRUCT.tendon.some(s => s[0] === d.id) ? 0.55 : 0.1, glow: d.id === sel ? 0.7 : 0 }));
      if (sel) { const m = r.muscles[sel]; m.tendon.emissive.setHex(0xffffff).multiplyScalar(0.6); m.tendon.opacity = 1; m.tendon.transparent = false; }
    } else if (t === 'ligament') {
      Object.keys(r.ligs).forEach(id => r.setLig(id, { color: id === S.sel || (ligFocus && ligFocus.includes(id)) ? COL.lig : 0x6b7a3d, glow: id === S.sel || (ligFocus && ligFocus.includes(id)) ? 0.7 : 0 }));
      if (S.sel) { const spec = r.ligDefs.find(l => l.id === S.sel).pts[1]; ov.marker(spec, { color: COL.lig, r: 0.5, text: STRUCT.ligament.find(s => s[0] === S.sel)[1], cls: 'lime' }); }
      if (ligFocus) ligFocus.forEach(id => { const l = r.ligDefs.find(x => x.id === id); ov.marker(l.pts[1], { color: COL.lig, r: 0.6, text: l.name, cls: 'lime' }); });
    } else {
      const map = { 'glenoid-cartilage': 0, labrum: 1, 'head-cartilage': 2, 'costal-cartilage': 3 };
      const k = map[S.sel];
      carts.forEach((m, i) => m.emissive.setHex(0x78c6ff).multiplyScalar(k === i || S.sel === null ? 0.55 : 0));
      if (S.sel && S.sel !== 'costal-cartilage') {
        const spec = { 'glenoid-cartilage': ['S', 0.6, -0.5, -0.1], labrum: ['S', 0.6, 1.4, -0.1], 'head-cartilage': ['R', -1.9, 1.3, 0] }[S.sel];
        ov.marker(spec, { color: COL.cart, r: 0.6, text: STRUCT.cartilage.find(s => s[0] === S.sel)[1], cls: 'cool' });
      }
    }
    V.invalidate();
  }
  render();
  mountStage(host, {
    view: 'obl',
    attach(v) {
      V = v; ov = new Overlay(v);
      baseline(v, { muscles: true, lig: true, soft: true, left: false, bone: 0.92 });
      v.rig.show('soft', true);
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.onPick = info => {
        if (!info) return;
        if (info.type === 'lig') { S.type = 'ligament'; S.sel = info.id; render(); showDetail(); apply(); }
        else if (info.type === 'muscle') { S.type = 'tendon'; S.sel = STRUCT.tendon.some(s => s[0] === info.id) ? info.id : null; render(); showDetail(); apply(); }
        else if (['glenoid-cartilage', 'head-cartilage', 'labrum', 'costal-cartilage'].includes(info.id)) { S.type = 'cartilage'; S.sel = info.id; render(); showDetail(); apply(); }
      };
      apply();
    },
    detach() { V = null; ov = null; },
  });
}
