// Steps 6 to 10
import * as THREE from 'three';
import { COL } from './rig.js';
import { h, POSE0, slider, toggle, btnGroup, tabs, listPicker, card, kv, Overlay, mountStage, stageTools, stageHint, stageReadout, tooltip, tweenPose } from './core.js';
import { baseline, hoverTips, viewBtns, hex } from './steps-a.js';

const v3 = (x, y, z) => new THREE.Vector3(x, y, z);

/* ======================= STEP 6 · FASCIAL LINES + FIBERS ======================= */
const LINE_DEFS = [
  { id: 'bfl', name: 'Back functional line', c: 0xd4f57a, members: ['latissimus', 'teres-major'],
    text: 'Lat dorsi on one side, through the thoracolumbar fascia, to the opposite glute and thigh. The diagonal that loads when the arm and the opposite leg work together.',
    read: 'Rotation and sprint-style patterns. A stiff or weak link here can show up as the shoulder or the opposite hip being asked to move too much.' },
  { id: 'ffl', name: 'Front functional line', c: 0x7eb6ff, members: ['pec-major-stern'],
    text: 'Lower pec major, across the rectus sheath, to the opposite pubic region and adductors. The front diagonal.',
    read: 'Brings the throwing arm forward against the opposite stride leg. Tight pec major shortens the arm path at ball release.' },
  { id: 'spiral', name: 'Spiral line', c: 0xe0c04a, members: ['rhomboids', 'serratus', 'levator'],
    text: 'Skull, across the upper back to the opposite scapula (rhomboids and serratus), around the ribs and across the abdomen to the same-side hip.',
    read: 'This is the rotational thread. It ties head position, scapula, ribs, and hip rotation into one pathway.' },
  { id: 'sbal', name: 'Superficial back arm line', c: 0xe5534b, members: ['trapezius-upper', 'trapezius-mid', 'deltoid-mid', 'deltoid-post'],
    text: 'Trapezius, deltoid, lateral intermuscular septum, extensors of the forearm and back of the hand.',
    read: 'Elevation and reach. A line that tends to be over-recruited when the scapula can\'t do its share.' },
  { id: 'sfal', name: 'Superficial front arm line', c: 0x59d2c0, members: ['pec-major-clav', 'pec-major-stern'],
    text: 'Pec major, medial intermuscular septum, medial epicondyle, forearm flexors and palm.',
    read: 'Pressing, pulling the arm across. Ties the chest to the inside of the elbow and the flexor-pronator group.' },
  { id: 'dfal', name: 'Deep front arm line', c: 0xff9d5c, members: ['pec-minor', 'biceps-lh', 'biceps-sh'],
    text: 'Pec minor and clavipectoral fascia, biceps, radius, thumb side of the hand.',
    read: 'Pec minor length and the scapular tilt it sets are where this line shows up in a shoulder screen.' },
  { id: 'dbal', name: 'Deep back arm line', c: 0xb58cff, members: ['rhomboids', 'levator', 'supraspinatus', 'infraspinatus', 'triceps-lh'],
    text: 'Rhomboids and levator, rotator cuff, triceps, ulna, little-finger side of the hand.',
    read: 'Stabilisation of the scapula and head of the humerus. The line most tied to throwing deceleration.' },
];
const ARCH = {
  'pec-major-clav': ['Convergent (fan)', 'Fibers run down and out from the clavicle. Flexes and internally rotates.'],
  'pec-major-stern': ['Convergent (fan)', 'Fibers run out and up from the sternum and ribs. Powerful adductor and internal rotator; crosses with the clavicular head at the tendon.'],
  'deltoid-ant': ['Parallel (strap-like)', 'Runs forward and down. Flexion and IR.'],
  'deltoid-mid': ['Multipennate', 'Many short fibers on internal tendons. Built for force across a small excursion: the abduction muscle.'],
  'deltoid-post': ['Parallel', 'Runs back and down. Horizontal abduction, ER, extension.'],
  'trapezius-upper': ['Convergent', 'Runs down and out. Elevates and upwardly rotates.'],
  'trapezius-mid': ['Convergent', 'Runs horizontally. Retracts the scapula.'],
  'trapezius-lower': ['Convergent', 'Runs up and out. Depresses, upwardly rotates, and tilts the scapula back.'],
  latissimus: ['Convergent (broad fan)', 'Fibers run up and out to a twisted tendon. A very long lever that crosses the shoulder and the low back.'],
  rhomboids: ['Parallel sheet', 'Runs down and out to the medial border. Retracts and downwardly rotates.'],
  levator: ['Parallel strap', 'Runs down and back to the superior angle. Elevates and downwardly rotates.'],
  serratus: ['Fan', 'Digitations from ribs 1 to 8 fan back to the medial border. The upper fibers hold the scapula in; the lower fibers pull the inferior angle forward and out, upwardly rotating it.'],
  'pec-minor': ['Convergent', 'Ribs 3 to 5 up and out to the coracoid. Tips and protracts the scapula.'],
  'teres-major': ['Parallel', 'Runs from the inferior angle to the front of the humerus. Assists IR and extension.'],
  supraspinatus: ['Pennate', 'Fibers converge on a central tendon. Short and strong, built to compress and steer.'],
  infraspinatus: ['Multipennate', 'Two fiber directions: upper fibers run up and out, lower fibers run across. Different parts work at different arm heights.'],
  'teres-minor': ['Pennate', 'Runs up and out along the lateral border. ER and head depression.'],
  subscapularis: ['Multipennate', 'Several tendon slips with muscle between them. A thick, strong IR and anterior stabiliser.'],
  'biceps-lh': ['Fusiform', 'Belly spindle, long tendon inside the joint. Flexes the elbow, supinates, and stabilises the head.'],
  'biceps-sh': ['Fusiform', 'Runs from the coracoid with coracobrachialis.'],
  'triceps-lh': ['Pennate', 'Only head that crosses the shoulder; weakly extends and adducts.'],
};
export function step6(host, panel) {
  let V = null, ov = null;
  const S = { mode: 'lines', lines: new Set(['bfl']), sel: null };
  const tip = tooltip(host);
  const tools = stageTools(host);
  stageHint(host, 'Toggle lines · click a muscle for fiber direction');
  const modeTabs = tabs([{ id: 'lines', label: 'Fascial lines' }, { id: 'fibers', label: 'Fiber direction' }], m => { S.mode = m; render(); }, 'lines');
  const body = h('div', { class: 'panel' });
  const detail = card();
  panel.append(card(modeTabs.el), body, detail);

  function render() {
    body.replaceChildren();
    if (S.mode === 'lines') {
      const items = h('div', { class: 'list' });
      LINE_DEFS.forEach(l => {
        const b = h('button', { class: 'item' + (S.lines.has(l.id) ? ' on' : ''), type: 'button', onclick: () => { S.lines.has(l.id) ? S.lines.delete(l.id) : S.lines.add(l.id); S.last = l.id; render(); apply(); } },
          h('span', { class: 'sw-c', style: `--c:${hex(l.c)}` }), h('span', null, l.name));
        items.append(b);
      });
      body.append(card(h('span', { class: 'label' }, 'Lines (toggle several)'), items));
      const L = LINE_DEFS.find(l => l.id === (S.last || [...S.lines][0]));
      detail.replaceChildren(...(L ? [h('span', { class: 'label', style: `color:${hex(L.c)}` }, 'Line'), h('h3', null, L.name), h('p', null, L.text), kv([['Coach read', L.read]])] : [h('p', null, 'Turn on a line to see what it ties together.')]));
    } else {
      const ids = Object.keys(ARCH);
      const lp = listPicker(ids.map(id => ({ id, label: V ? V.rig.muscles[id].def.name : id, sub: ARCH[id][0], color: hex(COL.sup) })), id => { S.sel = id; showFiber(); apply(); });
      body.append(card(h('span', { class: 'label' }, 'Muscle'), lp.el));
      if (S.sel) lp.set(S.sel);
      showFiber();
    }
  }
  function showFiber() {
    if (!S.sel) { detail.replaceChildren(h('p', null, 'Pick a muscle. The arrow shows the direction its insertion is pulled.')); return; }
    const a = ARCH[S.sel];
    detail.replaceChildren(h('span', { class: 'label red' }, 'Architecture'), h('h3', null, V ? V.rig.muscles[S.sel].def.name : S.sel), kv([['Type', a[0]], ['Fibers', a[1]]]));
  }
  function apply() {
    if (!V) return;
    const r = V.rig; ov.clear();
    r.resetMuscles();
    const mem = new Set();
    if (S.mode === 'lines') {
      S.lines.forEach(id => {
        const L = LINE_DEFS.find(l => l.id === id);
        ov.line(lineSpecs(r)[id], { color: L.c, r: 0.38 });
        L.members.forEach(m => mem.add(m));
      });
      r.muscleDefs.forEach(d => r.setMuscle(d.id, { visible: true, opacity: mem.has(d.id) ? 0.9 : 0.12, glow: mem.has(d.id) ? 0.4 : 0 }));
    } else {
      r.muscleDefs.forEach(d => r.setMuscle(d.id, { visible: true, opacity: d.id === S.sel ? 1 : 0.15, glow: d.id === S.sel ? 0.55 : 0 }));
      if (S.sel) {
        const d = r.muscles[S.sel].def;
        d.fibers.forEach((f, i) => {
          const a = f.pts[0], b = f.pts[f.pts.length - 1];
          ov.arrow(b, () => r.pt(a).sub(r.pt(b)), { color: 0xd4f57a, len: 7, text: i === 0 ? 'Line of pull' : '', cls: 'lime' });
        });
      }
    }
    V.invalidate();
  }
  function lineSpecs(r) {
    const M = n => () => { const q = r.tpt(n); q.x *= -1; return q; };
    const T = (n, dx = 0, dy = 0, dz = 0) => () => r.tpt(n).add(v3(dx, dy, dz));
    return {
      bfl: [['H', 0.3, -6.5, -1.5], ['R', 1.5, -6, 3.4], ['S', -6.2, -9.8, 1.5], ['T', 'spinous.T10'], ['T', 'spinous.L3'], ['T', 'sacrum'], T('iliac.L', -1, -9, 3.5), T('iliac.L', -2, -26, 2)],
      ffl: [['H', 1.0, -6, -1.5], ['R', 4, -5, -5.6], ['T', 'sternum.6'], T('rib7.end', 1.5, -8, -1.2), T('body.L5', -2, -6, -13), T('body.L5', -4, -26, -9)],
      spiral: [['T', 'mastoid.R'], ['T', 'occiput'], ['T', 'spinous.C7'], () => r.leftContent.localToWorld(v3(-9.6, -3, 0.6)), M('rib5.lat'), M('rib8.end'), T('rib9.end', 0, -4, -1), T('iliac.R', -1, -3, -12), T('iliac.R', 1, -22, -10)],
      sbal: [['T', 'spinous.C7'], ['C', 0.9, 1.2], ['S', 3.8, 4.3, 0.2], ['H', 2.1, -13, 0.1], ['H', 3.4, -29.2, 0.1], ['F', 2.6, -12, 0], ['F', 2.2, -31, 0]],
      sfal: [['T', 'sternum.4'], ['R', 4, -4.5, -5.0], ['H', 1.0, -6, -1.5], ['H', -3.5, -29.2, 0.4], ['F', -1.4, -12, 0], ['F', -1.0, -31, 0]],
      dfal: [['T', 'rib4.ant'], ['S', 3.5, 1.4, -5.3], ['H', 0.2, -7, -2.4], ['H', 0.1, -27, -2.0], ['F', 0.8, -6, -0.8], ['F', 2.4, -27, 0]],
      dbal: [['T', 'spinous.T1'], ['S', -10, 1, 0.5], ['S', -5, 3.5, 1.0], ['R', 1.4, 2.7, 0.0], ['H', 1.3, 5.4, 0.1], ['H', 0.2, -12, 2.0], ['H', 0, -28.5, 1.8], ['F', -1.0, -12, 0.6], ['F', -1.2, -31, 0]],
    };
  }
  render();
  mountStage(host, {
    view: 'post',
    attach(v) {
      V = v; ov = new Overlay(v);
      baseline(v, { muscles: true, lig: false, left: true, bone: 0.55, pose: { elbow: 25, elev: 0 } });
      v.rig.setPose({ elbow: 25 });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.onPick = info => { if (info && info.type === 'muscle') { S.mode = 'fibers'; S.sel = info.id; modeTabs.set('fibers'); render(); apply(); } };
      v.setView({ pos: [40, 10, 95], tgt: [6, -4, 2] }, 0);
      render(); apply();
    },
    detach() { V = null; ov = null; },
  });
}

