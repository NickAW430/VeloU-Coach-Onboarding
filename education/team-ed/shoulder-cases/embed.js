// Team Ed · shoulder cases: three small 3D stages built on the Shoulder Lab's rig, anatomy and test definitions.
// muscleStage  – pick a structure, see it highlighted on the real model
// testStage    – pick a test, watch the model take the position
// clearanceStage – raise the arm with and without scapular rotation and watch the subacromial gap
// romCalc      – ER/IR for both arms -> total arc and deficit (no 3D)
import * as THREE from 'three';
import { COL } from '/shoulder/rig.js?v=15';
import { h, mountStage, Overlay, tweenPose, slider, toggle, stageTools, stageHint, stageReadout, tooltip } from '/shoulder/core.js?v=15';
import { baseline, hoverTips, viewBtns } from '/shoulder/steps-a.js?v=15';
import { TESTS as LAB_TESTS } from '/shoulder/steps-b.js?v=16';

const REST = { elev: 0, plane: 40, er: 0, elbow: 90, pron: 90, scapUp: 0, scapTilt: 0, scapIR: 0 };
const v3 = (x, y, z) => new THREE.Vector3(x, y, z);
const kv = rows => { const d = h('dl', { class: 'kv' }); rows.forEach(([k, v]) => { if (v) d.append(h('dt', null, k), h('dd', null, v)); }); return d; };

// Tests that are not in the Lab's list (range-of-motion positions), in the same shape as the Lab's tests.
export const EXTRA_TESTS = [
  { id: 'rom-ir', cat: 'Range', name: 'Internal rotation range', targets: ['infraspinatus', 'teres-minor', 'deltoid-post'],
    pose: { elev: 90, plane: 0, er: -40, elbow: 90 }, arrow: { from: ['F', 0, -20, 0], dir: [0, 0, -1], text: 'Passive IR to end range' },
    steps: ['Supine, shoulder at 90° abduction, elbow at 90°.', 'Hold the shoulder blade still with one hand so it can\'t tip forward.', 'Rotate the forearm down toward the table until the shoulder blade starts to move. Measure that angle.'],
    pos: 'Compare to the other arm. Note the end-feel (hard stop vs. stretch) and where they feel it.', sug: 'Posterior capsule and cuff tightness reduce IR. Throwers lose some IR from bone adaptation, so compare the total arc.', note: 'Same person, same method, both sides. Re-measure the same way after throwing.' },
  { id: 'rom-er', cat: 'Range', name: 'External rotation range', targets: ['subscapularis', 'pec-major-stern', 'latissimus'],
    pose: { elev: 90, plane: 0, er: 120, elbow: 90 }, arrow: { from: ['F', 0, -20, 0], dir: [0, 0, 1], text: 'Passive ER to end range' },
    steps: ['Same position: supine, 90° abduction, elbow at 90°.', 'Stabilise the shoulder blade and rotate the forearm back toward the table.', 'Measure at end range. Stop at the first firm resistance.'],
    pos: 'Throwers typically show more ER on the throwing side.', sug: 'Added ER is normal (retroversion). Total arc (ER + IR) is what you compare.', note: 'Add ER and IR for each arm. The difference between arms is the number that matters.' },

  { id: 'slp-120', cat: 'Stretch', name: 'Sleeper stretch at 120°', targets: ['infraspinatus', 'teres-minor', 'deltoid-post'], ligs: ['ighl-p'],
    pose: { elev: 120, plane: 0, er: -50, elbow: 90 }, arrow: { from: ['F', 0, -20, 0], dir: [0, 0, -1], text: 'Press forearm toward the table (IR)' },
    steps: ['Side-lying on the throwing side, trunk rolled slightly back so the table holds the shoulder blade.', 'Upper arm at 120° of abduction from the side, elbow at 90°, forearm pointing up.', 'The other hand slowly presses the forearm toward the table until the stretch builds at the back of the shoulder.'],
    rows: [['Feel it', 'At the back of the shoulder, not the front. Note where it is strongest at this angle.'], ['Dose', 'Slow press and hold about 30 seconds, a few times at this angle. Adjust to the athlete.'], ['Stop if', 'Pinching at the front of the shoulder, pain (not stretch), tingling, or the blade rolls forward off the table.'], ['Then', 'Re-measure IR and total arc.']] },
  { id: 'slp-90', cat: 'Stretch', name: 'Sleeper stretch at 90°', targets: ['infraspinatus', 'teres-minor', 'deltoid-post'], ligs: ['ighl-p'],
    pose: { elev: 90, plane: 0, er: -50, elbow: 90 }, arrow: { from: ['F', 0, -20, 0], dir: [0, 0, -1], text: 'Press forearm toward the table (IR)' },
    steps: ['Side-lying on the throwing side, trunk rolled slightly back so the table holds the shoulder blade.', 'Upper arm at 90° of abduction from the side, elbow at 90°, forearm pointing up.', 'The other hand slowly presses the forearm toward the table until the stretch builds at the back of the shoulder.'],
    rows: [['Feel it', 'At the back of the shoulder, not the front. Note where it is strongest at this angle.'], ['Dose', 'Slow press and hold about 30 seconds, a few times at this angle. Adjust to the athlete.'], ['Stop if', 'Pinching at the front of the shoulder, pain (not stretch), tingling, or the blade rolls forward off the table.'], ['Then', 'Re-measure IR and total arc.']] },
  { id: 'slp-60', cat: 'Stretch', name: 'Sleeper stretch at 60°', targets: ['infraspinatus', 'teres-minor', 'deltoid-post'], ligs: ['ighl-p'],
    pose: { elev: 60, plane: 0, er: -50, elbow: 90 }, arrow: { from: ['F', 0, -20, 0], dir: [0, 0, -1], text: 'Press forearm toward the table (IR)' },
    steps: ['Side-lying on the throwing side, trunk rolled slightly back so the table holds the shoulder blade.', 'Upper arm at 60° of abduction from the side, elbow at 90°, forearm pointing up.', 'The other hand slowly presses the forearm toward the table until the stretch builds at the back of the shoulder.'],
    rows: [['Feel it', 'At the back of the shoulder, not the front. Note where it is strongest at this angle.'], ['Dose', 'Slow press and hold about 30 seconds, a few times at this angle. Adjust to the athlete.'], ['Stop if', 'Pinching at the front of the shoulder, pain (not stretch), tingling, or the blade rolls forward off the table.'], ['Then', 'Re-measure IR and total arc.']] },
  { id: 'ir-str', cat: 'Strength', name: 'Resisted IR at the side', targets: ['subscapularis', 'pec-major-stern', 'latissimus'],
    pose: { elev: 0, plane: 40, er: -10, elbow: 90 }, arrow: { from: ['F', 0, -22, 0], dir: [1, 0, 0], space: 'arm', text: 'Push toward ER' },
    steps: ['Elbow tucked at the side, bent 90°, towel roll if available.', 'Athlete turns the forearm in against your hand at the wrist.', 'Look at strength, pain, and how long they can hold. Do the same for resisted ER and compare.'],
    pos: 'Weaker or more painful than the other arm, or ER is much weaker than IR on the throwing side.', sug: 'Internal rotators drive acceleration. The relationship between ER and IR strength matters more than either alone.', note: 'In the research we reviewed, ER and IR strength tracked velocity better than range of motion did. Compare both sides and re-test across the season.' },
];
const ALL_TESTS = [...LAB_TESTS, ...EXTRA_TESTS];

