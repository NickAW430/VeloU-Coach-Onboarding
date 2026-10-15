// Loads the Z-Anatomy-derived GLBs once and converts them to the lab's frame (cm, +X right, +Y up, -Z anterior).
// Anatomy source: BodyParts3D / Z-Anatomy (CC BY-SA). See anatomy/NOTICE.txt.
import * as THREE from 'three';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import { DRACOLoader } from './vendor/DRACOLoader.js';

let cache = null;
const base = new URL('./anatomy/', import.meta.url).href;

function loadGLB(loader, file) {
  return new Promise((res, rej) => loader.load(base + file, g => res(g.scene), undefined, rej));
}

export function loadAnatomy() {
  if (cache) return cache;
  cache = (async () => {
    const draco = new DRACOLoader();
    draco.setDecoderPath(new URL('./vendor/draco/', import.meta.url).href);
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);
    const [bonesS, musclesS, jointsS, lmJson] = await Promise.all([
      loadGLB(loader, 'shoulder-bones.glb'), loadGLB(loader, 'shoulder-muscles.glb'), loadGLB(loader, 'shoulder-joints.glb'),
      fetch(base + 'landmarks.json').then(r => r.json()),
    ]);
    draco.dispose();

    // glTF (metres, subject faces +Z, right side at -X) -> lab frame (cm, faces -Z, right side at +X)
    const collect = (scene) => {
      const out = new Map();
      scene.traverse(o => {
        if (!o.isMesh) return;
        // the node (or its parent group for multi-material meshes) carries the object name
        const holder = (o.parent && o.parent !== scene && o.parent.userData && o.parent.userData.name && !o.userData.name) ? o.parent : o;
        const raw = (holder.userData && holder.userData.name) || holder.name;
        const name = raw.replace(/\.\d{3}$/, '');
        const matName = (o.material && o.material.name || '').replace(/^S_/, '');
        const g = o.geometry.clone();
        const p = g.attributes.position, n = g.attributes.normal;
        for (let i = 0; i < p.count; i++) { p.setXYZ(i, -p.getX(i) * 100, p.getY(i) * 100, -p.getZ(i) * 100); }
        if (n) for (let i = 0; i < n.count; i++) n.setXYZ(i, -n.getX(i), n.getY(i), -n.getZ(i));
        if (!out.has(name)) out.set(name, []);
        out.get(name).push({ geometry: g, material: matName });
      });
      return out;
    };
    const bones = collect(bonesS), muscles = collect(musclesS), joints = collect(jointsS);
    // re-centre: T7 vertebra centre -> (0, -1.5, 7.5) so the lab's camera views and constants carry over
    const t7 = bones.get('Vertebra T7');
    const bb = new THREE.Box3();
    t7.forEach(pr => { pr.geometry.computeBoundingBox(); bb.union(pr.geometry.boundingBox); });
    const c = bb.getCenter(new THREE.Vector3());
    const off = new THREE.Vector3(-c.x, -1.5 - c.y, 7.5 - c.z);
    for (const m of [bones, muscles, joints]) for (const arr of m.values()) for (const pr of arr) {
      pr.geometry.translate(off.x, off.y, off.z);
      pr.geometry.computeBoundingSphere();
    }
    const landmarks = {};
    for (const [k, v] of Object.entries(lmJson)) landmarks[k] = new THREE.Vector3(-v[0] * 100 + off.x, v[1] * 100 + off.y, -v[2] * 100 + off.z);
    return { bones, muscles, joints, landmarks, offset: off, skins: new Map() };
  })();
  return cache;
}