/* ======================= STEP 7 · POSTURE ======================= */
const POSTURES = {
  neutral: { name: 'Neutral reference', kyph: 35, fwd: 0, prot: 0, tilt: 0, er: 0, shrug: 0, tight: [], weak: [],
    text: 'Reference for comparison. Not a target for everybody.', checks: [] },
  upper: { name: 'Upper cross', kyph: 50, fwd: 0.85, prot: 0.6, tilt: -8, er: -14, shrug: 0.8,
    tight: ['trapezius-upper', 'levator', 'pec-major-clav', 'pec-major-stern', 'pec-minor', 'deltoid-ant'],
    weak: ['rhomboids', 'trapezius-mid', 'trapezius-lower', 'serratus', 'infraspinatus', 'teres-minor'],
    text: 'Forward head, rounded upper back, protracted and anteriorly tilted scapulae, humeri sitting in IR. Tight upper chest and upper neck; long, weak mid-back and deep neck flexors.',
    checks: [['Overhead reach / wall angel', 'Ribs flare, lower back arches, elbows lag the wall, shrug at the top.'], ['Supine shoulder flexion to 180°', 'Short of end range, back arches to get there. Lat, pec minor, and T-spine are the usual suspects.'], ['Prone Y / T', 'Upper trap dominates, lower trap late. Look for shrugging and neck extension.'], ['Push-up plus', 'Inferior angle tips or the medial border lifts at the top.'], ['Neck rotation both ways', 'Compare sides. Asymmetry is worth a note, especially in throwers.']] },
  kyph: { name: 'Thoracic kyphosis', kyph: 62, fwd: 0.5, prot: 0.3, tilt: -4, er: -6, shrug: 0,
    tight: ['pec-minor', 'pec-major-stern', 'latissimus'],
    weak: ['trapezius-mid', 'trapezius-lower', 'rhomboids'],
    text: 'Increased forward flexion of the thoracic spine. The rib cage sits down and forward, so the scapula starts with less posterior tilt and upward rotation to give.',
    checks: [['Seated thoracic rotation', 'Both sides. Smaller rotation to the throwing-arm side is common.'], ['T-spine extension over a bench or roller', 'Lack of extension. Watch for the lumbar spine bending instead.'], ['Overhead squat / arms-up wall slide', 'Arms drift forward, ribs flare, early shoulder shrug.'], ['Standing shoulder flexion', 'Early end range, with back extension compensation.']] },
  military: { name: 'Military / flat back', kyph: 18, fwd: 0, prot: -0.9, tilt: 5, er: 6, shrug: -1.4,
    tight: ['rhomboids', 'trapezius-mid', 'trapezius-lower', 'latissimus'],
    weak: ['serratus', 'pec-minor'],
    text: 'Scapulae pulled back and down, chest up, thoracic spine flat. Looks "good" but fixes the scapula in retraction, reduces protraction, and costs thoracic rotation.',
    checks: [['Seated thoracic rotation', 'Flat T-spine rotates poorly. Expect loss, often with trunk side-bend instead.'], ['Rib cage position and breathing', 'Lower ribs flare, upper chest rises. Check 90/90 breathing.'], ['Push-up plus / serratus punch', 'Hard to protract. Little scapular glide forward.'], ['Cross-body reach', 'Limited protraction means the humerus does it all.']] },
  rounded: { name: 'Rounded shoulders', kyph: 42, fwd: 0.3, prot: 1.0, tilt: -10, er: -20, shrug: 0,
    tight: ['pec-minor', 'pec-major-clav', 'pec-major-stern', 'deltoid-ant', 'subscapularis'],
    weak: ['trapezius-mid', 'trapezius-lower', 'infraspinatus', 'teres-minor'],
    text: 'Scapulae sit forward on the ribs and tilt anteriorly; the humerus rests in IR. Often the picture when the pecs and subscapularis dominate.',
    checks: [['Supine scapular position', 'Does the shoulder sit off the table? Pec minor length test.'], ['ER at the side with the elbow tucked', 'Low ER strength vs IR, poor endurance.'], ['Scapular retraction test', 'Does retracting the scapula change symptoms or strength?'], ['Wall slide', 'Scapula tips forward, ribs flare, lat/pec dominance.']] },
};
export function step7(host, panel) {
  let V = null, ov = null;
  const S = { key: 'neutral', color: true, k: 35, f: 0, p: 0, t: 0, er: 0, sh: 0 };
  let plumbZ = null, skull0 = null;
  const tip = tooltip(host);
  const ro = stageReadout(host);
  const tools = stageTools(host);
  stageHint(host, 'Side view · drag to rotate');
  const presets = btnGroup(Object.entries(POSTURES).map(([id, p]) => ({ id, label: p.name })), id => { applyPreset(id); }, { initial: 'neutral' });
  const sl = {
    k: slider({ label: 'Thoracic kyphosis', min: 10, max: 70, value: 35, ends: ['Flat', 'Rounded'], onInput: v => { S.k = v; push(); } }),
    f: slider({ label: 'Forward head', min: 0, max: 1, step: 0.05, value: 0, unit: '', fmt: v => Math.round(v * 100) + '%', onInput: v => { S.f = v; push(); } }),
    p: slider({ label: 'Scapular protraction', min: -1, max: 1, step: 0.05, value: 0, unit: '', fmt: v => (v > 0 ? '+' : '') + Math.round(v * 100) + '%', ends: ['Retracted', 'Protracted'], onInput: v => { S.p = v; push(); } }),
    t: slider({ label: 'Scapular tilt', min: -20, max: 15, value: 0, ends: ['Anterior', 'Posterior'], onInput: v => { S.t = v; push(); } }),
    er: slider({ label: 'Humeral position at rest', min: -30, max: 20, value: 0, ends: ['IR', 'ER'], onInput: v => { S.er = v; push(); } }),
    sh: slider({ label: 'Shoulder height', min: -2.5, max: 2.5, step: 0.1, value: 0, unit: ' cm', ends: ['Depressed', 'Elevated'], onInput: v => { S.sh = v; push(); } }),
  };
  const colorTog = toggle('Color muscles: tight vs long/weak', true, on => { S.color = on; colorize(); });
  const legend = h('div', { class: 'legend' }, h('span', { style: '--c:#E0C04A' }, h('i'), 'Tight / over-active'), h('span', { style: '--c:#7EB6FF' }, h('i'), 'Long / under-active'));
  const reachBtn = h('button', { class: 'btn', type: 'button' }, '▶ Overhead reach test');
  const resetBtn = h('button', { class: 'btn', type: 'button' }, '↺ Reset arm');
  const detail = card();
  const checks = card();
  panel.append(card(h('span', { class: 'label' }, 'Pattern'), presets.el), detail,
    card(h('span', { class: 'label' }, 'Build your own'), sl.k.el, sl.f.el, sl.p.el, sl.t.el, sl.er.el, sl.sh.el, colorTog.el, legend, h('div', { class: 'btns' }, reachBtn, resetBtn)), checks);

  function gain() { return Math.max(0.45, Math.min(1, 1 - Math.max(0, S.k - 35) * 0.011 - S.f * 0.12 - Math.max(0, S.p) * 0.14 - Math.max(0, -S.t) * 0.01)); }
  function push() {
    if (!V) return;
    S.reachMsg = null;
    V.rig.setPose({ kyph: S.k, fwd: S.f, prot: S.p, scapTilt: S.t, er: S.er, shrug: S.sh, gain: gain(), elev: V.rig.pose.elev });
    readout();
  }
  function readout() {
    if (!V || plumbZ === null) return;
    if (S.reachMsg) { ro.innerHTML = S.reachMsg; return; }
    const r = V.rig;
    const head = (skull0 - r.tpt('skull').z);
    const gap = r.clearance() * 10;
    ro.innerHTML = `Head forward of neutral: <b>${Math.max(0, head).toFixed(1)} cm</b><br><span class="muted">Scapular contribution at overhead: <b style="color:var(--lime);font-size:18px">${Math.round(gain() * 100)}%</b> of normal (illustrative)</span>`;
    void gap;
  }
  function applyPreset(id) {
    S.key = id;
    const P = POSTURES[id];
    S.k = P.kyph; S.f = P.fwd; S.p = P.prot; S.t = P.tilt; S.er = P.er; S.sh = P.shrug;
    sl.k.set(S.k, true); sl.f.set(S.f, true); sl.p.set(S.p, true); sl.t.set(S.t, true); sl.er.set(S.er, true); sl.sh.set(S.sh, true);
    detail.replaceChildren(h('span', { class: 'label red' }, 'Pattern'), h('h3', null, P.name), h('p', null, P.text));
    checks.replaceChildren(h('span', { class: 'label' }, 'What to look for next'),
      ...(P.checks.length ? P.checks.map(c => h('div', { class: 'ex' }, h('b', null, c[0]), h('span', null, c[1]))) : [h('p', null, 'Pick a pattern to see which movement checks it points to.')]));
    push(); colorize();
  }
  function colorize() {
    if (!V) return;
    const r = V.rig, P = POSTURES[S.key];
    r.resetMuscles();
    r.muscleDefs.forEach(d => {
      let col = null;
      if (S.color && P.tight.includes(d.id)) col = 0xe0c04a;
      else if (S.color && P.weak.includes(d.id)) col = 0x7eb6ff;
      r.setMuscle(d.id, { visible: true, color: col ?? d.color, opacity: S.color ? (col ? 1 : 0.3) : 0.85, glow: col ? 0.25 : 0 });
    });
    V.invalidate();
  }
  reachBtn.addEventListener('click', () => {
    if (!V) return;
    const maxE = Math.round(Math.max(110, 178 - Math.max(0, S.k - 35) * 0.9 - S.f * 12 - Math.max(0, S.p) * 10 + Math.max(0, S.t) * 0.3));
    tweenPose(V, { elev: 0, plane: 40 }, 250, null, () => tweenPose(V, { elev: maxE, plane: 40 }, 1600, null, () => {
      S.reachMsg = `Reaches about <b>${maxE}°</b> before the model runs out of scapular help.<br><span class="muted">${maxE < 160 ? 'Expect the back to arch and the ribs to flare to make up the difference.' : 'Within normal reach.'}</span>`;
      readout();
    }));
  });
  resetBtn.addEventListener('click', () => {
    if (!V) return;
    S.reachMsg = null;
    tweenPose(V, { elev: 0, plane: 40 }, 700, null, () => readout());
  });
  applyPreset('neutral');

  mountStage(host, {
    view: 'lat',
    attach(v) {
      V = v; ov = new Overlay(v);
      baseline(v, { muscles: true, lig: false, left: false, bone: 0.9 });
      v.rig.setPose({ kyph: 35, fwd: 0, prot: 0, scapTilt: 0 });
      v.rig.update(true);
      plumbZ = v.rig.pt(['S', 4.4, 4.4, -1.2]).z; skull0 = v.rig.tpt('skull').z;
      ov.line([() => v3(8, -32, plumbZ), () => v3(8, 46, plumbZ)], { color: 0xd4f57a, r: 0.12, opacity: 0.8 });
      ov._addLabel('Plumb line', 'lime', () => v3(8, 44, plumbZ));
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.afterRig = (prev => () => { prev && prev(); readout(); })(v.afterRig);
      v.setView({ pos: [125, 8, 4], tgt: [8, 6, 0] }, 0);
      push(); colorize();
    },
    detach() { V = null; ov = null; },
  });
}