function applyStyles(r, ids, ghost) {
  r.resetMuscles(); r.resetLigs();
  r.muscleDefs.forEach(d => r.setMuscle(d.id, { visible: true, opacity: ids.includes(d.id) ? 1 : ghost, glow: ids.includes(d.id) ? 0.55 : 0 }));
  r.showContext && r.showContext(false);
  r.show('muscles', true);
}
function showLigs(r, ligs) {
  r.show('ligaments', !!ligs); r.show('soft', !!ligs);
  if (ligs) { Object.keys(r.ligs).forEach(id => r.setLig(id, { color: ligs.includes(id) ? COL.lig : 0x4a5530, glow: ligs.includes(id) ? 0.8 : 0 })); r.capsule.material.opacity = 0.12; }
}

/* ---------------- muscles / structures ---------------- */
export function muscleStage(root, items, opts = {}) {
  const color = opts.color || 'var(--red)';
  let V = null, cur = items[0];
  const stage = h('div', { class: 'stage', style: `--c:${color}` }), panel = h('div', { class: 'vpanel', style: `--c:${color}` });
  root.append(stage, panel);
  const tip = tooltip(stage), tools = stageTools(stage);
  stageHint(stage, 'Tap a structure · drag to rotate');
  const list = h('div', { class: 'list' }), detail = h('div', { class: 'vcard' });
  const btns = items.map(it => {
    const b = h('button', { class: 'item', type: 'button' }, h('span', { class: 'sw-c' }), h('span', null, it.name, it.sub ? h('small', null, it.sub) : null));
    b.addEventListener('click', () => select(it)); list.append(b); return b;
  });
  panel.append(list, detail);
  function select(it) {
    cur = it;
    btns.forEach((b, i) => b.classList.toggle('on', items[i] === it));
    detail.replaceChildren(h('h3', null, it.name), kv([['Job', it.job], ['In this case', it.here], ['Look for', it.look]]));
    if (V) apply();
  }
  function apply() {
    const r = V.rig;
    applyStyles(r, cur.ids || [], 0.13);
    showLigs(r, cur.ligs);
    tweenPose(V, { ...REST, ...(cur.pose || {}) }, 700);
    V.setView(cur.view || 'post');
    V.invalidate();
  }
  mountStage(stage, {
    view: 'post',
    attach(v) {
      V = v;
      baseline(v, { muscles: true, lig: false, left: false, bone: 0.8 });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      apply();
    },
    detach() { V = null; },
  });
  select(items[0]);
}

