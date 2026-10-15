// Shared helpers for the Shoulder Lab.
import * as THREE from 'three';
import { Viewer } from './viewer.js?v=14';
import { COL, Rig } from './rig.js?v=14';
import { RealRig } from './rig2.js?v=14';
import { loadAnatomy } from './anatomy.js?v=14';

export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export function h(tag, props, ...kids) {
  const el = document.createElement(tag);
  if (props) for (const [k, v] of Object.entries(props)) {
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) el.setAttribute(k, v === true ? '' : v);
  }
  kids.flat().forEach(c => { if (c != null && c !== false) el.append(c.nodeType ? c : document.createTextNode(c)); });
  return el;
}

export const POSE0 = { elev: 0, plane: 40, er: 0, elbow: 90, pron: 90, scapUp: 0, scapTilt: 0, scapIR: 0, prot: 0, shrug: 0, rhythm: true, gain: 1, antGlide: 0, supGlide: 0, retro: 30, kyph: 35, fwd: 0 };

export const PART_NAMES = {
  scapula: 'Scapula', humerus: 'Humerus', clavicle: 'Clavicle', rib: 'Rib', vertebra: 'Thoracic vertebra', sternum: 'Sternum',
  'greater-tubercle': 'Greater tubercle', 'lesser-tubercle': 'Lesser tubercle', 'deltoid-tuberosity': 'Deltoid tuberosity',
  'humeral-head': 'Humeral head', 'head-cartilage': 'Articular cartilage (head)', 'glenoid-cartilage': 'Articular cartilage (glenoid)',
  labrum: 'Glenoid labrum', 'costal-cartilage': 'Costal cartilage', capsule: 'Joint capsule', bursa: 'Subacromial bursa', epicondyle: 'Epicondyle',
};

/* ---------- controls ---------- */
export function slider({ label, min, max, step = 1, value, unit = '°', ends, onInput, fmt }) {
  const out = h('output', null, '');
  const inp = h('input', { type: 'range', min, max, step, value });
  const show = () => { out.textContent = (fmt ? fmt(+inp.value) : (+inp.value).toFixed(step < 1 ? 1 : 0)) + unit; };
  inp.addEventListener('input', () => { show(); onInput && onInput(+inp.value); });
  show();
  const el = h('div', { class: 'sl' }, h('label', null, label), out, inp, ends ? h('div', { class: 'ends' }, h('span', null, ends[0]), h('span', null, ends[1])) : null);
  return { el, set(v, silent) { inp.value = v; show(); if (!silent) onInput && onInput(+inp.value); }, get: () => +inp.value, input: inp };
}
export function toggle(label, on, cb) {
  const i = h('input', { type: 'checkbox' }); i.checked = !!on;
  i.addEventListener('change', () => cb(i.checked));
  return { el: h('label', { class: 'sw' }, i, label), set(v) { i.checked = v; }, get: () => i.checked };
}
export function btnGroup(items, cb, { cls = '', initial = null } = {}) {
  const wrap = h('div', { class: 'btns' });
  const bs = items.map(it => {
    const b = h('button', { class: 'btn ' + cls + (it.cls ? ' ' + it.cls : ''), type: 'button' }, it.label);
    b.addEventListener('click', () => { set(it.id, true); });
    wrap.append(b); return b;
  });
  function set(id, fire) { items.forEach((it, i) => bs[i].classList.toggle('on', it.id === id)); if (fire) cb(id); }
  if (initial !== null) set(initial, false);
  return { el: wrap, set, bs };
}
export function tabs(items, cb, initial) {
  const wrap = h('div', { class: 'tabs' });
  const bs = items.map(it => { const b = h('button', { class: 'tab', type: 'button' }, it.label); b.addEventListener('click', () => set(it.id, true)); wrap.append(b); return b; });
  function set(id, fire) { items.forEach((it, i) => bs[i].classList.toggle('on', it.id === id)); if (fire) cb(id); }
  set(initial !== undefined ? initial : items[0].id, false);
  return { el: wrap, set };
}
export function listPicker(items, cb) {
  const wrap = h('div', { class: 'list' });
  const els = items.map(it => {
    const b = h('button', { class: 'item', type: 'button' },
      h('span', { class: 'sw-c', style: it.color ? `--c:${it.color}` : '' }),
      h('span', null, it.label, it.sub ? h('small', null, it.sub) : null));
    b.addEventListener('click', () => { set(it.id); cb(it.id, it); });
    wrap.append(b); return b;
  });
  function set(id) { items.forEach((it, i) => els[i].classList.toggle('on', it.id === id)); }
  return { el: wrap, set };
}
export function card(...kids) { return h('div', { class: 'card' }, ...kids); }
export function kv(rows) { const d = h('dl', { class: 'kv' }); rows.forEach(([k, v]) => { if (v) d.append(h('dt', null, k), h('dd', null, v)); }); return d; }
export function label(text, cls = '') { return h('div', { class: 'lbl ' + cls }, h('i'), h('span', null, text)); }