/* ======================= STEP 8 · SHOULDER SYNDROMES (from the VeloU shoulder exam) ======================= */
const NORMS = [['3"', 'Medial border to spine, parallel to it'], ['T2–T7', 'Where the scapula sits'], ['30°', 'Scapula rotated to the frontal plane, flat on the thorax'],
  ['< 1/3', 'Humeral head in front of the acromion'], ['T1', 'Shoulders sit slightly below this horizontal line'], ['Palms in', 'Facing the body, humerus in neutral rotation']];
const SYN = {
  normal: { name: 'Normal reference', short: 'Normal', pose: {}, look: ['Medial border about 3" from the spine and parallel to it', 'Scapula sits T2 to T7, flat on the thorax', 'Palms face the body'], confirm: [], inh: [], act: [], use: [], avoid: [] },
  'downward-rotation': { name: 'Scapular downward rotation', short: 'Downward rotation', pose: { scapUp: -9, shrug: -0.8, gain: 0.45 }, mark: ['S', -7.1, -9.5, 0.4], markText: 'Inferior angle sits close to the spine',
    look: ['Inferior medial border closer to the spine than the superior border', 'Shoulders lower at the acromion end than at the neck'],
    confirm: ['After 30° abduction and 60° flexion, the scapula re-enters downward rotation instead of continuing upward', 'Decreased humeral elevation in the final phase of flexion', 'Inferior angle doesn\'t reach midaxillary at the end of upward rotation'],
    inh: ['Rhomboids', 'Levator scapula', 'Pectoralis minor', 'Latissimus dorsi', 'Deltoid', 'Supraspinatus'], act: ['Upper trapezius', 'Lower trapezius', 'Serratus anterior'],
    use: ['Vertical shrugs', 'Quadruped moves', 'Wall slide variations', 'Landmine presses', 'Shoulder flexion'], avoid: ['Shrugs', 'Heavy carries', 'Frequent deadlifting', 'Pull / chin-up', 'Excessive scapular adduction'] },
  depression: { name: 'Scapular depression', short: 'Depression', pose: { shrug: -2.4, gain: 0.75 }, mark: ['S', -8.4, 6.9, 0.4], markText: 'Superior angle below T2',
    look: ['Like downward rotation, but rhomboids and levator scapulae usually aren\'t short', 'Long neck; superior angle below T2', 'Lat dominance may be interfering with elevation'],
    confirm: ['Active-assisted scapular elevation separates out associated pain', 'Upper trap doesn\'t elevate the shoulder during elevation', 'Pain in the upper trap region'],
    inh: ['Pectoralis minor', 'Latissimus dorsi', 'Pectoralis major'], act: ['Upper trapezius', 'Middle trapezius', 'Levator scapula'],
    use: ['Wall-assisted flexion', 'Quadruped moves', 'Wall slide variations', 'Landmine presses', 'OH carry'], avoid: ['Shrugs', 'Heavy carries', 'Frequent deadlifting', 'Pull / chin-up', 'Prone trap raises'] },
  abduction: { name: 'Scapular abduction', short: 'Abduction', pose: { prot: 1.0 }, mark: ['S', -9.7, -3.5, 0.4], markText: 'Medial border more than 3" from spine',
    look: ['Medial border more than 3" from the spine', 'Scapula rotated more than 30° into the frontal plane'],
    confirm: ['Measure medial border to spine', 'Active-assisted adduction produces pain in shoulder flexion'],
    inh: ['Pectoralis major', 'Pectoralis minor', 'Deltoid', 'Supraspinatus', 'Serratus anterior'], act: ['Upper trapezius', 'Middle trapezius', 'Rhomboids'],
    use: ['Horizontal rowing variations', 'Prone abduction', 'Heavy carries', 'Adducted goblet position'], avoid: ['Zercher positioning', 'Serratus-dominant exercises', 'Overhead pressing'] },
  winging: { name: 'Scapular winging and tilting', short: 'Winging / tilting', pose: { scapIR: 22, scapTilt: -14, gain: 0.6 }, mark: ['S', -9.7, -3.5, 0.4], markText: 'Medial border / inferior angle protrude',
    look: ['Inferior angle protrudes (tilting)', 'Thoracic kyphosis (tilting)', 'Medial border protrudes from the thorax (winging)', 'Flat thoracic spine (winging)'],
    confirm: ['Scapula and humerus move 1:1', 'Insufficient posterior tilt even with passive guidance'],
    inh: ['Pectoralis minor', 'Rotator cuff', 'Deltoid', 'Serratus anterior*'], act: ['Upper trapezius', 'Lower trapezius', 'Middle trapezius', 'Serratus anterior*', 'Rhomboids'],
    use: ['Prone trap raises', 'Wall slide variations', 'Quadruped movements', 'Wall press / push-up'], avoid: ['Anything that lets winging continue during the rep'],
    note: '*Serratus anterior appears on both sides of the poster.' },
  'anterior-glide': { name: 'Humeral anterior glide', short: 'Anterior glide', pose: { antGlide: 1.7, scapTilt: -10 }, mark: ['R', 0, 0, -2.9], markText: 'Head sits forward of the acromion',
    look: ['More than 1/3 of the humeral head in front of the acromion', 'Distal humerus posterior to the proximal end', 'Usually with an anteriorly tilted scapula'],
    confirm: ['Passively correcting the glide reduces symptoms', 'A small indentation below the acromion on the back of the shoulder'],
    inh: ['Pectoralis minor', 'Pectoralis major'], act: ['External rotators'],
    use: ['Banded ER + IR', 'Supine flexion', 'Horizontal row', 'T-spine mobility', 'Quadruped'], avoid: ['Overhead pressing', 'Rowing with anterior glide', 'Heavy IR focus'] },
  'superior-glide': { name: 'Humeral superior glide', short: 'Superior glide', pose: { supGlide: 1.1 }, mark: ['R', 0, 2.6, 0], markText: 'Head rides up into the acromion',
    look: ['Humeral head rides up into the acromion during elevation, flexion, and abduction'],
    confirm: ['Sharp pain at the front and side of the acromion in abduction and rotation', 'Correcting depressed shoulders doesn\'t change humeral head height', 'Symptoms in flexion drop with the elbows bent'],
    inh: ['Deltoid', 'Teres minor', 'Supraspinatus'], act: ['Supraspinatus', 'Infraspinatus'],
    use: ['Wall slides + lift-offs', 'Prone ER lift-offs', 'Prone IR without superior glide', 'Prone trap raises'], avoid: ['ER in adduction', 'Abduction with a straight elbow', 'Resisted flexion with a straight elbow'] },
  'medial-rotation': { name: 'Shoulder medial rotation', short: 'Medial rotation', pose: { er: -28, elbow: 25, pron: 180 }, mark: ['H', 0, -30, 0], markText: 'Elbow sits away, palm faces back',
    look: ['Humerus medially rotated in the anatomical position', 'Elbows sit away from the body'],
    confirm: ['Shoulder flexion bends the elbow and flares it out', 'Less humeral lateral rotation during flexion', 'Palms face backward in the anatomical position'],
    inh: ['Latissimus dorsi', 'Pectoralis minor', 'Pectoralis major', 'Teres major'], act: ['Lateral rotators'],
    use: ['Shoulder flexion', 'Wall slides', 'Quadruped movements', 'External rotation', 'Bottoms-up carries'], avoid: ['Pull / chin-ups', 'OH pressing', 'Zercher positioning'] },
};
const LOOKUP = [
  ['Scapula (thoracoscapular muscles)', [['Shoulder elevated + acromion lifted', 'Upper trap shortened'], ['Shoulder elevated, acromion not lifted', 'Levator scapula shortened'], ['Head rotates toward the shoulder in flexion', 'Levator scapula shortened'], ['Shoulder depressed', 'Upper trap lengthened'], ['Scapula adducts during external rotation', 'Rhomboid dominance'], ['Not enough scapular abduction in shoulder flexion', 'Serratus weakness']]],
  ['Trunk to arm (thoracohumeral muscles)', [['Loses the last 1/3 of shoulder flexion', 'Pec minor + lat dominance'], ['Excessive anterior glide of the humerus', 'Pec minor shortness'], ['Loss of shoulder elevation', 'Pec minor + lat dominance'], ['Low back extends during shoulder flexion', 'Shortened abdominals']]],
  ['Shoulder joint (scapulohumeral muscles)', [['Humeral head glides up in abduction', 'Deltoid dominance or weak rotator cuff'], ['Humeral head glides forward in motion', 'Posterior deltoid dominance'], ['Resting in medial rotation + abduction', 'Predisposed to impingement'], ['Depressed shoulders + poor elevation', 'Shortened deltoid + supraspinatus'], ['Shoulders depressed', 'Supraspinatus vulnerable to injury'], ['Poor supine sleeper position (tight posterior capsule)', 'Lateral rotators shortened'], ['Anterior glide from lat or pec major dominance', 'Lengthened or weak subscapularis'], ['Center of rotation drops in flexion or abduction', 'Lengthened or weak teres major'], ['Humerus medially rotated with good scapular position', 'Medial rotator dominance']]],
];
const RULES = [
  'Expect more than one dysfunction. Choose drills so fixing one doesn\'t work against another.',
  'Inhibit the overactive muscle before you activate the underactive one.',
  'Watch how global lifts affect the corrective work, like deadlifts for an athlete with shoulder depression syndrome.',
  'No symptoms does not mean healthy.',
];
export function step8(host, panel, factsHost) {
  let V = null, ov = null;
  const S = { key: 'normal', elev: 0, load: false };
  const tip = tooltip(host);
  const tools = stageTools(host);
  stageHint(host, 'Back view · left scapula is the normal reference');
  const types = btnGroup(Object.entries(SYN).map(([id, d]) => ({ id, label: d.short })), id => { S.key = id; apply(); }, { initial: 'normal' });
  const elev = slider({ label: 'Elevate the arm', min: 0, max: 160, value: 0, onInput: v => { S.elev = v; apply(); } });
  const load = toggle('Add resistance (load)', false, on => { S.load = on; apply(); });
  const detail = card();
  const norms = h('div', { class: 'stats-row', style: 'grid-template-columns:repeat(auto-fit,minmax(120px,1fr))' }, ...NORMS.map(n => h('div', { class: 'fact' }, h('b', { style: 'font-size:26px' }, n[0]), h('span', { style: 'font-size:14px' }, n[1]))));
  panel.append(card(h('span', { class: 'label' }, 'Syndrome'), types.el, elev.el, load.el), detail);

  const col = (c, t, items) => h('div', { style: `border-top:3px solid ${c};padding-top:6px` }, h('span', { class: 'label', style: `color:${c}` }, t), h('ul', { class: 'tight' }, ...items.map(i => h('li', null, i))));
  function apply() {
    const D = SYN[S.key];
    const img = S.key !== 'normal' ? h('img', { src: `../onboarding/assets/shoulder/${S.key}.jpg`, alt: D.name + ' example', style: 'width:100%;border:1px solid var(--line);background:#fff;max-height:260px;object-fit:contain' }) : null;
    detail.replaceChildren(h('span', { class: 'label red' }, S.key === 'normal' ? 'Reference' : 'Syndrome'), h('h3', null, D.name),
      img,
      h('div', null, h('span', { class: 'label' }, 'Look for'), h('ul', { class: 'tight' }, ...D.look.map(i => h('li', null, i)))),
      D.confirm.length ? h('div', null, h('span', { class: 'label' }, 'Confirm'), h('ul', { class: 'tight' }, ...D.confirm.map(i => h('li', null, i)))) : null,
      D.inh.length ? h('div', { class: 'grid2' }, col('#E5534B', 'Inhibit · short', D.inh), col('#A6E84A', 'Activate · weak', D.act), col('#D4F57A', 'Use', D.use), col('#E0C04A', 'Avoid', D.avoid)) : h('p', null, 'Pick a syndrome to see how to confirm it and what to inhibit, activate, use, and avoid.'),
      D.note ? h('p', { style: 'font-size:13.5px' }, D.note) : null);
    if (!V) return;
    const p = { scapUp: 0, scapTilt: 0, scapIR: 0, prot: 0, shrug: 0, gain: 1, antGlide: 0, supGlide: 0, er: 0, elbow: 20, pron: 90, ...D.pose, elev: S.elev, plane: 40 };
    if (S.load) { p.scapUp += 5; p.scapTilt -= 4; }
    V.rig.setPose(p);
    ov.clear();
    if (D.mark) ov.marker(D.mark, { color: 0xe5534b, r: 0.8, text: D.markText });
    if (S.load) ov.arrow(['F', 0, -23, 0], () => v3(0, -1, 0), { color: 0xe5534b, len: 9, text: 'Load', cls: 'lime' });
    V.invalidate();
  }
  apply();

  // below the stage: normals, quick lookup, rules, and the research the rest of the lab cites
  const lookup = h('div', { class: 'card', style: 'grid-column:1/-1' }, h('span', { class: 'label' }, 'Quick lookup: if you see'),
    ...LOOKUP.map((g, i) => h('details', { class: 'phase', open: i === 0 }, h('summary', null, h('span', { class: 'n' }, String(i + 1)), h('div', null, h('b', null, g[0]))),
      h('div', { class: 'body' }, ...g[1].map(r => h('div', { class: 'ex' }, h('b', null, r[0]), h('span', null, '= ' + r[1])))))));
  const rules = h('div', { class: 'card', style: 'grid-column:1/-1' }, h('span', { class: 'label' }, 'Four rules for using this'),
    ...RULES.map((t, i) => h('div', { class: 'ex' }, h('b', null, 'Rule ' + (i + 1)), h('span', null, t))));
  const normCard = h('div', { class: 'card', style: 'grid-column:1/-1' }, h('span', { class: 'label' }, 'What normal looks like'), norms);
  const facts = [
    ['34%', 'higher injury risk for each 1° more scapular upward rotation under manual load, over 12 months (27 collegiate pitchers, 7 injured; small sample).'],
    ['6.4° vs 1.4°', 'change in scapular upward rotation with resistance in pitchers who got hurt versus those who didn\'t. Resting ROM and rotation deficits were the same.'],
    ['+227 g', 'shoulder muscle mass gained with blood-flow-restriction cuff work versus +75 g in controls, in-season, at 20% of max, twice weekly for 8 weeks. Mechanics held.'],
  ];
  factsHost.append(normCard, lookup, rules, ...facts.map(f => h('div', { class: 'fact' }, h('span', { class: 'tag' }, 'From the research'), h('b', null, f[0]), h('span', null, f[1]))),
    h('a', { class: 'btn', href: '../onboarding/assets/shoulder/poster.jpg', target: '_blank', rel: 'noopener', style: 'grid-column:1/-1;justify-self:start;text-decoration:none' }, 'Open the full shoulder poster'));

  mountStage(host, {
    view: 'post',
    attach(v) {
      V = v; ov = new Overlay(v);
      baseline(v, { muscles: false, lig: false, left: true, bone: 1 });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.rig.setPose({ elbow: 20 });
      apply();
      v.setView({ pos: [52, 10, 84], tgt: [6, 0, 2] }, 0);
    },
    detach() { V = null; ov = null; },
  });
}