/* ---------------- tests ---------------- */
export function testStage(root, ids, opts = {}) {
  const color = opts.color || 'var(--red)';
  const tests = ids.map(id => ALL_TESTS.find(t => t.id === id)).filter(Boolean);
  let V = null, ov = null, cur = tests[0], shown = false;
  const stage = h('div', { class: 'stage', style: `--c:${color}` }), panel = h('div', { class: 'vpanel', style: `--c:${color}` });
  root.append(stage, panel);
  const tip = tooltip(stage), ro = stageReadout(stage), tools = stageTools(stage);
  stageHint(stage, opts.hint || 'Pick a test · drag to rotate');
  const list = h('div', { class: 'list' }), detail = h('div', { class: 'vcard' });
  const btns = tests.map(t => {
    const b = h('button', { class: 'item', type: 'button' }, h('span', { class: 'sw-c' }), h('span', null, t.name));
    b.addEventListener('click', () => select(t)); list.append(b); return b;
  });
  panel.append(list, detail);
  const posBtn = h('button', { class: 'btn', type: 'button' }, 'Show a positive response');
  const sweepBtn = h('button', { class: 'btn', type: 'button' }, '▶ Sweep 0° to 180°');
  function select(t) {
    cur = t; shown = false; posBtn.textContent = 'Show a positive response';
    btns.forEach((b, i) => b.classList.toggle('on', tests[i] === t));
    detail.replaceChildren(h('h3', null, t.name),
      h('ol', null, ...t.steps.map(s => h('li', null, s))),
      kv(t.rows || [['Positive if', t.pos], ['Suggests', t.sug], ['Keep in mind', t.note]]),
      h('div', { class: 'btns' }, t.positive ? posBtn : null, t.sweep ? sweepBtn : null,
        h('button', { class: 'btn', type: 'button', onclick: () => place(t) }, '↺ Reset position')));
    if (V) place(t);
  }
  function place(t) {
    if (!V) return;
    const r = V.rig;
    applyStyles(r, t.targets, 0.35);
    showLigs(r, t.ligs);
    ov.clear();
    tweenPose(V, { ...REST, ...t.pose }, 900, null, () => {
      if (t.arrow) {
        const dirFn = t.arrow.space === 'arm' ? () => v3(...t.arrow.dir).applyQuaternion(r.humRoot.getWorldQuaternion(new THREE.Quaternion())) : () => v3(...t.arrow.dir);
        ov.arrow(t.arrow.from, dirFn, { color: 0xe5534b, len: 10, text: t.arrow.text });
      }
      if (t.mark) ov.marker(t.mark, { color: 0xd4f57a, r: 0.7, text: t.markText, cls: 'lime' });
      const hc = r.pt(['R', 0, 0, 0]), hd = r.pt(['F', 0, -26, 0]);
      V.focusWorld(hc.clone().lerp(hd, 0.5), Math.max(80, hc.distanceTo(hd) * 2.3), 800);
      readout();
    });
  }
  function readout() {
    if (!V) return;
    if (cur.clear) {
      const mm = V.rig.clearance() * 10;
      ro.style.display = ''; ro.innerHTML = `Subacromial clearance (model): <b style="color:${mm < 6 ? 'var(--red)' : 'var(--text)'}">${mm.toFixed(0)} mm</b>`;
    } else ro.style.display = 'none';
  }
  posBtn.addEventListener('click', () => {
    if (!V || !cur.positive) return;
    shown = !shown; posBtn.textContent = shown ? 'Back to normal' : 'Show a positive response';
    tweenPose(V, shown ? cur.positive : cur.pose, 900);
  });
  sweepBtn.addEventListener('click', () => {
    if (!V) return;
    tweenPose(V, { elev: 0, plane: 20, er: 20, elbow: 0 }, 300, null, () => tweenPose(V, { elev: 180 }, 4200, () => readout(), null));
  });
  mountStage(stage, {
    view: 'obl',
    attach(v) {
      V = v; ov = new Overlay(v);
      baseline(v, { muscles: true, lig: false, left: false, bone: 0.85 });
      v.onFrame = null;
      v.setView({ pos: [100, 28, 125], tgt: [36, -2, -2] }, 0);
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.afterRig = (prev => () => { prev && prev(); readout(); })(v.afterRig);
      place(cur);
    },
    detach() { V = null; ov = null; },
  });
  select(tests[0]);
}