/* ---------- overlay: markers / arrows / lines that follow the rig ---------- */
export class Overlay {
  constructor(viewer) {
    this.v = viewer; this.rig = viewer.rig;
    this.g = new THREE.Group(); this.rig.cats.overlay.add(this.g);
    this.items = [];
    this.labelEls = [];
    const prev = viewer.afterRig;
    viewer.afterRig = () => { prev && prev(); this.update(); };
  }
  clear() {
    this.items.forEach(i => { this.g.remove(i.obj); i.obj.traverse && i.obj.traverse(o => { o.geometry && o.geometry.dispose(); }); });
    this.items = []; this.labelEls.forEach(l => l.remove()); this.labelEls = [];
    this.v.setLabels([]);
    this._labels = [];
  }
  _addLabel(text, cls, get) {
    const el = label(text, cls);
    (this._labels = this._labels || []).push({ el, get });
    this.v.setLabels(this._labels);
  }
  marker(spec, { color = COL.cuff, r = 0.9, text, cls = '' } = {}) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), new THREE.MeshBasicMaterial({ color, depthTest: false, transparent: true, opacity: 0.95 }));
    m.renderOrder = 20; this.g.add(m);
    const it = { obj: m, update: () => m.position.copy(this.rig.pt(spec)) };
    this.items.push(it); it.update();
    if (text) this._addLabel(text, cls, () => m.position);
    this.v.invalidate();
    return it;
  }
  arrow(fromSpec, dirFn, { color = COL.cuff, len = 9, text, cls = '' } = {}) {
    const a = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(), len, color, 2.4, 1.5);
    [a.line, a.cone].forEach(o => { o.material.depthTest = false; o.renderOrder = 21; });
    a.line.material.linewidth = 2;
    this.g.add(a);
    const tip = new THREE.Vector3();
    const it = { obj: a, update: () => {
      const p = this.rig.pt(fromSpec); const d = dirFn().clone().normalize();
      a.position.copy(p); a.setDirection(d); a.setLength(len, Math.min(3, len * 0.3), 1.6);
      tip.copy(p).addScaledVector(d, len);
    } };
    this.items.push(it); it.update();
    if (text) this._addLabel(text, cls, () => tip);
    this.v.invalidate();
    return it;
  }
  line(specs, { color = 0xffffff, r = 0.32, opacity = 0.95 } = {}) {
    const mesh = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthTest: false }));
    mesh.renderOrder = 15; this.g.add(mesh);
    const it = { obj: mesh, update: () => {
      const pts = specs.map(s => this.rig.pt(s));
      mesh.geometry.dispose();
      mesh.geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, false, 'centripetal'), 48, r, 6);
    } };
    this.items.push(it); it.update(); this.v.invalidate();
    return it;
  }
  update() { this.items.forEach(i => i.update()); this.v.dirty = true; }
}

/* ---------- viewer lifecycle (lazy create, keep <= 4 live) ---------- */
const live = [];
export function mountStage(host, { view = 'obl', attach, detach }) {
  let viewer = null, pending = false;
  const create = (A) => {
    while (live.length >= 4) { const old = live.shift(); old.destroyStage(); }
    const makeRig = A ? () => { try { return new RealRig(A); } catch (e) { console.warn('real anatomy failed, using stylised rig', e); return new Rig({}); } } : null;
    viewer = new Viewer(host, { view, makeRig });
    const entry = { destroyStage() { detach && detach(); viewer.destroy(); viewer = null; } };
    live.push(entry);
    viewer._entry = entry;
    host.classList.remove('loading');
    host.classList.add('ready');
    attach(viewer);
    viewer.invalidate();
  };
  const ensure = () => {
    if ((viewer && !viewer.dead) || pending) return;
    pending = true;
    host.classList.add('loading');
    loadAnatomy().catch(e => { console.warn('anatomy load failed', e); return null; }).then(A => { pending = false; if (viewer && !viewer.dead) return; create(A); }).catch(e => { pending = false; host.classList.remove('loading'); console.error('stage create failed', e && e.stack || e); });
  };
  const io = new IntersectionObserver(es => { if (es[0].isIntersecting) ensure(); }, { rootMargin: '500px 0px' });
  io.observe(host);
  let np = false;
  const near = () => { if (np) return; np = true; requestAnimationFrame(() => { np = false; const r = host.getBoundingClientRect(); if (r.bottom > -500 && r.top < window.innerHeight + 500) ensure(); }); };
  window.addEventListener('scroll', near, { passive: true });
  window.addEventListener('resize', near);
  setTimeout(near, 100);
  return { get viewer() { return viewer; }, ensure };
}
export function stageTools(host, ...els) { const t = h('div', { class: 'tools' }, ...els); host.append(t); return t; }
export function stageHint(host, text) { host.append(h('div', { class: 'hint' }, text)); }
export function stageReadout(host) { const r = h('div', { class: 'readout' }); host.append(r); return r; }
export function tooltip(host) {
  const t = h('div', { class: 'readout', style: 'right:auto;left:10px;bottom:34px;max-width:70%;display:none;font-size:14px' });
  host.append(t); return t;
}

/* ---------- tween helper ---------- */
export function tweenPose(viewer, target, ms = 900, onStep, done) {
  const rig = viewer.rig, from = {};
  const keys = Object.keys(target).filter(k => typeof target[k] === 'number');
  keys.forEach(k => { from[k] = rig.pose[k]; });
  const t0 = performance.now();
  const prevFrame = viewer.onFrame;
  const id = Symbol();
  viewer._tw = id;
  viewer.onFrame = (now) => {
    if (viewer._tw !== id) return prevFrame ? prevFrame(now) : false;
    let k = Math.min(1, (now - t0) / ms);
    const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    const p = {}; keys.forEach(key => { p[key] = from[key] + (target[key] - from[key]) * e; });
    rig.setPose(p); onStep && onStep(p, e);
    if (k >= 1) { viewer.onFrame = prevFrame; viewer._tw = null; done && done(); }
    return true;
  };
  viewer.invalidate();
}
