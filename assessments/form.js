// Renders an Initial Intake assessment (Basic, Advanced or Premier) from specs.js and screen-flow.js, and saves it
// through /api/v1. Exposes window.VeloUForm.mount(level, { container, setHeader }).

(function () {
  const { SECTIONS, TIERS, RETESTS, SCREEN_METRICS } = window.VELOU_SPECS;
  const FLOW = window.VELOU_SCREEN;
  const FORM_VERSION = 2;
  const MAX_IMAGE_PX = 1600;
  const RATING = { suff: 'sufficient', lim: 'limited', exc: 'excessive' };

  // ---- helpers -------------------------------------------------------------------------------

  function el(tag, props, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v === undefined || v === null || v === false) continue;
      if (k === 'className') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else if (k === 'dataset') Object.assign(e.dataset, v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat()) if (kid !== null && kid !== undefined && kid !== false) e.append(kid.nodeType ? kid : document.createTextNode(kid));
    return e;
  }

  const todayStr = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
  const isNum = v => v !== '' && v !== null && v !== undefined && Number.isFinite(Number(v));
  const fmt = n => String(Math.round(n * 1000) / 1000);
  const fileSize = n => (n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB');

  async function api(method, path, body) {
    const res = await fetch('/api/v1' + path, {
      method, credentials: 'same-origin',
      headers: body ? { 'Content-Type': 'application/json' } : {},
      body: body ? JSON.stringify(body) : undefined,
    });
    let json = null;
    try { json = await res.json(); } catch (e) { /* not JSON */ }
    if (!res.ok) { const err = new Error((json && json.error) || 'HTTP ' + res.status); err.status = res.status; throw err; }
    return json;
  }

  async function uploadFile(athleteId, assessmentId, kind, file) {
    const q = new URLSearchParams({ kind, name: file.name || kind });
    if (assessmentId) q.set('assessment_id', assessmentId);
    const res = await fetch('/api/v1/athletes/' + athleteId + '/files?' + q, {
      method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': file.type || 'application/octet-stream' }, body: file,
    });
    if (!res.ok) {
      let msg = 'HTTP ' + res.status;
      try { msg = (await res.json()).error || msg; } catch (e) { /* ignore */ }
      throw new Error(msg);
    }
  }

  // Shrinks a phone photo before upload. Falls back to the original if the browser cannot decode it.
  async function shrinkImage(file) {
    try {
      const bmp = await createImageBitmap(file);
      const scale = Math.min(1, MAX_IMAGE_PX / Math.max(bmp.width, bmp.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(bmp.width * scale); canvas.height = Math.round(bmp.height * scale);
      canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise(r => canvas.toBlob(r, 'image/jpeg', 0.85));
      if (!blob) return file;
      return new File([blob], (file.name || 'photo').replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' });
    } catch (e) { return file; }
  }

  // Tiny markdown: **bold** headings, "- " bullets, paragraphs. Builds DOM nodes, never HTML strings.
  function richText(src) {
    const wrap = el('div', { className: 'rich' });
    let list = null;
    const inline = (parent, line) => {
      line.split(/(\*\*[^*]+\*\*)/).forEach(part => {
        if (/^\*\*[^*]+\*\*$/.test(part)) parent.append(el('strong', { text: part.slice(2, -2) }));
        else if (part) parent.append(part);
      });
    };
    for (const line of String(src).split('\n')) {
      if (/^- /.test(line)) { if (!list) { list = el('ul'); wrap.append(list); } const li = el('li'); inline(li, line.slice(2)); list.append(li); }
      else { list = null; if (line.trim()) { const p = el('p'); inline(p, line); wrap.append(p); } }
    }
    return wrap;
  }

  // ---- mount ---------------------------------------------------------------------------------

  function mount(key, ui) {
    const tier = TIERS[key] || RETESTS[key];
    const level = tier.level || tier.section;
    const isRetest = tier.kind === 'retest';
    const sections = tier.sections.map(id => SECTIONS[id]);
    const steps = [{ id: 'athlete', title: 'Athlete' }, ...sections, { id: 'review', title: 'Review' }];
    const draftKey = 'velou.draft.v' + FORM_VERSION + '.' + level;
    const root = ui.container;

    const fieldsOf = sec => (sec.fields || []).filter(f => !f.tiers || f.tiers.includes(level));
    const protocolsOf = sec => (sec.protocols || []).filter(p => !p.tiers || p.tiers.includes(level));

    let state = loadDraft();
    let pending = {};        // field key -> { file, url }. Held in memory only; files are not kept in the saved draft.
    let busy = false;
    const jobs = new Set();  // photos still being shrunk
    let message = null;      // { kind, text, retry, saved }
    let searchTimer = null, searchResults = null, apiNote = '';

    ui.setHeader(tier.title, tier.blurb);

    // ---- state ----

    function freshState() {
      const answers = {};
      for (const sec of sections) {
        answers[sec.id] = {};
        for (const f of fieldsOf(sec)) {
          if (f.default !== undefined) answers[sec.id][f.key] = f.default;
          if ((tier.defaults || {})[f.key] !== undefined) answers[sec.id][f.key] = tier.defaults[f.key];
        }
      }
      return {
        athlete: { id: null, first_name: '', last_name: '', dob: '', email: '', phone: '', parent_name: '', parent_email: '', parent_phone: '',
          playing_level: '', team: '', residence: '', position: '', dominant_hand: '', sport: 'Baseball' },
        assessed_on: todayStr(), answers, skipped: {}, step: 0, assessmentId: null, uploaded: {}, hadBodyFat: null, flow: { hist: [FLOW.order[0]], done: false },
      };
    }

    function loadDraft() {
      try {
        const raw = localStorage.getItem(draftKey);
        if (raw) {
          const saved = JSON.parse(raw);
          const base = freshState();
          return Object.assign(base, saved, { athlete: Object.assign(base.athlete, saved.athlete), answers: Object.assign(base.answers, saved.answers) });
        }
      } catch (e) { /* storage unavailable or corrupt: start fresh */ }
      return freshState();
    }

    const save = () => { try { localStorage.setItem(draftKey, JSON.stringify(state)); } catch (e) { /* ignore */ } };
    const clearDraft = () => { try { localStorage.removeItem(draftKey); } catch (e) { /* ignore */ } };

    function getVal(sec, f) {
      if (f.athleteKey) return state.athlete[f.athleteKey];
      return (state.answers[sec.id] || {})[f.key];
    }
    function setVal(sec, f, v) {
      if (f.athleteKey) state.athlete[f.athleteKey] = v;
      else { state.answers[sec.id] = state.answers[sec.id] || {}; state.answers[sec.id][f.key] = v; }
      save();
    }

    function visible(sec, f) {
      if (f.when === 'hadBodyFat' && state.hadBodyFat === false) return false;
      if (!f.showIf) return true;
      const v = (state.answers[sec.id] || {})[f.showIf.key];
      return f.showIf.in ? f.showIf.in.includes(v) : v === f.showIf.equals;
    }

    function bestOf(f, arr) {
      const nums = (arr || []).filter(isNum).map(Number);
      if (!nums.length) return null;
      return f.best === 'min' ? Math.min(...nums) : Math.max(...nums);
    }

    function fieldHasValue(sec, f) {
      if (f.type === 'heading') return false;
      if (f.type === 'file') return !!pending[f.key] || !!state.uploaded[f.key];
      const v = getVal(sec, f);
      if (f.type === 'trials') return (v || []).some(isNum);
      if (f.type === 'number') return isNum(v);
      if (f.type === 'multi') return Array.isArray(v) && v.length > 0;
      if (f.type === 'check') return v === true;
      const dflt = (tier.defaults || {})[f.key] !== undefined ? tier.defaults[f.key] : f.default;
      if (dflt !== undefined && v === dflt) return false;
      return v !== undefined && v !== null && String(v).trim() !== '';
    }

    function sectionStatus(sec) {
      if (state.skipped[sec.id]) return 'skipped';
      if (sec.kind === 'flow') {
        if (state.flow.done) return 'done';
        return Object.keys(state.answers[sec.id] || {}).length ? 'partial' : 'empty';
      }
      const shown = fieldsOf(sec).filter(f => f.type !== 'heading' && visible(sec, f));
      const filled = shown.filter(f => fieldHasValue(sec, f)).length;
      if (!filled) return 'empty';
      // free-text notes are optional; everything else counts toward "complete"
      const required = shown.filter(f => f.type !== 'textarea' && f.type !== 'text' && f.type !== 'check');
      return required.every(f => fieldHasValue(sec, f)) ? 'done' : 'partial';
    }

    // ---- movement screen flow ----

    const screenAns = () => (state.answers.screen = state.answers.screen || {});

    function evalCond(c, ans) {
      switch (c.op) {
        case 'always': return true;
        case 'and': return c.of.every(x => evalCond(x, ans));
        case 'or': return c.of.some(x => evalCond(x, ans));
        case 'is': return ans[c.field] === c.choice;
        default: {
          const v = ans[c.field];
          if (!isNum(v)) return false;
          const n = Number(v);
          return c.op === 'ge' ? n >= c.value : c.op === 'gt' ? n > c.value : c.op === 'lt' ? n < c.value : n <= c.value;
        }
      }
    }

    function nextRef(ref) {
      const s = FLOW.screens[ref];
      for (const r of s.route || []) if (evalCond(r.if, screenAns())) return r.to;
      const i = FLOW.order.indexOf(ref);
      return FLOW.order[i + 1] || null;
    }

    function flowAdvance() {
      const cur = state.flow.hist[state.flow.hist.length - 1];
      const n = nextRef(cur);
      if (n) state.flow.hist.push(n); else state.flow.done = true;
      save(); render();
    }

    function flowBack() {
      if (state.flow.done) { state.flow.done = false; save(); render(); return; }
      if (state.flow.hist.length > 1) { state.flow.hist.pop(); save(); render(); }
    }

    function flowAnswered(ref) {
      const s = FLOW.screens[ref];
      if (s.type === 'statement' || s.type === 'text' || s.type === 'longtext') return true;
      const v = screenAns()[ref];
      return s.type === 'number' ? isNum(v) : v !== undefined && v !== '';
    }

    function renderFlow(sec) {
      const box = el('div', { className: 'panel' });
      box.append(el('h2', { className: 'panel-title', text: sec.title }), el('p', { className: 'blurb', text: sec.blurb }));
      if (state.flow.done) {
        box.append(el('div', { className: 'alert ok', text: 'Movement screen complete. Every finding should be confirmed by a second exam or a manual test.' }));
        box.append(flowSummary());
        box.append(el('div', { className: 'formnav' },
          el('button', { type: 'button', className: 'btn ghost', text: '← Back to the last question', onclick: flowBack }),
          el('button', { type: 'button', className: 'btn', text: 'Next →', onclick: () => go(state.step + 1) })));
        return box;
      }
      const ref = state.flow.hist[state.flow.hist.length - 1];
      const s = FLOW.screens[ref];
      const card = el('div', { className: 'flowcard' + (s.type === 'statement' ? ' statement' : '') });
      card.append(el('div', { className: 'flowstep', text: s.type === 'statement' ? 'Finding' : 'Question ' + state.flow.hist.filter(r => FLOW.screens[r].type !== 'statement').length }));
      card.append(el('h3', { className: 'flowtitle', text: s.title }));
      if (s.desc) card.append(s.type === 'statement' ? richText(s.desc) : el('div', { className: 'hint', text: s.desc }));
      const isLast = !nextRef(ref);
      const nextBtn = el('button', { type: 'button', className: 'btn', text: isLast ? 'Finish screen' : s.type === 'statement' ? 'Continue →' : 'Next →', onclick: flowAdvance });
      const setReady = () => { nextBtn.disabled = !flowAnswered(ref); };

      if (s.type === 'choice') {
        const group = el('div', { className: 'opts', role: 'radiogroup' });
        for (const [key, label] of s.choices) {
          const input = el('input', { type: 'radio', name: 'flow-' + ref, value: key });
          input.checked = screenAns()[ref] === key;
          input.addEventListener('change', () => { screenAns()[ref] = key; save(); setReady(); refreshChips(); });
          group.append(el('label', { className: 'opt' }, input, el('span', { text: label })));
        }
        card.append(group);
      } else if (s.type === 'number') {
        const m = SCREEN_METRICS[ref] || {};
        const warn = el('div', { className: 'warn' });
        const input = el('input', { type: 'number', inputmode: 'decimal', step: 'any', value: screenAns()[ref] ?? '', 'aria-label': s.title });
        input.addEventListener('input', () => {
          screenAns()[ref] = input.value; save(); setReady(); refreshChips();
          warn.textContent = isNum(input.value) && m.min !== undefined && (Number(input.value) < m.min || Number(input.value) > m.max) ? 'That looks off. Check the number.' : '';
        });
        card.append(el('div', { className: 'numrow' }, input, m.unit ? el('span', { className: 'unit', text: m.unit }) : null), warn);
      } else if (s.type === 'text' || s.type === 'longtext') {
        const ta = el('textarea', { rows: 3, 'aria-label': s.title });
        ta.value = screenAns()[ref] || '';
        ta.addEventListener('input', () => { screenAns()[ref] = ta.value; save(); });
        card.append(ta);
      }
      setReady();
      card.append(el('div', { className: 'formnav' },
        state.flow.hist.length > 1 ? el('button', { type: 'button', className: 'btn ghost', text: '← Back', onclick: flowBack }) : el('span'), nextBtn));
      box.append(card);
      return box;
    }

    function flowRows() {
      const rows = [];
      for (const ref of state.flow.hist) {
        const s = FLOW.screens[ref];
        if (s.type === 'statement') { rows.push({ finding: true, text: s.title }); continue; }
        const v = screenAns()[ref];
        if (v === undefined || v === '') continue;
        let shown = v;
        if (s.type === 'choice') shown = (s.choices.find(c => c[0] === v) || [null, v])[1];
        if (s.type === 'number') shown = v + ' ' + ((SCREEN_METRICS[ref] || {}).unit || '');
        const label = s.title.replace(/^\d of 7 · /, '');
        rows.push({ label: label.length > 90 ? label.slice(0, 87) + '…' : label, value: shown });
      }
      return rows;
    }

    function flowSummary() {
      const wrap = el('div', { className: 'review-block' });
      for (const r of flowRows()) {
        if (r.finding) wrap.append(el('div', { className: 'finding', text: '→ ' + r.text }));
        else wrap.append(el('div', { className: 'review-row' }, el('span', { text: r.label }), el('b', { text: r.value })));
      }
      return wrap;
    }

    // ---- payload ----

    function buildPayload() {
      const answers = {};
      const measurements = [];
      const addM = (f, value, side) => measurements.push({ metric: f.metric, value, unit: f.unit || null, side: side || f.side || null });
      for (const sec of sections) {
        if (state.skipped[sec.id]) continue;
        const out = {};
        if (sec.kind === 'flow') {
          const a = screenAns();
          for (const ref of state.flow.hist) {
            const s = FLOW.screens[ref];
            if (s.type === 'statement') continue;
            const v = a[ref];
            if (v === undefined || v === '') continue;
            out[ref] = s.type === 'number' ? Number(v) : v;
            const m = SCREEN_METRICS[ref];
            if (m && s.type === 'choice') measurements.push({ metric: m.metric, text_value: RATING[v] || v, unit: null, side: m.side || null });
          }
          if (Object.keys(out).length) { out._path = state.flow.hist.slice(); answers[sec.id] = out; }
          continue;
        }
        for (const f of fieldsOf(sec)) {
          if (f.type === 'heading' || f.type === 'file' || f.athleteKey || !visible(sec, f)) continue;
          const v = getVal(sec, f);
          if (f.type === 'number') {
            if (!isNum(v)) continue;
            out[f.key] = Number(v);
            if (f.metric) addM(f, Number(v));
          } else if (f.type === 'trials') {
            const arr = (v || []).map(x => (isNum(x) ? Number(x) : null));
            if (!arr.some(x => x !== null)) continue;
            out[f.key] = arr;
            if (f.metric) addM(f, bestOf(f, arr));
          } else if (f.type === 'multi') {
            if (Array.isArray(v) && v.length) out[f.key] = v;
          } else if (f.type === 'check') {
            out[f.key] = v === true;
          } else {
            if (v === undefined || v === null || String(v).trim() === '') continue;
            out[f.key] = v;
          }
          if (f.method && out[f.key] !== undefined) out[f.key + '_method'] = f.method;
        }
        if (Object.keys(out).length) answers[sec.id] = out;
      }
      const prod = answers.production;
      if (prod && isNum(prod.cmj_con_impulse) && isNum(prod.cmj_ecc_impulse) && prod.cmj_ecc_impulse > 0) {
        measurements.push({ metric: 'cmj_ci_ei', value: Math.round((prod.cmj_con_impulse / prod.cmj_ecc_impulse) * 1000) / 1000, unit: 'ratio', side: null });
      }
      return {
        type: tier.kind, level: isRetest ? undefined : level, section: isRetest ? tier.section : undefined,
        assessed_on: state.assessed_on, status: 'submitted', form_version: (isRetest ? 'retest-' : '') + level + '-' + FORM_VERSION,
        data: { tier: level, equipment: tier.equipment || [], answers, skipped: Object.keys(state.skipped).filter(k => state.skipped[k]) },
        measurements,
      };
    }

    // ---- field rendering ----

    const warnFor = (f, v) => (isNum(v) && ((f.min !== undefined && Number(v) < f.min) || (f.max !== undefined && Number(v) > f.max)) ? 'That looks off. Check the number.' : '');

    function numberInput(f, id, value, onInput, label) {
      const input = el('input', { type: 'number', id, inputmode: 'decimal', step: f.step || 'any', min: f.min, max: f.max, value: value ?? '', 'aria-label': label });
      input.addEventListener('input', () => onInput(input.value));
      return input;
    }

    function renderFileField(sec, f, wrap) {
      const holder = el('div', { className: 'filebox' });
      const draw = () => {
        holder.replaceChildren();
        const p = pending[f.key];
        if (p) {
          if (f.image && p.url) holder.append(el('img', { className: 'thumb', src: p.url, alt: f.label }));
          holder.append(el('div', { className: 'fileinfo' }, el('b', { text: p.file.name }), el('span', { className: 'muted', text: ' · ' + fileSize(p.file.size) }),
            el('button', { type: 'button', className: 'linkbtn', text: 'Remove', onclick: () => { if (p.url) URL.revokeObjectURL(p.url); delete pending[f.key]; draw(); refreshChips(); } })));
        } else if (state.uploaded[f.key]) {
          holder.append(el('div', { className: 'fileinfo' }, el('b', { text: 'Uploaded' }), el('span', { className: 'muted', text: ' · saved to the athlete’s file' })));
        }
        const input = el('input', { type: 'file', id: 'f-' + sec.id + '-' + f.key, accept: f.accept, className: 'fileinput' });
        input.addEventListener('change', () => {
          const chosen = input.files && input.files[0];
          if (!chosen) return;
          const job = (async () => {
            const file = f.image ? await shrinkImage(chosen) : chosen;
            if (pending[f.key] && pending[f.key].url) URL.revokeObjectURL(pending[f.key].url);
            pending[f.key] = { file, url: f.image ? URL.createObjectURL(file) : null };
            delete state.uploaded[f.key]; save();
            draw(); refreshChips();
          })();
          jobs.add(job);
          job.finally(() => jobs.delete(job));
        });
        holder.append(el('label', { className: 'btn ghost filebtn', for: input.id, text: pending[f.key] || state.uploaded[f.key] ? 'Replace' : (f.image ? 'Take or choose photo' : 'Choose file') }), input);
      };
      draw();
      wrap.append(holder);
    }

    function renderField(sec, f) {
      if (f.type === 'heading') return el('h3', { className: 'field-heading', text: f.label });
      const id = 'f-' + sec.id + '-' + f.key;
      const wrap = el('div', { className: 'field', dataset: { key: f.key } });
      wrap.hidden = !visible(sec, f);
      wrap.append(el('label', { className: 'q', for: ['select', 'multi', 'file', 'check'].includes(f.type) ? null : id, text: f.label }));
      if (f.hint) wrap.append(el('div', { className: 'hint', text: f.hint }));
      const val = getVal(sec, f);

      if (f.type === 'number') {
        const warn = el('div', { className: 'warn', text: warnFor(f, val) });
        const input = numberInput(f, id, val, v => { setVal(sec, f, v); warn.textContent = warnFor(f, v); refreshChips(); }, f.label);
        wrap.append(el('div', { className: 'numrow' }, input, f.unit ? el('span', { className: 'unit', text: f.unit }) : null), warn);
      } else if (f.type === 'trials') {
        const best = el('div', { className: 'best' });
        const warn = el('div', { className: 'warn' });
        const showBest = () => { const b = bestOf(f, getVal(sec, f)); best.textContent = b === null ? '' : 'Best: ' + fmt(b) + (f.unit ? ' ' + f.unit : ''); };
        const row = el('div', { className: 'trials' });
        for (let i = 0; i < f.count; i++) {
          const input = numberInput(f, id + '-' + i, (val || [])[i], v => {
            const arr = (getVal(sec, f) || []).slice();
            while (arr.length < f.count) arr.push('');
            arr[i] = v; setVal(sec, f, arr); showBest();
            warn.textContent = arr.map(x => warnFor(f, x)).find(Boolean) || ''; refreshChips();
          }, f.label + ' trial ' + (i + 1));
          row.append(el('label', { className: 'trial' }, el('span', { className: 'trial-n', text: 'Trial ' + (i + 1) }), input));
        }
        row.append(f.unit ? el('span', { className: 'unit', text: f.unit }) : null);
        showBest();
        wrap.append(row, best, warn);
      } else if (f.type === 'select') {
        const group = el('div', { className: 'opts' + (f.inline ? ' inline' : ''), role: 'radiogroup' });
        for (const [value, label] of f.options) {
          const input = el('input', { type: 'radio', name: id, value });
          input.checked = val === value;
          input.addEventListener('change', () => { setVal(sec, f, value); refreshVisibility(sec); refreshChips(); });
          group.append(el('label', { className: 'opt' }, input, el('span', { text: label })));
        }
        wrap.append(group);
        if (f.default === undefined && (tier.defaults || {})[f.key] === undefined) {
          wrap.append(el('button', { type: 'button', className: 'linkbtn', text: 'Clear', onclick: () => { setVal(sec, f, ''); group.querySelectorAll('input').forEach(i => { i.checked = false; }); refreshVisibility(sec); refreshChips(); } }));
        }
      } else if (f.type === 'multi') {
        const group = el('div', { className: 'opts inline', role: 'group' });
        for (const [value, label] of f.options) {
          const input = el('input', { type: 'checkbox', value });
          input.checked = Array.isArray(val) && val.includes(value);
          input.addEventListener('change', () => {
            const cur = new Set(getVal(sec, f) || []);
            if (input.checked) cur.add(value); else cur.delete(value);
            setVal(sec, f, f.options.map(o => o[0]).filter(v => cur.has(v))); refreshChips();
          });
          group.append(el('label', { className: 'opt' }, input, el('span', { text: label })));
        }
        wrap.append(group);
      } else if (f.type === 'check') {
        wrap.replaceChildren();
        const cb = el('input', { type: 'checkbox', id });
        cb.checked = val === true;
        cb.addEventListener('change', () => { setVal(sec, f, cb.checked); refreshChips(); });
        wrap.append(el('label', { className: 'opt', for: id }, cb, el('span', { className: 'q', text: f.label })));
        if (f.hint) wrap.append(el('div', { className: 'hint', text: f.hint }));
      } else if (f.type === 'text') {
        const input = el('input', { type: 'text', id, value: val || '', autocomplete: 'off' });
        input.addEventListener('input', () => { setVal(sec, f, input.value); refreshChips(); });
        wrap.append(input);
      } else if (f.type === 'textarea') {
        const ta = el('textarea', { id, rows: 3 });
        ta.value = val || '';
        ta.addEventListener('input', () => { setVal(sec, f, ta.value); refreshChips(); });
        wrap.append(ta);
      } else if (f.type === 'file') {
        renderFileField(sec, f, wrap);
      }
      return wrap;
    }

    function refreshVisibility(sec) {
      for (const f of fieldsOf(sec)) {
        const w = root.querySelector('.field[data-key="' + f.key + '"]');
        if (w) w.hidden = !visible(sec, f);
      }
    }

    function protocolBlock(sec) {
      const list = protocolsOf(sec);
      if (!list.length) return null;
      return el('details', { className: 'protocol' },
        el('summary', { text: 'Protocols for this section' }),
        list.map(p => el('div', { className: 'proto' },
          el('h4', { text: p.name }),
          el('dl', {},
            el('dt', { text: 'Setup' }), el('dd', { text: p.setup }),
            el('dt', { text: 'Say' }), el('dd', { text: '“' + p.cue + '”' }),
            el('dt', { text: 'Trials' }), el('dd', { text: p.trials }),
            el('dt', { text: 'Invalid if' }), el('dd', { text: p.invalid })))));
    }

    // ---- steps ----

    function renderChips() {
      const row = el('nav', { className: 'steps', 'aria-label': 'Assessment sections' });
      steps.forEach((s, i) => {
        let mark = '';
        if (s.id === 'athlete') mark = (state.athlete.id || (state.athlete.first_name && state.athlete.last_name)) ? '✓ ' : '';
        else if (s.id !== 'review') { const st = sectionStatus(s); mark = st === 'done' ? '✓ ' : st === 'skipped' ? '– ' : st === 'partial' ? '• ' : ''; }
        row.append(el('button', { type: 'button', className: 'chip step-chip' + (i === state.step ? ' on' : ''), text: mark + s.title, onclick: () => go(i) }));
      });
      return row;
    }

    function refreshChips() { const old = root.querySelector('.steps'); if (old) old.replaceWith(renderChips()); }

    function go(i) { state.step = Math.max(0, Math.min(steps.length - 1, i)); save(); message = null; render(); window.scrollTo(0, 0); }

    function navButtons() {
      const last = state.step === steps.length - 1;
      return el('div', { className: 'formnav' },
        state.step > 0 ? el('button', { type: 'button', className: 'btn ghost', text: '← Back', onclick: () => go(state.step - 1) }) : el('span'),
        !last ? el('button', { type: 'button', className: 'btn', text: state.step === steps.length - 2 ? 'Review →' : 'Next →', onclick: () => go(state.step + 1) }) : null);
    }

    function renderAthlete() {
      const a = state.athlete;
      const box = el('div', { className: 'panel' });
      box.append(el('h2', { className: 'panel-title', text: 'Who is being assessed?' }));

      const results = el('div', { className: 'results' });
      const status = el('div', { className: 'hint', text: apiNote });
      const search = el('input', { type: 'search', id: 'athlete-search', placeholder: 'Search existing athletes by name', autocomplete: 'off', 'aria-label': 'Search existing athletes' });
      const drawResults = () => {
        results.replaceChildren();
        (searchResults || []).forEach(r => results.append(el('button', {
          type: 'button', className: 'result-row', onclick: async () => {
            try {
              const full = await api('GET', '/athletes/' + r.id);
              for (const k of Object.keys(a)) if (full[k] !== undefined && full[k] !== null) a[k] = full[k];
              a.id = full.id;
              try { state.hadBodyFat = (await api('GET', '/athletes/' + full.id + '/measurements?metric=body_fat_pct')).measurements.length > 0; } catch (e) { state.hadBodyFat = null; }
              save(); render();
            } catch (e) { apiNote = 'Could not load that athlete: ' + e.message; render(); }
          },
        }, el('b', { text: r.last_name + ', ' + r.first_name }), el('span', { text: [r.position, r.team].filter(Boolean).join(' · ') }))));
        if (searchResults && !searchResults.length && search.value.trim().length >= 2) results.append(el('div', { className: 'hint', text: tier.athleteMode === 'name' ? 'No athlete found with that name.' : 'No match. Enter them as a new athlete below.' }));
      };
      search.addEventListener('input', () => {
        clearTimeout(searchTimer);
        const q = search.value.trim();
        if (q.length < 2) { searchResults = null; drawResults(); return; }
        searchTimer = setTimeout(async () => {
          try { searchResults = (await api('GET', '/athletes?q=' + encodeURIComponent(q) + '&limit=8')).athletes; status.textContent = ''; }
          catch (e) { searchResults = null; status.textContent = e.status === 401 || e.status === 403 ? 'Sign in again to search athletes.' : (tier.athleteMode === 'name' ? 'The athlete list is not available yet because the database is not connected.' : 'The database is not connected yet. Enter the athlete below and they will be created when you submit.'); }
          drawResults();
        }, 250);
      });
      box.append(el('div', { className: 'field' }, el('label', { className: 'q', for: 'athlete-search', text: tier.athleteMode === 'name' ? 'Select an existing athlete' : 'Find an existing athlete' }), tier.athleteMode === 'name' ? el('div', { className: 'hint', text: 'Start typing a name, then choose the athlete from the list.' }) : null, search, status, results));

      if (a.id) {
        box.append(el('div', { className: 'selected' },
          el('div', {}, el('b', { text: a.first_name + ' ' + a.last_name }), el('span', { className: 'muted', text: tier.athleteMode === 'name' ? ' · existing athlete' : ' · existing athlete. Changes here update their record.' })),
          el('button', { type: 'button', className: 'linkbtn', text: 'Use a different athlete', onclick: () => { Object.assign(a, freshState().athlete); state.hadBodyFat = null; save(); render(); } })));
      }

      const input = (key, label, o = {}) => {
        const i = el('input', { type: o.type || 'text', id: 'a-' + key, value: a[key] || '', autocomplete: 'off', 'aria-label': label, inputmode: o.inputmode });
        i.addEventListener('input', () => { a[key] = i.value; save(); refreshChips(); });
        return el('div', { className: 'field' }, el('label', { className: 'q', for: 'a-' + key, text: label + (o.required ? ' *' : '') }), i);
      };
      if (tier.athleteMode !== 'name') box.append(el('div', { className: 'grid2' },
        input('first_name', 'First name', { required: true }), input('last_name', 'Last name', { required: true }),
        input('dob', 'Date of birth', { type: 'date' }), el('div'),
        input('email', 'Athlete email', { type: 'email', inputmode: 'email' }), input('phone', 'Athlete phone', { type: 'tel', inputmode: 'tel' }),
        input('parent_name', 'Parent name'), el('div'),
        input('parent_email', 'Parent email', { type: 'email', inputmode: 'email' }), input('parent_phone', 'Parent phone', { type: 'tel', inputmode: 'tel' })));
      const dateIn = el('input', { type: 'date', id: 'assessed-on', value: state.assessed_on });
      dateIn.addEventListener('input', () => { state.assessed_on = dateIn.value; save(); });
      box.append(el('div', { className: 'field' }, el('label', { className: 'q', for: 'assessed-on', text: 'Assessment date' }), dateIn));
      return box;
    }

    function renderSection(sec) {
      if (sec.kind === 'flow') return renderFlow(sec);
      const box = el('div', { className: 'panel' });
      box.append(el('h2', { className: 'panel-title', text: sec.title }), el('p', { className: 'blurb', text: sec.blurb }));
      if (sec.draft) box.append(el('div', { className: 'alert draft', text: 'Draft fields. These will change once we confirm what the equipment reports.' }));
      const proto = protocolBlock(sec);
      if (proto) box.append(proto);
      const body = el('div', { className: 'fields' });
      const fill = () => {
        body.replaceChildren();
        if (state.skipped[sec.id]) body.append(el('div', { className: 'hint', text: 'Skipped. Nothing from this section will be saved.' }));
        else fieldsOf(sec).forEach(f => body.append(renderField(sec, f)));
      };
      if (sec.optional) {
        const cb = el('input', { type: 'checkbox', id: 'skip-' + sec.id });
        cb.checked = !!state.skipped[sec.id];
        cb.addEventListener('change', () => { state.skipped[sec.id] = cb.checked; save(); fill(); refreshChips(); });
        box.append(el('label', { className: 'opt skip' }, cb, el('span', { text: 'Skip this section' })));
      }
      fill();
      box.append(body);
      return box;
    }

    function valueText(sec, f) {
      const v = getVal(sec, f);
      if (f.type === 'file') return pending[f.key] ? pending[f.key].file.name : state.uploaded[f.key] ? 'Uploaded' : '';
      if (f.type === 'number') return isNum(v) ? v + (f.unit ? ' ' + f.unit : '') : '';
      if (f.type === 'trials') { const b = bestOf(f, v); return b === null ? '' : (v || []).filter(isNum).join(' · ') + '  (best ' + fmt(b) + (f.unit ? ' ' + f.unit : '') + ')'; }
      if (f.type === 'select') { const o = f.options.find(x => x[0] === v); return o ? o[1] : ''; }
      if (f.type === 'multi') return Array.isArray(v) ? v.join(', ') : '';
      if (f.type === 'check') return v === true ? 'Yes' : 'No';
      return v ? String(v) : '';
    }

    function renderReview() {
      const box = el('div', { className: 'panel' });
      box.append(el('h2', { className: 'panel-title', text: 'Review and submit' }));
      const a = state.athlete;
      box.append(el('div', { className: 'review-block' },
        el('h3', { text: 'Athlete' }),
        el('div', { className: 'review-row' }, el('span', { text: 'Name' }), el('b', { text: (a.first_name + ' ' + a.last_name).trim() || 'Not entered' })),
        el('div', { className: 'review-row' }, el('span', { text: 'Assessment date' }), el('b', { text: state.assessed_on })),
        el('div', { className: 'review-row' }, el('span', { text: 'Level' }), el('b', { text: tier.title })),
        el('button', { type: 'button', className: 'linkbtn', text: 'Edit', onclick: () => go(0) })));
      const labels = { done: 'Complete', partial: 'Some missing', empty: 'Nothing entered', skipped: 'Skipped' };
      if (tier.after) box.append(el('div', { className: 'equip', text: tier.after.note }));
      for (const sec of sections) {
        const st = sectionStatus(sec);
        const block = el('div', { className: 'review-block' }, el('h3', {}, sec.title, el('span', { className: 'status ' + st, text: labels[st] })));
        if (st !== 'skipped') {
          if (sec.kind === 'flow') {
            for (const r of flowRows()) block.append(r.finding ? el('div', { className: 'finding', text: '→ ' + r.text }) : el('div', { className: 'review-row' }, el('span', { text: r.label }), el('b', { text: r.value })));
          } else {
            for (const f of fieldsOf(sec)) {
              if (f.type === 'heading' || !visible(sec, f)) continue;
              const t = valueText(sec, f);
              if (t) block.append(el('div', { className: 'review-row' }, el('span', { text: f.label }), el('b', { text: t })));
            }
          }
        }
        block.append(el('button', { type: 'button', className: 'linkbtn', text: 'Edit', onclick: () => go(steps.indexOf(sec)) }));
        box.append(block);
      }
      return box;
    }

    function renderDone() {
      return el('div', { className: 'panel done' },
        el('h2', { className: 'panel-title', text: 'Assessment saved' }),
        el('p', { className: 'blurb', text: (state.athlete.first_name + ' ' + state.athlete.last_name).trim() + ' · ' + tier.title + ' · ' + state.assessed_on }),
        tier.after ? el('p', { className: 'blurb', text: tier.after.note }) : null,
        el('div', { className: 'formnav' },
          tier.after ? el('a', { className: 'btn', href: tier.after.href, text: tier.after.label + ' →' }) : null,
          el('a', { className: 'btn ghost', href: '#/', text: 'Back to assessments' }),
          el('button', { type: 'button', className: 'btn', text: 'Start another', onclick: () => { state = freshState(); pending = {}; message = null; save(); clearDraft(); render(); } })));
    }

    // ---- submit ----

    function download() {
      const blob = new Blob([JSON.stringify({ athlete: state.athlete, ...buildPayload() }, null, 2)], { type: 'application/json' });
      const a = el('a', { href: URL.createObjectURL(blob), download: 'assessment-' + level + '-' + (state.athlete.last_name || 'athlete').toLowerCase() + '-' + state.assessed_on + '.json' });
      document.body.append(a); a.click(); a.remove();
    }

    function athleteBody() {
      const a = state.athlete, body = {};
      for (const k of ['first_name', 'last_name', 'dob', 'email', 'phone', 'parent_name', 'parent_email', 'parent_phone', 'playing_level', 'team', 'residence', 'position', 'sport']) {
        const v = typeof a[k] === 'string' ? a[k].trim() : a[k];
        if (v) body[k] = v;
      }
      if (a.dominant_hand) body.dominant_hand = a.dominant_hand;
      return body;
    }

    async function submit() {
      const a = state.athlete;
      if (!state.assessmentId && tier.athleteMode === 'name' && !a.id) {
        message = { kind: 'error', text: 'Select an existing athlete before submitting.' };
        state.step = 0; render(); return;
      }
      if (!state.assessmentId && !a.id && (!a.first_name.trim() || !a.last_name.trim())) {
        message = { kind: 'error', text: 'Add the athlete’s first and last name before submitting.' };
        state.step = 0; render(); return;
      }
      busy = true; message = null; render();
      const failed = [];
      try {
        await Promise.all([...jobs]);
        if (!state.assessmentId) {
          if (!a.id) { a.id = (await api('POST', '/athletes', athleteBody())).id; save(); }
          else if (!isRetest) await api('PATCH', '/athletes/' + a.id, athleteBody());
          const saved = await api('POST', '/assessments', Object.assign({ athlete_id: a.id }, buildPayload()));
          state.assessmentId = saved.id; save();
        }
        for (const sec of sections) for (const f of fieldsOf(sec)) {
          if (f.type !== 'file' || state.skipped[sec.id] || state.uploaded[f.key]) continue;
          const p = pending[f.key];
          if (!p) continue;
          try { await uploadFile(a.id, state.assessmentId, f.kind, p.file); state.uploaded[f.key] = true; delete pending[f.key]; save(); }
          catch (e) { failed.push(f.label + ' (' + e.message + ')'); }
        }
        busy = false;
        if (failed.length) {
          message = { kind: 'error', text: 'The assessment was saved, but these files did not upload: ' + failed.join('; ') + '.', retry: true, saved: true };
          render(); return;
        }
        clearDraft(); state.step = steps.length; render();
      } catch (e) {
        busy = false;
        const offline = !e.status || e.status === 404;
        message = { kind: 'error', retry: true, text: offline
          ? 'Could not reach the database. Your answers are saved on this device. You can try again, or download a copy.'
          : e.status === 401 || e.status === 403 ? 'You are signed out. Reload the page and sign in again; your answers are saved on this device.'
          : 'Could not save: ' + e.message };
        render();
      }
    }

    // ---- main render ----

    function render() {
      root.replaceChildren();
      if (state.step >= steps.length) { root.append(renderDone()); return; }
      root.append(renderChips());
      if (message) root.append(el('div', { className: 'alert ' + message.kind, role: 'alert' }, message.text,
        message.retry && !message.saved ? el('div', { className: 'alert-actions' }, el('button', { type: 'button', className: 'btn ghost', text: 'Download a copy', onclick: download })) : null));
      const s = steps[state.step];
      if (s.id === 'athlete') {
        if (tier.equipment && tier.equipment.length) root.append(el('div', { className: 'equip' }, el('b', { text: 'You will need: ' }), tier.equipment.join(', ')));
        root.append(renderAthlete());
      } else if (s.id === 'review') root.append(renderReview());
      else root.append(renderSection(s));
      if (s.id === 'review') {
        root.append(el('div', { className: 'formnav' },
          el('button', { type: 'button', className: 'btn ghost', text: '← Back', onclick: () => go(state.step - 1) }),
          el('button', { type: 'button', className: 'btn', text: busy ? 'Saving…' : (message && message.retry ? 'Try again' : 'Submit assessment'), disabled: busy, onclick: submit })));
      } else if (s.kind !== 'flow') root.append(navButtons());
      root.append(el('div', { className: 'draftnote' }, 'Draft saved on this device (photos and videos are not kept in the draft). ',
        el('button', { type: 'button', className: 'linkbtn', text: 'Start over', onclick: () => { if (confirm('Clear this draft and start over?')) { state = freshState(); pending = {}; clearDraft(); render(); } } })));
    }

    render();
  }

  window.VeloUForm = { mount };
})();