/* ---------------- the subacromial gap ---------------- */
export function clearanceStage(root) {
  let V = null;
  const stage = h('div', { class: 'stage' }), panel = h('div', { class: 'vpanel' });
  root.append(stage, panel);
  const tip = tooltip(stage), ro = stageReadout(stage), tools = stageTools(stage);
  stageHint(stage, 'Raise the arm · drag to rotate');
  const el = slider({ label: 'Arm elevation', min: 0, max: 180, value: 0, ends: ['At side', 'Overhead'], onInput: () => apply() });
  const rhythm = toggle('Shoulder blade rotates up with the arm', true, () => apply());
  const note = h('p', null, '');
  panel.append(
    h('div', { class: 'vcard' }, h('h3', null, 'The gap under the roof'),
      h('p', null, 'Raise the arm and watch the number in the corner: the closest distance between the top of the humerus and the acromion in this model. Then turn the shoulder-blade rotation off and raise it again.'),
      el.el, rhythm.el, note),
    h('div', { class: 'vcard' }, h('p', null, 'The model is stylised and the numbers are for teaching, not measurement. In people the gap varies, and imaging shows it narrows with elevation, most in the middle of the range.')),
  );
  function apply() {
    if (!V) return;
    V.rig.setPose({ ...REST, elev: el.get(), plane: 40, er: 20, elbow: 0, rhythm: rhythm.get() });
    V.invalidate(); readout();
  }
  function readout() {
    if (!V) return;
    const r = V.rig, mm = r.clearance() * 10, st = r.scapularUp();
    ro.innerHTML = `<b>${Math.round(r.pose.elev)}°</b> arm · <b style="color:var(--lime)">${Math.round(st)}°</b> scapula<br>Gap (model): <b style="color:${mm < 6 ? 'var(--red)' : 'var(--text)'}">${mm.toFixed(0)} mm</b>`;
    note.textContent = rhythm.get() ? 'Scapula and humerus share the movement: the roof moves out of the way.' : 'Scapula stays put: the humerus does all of it and runs into the roof sooner.';
  }
  mountStage(stage, {
    view: 'post',
    attach(v) {
      V = v;
      baseline(v, { muscles: true, lig: false, left: false, bone: 0.85 });
      applyStyles(v.rig, ['supraspinatus'], 0.12);
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.afterRig = (prev => () => { prev && prev(); readout(); })(v.afterRig);
      v.setView('post');
      apply();
    },
    detach() { V = null; },
  });
}

