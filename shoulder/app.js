import { $, $$, h } from './core.js?v=15';
import { step1, step2, step3, step4, step5 } from './steps-a.js?v=15';
let B = {};
try { B = await import('./steps-b.js?v=15'); } catch (e) { console.warn('steps-b not loaded', e); }

const TITLES = ['Bone', 'Motion', 'Rotator cuff', 'Layers', 'Soft tissue', 'Fascia', 'Posture', 'Syndromes', 'Throwing', 'Testing'];
const stepper = $('#stepper');
TITLES.forEach((t, i) => stepper.append(h('a', { href: '#s' + (i + 1), 'data-i': i + 1 }, h('b', null, String(i + 1).padStart(2, '0')), t)));

const run = (fn, ...a) => { try { fn && fn(...a); } catch (e) { console.error(e); } };
run(step1, $('#st1'), $('#pn1'));
run(step2, $('#st2'), $('#pn2'));
run(step3, $('#st3'), $('#pn3'));
run(step4, $('#st4'), $('#pn4'));
run(step5, $('#st5'), $('#pn5'), $('#defs'));
run(B.step6, $('#st6'), $('#pn6'));
run(B.step7, $('#st7'), $('#pn7'));
run(B.step8, $('#st8'), $('#pn8'), $('#s8facts'));
run(B.step9, $('#st9'), $('#pn9'), $('#s9facts'), $('#calc'), $('#calcOut'));
run(B.step10, $('#st10'), $('#pn10'));

// stepper highlight + progress
const links = $$('#stepper a');
const secs = $$('.step');
const prog = $('#prog');
const seen = new Set();
const io = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) {
      const i = +e.target.id.slice(1);
      links.forEach(l => l.classList.toggle('on', +l.dataset.i === i));
      seen.add(i); links.forEach(l => l.classList.toggle('done', seen.has(+l.dataset.i) && +l.dataset.i !== i));
      prog.style.width = (i / secs.length * 100) + '%';
      const on = links.find(l => +l.dataset.i === i);
      on && on.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
secs.forEach(s => io.observe(s));