/* ======================= STEP 9 · THROWING ADAPTATIONS ======================= */
const FACTS9 = [
  ['3.3×', 'Mobility', 'Left-handed high school pitchers with 109° or more of passive ER at 90° abduction were 3.3 times more likely to have a shoulder or elbow injury (n = 160). Injured group averaged 114.8° vs 107.5°, with a total arc of 166.4° vs 156.0°.'],
  ['−10°', 'Surgery', 'Pitchers at least a year out from a labrum (SLAP) repair showed about 10° less layback (168° vs 178°) and half the horizontal abduction (10° vs 21°). Velocity and elbow torque were unchanged.'],
  ['24 h', 'Acute', 'After 100 full-effort pitches, glenohumeral IR range was down and stayed down for at least 24 hours. Pitchers with higher arm speed lost more IR.'],
  ['93.9%', 'Imaging', 'Of asymptomatic elite pitching prospects (n = 75), 93.9% of pitchers had rotator cuff abnormalities and 75.8% had labral tears on imaging, with no complaints. Findings are not symptoms.'],
  ['1.6 mph', 'Strength', 'Per 30 N more ER peak force, about 1.6 mph; per 30 N more IR, about 1 mph. Rate of force development showed no link to velocity.'],
  ['No link', 'Velocity', 'In collegiate pitchers, shoulder ROM showed no relationship to velocity or joint kinetics, while IR and ER isometric strength correlated (r = .61 and .56).'],
  ['r = .865', 'Load', 'In adolescent pitchers, ball velocity tracked shoulder IR torque very closely. Greater IR strength with a smaller total arc also meant more elbow valgus torque (R² = .26).'],
  ['−4.2 N·m', 'Arm slot', 'Each 10° lower arm slot cut elbow varus torque about 4.2 N·m and improved shoulder torque efficiency with no velocity loss (86 mph average, elite college).'],
  ['0.3 N·m', 'Variability', 'In 362 Division I pitchers, each 1° more variability around 90° of shoulder elevation in cocking went with 0.3 N·m less peak elbow varus torque.'],
  ['6° more ER', 'Efficiency', 'Pitchers with more efficient shoulder torque set up with less abduction at foot contact (84° vs 89°) and reached more ER at max layback (171° vs 165°).'],
  ['+20%', 'Implements', 'Modeled in youth pitchers, 7 and 9 oz balls raised shoulder distraction force about 20% (1,987 N to about 2,400 N) with no change in anterior or superior shear.'],
  ['14–20%', 'Strength', 'Position players had 14 to 20% more shoulder ER and IR strength than pitchers on the throwing arm, even with less arm-care programming.'],
  ['2.4 mm', 'Screening', 'Posterior capsule thickness by ultrasound matched MRI (r = .945, 25 drafted pitchers), so a cheap, quick screen is now possible.'],
  ['r = .67', 'Vascular', 'In 66 professional pitchers, lower blood flow in a late-cocking position went with weaker grip (r = .67). At rest there was no link.'],
];
export function step9(host, panel, factsHost, calcHost, outHost) {
  let V = null;
  const S = { retro: 42, soft: 0 };
  const ND = { retro: 30, er: 100, ir: 70 };
  const tip = tooltip(host);
  const ro = stageReadout(host);
  const tools = stageTools(host);
  stageHint(host, 'Top view of the head · drag to rotate');
  const sRetro = slider({ label: 'Humeral retroversion · throwing arm', min: 20, max: 55, value: 42, ends: ['20°', '55°'], onInput: v => { S.retro = v; render(); } });
  const sSoft = slider({ label: 'Posterior soft tissue tightness (loss of IR)', min: 0, max: 30, value: 0, onInput: v => { S.soft = v; render(); } });
  const svg = h('div', { class: 'svgbox' });
  const verdict = h('div', { class: 'flag' });
  const exp = card(h('span', { class: 'label' }, 'Bone vs soft tissue'),
    h('p', null, 'Both arms start with a 170° passive arc at 90° abduction (100° ER, 70° IR), and the non-throwing arm has 30° of retroversion. Dial the throwing arm\'s retroversion up and the whole arc slides toward ER. Add tightness to cut the total.'),
    sRetro.el, sSoft.el, svg, verdict);
  panel.append(exp);

  function render() {
    const shift = S.retro - ND.retro;
    const er = ND.er + shift, ir = ND.ir - shift - S.soft, tot = er + ir, ndTot = ND.er + ND.ir;
    const irDef = ND.ir - ir, arcDef = ndTot - tot;
    const W = 420, sc = 2.2, x0 = 22;
    const bar = (y, e, i, lab) => `<text x="${x0}" y="${y - 6}" fill="#aa9f97" font-size="13" letter-spacing="1.2">${lab.toUpperCase()}</text>
      <rect x="${x0}" y="${y}" width="${i * sc}" height="26" fill="#7EB6FF"/><rect x="${x0 + i * sc}" y="${y}" width="${e * sc}" height="26" fill="#E5534B"/>
      <text x="${x0 + 6}" y="${y + 18}" fill="#101418" font-size="15" font-weight="700">IR ${Math.round(i)}°</text><text x="${x0 + i * sc + 6}" y="${y + 18}" fill="#fff" font-size="15" font-weight="700">ER ${Math.round(e)}°</text>
      <text x="${x0 + (i + e) * sc + 8}" y="${y + 18}" fill="#f1e9e4" font-size="15">${Math.round(i + e)}° total</text>`;
    const cx = 330, cy = 200, R = 46, a = S.retro * Math.PI / 180;
    const arrow = (ang, len, col) => `<line x1="${cx}" y1="${cy}" x2="${cx + Math.cos(ang) * len}" y2="${cy - Math.sin(ang) * len}" stroke="${col}" stroke-width="3"/>`;
    svg.innerHTML = `<svg viewBox="0 0 ${W} 250" width="100%" role="img" aria-label="Range of motion arcs and head orientation">
      ${bar(40, ND.er, ND.ir, 'Non-throwing arm (30° retro)')}${bar(100, er, ir, 'Throwing arm (' + Math.round(S.retro) + '° retro)')}
      <text x="${x0}" y="170" fill="#766b63" font-size="12" letter-spacing="1.2">TOP VIEW · HEAD VS ELBOW AXIS</text>
      <circle cx="${cx}" cy="${cy}" r="${R}" fill="#1b1714" stroke="#766b63"/>
      ${arrow(0, R + 30, '#aa9f97')}${arrow(Math.PI, R + 30, '#aa9f97')}
      ${arrow(Math.PI / 2 + a - Math.PI / 2, R + 6, '#E5534B')}
      <text x="${cx - R - 40}" y="${cy + 4}" fill="#aa9f97" font-size="12">elbow axis</text>
      <text x="${cx + 8}" y="${cy - R - 8}" fill="#E5534B" font-size="12">head faces back ${Math.round(S.retro)}°</text>
      <circle cx="${cx}" cy="${cy}" r="3" fill="#f1e9e4"/></svg>`;
    const flagA = Math.abs(arcDef) >= 5, flagI = irDef >= 18;
    const col = flagA ? 'var(--red)' : flagI ? 'var(--amber)' : 'var(--lime)';
    verdict.style.setProperty('--c', col);
    verdict.innerHTML = `<i></i><div><b>IR deficit ${Math.round(irDef)}° · total arc deficit ${Math.round(arcDef)}°.</b> ${flagA ? 'Total arc is down by 5° or more. That is the soft tissue flag. Treat this one.' : flagI ? 'A large IR deficit with a matching total arc is mostly bone (retroversion). Don\'t chase the IR range.' : 'Looks like a normal adaptation: arc slid toward ER, total matches.'}</div>`;
    ro.innerHTML = `ER gain <b style="color:var(--red)">+${Math.round(er - ND.er)}°</b> · IR loss <b style="color:var(--cool)">−${Math.round(irDef)}°</b>`;
    if (V) V.rig.setPose({ retro: S.retro });
  }
  render();

  // facts
  FACTS9.forEach(f => factsHost.append(h('div', { class: 'fact' }, h('span', { class: 'tag' }, f[1]), h('b', null, f[0]), h('span', null, f[2]))));

  // calculator
  const inp = {};
  const mkF = (id, lab, val) => { inp[id] = h('input', { type: 'number', inputmode: 'decimal', value: val, step: 1 }); inp[id].addEventListener('input', calc); return h('div', { class: 'field' }, h('label', null, lab), inp[id]); };
  calcHost.append(h('span', { class: 'label' }, 'Enter passive ROM, supine, 90° abduction, scapula stabilised'),
    h('div', { class: 'grid2' }, mkF('der', 'Throwing arm · ER °', 118), mkF('dir', 'Throwing arm · IR °', 52), mkF('ner', 'Other arm · ER °', 105), mkF('nir', 'Other arm · IR °', 68)),
    h('p', { class: 'muted', style: 'font-size:14px;margin:0' }, 'Same position, same tester, same time of day. Re-test on the same schedule across a season.'));
  function calc() {
    const g = id => parseFloat(inp[id].value) || 0;
    const dT = g('der') + g('dir'), nT = g('ner') + g('nir');
    const arc = nT - dT, irD = g('nir') - g('dir'), erG = g('der') - g('ner');
    const rows = [
      ['Throwing arm total arc', dT + '°'], ['Other arm total arc', nT + '°'], ['Total arc deficit', (arc > 0 ? '-' : '+') + Math.abs(arc) + '°'],
      ['IR deficit', irD + '°'], ['ER gain', (erG >= 0 ? '+' : '') + erG + '°'], ['ABER ≥ 109° (single-study flag)', g('der') >= 109 ? 'Yes' : 'No'],
    ];
    const flags = [];
    if (arc >= 5) flags.push(['var(--red)', 'Total arc is down ' + arc + '°. Rule-of-thumb flag is 5° or more. Look at posterior capsule and cuff.']);
    else flags.push(['var(--lime)', 'Total arc is within 5°. Whatever shifted is an adaptation.']);
    if (irD >= 18) flags.push([arc >= 5 ? 'var(--red)' : 'var(--amber)', 'IR deficit ' + irD + '°. Common clinic flag is 18 to 20°. With a matching total arc it is bone, not capsule.']);
    if (g('der') >= 109) flags.push(['var(--amber)', 'ER at or beyond the 109° line in one high school study. Context, not a verdict; check strength, laxity and workload.']);
    outHost.replaceChildren(h('span', { class: 'label' }, 'Readout'), kv(rows), ...flags.map(f => h('div', { class: 'flag', style: '--c:' + f[0] }, h('i'), h('span', null, f[1]))));
  }
  calc();

  mountStage(host, {
    view: 'sup',
    attach(v) {
      V = v;
      baseline(v, { muscles: false, lig: false, left: false, bone: 1, pose: { elev: 90, plane: 0, er: 90, elbow: 90, retro: S.retro } });
      v.rig.setPose({ elev: 90, plane: 0, er: 90, elbow: 90, rhythm: true, retro: S.retro });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.setView({ pos: [24, 70, 22], tgt: [14, 4, 0] }, 0);
      render();
    },
    detach() { V = null; },
  });
}