/* ---------------- upward vs downward rotators ---------------- */
const UP_IDS = ['trapezius-upper', 'trapezius-lower', 'serratus'];
const DOWN_IDS = ['rhomboids', 'levator', 'pec-minor'];
const UP_COL = 0xd4f57a, DOWN_COL = 0xe5534b;
export function rotatorStage(root) {
  let V = null, show = 'both';
  const stage = h('div', { class: 'stage' }), panel = h('div', { class: 'vpanel' });
  root.append(stage, panel);
  const tip = tooltip(stage), ro = stageReadout(stage), tools = stageTools(stage);
  stageHint(stage, 'Raise the arm · drag to rotate');
  const el = slider({ label: 'Arm elevation', min: 0, max: 180, value: 0, ends: ['At side', 'Overhead'], onInput: () => apply() });
  const modes = [['both', 'Both'], ['up', 'Upward rotators'], ['down', 'Downward rotators']];
  const bs = modes.map(([id, label]) => { const b = h('button', { class: 'btn', type: 'button' }, label); b.addEventListener('click', () => { show = id; apply(); }); return b; });
  const key = (c, t) => h('div', { class: 'sw', style: 'cursor:default' }, h('span', { style: `width:14px;height:14px;border-radius:50%;background:#${c.toString(16).padStart(6, '0')};display:inline-block` }), t);
  panel.append(
    h('div', { class: 'vcard' }, h('h3', null, 'Two teams, one shoulder blade'),
      h('div', { class: 'btns' }, ...bs),
      key(UP_COL, 'Upward rotators: upper trap, lower trap, serratus anterior'),
      key(DOWN_COL, 'Downward rotators: rhomboids, levator scapulae, pec minor'),
      el.el,
      h('p', null, 'Raise the arm. The blade should turn so the socket faces up, and the green muscles do that work while the red ones have to let it happen. Lats pull the blade down through the arm too.')),
    h('div', { class: 'vcard' },
      h('p', null, h('b', { style: 'color:var(--text)' }, 'Why it matters here: '), 'when the red team is tight and the green team is weak or late, the blade stays down-rotated and the roof stays in the way. Fix: loosen the red, wake up the green, then train the arm overhead.')));
  function apply() {
    if (!V) return;
    const r = V.rig;
    r.resetMuscles(); r.resetLigs();
    r.muscleDefs.forEach(d => {
      const up = UP_IDS.includes(d.id) && show !== 'down', dn = DOWN_IDS.includes(d.id) && show !== 'up';
      r.setMuscle(d.id, { visible: true, opacity: up || dn ? 1 : 0.12, glow: up || dn ? 0.55 : 0, ...(up ? { color: UP_COL } : dn ? { color: DOWN_COL } : {}) });
    });
    r.showContext && r.showContext(false);
    r.show('muscles', true);
    bs.forEach((b, i) => b.classList.toggle('on', modes[i][0] === show));
    r.setPose({ ...REST, elev: el.get(), plane: 40, er: 20, elbow: 0, rhythm: true });
    V.invalidate(); readout();
  }
  function readout() { if (!V) return; ro.innerHTML = `<b>${Math.round(V.rig.pose.elev)}°</b> arm · <b style="color:var(--lime)">${Math.round(V.rig.scapularUp())}°</b> blade up`; }
  mountStage(stage, {
    view: 'post',
    attach(v) {
      V = v;
      baseline(v, { muscles: true, lig: false, left: false, bone: 0.8 });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.afterRig = (prev => () => { prev && prev(); readout(); })(v.afterRig);
      v.setView('post');
      apply();
    },
    detach() { V = null; },
  });
}

