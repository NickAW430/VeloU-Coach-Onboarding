// VeloU Shoulder Lab · lightweight 3D viewer (three.js) with labels, picking and lazy rendering.
import * as THREE from 'three';
import { OrbitControls } from './vendor/OrbitControls.js';
import { Rig } from './rig.js?v=3';

export const VIEWS = {
  post: { pos: [0, 6, 100], tgt: [7, 2, 2] },
  ant: { pos: [0, 6, -100], tgt: [7, 2, 0] },
  lat: { pos: [100, 6, 4], tgt: [8, 2, 2] },
  sup: { pos: [10, 100, 1], tgt: [8, 0, 2] },
  obl: { pos: [58, 16, 74], tgt: [8, 2, 2] },
  full: { pos: [80, 10, 110], tgt: [3, 0, 2] },
};

export class Viewer {
  constructor(host, opts = {}) {
    this.host = host;
    this.opts = opts;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.canvas = this.renderer.domElement;
    host.appendChild(this.canvas);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(32, 1, 1, 600);
    const v = VIEWS[opts.view || 'obl'];
    this.camera.position.set(...v.pos);
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.target.set(...v.tgt);
    this.controls.enableDamping = true; this.controls.dampingFactor = 0.09;
    this.controls.minDistance = 18; this.controls.maxDistance = 220;
    this.controls.update();

    this.scene.add(new THREE.HemisphereLight(0xfff4ea, 0x2a1d16, 1.05));
    const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(40, 60, 70); this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xffb0a0, 0.9); rim.position.set(-50, 20, -60); this.scene.add(rim);
    const fill = new THREE.DirectionalLight(0xbfd8ff, 0.5); fill.position.set(-30, -20, 40); this.scene.add(fill);

    this.rig = new Rig(opts.rig || {});
    this.scene.add(this.rig.root);

    this.labels = []; // {el, getPos}
    this.labelLayer = document.createElement('div'); this.labelLayer.className = 'lbl-layer'; host.appendChild(this.labelLayer);

    this.ray = new THREE.Raycaster(); this.mouse = new THREE.Vector2();
    this._bind();
    this.visible = false; this.dirty = true;
    const setVis = on => { if (on !== this.visible) { this.visible = on; if (on) { this._resize(); this.dirty = true; this._loop(); } } };
    this.io = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { rootMargin: '120px' });
    this.io.observe(host);
    // fallback for environments where IntersectionObserver is unreliable (emulated viewports, some embeds)
    this._scroll = () => { const r = host.getBoundingClientRect(); setVis(r.bottom > -120 && r.top < window.innerHeight + 120); };
    window.addEventListener('scroll', this._scroll, { passive: true });
    window.addEventListener('resize', this._scroll);
    setTimeout(this._scroll, 50);
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(host);
    this._resize();
    this.controls.addEventListener('change', () => { this.dirty = true; });
    this.anim = null;
  }

  _bind() {
    let down = null;
    this.canvas.addEventListener('pointerdown', e => { down = [e.clientX, e.clientY]; });
    this.canvas.addEventListener('pointerup', e => {
      if (down && Math.hypot(e.clientX - down[0], e.clientY - down[1]) < 5) this._pick(e, 'click');
      down = null;
    });
    this.canvas.addEventListener('pointermove', e => { if (e.buttons === 0) this._pick(e, 'hover'); });
    this.canvas.addEventListener('pointerleave', () => { this.onHover && this.onHover(null); });
    this.canvas.style.touchAction = 'none';
  }

  _pick(e, kind) {
    const r = this.canvas.getBoundingClientRect();
    this.mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(this.mouse, this.camera);
    const hits = this.ray.intersectObjects(this.rig.root.children, true).filter(h => h.object.visible && h.object.parent && this._visibleChain(h.object));
    let info = null;
    for (const h of hits) {
      const u = h.object.userData;
      const mus = u.muscle || (h.object.parent && h.object.parent.userData.muscle);
      if (mus) { info = { type: 'muscle', id: mus, point: h.point }; break; }
      if (u.lig) { info = { type: 'lig', id: u.lig, point: h.point }; break; }
      if (u.part) { info = { type: 'part', id: u.part, point: h.point }; break; }
    }
    if (kind === 'click') this.onPick && this.onPick(info);
    else { this.canvas.style.cursor = info ? 'pointer' : 'grab'; this.onHover && this.onHover(info); }
  }
  _visibleChain(o) { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; }

  _resize() {
    const w = this.host.clientWidth, h = this.host.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.dirty = true;
  }

  setView(name, ms = 700) {
    const v = typeof name === 'string' ? VIEWS[name] : name;
    this.flyTo(v.pos, v.tgt, ms);
  }
  flyTo(pos, tgt, ms = 700) {
    const p0 = this.camera.position.clone(), t0 = this.controls.target.clone();
    const p1 = new THREE.Vector3(...pos), t1 = new THREE.Vector3(...tgt);
    this.anim = { t: performance.now(), ms, p0, t0, p1, t1 };
    this.dirty = true; this._loop();
  }
  focusWorld(p, dist = 40, ms = 600) {
    const dir = this.camera.position.clone().sub(this.controls.target).normalize();
    this.flyTo(p.clone().addScaledVector(dir, dist).toArray(), p.toArray(), ms);
  }

  // labels: pass {el, get:()=>Vector3}
  setLabels(list) {
    this.labels.forEach(l => l.el.remove());
    this.labels = list.map(l => { this.labelLayer.appendChild(l.el); return l; });
    this.dirty = true;
  }
  _updateLabels() {
    const w = this.host.clientWidth, h = this.host.clientHeight;
    const dir = new THREE.Vector3();
    this.labels.forEach(l => {
      const p = l.get().clone();
      const ndc = p.clone().project(this.camera);
      const hidden = ndc.z > 1 || Math.abs(ndc.x) > 1.05 || Math.abs(ndc.y) > 1.05;
      l.el.style.display = hidden ? 'none' : '';
      l.el.style.transform = `translate(${(ndc.x * 0.5 + 0.5) * w}px, ${(-ndc.y * 0.5 + 0.5) * h}px)`;
    });
  }

  _loop() {
    if (this._running) return;
    this._running = true;
    const tick = () => {
      if (!this.visible && !this.anim) { this._running = false; return; }
      if (this.anim) {
        const k = Math.min(1, (performance.now() - this.anim.t) / this.anim.ms);
        const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        this.camera.position.lerpVectors(this.anim.p0, this.anim.p1, e);
        this.controls.target.lerpVectors(this.anim.t0, this.anim.t1, e);
        if (k >= 1) this.anim = null;
        this.dirty = true;
      }
      const moved = this.controls.update();
      if (this.rig._dirty) { this.rig.update(); this.dirty = true; this.afterRig && this.afterRig(); }
      if (this.onFrame && this.onFrame(performance.now())) this.dirty = true;
      if (this.dirty || moved) {
        this.renderer.render(this.scene, this.camera);
        this._updateLabels();
        this.dirty = false;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  invalidate() { this.dirty = true; this._loop(); }
  destroy() {
    this.io.disconnect(); this.ro.disconnect();
    window.removeEventListener('scroll', this._scroll); window.removeEventListener('resize', this._scroll);
    this.labels.forEach(l => l.el.remove());
    this.rig.dispose();
    this.renderer.dispose();
    try { this.renderer.forceContextLoss(); } catch (e) { /* noop */ }
    this.canvas.remove(); this.labelLayer.remove();
    this.visible = false; this.dead = true;
  }
}
