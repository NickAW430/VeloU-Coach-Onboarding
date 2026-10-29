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
  stageHint(stage, 'Pick a test · drag to rotate');
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
      kv([['Positive if', t.pos], ['Suggests', t.sug], ['Keep in mind', t.note]]),
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