/* ---------------- downward-rotation patterns: see it, clear it, prep for it ---------------- */
export function syndromeStage(root, items, opts = {}) {
  const rotators = opts.rotators !== false;
  let V = null, cur = items[0], elevV = 0, showMus = true;
  const stage = h('div', { class: 'stage' }), panel = h('div', { class: 'vpanel' }), detail = h('div', { class: 'vcard syn', style: 'grid-column:1/-1' });
  root.append(stage, panel, detail);
  const tip = tooltip(stage), tools = stageTools(stage);
  stageHint(stage, 'Back view · drag to rotate');
  const bs = items.map(it => { const b = h('button', { class: 'btn', type: 'button' }, it.short); b.addEventListener('click', () => { cur = it; apply(); }); return b; });
  const el = slider({ label: 'Elevate the arm', min: 0, max: 160, value: 0, onInput: v => { elevV = v; apply(); } });
  const mus = toggle(rotators ? 'Show upward (green) and downward (red) rotators' : 'Show the short (red) and weak (green) muscles', true, on => { showMus = on; apply(); });
  const note = h('p', null, '');
  panel.append(h('div', { class: 'vcard' }, h('h3', null, 'Pick a pattern'), h('div', { class: 'btns' }, ...bs), el.el, mus.el, note));
  const col = (c, t, arr) => h('div', { style: `border-top:3px solid ${c};padding-top:6px` }, h('div', { class: 'cap', style: `color:${c}` }, t), h('ul', null, ...arr.map(i => h('li', null, i))));
  function draw() {
    detail.replaceChildren(
      h('h3', null, cur.name),
      h('div', { class: 'syn2' },
        cur.img ? h('img', { src: cur.img, alt: cur.name + ' example', loading: 'lazy' }) : null,
        h('div', null, h('div', { class: 'cap' }, 'What you see'), h('ul', null, ...cur.look.map(i => h('li', null, i)))),
        h('div', null, h('div', { class: 'cap' }, 'How to clear it'), h('ul', null, ...cur.clear.map(i => h('li', null, i))))),
      h('div', { class: 'syn4' }, col('#E5534B', 'Inhibit · short', cur.inh), col('#A6E84A', 'Activate · weak', cur.act), col('#D4F57A', opts.useLabel || 'Prep before pressing', cur.use), col('#E0C04A', 'Watch out for', cur.watch)));
    note.textContent = cur.note || '';
    bs.forEach((b, i) => b.classList.toggle('on', items[i] === cur));
  }
  function apply() {
    draw();
    if (!V) return;
    const r = V.rig;
    r.resetMuscles(); r.resetLigs();
    r.muscleDefs.forEach(d => {
      const upIds = rotators ? UP_IDS : (cur.actIds || []), dnIds = rotators ? DOWN_IDS : (cur.inhIds || []);
      const up = showMus && upIds.includes(d.id), dn = showMus && dnIds.includes(d.id);
      r.setMuscle(d.id, { visible: showMus, opacity: up || dn ? 1 : 0.12, glow: up || dn ? 0.5 : 0, ...(up ? { color: UP_COL } : dn ? { color: DOWN_COL } : {}) });
    });
    r.showContext && r.showContext(false);
    r.show('muscles', showMus);
    r.show('left', !cur.noLeft);
    V.rig.setPose({ scapUp: 0, scapTilt: 0, scapIR: 0, prot: 0, shrug: 0, gain: 1, antGlide: 0, supGlide: 0, er: 0, elbow: 20, pron: 90, kyph: 35, fwd: 0, rhythm: true, ...cur.pose, elev: elevV, plane: 40 });
    V.invalidate();
  }
  mountStage(stage, {
    view: 'post',
    attach(v) {
      V = v;
      baseline(v, { muscles: true, lig: false, left: true, bone: 0.9 });
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.setView({ pos: [70, 12, 92], tgt: [16, 0, 2] }, 0);
      apply();
    },
    detach() { V = null; },
  });
  draw();
}