/* ======================= STEP 10 · SPECIAL TESTS ======================= */
const DOWN = [0, -1, 0], UP = [0, 1, 0], POST = [0, 0, 1], ANT = [0, 0, -1], MED = [-1, 0, 0];
const TESTS = [
  // Rotator cuff
  { id: 'jobe', cat: 'Cuff', name: 'Empty can (Jobe)', targets: ['supraspinatus'],
    pose: { elev: 90, plane: 35, er: -30, elbow: 0, pron: 180 }, arrow: { from: ['F', 0, -22, 0], dir: DOWN, text: 'Resist downward' },
    steps: ['Arm at 90° in the scapular plane (30–40° forward of the side).', 'Elbows straight, thumbs pointed down.', 'Examiner pushes down on the forearms; patient resists.'],
    pos: 'Pain or weakness compared with the other side. Full can (thumbs up) is the same test with less provocation.', sug: 'Supraspinatus tendinopathy or tear; subacromial pain; suprascapular nerve.', note: 'Isolating supraspinatus is hard in the real shoulder. Treat this as a cuff test, not a muscle test.' },
  { id: 'drop', cat: 'Cuff', name: 'Drop arm', targets: ['supraspinatus', 'infraspinatus'],
    pose: { elev: 90, plane: 0, er: 0, elbow: 0, pron: 180 }, positive: { elev: 25 }, arrow: null,
    steps: ['Examiner passively abducts the arm to 90° and releases.', 'Patient is asked to lower it slowly, in the same arc.'],
    pos: 'Arm drops, or can\'t be lowered smoothly.', sug: 'Large to massive supraspinatus tear; severe weakness.', note: 'A positive drop arm is rare and means a large problem. A negative one rules out very little.' },
  { id: 'erlag', cat: 'Cuff', name: 'ER lag sign', targets: ['infraspinatus', 'supraspinatus'],
    pose: { elev: 25, plane: 40, er: 85, elbow: 90 }, positive: { er: 50 }, arrow: { from: ['F', 0, -22, 0], dir: MED, space: 'arm', text: 'Hold ER' },
    steps: ['Elbow at 90°, arm at 20° in scapular plane.', 'Passively externally rotate to near end range and support the wrist.', 'Release the wrist and ask the patient to hold the position.'],
    pos: 'The forearm drifts back toward internal rotation (lag).', sug: 'Supraspinatus / infraspinatus tear. Larger lags suggest larger tears.', note: 'Compare with the other side. Needs a smooth, quiet start.' },
  { id: 'rer', cat: 'Cuff', name: 'Resisted ER at the side', targets: ['infraspinatus', 'teres-minor'],
    pose: { elev: 0, plane: 40, er: 5, elbow: 90 }, arrow: { from: ['F', 0, -22, 0], dir: MED, space: 'arm', text: 'Push toward IR' },
    steps: ['Elbows tucked in at the side, elbows at 90°, towel roll if available.', 'Patient externally rotates against resistance at the wrist.', 'Look at strength, pain, and ability to hold.'],
    pos: 'Weakness or pain vs the other side.', sug: 'Infraspinatus / teres minor tendinopathy or tear; suprascapular nerve.', note: 'ER:IR strength relationship is more informative than ER by itself.' },
  { id: 'horn', cat: 'Cuff', name: 'Hornblower\'s', targets: ['teres-minor', 'infraspinatus'],
    pose: { elev: 90, plane: 0, er: 90, elbow: 90 }, positive: { er: 55 }, arrow: { from: ['F', 0, -20, 0], dir: ANT, text: 'Resist IR' },
    steps: ['Arm at 90° abduction, elbow at 90°, in the scapular plane.', 'Patient externally rotates against resistance.'],
    pos: 'Inability to hold ER; arm drops into IR ("hornblower").', sug: 'Teres minor involvement; large posterior cuff tear.', note: 'Mostly seen in large tears, so negative is common in athletes.' },
  { id: 'belly', cat: 'Cuff', name: 'Belly press', targets: ['subscapularis'],
    pose: { elev: 0, plane: 90, er: -70, elbow: 95, pron: 180 }, positive: { er: -30, elbow: 70 }, arrow: { from: ['F', 0, -18, 0], dir: POST, text: 'Press into belly' },
    steps: ['Palm on the belly, elbow in the scapular plane.', 'Patient presses into the belly while keeping the wrist straight.'],
    pos: 'Wrist flexes or elbow drops back toward the body (can\'t keep the elbow forward).', sug: 'Subscapularis tear or weakness.', note: 'Watch the wrist and elbow, not the hand.' },
  { id: 'lift', cat: 'Cuff', name: 'Lift-off (Gerber)', targets: ['subscapularis'],
    pose: { elev: 25, plane: 165, er: -85, elbow: 90, pron: 150 }, positive: { elev: 5, er: -50 }, arrow: { from: ['F', 0, -22, 0], dir: POST, text: 'Lift hand off back' },
    steps: ['Hand behind the back with the palm out, at the lumbar spine.', 'Patient lifts the hand off the back, then resists a push toward the back.'],
    pos: 'Unable to lift off or hold the hand off the back.', sug: 'Subscapularis tear.', note: 'Requires good IR range. Stiff shoulders can\'t get into the position.' },
  // Subacromial
  { id: 'neer', cat: 'Subacromial', name: 'Neer', targets: ['supraspinatus'], clear: true,
    pose: { elev: 150, plane: 40, er: -30, elbow: 0, pron: 180 }, arrow: { from: ['F', 0, -8, 0], dir: UP, text: 'Passive elevation' },
    steps: ['Scapula stabilised on top by the examiner.', 'Passively elevate the arm in the scapular plane with IR to end range.'],
    pos: 'Pain in the front or lateral shoulder at end range.', sug: 'Subacromial pain / rotator cuff related shoulder pain.', note: 'Sensitive, not specific. Use with Hawkins and painful arc.' },
  { id: 'hawk', cat: 'Subacromial', name: 'Hawkins–Kennedy', targets: ['supraspinatus', 'subscapularis'], clear: true,
    pose: { elev: 90, plane: 100, er: -60, elbow: 90, pron: 100 }, arrow: { from: ['F', 0, -20, 0], dir: DOWN, text: 'Passive IR' },
    steps: ['Shoulder at 90° of flexion, elbow at 90°.', 'Examiner internally rotates the shoulder by lowering the forearm.'],
    pos: 'Pain in the front or lateral shoulder.', sug: 'Subacromial impingement pattern; cuff, bursa, or biceps tendon irritation.', note: 'Not specific to the subacromial space; any irritable front-of-shoulder structure can hurt.' },
  { id: 'arc', cat: 'Subacromial', name: 'Painful arc', targets: ['supraspinatus'], clear: true, sweep: true,
    pose: { elev: 60, plane: 20, er: 20, elbow: 0, pron: 90 }, arrow: null,
    steps: ['Patient actively abducts the arm in the frontal plane (or scaption) from the side.', 'Note the angle where pain begins and where it stops.'],
    pos: 'Pain between roughly 60° and 120° that eases above 120°.', sug: 'Subacromial pain syndrome.', note: 'Arc at the top (past 120°) points more toward the AC joint.' },
  // Internal impingement / instability
  { id: 'pimp', cat: 'Instability / internal', name: 'Posterior impingement sign', targets: ['infraspinatus', 'supraspinatus'], mark: ['S', 0.6, 1.4, 1.2], markText: 'Cuff vs posterior-superior labrum',
    pose: { elev: 100, plane: -15, er: 150, elbow: 95 }, arrow: { from: ['F', 0, -18, 0], dir: POST, text: 'Max ER + horizontal abduction' },
    steps: ['Supine, arm at 90–110° abduction and slightly behind the body.', 'Examiner takes the shoulder to full ER with a light overpressure.'],
    pos: 'Deep posterior shoulder pain in the position.', sug: 'Internal impingement: the undersurface of the cuff contacts the posterior-superior glenoid and labrum.', note: 'Some contact is normal in throwers. Pain reproduction is the point.' },
  { id: 'reloc', cat: 'Instability / internal', name: 'Relocation test (Jobe)', targets: ['ighl-a', 'subscapularis'], ligs: ['ighl-a'],
    pose: { elev: 90, plane: -5, er: 135, elbow: 95 }, arrow: { from: ['R', 0, 0, -3.5], dir: POST, text: 'Posterior force on head' },
    steps: ['Supine, arm in 90° abduction and max ER (as above).', 'Examiner applies a posteriorly directed force over the front of the humeral head.'],
    pos: 'The pain reduces or goes away (relief) and returns when the force is released.', sug: 'Internal impingement or subtle anterior instability (the humeral head is shifting forward).', note: 'Relief is the sign; not just pain.' },
  { id: 'appr', cat: 'Instability / internal', name: 'Apprehension test', targets: ['ighl-a', 'mghl'], ligs: ['ighl-a', 'mghl'],
    pose: { elev: 90, plane: 0, er: 120, elbow: 90 }, positive: { er: 140 }, arrow: { from: ['F', 0, -20, 0], dir: POST, text: 'Slow ER to apprehension' },
    steps: ['Supine, arm at 90° abduction, elbow at 90°.', 'Slowly externally rotate to end range.'],
    pos: 'Patient looks or feels like the shoulder is about to come out (apprehension), not just pain.', sug: 'Anterior glenohumeral instability.', note: 'Apprehension is the sign. Pain alone is less specific.' },
  { id: 'sulcus', cat: 'Instability / internal', name: 'Sulcus sign', targets: ['sghl'], ligs: ['sghl'], mark: ['S', 4.5, 3.2, -1.0], markText: 'Sulcus under acromion',
    pose: { elev: 0, plane: 40, er: 0, elbow: 0 }, arrow: { from: ['F', 0, -20, 0], dir: DOWN, text: 'Longitudinal traction' },
    steps: ['Arm relaxed at the side.', 'Examiner pulls down on the arm.'],
    pos: 'A visible dimple (sulcus) under the acromion that persists.', sug: 'Inferior laxity; multidirectional instability.', note: 'Many athletes are naturally lax in both shoulders. Compare sides and ask about symptoms.' },
  // Labrum / biceps
  { id: 'obrien', cat: 'Labrum / biceps', name: 'O\'Brien (active compression)', targets: ['biceps-lh', 'supraspinatus'], mark: ['S', 0.6, 1.5, -0.1], markText: 'Superior labrum / biceps anchor',
    pose: { elev: 90, plane: 108, er: -50, elbow: 0, pron: 180 }, arrow: { from: ['F', 0, -22, 0], dir: DOWN, text: 'Resist downward (thumb down)' },
    steps: ['Arm forward 90°, adducted about 10–15°, elbow straight, thumb down.', 'Examiner pushes down; patient resists.', 'Repeat with the palm up (supinated).'],
    pos: 'Pain or clicking inside the shoulder with the thumb down that eases with the palm up.', sug: 'SLAP / superior labrum pathology. Pain at the top suggests AC joint.', note: 'Not specific alone. Take with Speed\'s and the history.' },
  { id: 'speed', cat: 'Labrum / biceps', name: 'Speed\'s', targets: ['biceps-lh'],
    pose: { elev: 90, plane: 90, er: 25, elbow: 0, pron: 0 }, arrow: { from: ['F', 0, -22, 0], dir: DOWN, text: 'Resist downward (palm up)' },
    steps: ['Arm forward 90°, elbow straight, palm up.', 'Examiner pushes down; patient resists.'],
    pos: 'Pain in the biceps groove or along the front of the shoulder.', sug: 'Long head of biceps tendon irritation; superior labrum.', note: 'Often positive with front shoulder irritation of any kind.' },
  // AC / scapula
  { id: 'cross', cat: 'AC / scapula', name: 'Cross-body adduction', targets: ['pec-major-clav'], mark: ['S', 1.6, 4.5, -1.6], markText: 'AC joint',
    pose: { elev: 90, plane: 135, er: -20, elbow: 90 }, arrow: { from: ['F', 0, -6, 0], dir: MED, text: 'Passive adduction' },
    steps: ['Arm elevated 90° and horizontally adducted across the body.', 'Examiner adds light overpressure at the elbow.'],
    pos: 'Pain directly over the AC joint.', sug: 'AC joint irritation or sprain. Posterior capsule stretch can also be provoked.', note: 'Locate the pain: AC joint is a point; capsule is deeper and diffuse.' },
  { id: 'sat', cat: 'AC / scapula', name: 'Scapular assistance test', targets: ['trapezius-lower', 'serratus'],
    pose: { elev: 120, plane: 40, er: 40, elbow: 0 }, arrow: { from: ['S', -7.5, -9.5, 1.5], dir: [0.5, 1, 0], text: 'Assist upward rotation' },
    steps: ['Arm elevated in the scapular plane, with pain or catching on the way up.', 'Examiner assists scapular upward rotation by lifting the inferior angle up and out.'],
    pos: 'Pain eases or motion feels easier with assistance.', sug: 'Scapular upward rotation contributes to the symptoms; subacromial component.', note: 'Same logic for the retraction test: stabilise the scapula and look for change.' },
];
export function step10(host, panel) {
  let V = null, ov = null;
  const S = { cat: 'Cuff', id: 'jobe', shown: false };
  const tip = tooltip(host);
  const ro = stageReadout(host);
  const tools = stageTools(host);
  stageHint(host, 'Pick a test · drag to rotate');
  const cats = [...new Set(TESTS.map(t => t.cat))];
  const catTabs = tabs(cats.map(c => ({ id: c, label: c })), c => { S.cat = c; S.id = TESTS.find(t => t.cat === c).id; renderList(); select(S.id); }, 'Cuff');
  const listBox = h('div');
  const detail = card();
  const posBtn = h('button', { class: 'btn amber', type: 'button' }, 'Show a positive response');
  const sweepBtn = h('button', { class: 'btn', type: 'button' }, '▶ Sweep 0° to 180°');
  panel.append(card(h('span', { class: 'label' }, 'Test'), catTabs.el, listBox), detail);
  function renderList() {
    const lp = listPicker(TESTS.filter(t => t.cat === S.cat).map(t => ({ id: t.id, label: t.name, color: '' })), id => select(id));
    lp.set(S.id); listBox.replaceChildren(lp.el);
  }
  function select(id) {
    S.id = id; S.shown = false;
    const t = TESTS.find(x => x.id === id);
    detail.replaceChildren(h('span', { class: 'label red' }, t.cat), h('h3', null, t.name),
      h('ol', { class: 'tight' }, ...t.steps.map(s => h('li', null, s))),
      kv([['Positive if', t.pos], ['Suggests', t.sug], ['Keep in mind', t.note]]),
      h('div', { class: 'btns' }, t.positive ? posBtn : null, t.sweep ? sweepBtn : null, h('button', { class: 'btn', type: 'button', onclick: () => place(t) }, '↺ Reset position')));
    if (V) place(t);
  }
  function place(t) {
    if (!V) return;
    const r = V.rig;
    r.resetMuscles(); r.resetLigs();
    r.muscleDefs.forEach(d => r.setMuscle(d.id, { visible: true, opacity: t.targets.includes(d.id) ? 1 : 0.12, glow: t.targets.includes(d.id) ? 0.55 : 0 }));
    r.show('muscles', true); r.show('ligaments', !!t.ligs); r.show('soft', false);
    if (t.ligs) { Object.keys(r.ligs).forEach(id => r.setLig(id, { color: t.ligs.includes(id) ? COL.lig : 0x4a5530, glow: t.ligs.includes(id) ? 0.8 : 0 })); r.capsule.material.opacity = 0.12; r.show('soft', true); }
    ov.clear();
    tweenPose(V, { elbow: 90, pron: 90, scapUp: 0, scapTilt: 0, scapIR: 0, ...t.pose }, 900, null, () => {
      if (t.arrow) {
        const dirFn = t.arrow.space === 'arm' ? () => v3(...t.arrow.dir).applyQuaternion(r.humRoot.getWorldQuaternion(new THREE.Quaternion())) : () => v3(...t.arrow.dir);
        ov.arrow(t.arrow.from, dirFn, { color: 0xe5534b, len: 10, text: t.arrow.text });
      }
      if (t.mark) ov.marker(t.mark, { color: 0xd4f57a, r: 0.7, text: t.markText, cls: 'lime' });
      readout();
    });
  }
  function readout() {
    if (!V) return;
    const t = TESTS.find(x => x.id === S.id);
    if (t.clear) {
      const mm = V.rig.clearance() * 10;
      ro.style.display = ''; ro.innerHTML = `Subacromial clearance (model): <b style="color:${mm < 6 ? 'var(--red)' : 'var(--text)'}">${mm.toFixed(0)} mm</b><br><span class="muted">Smaller = more compression of cuff, bursa, biceps</span>`;
    } else ro.style.display = 'none';
  }
  posBtn.addEventListener('click', () => {
    const t = TESTS.find(x => x.id === S.id);
    if (!V || !t.positive) return;
    S.shown = !S.shown;
    posBtn.textContent = S.shown ? 'Back to normal' : 'Show a positive response';
    tweenPose(V, S.shown ? t.positive : t.pose, 900);
  });
  sweepBtn.addEventListener('click', () => {
    if (!V) return;
    tweenPose(V, { elev: 0, plane: 20, er: 20, elbow: 0 }, 300, null, () => tweenPose(V, { elev: 180 }, 4200, () => readout(), null));
  });
  renderList(); select('jobe');
  mountStage(host, {
    view: 'obl',
    attach(v) {
      V = v; ov = new Overlay(v);
      baseline(v, { muscles: true, lig: false, left: false, bone: 0.85 });
      v.onFrame = null;
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.afterRig = (prev => () => { prev && prev(); readout(); })(v.afterRig);
      place(TESTS.find(x => x.id === S.id));
    },
    detach() { V = null; ov = null; },
  });
}