/* ---------------- bone vs soft tissue: the shifted arc (throwing) ---------------- */
export function arcStage(root) {
  let V = null, ov = null;
  const S = { retro: 42, soft: 0 };
  const ND = { retro: 30, er: 100, ir: 70 };
  const stage = h('div', { class: 'stage' }), panel = h('div', { class: 'vpanel' });
  root.append(stage, panel);
  const tip = tooltip(stage), ro = stageReadout(stage), tools = stageTools(stage);
  stageHint(stage, 'Top view of the head · drag to rotate');
  const sRetro = slider({ label: 'Humeral retroversion · throwing arm', min: 20, max: 55, value: 42, ends: ['20°', '55°'], onInput: v => { S.retro = v; render(); } });
  const sSoft = slider({ label: 'Posterior tissue tightness (loss of IR)', min: 0, max: 30, value: 0, onInput: v => { S.soft = v; render(); } });
  const svg = h('div'), verdict = h('div', { class: 'vcard', style: 'border-left:3px solid var(--c,var(--green))' });
  panel.append(h('div', { class: 'vcard' }, h('h3', null, 'Bone or soft tissue?'),
    h('p', null, 'Both arms start with a 170° arc at 90° abduction (100° ER, 70° IR). The other arm has 30° of retroversion. Turn the throwing arm\'s retroversion up and the whole arc slides toward ER. Then add tightness and watch the total shrink.'),
    sRetro.el, sSoft.el, svg, verdict));
  function render() {
    const shift = S.retro - ND.retro;
    const er = ND.er + shift, ir = ND.ir - shift - S.soft, tot = er + ir, ndTot = ND.er + ND.ir;
    const irDef = ND.ir - ir, arcDef = ndTot - tot;
    const W = 500, sc = 2.2, x0 = 22;
    const bar = (y, e, i, lab) => `<text x="${x0}" y="${y - 6}" fill="#aa9f97" font-size="13" letter-spacing="1.2">${lab.toUpperCase()}</text>
      <rect x="${x0}" y="${y}" width="${i * sc}" height="26" fill="#7EB6FF"/><rect x="${x0 + i * sc}" y="${y}" width="${e * sc}" height="26" fill="#E5534B"/>
      <text x="${x0 + 6}" y="${y + 18}" fill="#101418" font-size="15" font-weight="700">IR ${Math.round(i)}°</text><text x="${x0 + i * sc + 6}" y="${y + 18}" fill="#fff" font-size="15" font-weight="700">ER ${Math.round(e)}°</text>
      <text x="${x0 + (i + e) * sc + 8}" y="${y + 18}" fill="#f1e9e4" font-size="15">${Math.round(i + e)}° total</text>`;
    svg.innerHTML = `<svg viewBox="0 0 ${W} 140" width="100%" role="img" aria-label="Range of motion arcs for both arms">
      ${bar(26, ND.er, ND.ir, 'Other arm (30° retro)')}${bar(88, er, ir, 'Throwing arm (' + Math.round(S.retro) + '° retro)')}</svg>`;
    const flagA = arcDef >= 5, flagI = irDef >= 18;
    verdict.style.setProperty('--c', flagA ? 'var(--red)' : flagI ? 'var(--amber)' : 'var(--green)');
    verdict.replaceChildren(h('p', { style: 'color:var(--text)' }, h('b', null, `IR deficit ${Math.round(irDef)}° · total arc deficit ${Math.round(arcDef)}°. `),
      flagA ? 'Total arc is down by about 5° or more. That is the soft tissue flag. Work on the posterior tissue and scapula, and re-measure.'
        : flagI ? 'A big IR deficit with a matching total arc is mostly bone (retroversion). Don\'t chase the IR range.'
          : 'Looks like a normal adaptation: the arc slid toward ER and the total matches.'));
    const sg = x => (x > 0 ? '+' : x < 0 ? '−' : '±') + Math.abs(Math.round(x)) + '°';
    ro.innerHTML = `ER <b style="color:var(--red)">${sg(er - ND.er)}</b> · IR <b style="color:#7EB6FF">${sg(ir - ND.ir)}</b> vs the other arm`;
    if (V) { V.rig.setPose({ retro: S.retro }); V.invalidate(); }
  }
  mountStage(stage, {
    view: 'sup',
    attach(v) {
      V = v;
      baseline(v, { muscles: false, lig: false, left: false, thorax: false, bone: 0.55, pose: { elev: 0, plane: 40, er: 0, elbow: 90, retro: S.retro, rhythm: true } });
      v.rig.setPose({ elev: 0, plane: 40, er: 0, elbow: 90, rhythm: true, retro: S.retro });
      v.rig.update();
      ov = new Overlay(v);
      if (v.rig.headAxis) {
        const hc = () => v.rig.headAxis().c;
        const ext = (from, to) => () => { const e = v.rig.epicondyleLine(); const a = e[from], b2 = e[to]; return a.clone().sub(b2).normalize().multiplyScalar(13).add(a); };
        ov.line([ext('m', 'l'), ext('l', 'm')], { color: 0xd9cfc8, r: 0.4 });
        ov.line([() => hc(), () => { const hh = v.rig.headAxis(); return hh.c.clone().addScaledVector(hh.a, 20); }], { color: 0xe5534b, r: 0.55 });
        ov.marker(hc, { color: 0xf1e9e4, r: 0.8 });
        ov._addLabel('Line through the elbow', 'dim', () => ext('l', 'm')());
        ov._addLabel('Head faces here', '', () => { const hh = v.rig.headAxis(); return hh.c.clone().addScaledVector(hh.a, 20); });
      }
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      const h0 = v.rig.pt(['R', 0, 0, 0]);
      v.setView({ pos: [h0.x + 4, h0.y + 82, h0.z + 14], tgt: [h0.x - 1, h0.y - 20, h0.z + 2] }, 0);
      render();
    },
    detach() { V = null; ov = null; },
  });
  render();
}

/* ---------------- the throw, phase by phase ---------------- */
export function throwStage(root, phases) {
  let V = null, cur = phases[0], playing = false;
  const stage = h('div', { class: 'stage' }), panel = h('div', { class: 'vpanel' });
  root.append(stage, panel);
  const tip = tooltip(stage), tools = stageTools(stage);
  stageHint(stage, 'Pick a phase or play the throw · drag to rotate');
  const list = h('div', { class: 'list' }), detail = h('div', { class: 'vcard' });
  const btns = phases.map((p, i) => {
    const b = h('button', { class: 'item', type: 'button' }, h('span', { class: 'sw-c' }), h('span', null, (i + 1) + '. ' + p.name));
    b.addEventListener('click', () => { playing = false; select(p, 700); }); list.append(b); return b;
  });
  const playBtn = h('button', { class: 'btn', type: 'button' }, '▶ Play the throw');
  panel.append(h('div', { class: 'btns' }, playBtn), list, detail);
  function select(p, ms) {
    cur = p;
    btns.forEach((b, i) => b.classList.toggle('on', phases[i] === p));
    detail.replaceChildren(h('h3', null, p.name), kv([['What\'s happening', p.what], ['What it loads', p.loads], ['Look for', p.look]]));
    if (!V) return;
    const r = V.rig;
    applyStyles(r, p.ids || [], 0.2);
    showLigs(r, p.ligs);
    tweenPose(V, { ...REST, ...p.pose }, ms);
    V.invalidate();
  }
  playBtn.addEventListener('click', () => {
    if (!V) return;
    playing = true; let i = 0;
    const next = () => {
      if (!playing || i >= phases.length) { playing = false; return; }
      const p = phases[i++]; cur = p;
      btns.forEach((b, k) => b.classList.toggle('on', phases[k] === p));
      detail.replaceChildren(h('h3', null, p.name), kv([['What\'s happening', p.what], ['What it loads', p.loads], ['Look for', p.look]]));
      applyStyles(V.rig, p.ids || [], 0.2); showLigs(V.rig, p.ligs);
      tweenPose(V, { ...REST, ...p.pose }, p.ms || 900, null, () => setTimeout(next, 450));
    };
    tweenPose(V, { ...REST, elev: 30, plane: 0, er: 0, elbow: 90 }, 500, null, next);
  });
  mountStage(stage, {
    view: 'obl',
    attach(v) {
      V = v;
      baseline(v, { muscles: true, lig: false, left: false, bone: 0.8 });
      v.onFrame = null;
      tools.replaceChildren(...viewBtns(v));
      hoverTips(v, tip);
      v.setView({ pos: [100, 28, 125], tgt: [36, -2, -2] }, 0);
      select(cur, 1);
    },
    detach() { V = null; },
  });
  select(phases[0], 1);
}

/* ---------------- ROM calculator (throwing) ---------------- */
export function romCalc(root) {
  const mk = (id, label, val) => h('label', null, label, h('input', { type: 'number', inputmode: 'numeric', id, value: val, min: 0, max: 200 }));
  const t = { er: mk('c-ter', 'Throwing arm ER (°)', 120), ir: mk('c-tir', 'Throwing arm IR (°)', 35) };
  const n = { er: mk('c-ner', 'Other arm ER (°)', 100), ir: mk('c-nir', 'Other arm IR (°)', 55) };
  const out = h('div', { class: 'vcard out' });
  root.append(h('div', { class: 'vcard' }, h('h3', null, 'Throwing arm'), t.er, t.ir), h('div', { class: 'vcard' }, h('h3', null, 'Other arm'), n.er, n.ir), out);
  const val = el => +el.querySelector('input').value || 0;
  const bar = (label, v, max, c) => h('div', { class: 'bar', style: `--c:${c}` }, h('i', { style: `width:${Math.min(100, v / max * 100)}%` }), h('span', null, `${label} ${v}°`));
  function calc() {
    const tTot = val(t.er) + val(t.ir), nTot = val(n.er) + val(n.ir), irDef = val(n.ir) - val(t.ir), arcDef = nTot - tTot, erGain = val(t.er) - val(n.er);
    let msg, c;
    if (arcDef >= 5) { msg = 'Total arc is down on the throwing side. That\'s the flag: reduce load, work the posterior tissue and scapula, and re-measure. Refer if it doesn\'t recover or it hurts.'; c = 'var(--red)'; }
    else if (irDef >= 18) { msg = 'IR is down, but ER is up and total arc matches. This looks like an adaptation. Monitor, and keep comparing to their own baseline.'; c = 'var(--green)'; }
    else { msg = 'Arcs are within about 5° of each other and IR loss is small. Nothing here by itself.'; c = 'var(--green)'; }
    out.style.setProperty('--c', c);
    out.replaceChildren(
      h('div', null, 'Total arc: throwing ', h('b', null, tTot + '°'), ' · other ', h('b', null, nTot + '°'), ' · difference ', h('b', { style: `color:${arcDef >= 5 ? 'var(--red)' : 'var(--text)'}` }, (arcDef > 0 ? '−' : '+') + Math.abs(arcDef) + '°')),
      bar('Throwing', tTot, 260, 'var(--blue)'), bar('Other', nTot, 260, 'var(--green)'),
      h('p', null, `IR deficit ${irDef}° · ER gain ${erGain}°`),
      h('p', { style: 'color:var(--text)' }, msg));
  }
  root.addEventListener('input', calc);
  calc();
}
