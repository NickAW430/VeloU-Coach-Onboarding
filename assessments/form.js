// Renders an Initial Intake assessment (Basic, Advanced or Premier) from specs.js and saves it through /api/v1.
// Exposes window.VeloUForm.mount(level, { container, setHeader }).

(function () {
  const { SECTIONS, TIERS } = window.VELOU_SPECS;
  const FORM_VERSION = 1;

  // ---- small helpers -------------------------------------------------------------------------

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

  async function api(method, path, body) {
    const res = await fetch('/api/v1' + path, {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : {},
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'same-origin',
    });
    let json = null;
    try { json = await res.json(); } catch (e) { /* not JSON */ }
    if (!res.ok) {
      const err = new Error((json && json.error) || 'HTTP ' + res.status);
      err.status = res.status;
      throw err;
    }
    return json;
  }

  // ---- mount ---------------------------------------------------------------------------------

  function mount(level, ui) {
    const tier = TIERS[level];
    const sections = tier.sections.map(id => SECTIONS[id]);
    const steps = [{ id: 'athlete', title: 'Athlete' }, ...sections, { id: 'review', title: 'Review' }];
    const draftKey = 'velou.draft.v' + FORM_VERSION + '.' + level;
    const root = ui.container;

    let state = loadDraft();
    let busy = false;
    let message = null; // { kind: 'error' | 'ok', text }
    let searchTimer = null;
    let searchResults = null;
    let apiNote = '';

    ui.setHeader(tier.title, tier.blurb);

    // ---- state ----

    function freshState() {
      const answers = {};
      for (const sec of sections) {
        answers[sec.id] = {};
        for (const f of sec.fields) if (f.default !== undefined) answers[sec.id][f.key] = f.default;
        for (const [k, v] of Object.entries(tier.defaults || {})) if (sec.fields.some(f => f.key === k)) answers[sec.id][k] = v;
      }
      return {
        athlete: { id: null, first_name: '', last_name: '', dob: '', sport: 'Baseball', position: '', dominant_hand: '', team: '', grad_year: '' },
        assessed_on: todayStr(), answers, skipped: {}, step: 0, assessmentId: null,
      };
    }

    function loadDraft() {
      try {
        const raw = localStorage.getItem(draftKey);
        if (raw) {
          const saved = JSON.parse(raw);
          const base = freshState();
          return Object.assign(base, saved, { answers: Object.assign(base.answers, saved.answers) });
        }
      } catch (e) { /* storage unavailable or corrupt: start fresh */ }
      return freshState();
    }

    function save() {
      try { localStorage.setItem(draftKey, JSON.stringify(state)); } catch (e) { /* ignore */ }
    }

    function clearDraft() {
      try { localStorage.removeItem(draftKey); } catch (e) { /* ignore */ }
    }

    const getVal = (sec, key) => (state.answers[sec.id] || {})[key];
    function setVal(sec, key, v) { state.answers[sec.id] = state.answers[sec.id] || {}; state.answers[sec.id][key] = v; save(); }

    function visible(sec, f) {
      if (!f.showIf) return true;
      return getVal(sec, f.showIf.key) === f.showIf.equals;
    }

    function bestOf(f, arr) {
      const nums = (arr || []).filter(isNum).map(Number);
      if (!nums.length) return null;
      return f.best === 'min' ? Math.min(...nums) : Math.max(...nums);
    }

    function fieldHasValue(sec, f) {
      const v = getVal(sec, f.key);
      if (f.type === 'trials') return (v || []).some(isNum);
      if (f.type === 'number') return isNum(v);
      if (f.type === 'heading') return false;
      const dflt = (tier.defaults || {})[f.key] !== undefined ? tier.defaults[f.key] : f.default;
      if (dflt !== undefined && v === dflt) return false; // untouched default
      return v !== undefined && v !== null && String(v).trim() !== '';
    }

    function sectionStatus(sec) {
      if (state.skipped[sec.id]) return 'skipped';
      const fields = sec.fields.filter(f => f.type !== 'heading' && visible(sec, f));
      const filled = fields.filter(f => fieldHasValue(sec, f)).length;
      if (!filled) return 'empty';
      const measured = fields.filter(f => f.metric);
      const measuredFilled = measured.filter(f => fieldHasValue(sec, f)).length;
      return measured.length && measuredFilled < measured.length ? 'partial' : 'done';
    }

    // ---- payload ----

    function throwingSide() { return state.athlete.dominant_hand === 'L' ? 'L' : 'R'; }

    function buildPayload() {
      const answers = {};
      const measurements = [];
      for (const sec of sections) {
        if (state.skipped[sec.id]) continue;
        const out = {};
        for (const f of sec.fields) {
          if (f.type === 'heading' || !visible(sec, f)) continue;
          const v = getVal(sec, f.key);
          if (f.type === 'number') {
            if (!isNum(v)) continue;
            out[f.key] = Number(v);
          } else if (f.type === 'trials') {
            const arr = (v || []).map(x => (isNum(x) ? Number(x) : null));
            if (!arr.some(x => x !== null)) continue;
            out[f.key] = arr;
          } else {
            if (v === undefined || v === null || String(v).trim() === '') continue;
            out[f.key] = v;
          }
          if (f.metric && out[f.key] !== undefined) {
            const value = f.type === 'trials' ? bestOf(f, out[f.key]) : out[f.key];
            if (value === null) continue;
            let side = f.side || null;
            if (f.armSide) side = f.armSide === 'throwing' ? throwingSide() : (throwingSide() === 'R' ? 'L' : 'R');
            measurements.push({ metric: f.metric, value, unit: f.unit || null, side });
          }
        }
        if (Object.keys(out).length) answers[sec.id] = out;
      }
      const fp = answers.forceplate;
      if (fp && isNum(fp.cmj_con_impulse) && isNum(fp.cmj_ecc_impulse) && fp.cmj_ecc_impulse > 0) {
        measurements.push({ metric: 'cmj_ci_ei', value: Math.round((fp.cmj_con_impulse / fp.cmj_ecc_impulse) * 1000) / 1000, unit: 'ratio', side: null });
      }
      return {
        type: 'intake', level, assessed_on: state.assessed_on, status: 'submitted', form_version: level + '-' + FORM_VERSION,
        data: { tier: level, equipment: tier.equipment, answers, skipped: Object.keys(state.skipped).filter(k => state.skipped[k]) },
        measurements,
      };
    }

    // ---- field rendering ----

    function warnFor(f, v) {
      if (!isNum(v)) return '';
      const n = Number(v);
      if ((f.min !== undefined && n < f.min) || (f.max !== undefined && n > f.max)) return 'That looks off. Check the number.';
      return '';
    }

    function renderNumberInput(sec, f, idBase, value, onInput, label) {
      const input = el('input', { type: 'number', id: idBase, inputmode: 'decimal', step: f.step || 'any', min: f.min, max: f.max, value: value === undefined || value === null ? '' : value, 'aria-label': label });
      input.addEventListener('input', () => onInput(input.value, input));
      return input;
    }

    function renderField(sec, f) {
      if (f.type === 'heading') return el('h3', { className: 'field-heading', text: f.label });
      const id = 'f-' + sec.id + '-' + f.key;
      const wrap = el('div', { className: 'field', dataset: { key: f.key } });
      wrap.hidden = !visible(sec, f);
      wrap.append(el('label', { className: 'q', for: f.type === 'select' ? null : id, text: f.label }));
      if (f.hint) wrap.append(el('div', { className: 'hint', text: f.hint }));

      if (f.type === 'number') {
        const warn = el('div', { className: 'warn' });
        const input = renderNumberInput(sec, f, id, getVal(sec, f.key), (v, inp) => { setVal(sec, f.key, v); warn.textContent = warnFor(f, v); refreshChips(); }, f.label);
        warn.textContent = warnFor(f, getVal(sec, f.key));
        wrap.append(el('div', { className: 'numrow' }, input, f.unit ? el('span', { className: 'unit', text: f.unit }) : null), warn);
      } else if (f.type === 'trials') {
        const vals = (getVal(sec, f.key) || []).slice();
        const best = el('div', { className: 'best' });
        const refreshBest = () => {
          const b = bestOf(f, getVal(sec, f.key));
          best.textContent = b === null ? '' : 'Best: ' + fmt(b) + (f.unit ? ' ' + f.unit : '');
        };
        const warn = el('div', { className: 'warn' });
        const row = el('div', { className: 'trials' });
        for (let i = 0; i < f.count; i++) {
          const input = renderNumberInput(sec, f, id + '-' + i, vals[i], v => {
            const arr = (getVal(sec, f.key) || []).slice();
            while (arr.length < f.count) arr.push('');
            arr[i] = v;
            setVal(sec, f.key, arr);
            refreshBest();
            warn.textContent = arr.map(x => warnFor(f, x)).find(Boolean) || '';
            refreshChips();
          }, f.label + ' trial ' + (i + 1));
          row.append(el('label', { className: 'trial' }, el('span', { className: 'trial-n', text: 'Trial ' + (i + 1) }), input));
        }
        row.append(f.unit ? el('span', { className: 'unit', text: f.unit }) : null);
        refreshBest();
        wrap.append(row, best, warn);
      } else if (f.type === 'select') {
        const group = el('div', { className: 'opts', role: 'radiogroup' });
        for (const [value, text] of f.options) {
          const input = el('input', { type: 'radio', name: id, value });
          if (getVal(sec, f.key) === value) input.checked = true;
          input.addEventListener('change', () => { setVal(sec, f.key, value); refreshVisibility(sec); refreshChips(); });
          group.append(el('label', { className: 'opt' }, input, el('span', { text })));
        }
        wrap.append(group);
        if (f.default === undefined) {
          wrap.append(el('button', { type: 'button', className: 'linkbtn', text: 'Clear', onclick: () => { setVal(sec, f.key, undefined); group.querySelectorAll('input').forEach(i => { i.checked = false; }); refreshVisibility(sec); refreshChips(); } }));
        }
      } else if (f.type === 'textarea') {
        const ta = el('textarea', { id, rows: 3 });
        ta.value = getVal(sec, f.key) || '';
        ta.addEventListener('input', () => { setVal(sec, f.key, ta.value); refreshChips(); });
        wrap.append(ta);
      }
      return wrap;
    }

    function refreshVisibility(sec) {
      for (const f of sec.fields) {
        const w = root.querySelector('.field[data-key="' + f.key + '"]');
        if (w) w.hidden = !visible(sec, f);
      }
    }

    function protocolBlock(sec) {
      if (!sec.protocols) return null;
      return el('details', { className: 'protocol' },
        el('summary', { text: 'Protocol for this station' }),
        sec.protocols.map(p => el('div', { className: 'proto' },
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
        if (s.id !== 'athlete' && s.id !== 'review') {
          const st = sectionStatus(s);
          mark = st === 'done' ? '✓ ' : st === 'skipped' ? '– ' : st === 'partial' ? '• ' : '';
        } else if (s.id === 'athlete' && (state.athlete.id || (state.athlete.first_name && state.athlete.last_name))) mark = '✓ ';
        row.append(el('button', { type: 'button', className: 'chip step-chip' + (i === state.step ? ' on' : ''), dataset: { i }, text: mark + s.title, onclick: () => go(i) }));
      });
      return row;
    }

    function refreshChips() {
      const old = root.querySelector('.steps');
      if (old) old.replaceWith(renderChips());
    }

    function go(i) {
      state.step = Math.max(0, Math.min(steps.length - 1, i));
      save();
      message = null;
      render();
      window.scrollTo(0, 0);
    }

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

      // search existing athletes
      const results = el('div', { className: 'results' });
      const status = el('div', { className: 'hint', text: apiNote });
      const search = el('input', { type: 'search', id: 'athlete-search', placeholder: 'Search existing athletes by name', autocomplete: 'off', 'aria-label': 'Search existing athletes' });
      const drawResults = () => {
        results.replaceChildren();
        (searchResults || []).forEach(r => results.append(el('button', {
          type: 'button', className: 'result-row', onclick: async () => {
            try {
              const full = await api('GET', '/athletes/' + r.id);
              Object.assign(a, {
                id: full.id, first_name: full.first_name, last_name: full.last_name, dob: full.dob || '', sport: full.sport || '', position: full.position || '',
                dominant_hand: full.dominant_hand || '', team: full.team || '', grad_year: full.grad_year || '',
              });
              save(); render();
            } catch (e) { apiNote = 'Could not load that athlete: ' + e.message; render(); }
          },
        }, el('b', { text: r.last_name + ', ' + r.first_name }), el('span', { text: [r.sport, r.position, r.team].filter(Boolean).join(' · ') }))));
        if (searchResults && !searchResults.length && search.value.trim().length >= 2) results.append(el('div', { className: 'hint', text: 'No match. Enter them as a new athlete below.' }));
      };
      search.addEventListener('input', () => {
        clearTimeout(searchTimer);
        const q = search.value.trim();
        if (q.length < 2) { searchResults = null; drawResults(); return; }
        searchTimer = setTimeout(async () => {
          try { const r = await api('GET', '/athletes?q=' + encodeURIComponent(q) + '&limit=8'); searchResults = r.athletes; status.textContent = ''; }
          catch (e) { searchResults = null; status.textContent = e.status === 401 || e.status === 403 ? 'Sign in again to search athletes.' : 'The database is not connected yet. Enter the athlete below and they will be created when you submit.'; }
          drawResults();
        }, 250);
      });
      box.append(el('div', { className: 'field' }, el('label', { className: 'q', for: 'athlete-search', text: 'Find an existing athlete' }), search, status, results));

      if (a.id) {
        box.append(el('div', { className: 'selected' },
          el('div', {}, el('b', { text: a.first_name + ' ' + a.last_name }), el('span', { className: 'muted', text: ' · existing athlete' })),
          el('button', { type: 'button', className: 'linkbtn', text: 'Use a different athlete', onclick: () => { Object.assign(a, freshState().athlete); save(); render(); } })));
      }

      const text = (key, label, o = {}) => {
        const input = el('input', { type: o.type || 'text', id: 'a-' + key, value: a[key] || '', autocomplete: 'off', 'aria-label': label, inputmode: o.inputmode, disabled: !!a.id && !o.always });
        input.addEventListener('input', () => { a[key] = input.value; save(); refreshChips(); });
        return el('div', { className: 'field' }, el('label', { className: 'q', for: 'a-' + key, text: label + (o.required ? ' *' : '') }), input);
      };
      const hand = el('div', { className: 'field' }, el('label', { className: 'q', text: 'Throws / dominant hand' }),
        el('div', { className: 'opts inline', role: 'radiogroup' },
          [['R', 'Right'], ['L', 'Left'], ['S', 'Switch']].map(([v, t]) => {
            const i = el('input', { type: 'radio', name: 'a-hand', value: v, disabled: !!a.id });
            i.checked = a.dominant_hand === v;
            i.addEventListener('change', () => { a.dominant_hand = v; save(); });
            return el('label', { className: 'opt' }, i, el('span', { text: t }));
          })));
      box.append(el('div', { className: 'grid2' },
        text('first_name', 'First name', { required: true }), text('last_name', 'Last name', { required: true }),
        text('dob', 'Date of birth', { type: 'date' }), text('grad_year', 'Graduation year', { inputmode: 'numeric' }),
        text('sport', 'Sport'), text('position', 'Position'), text('team', 'Team'), hand));
      const dateIn = el('input', { type: 'date', id: 'assessed-on', value: state.assessed_on });
      dateIn.addEventListener('input', () => { state.assessed_on = dateIn.value; save(); });
      box.append(el('div', { className: 'field' }, el('label', { className: 'q', for: 'assessed-on', text: 'Assessment date' }), dateIn));
      return box;
    }

    function renderSection(sec) {
      const box = el('div', { className: 'panel' });
      box.append(el('h2', { className: 'panel-title', text: 'Station ' + Math.floor(sec.station) + (sec.station % 1 ? 'b' : '') + ' · ' + sec.title }), el('p', { className: 'blurb', text: sec.blurb }));
      if (sec.draft) box.append(el('div', { className: 'alert draft', text: 'Draft fields. These will change once we confirm what the equipment reports.' }));
      const proto = protocolBlock(sec);
      if (proto) box.append(proto);
      const body = el('div', { className: 'fields' });
      const fill = () => {
        body.replaceChildren();
        if (state.skipped[sec.id]) body.append(el('div', { className: 'hint', text: 'Skipped. Nothing from this station will be saved.' }));
        else sec.fields.forEach(f => body.append(renderField(sec, f)));
      };
      if (sec.optional) {
        const cb = el('input', { type: 'checkbox', id: 'skip-' + sec.id });
        cb.checked = !!state.skipped[sec.id];
        cb.addEventListener('change', () => { state.skipped[sec.id] = cb.checked; save(); fill(); refreshChips(); });
        box.append(el('label', { className: 'opt skip' }, cb, el('span', { text: 'Skip this station' })));
      }
      fill();
      box.append(body);
      return box;
    }

    function valueText(sec, f) {
      const v = getVal(sec, f.key);
      if (f.type === 'number') return isNum(v) ? v + (f.unit ? ' ' + f.unit : '') : '';
      if (f.type === 'trials') {
        const b = bestOf(f, v);
        return b === null ? '' : (v || []).filter(isNum).join(' · ') + '  (best ' + fmt(b) + (f.unit ? ' ' + f.unit : '') + ')';
      }
      if (f.type === 'select') { const o = f.options.find(x => x[0] === v); return o ? o[1] : ''; }
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
        el('div', { className: 'review-row' }, el('span', { text: 'Level' }), el('b', { text: tier.title }))));
      for (const sec of sections) {
        const st = sectionStatus(sec);
        const block = el('div', { className: 'review-block' }, el('h3', {}, sec.title, el('span', { className: 'status ' + st, text: { done: 'Complete', partial: 'Some numbers missing', empty: 'Nothing entered', skipped: 'Skipped' }[st] })));
        if (st !== 'skipped') {
          for (const f of sec.fields) {
            if (f.type === 'heading' || !visible(sec, f)) continue;
            const t = valueText(sec, f);
            if (t) block.append(el('div', { className: 'review-row' }, el('span', { text: f.label.replace(/^\d of 7 · /, '').split('. ')[0] }), el('b', { text: t })));
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
        el('div', { className: 'formnav' },
          el('a', { className: 'btn ghost', href: '#/', text: 'Back to assessments' }),
          el('button', { type: 'button', className: 'btn', text: 'Start another', onclick: () => { state = freshState(); message = null; save(); clearDraft(); render(); } })));
    }

    // ---- submit ----

    function download() {
      const blob = new Blob([JSON.stringify({ athlete: state.athlete, ...buildPayload() }, null, 2)], { type: 'application/json' });
      const a = el('a', { href: URL.createObjectURL(blob), download: 'assessment-' + level + '-' + (state.athlete.last_name || 'athlete').toLowerCase() + '-' + state.assessed_on + '.json' });
      document.body.append(a); a.click(); a.remove();
    }

    async function submit() {
      const a = state.athlete;
      if (!state.assessmentId && !a.id && (!a.first_name.trim() || !a.last_name.trim())) {
        message = { kind: 'error', text: 'Add the athlete’s first and last name before submitting.' };
        state.step = 0; render(); return;
      }
      busy = true; message = null; render();
      try {
        if (!a.id) {
          const body = { first_name: a.first_name.trim(), last_name: a.last_name.trim() };
          if (a.dob) body.dob = a.dob;
          if (a.sport) body.sport = a.sport;
          if (a.position) body.position = a.position;
          if (a.team) body.team = a.team;
          if (a.dominant_hand) body.dominant_hand = a.dominant_hand;
          if (isNum(a.grad_year)) body.grad_year = Number(a.grad_year);
          const created = await api('POST', '/athletes', body);
          a.id = created.id; save();
        }
        if (!state.assessmentId) {
          const saved = await api('POST', '/assessments', Object.assign({ athlete_id: a.id }, buildPayload()));
          state.assessmentId = saved.id; save();
        }
        clearDraft();
        busy = false; state.step = steps.length; message = null; render();
      } catch (e) {
        busy = false;
        const offline = !e.status || e.status === 404;
        message = { kind: 'error', text: offline
          ? 'Could not reach the database. Your answers are saved on this device. You can try again, or download a copy.'
          : e.status === 401 || e.status === 403 ? 'You are signed out. Reload the page and sign in again; your answers are saved on this device.'
          : 'Could not save: ' + e.message, retry: true };
        render();
      }
    }

    // ---- main render ----

    function render() {
      root.replaceChildren();
      if (state.step >= steps.length) { root.append(renderDone()); return; }
      root.append(renderChips());
      if (message) root.append(el('div', { className: 'alert ' + message.kind, role: 'alert' }, message.text,
        message.retry ? el('div', { className: 'alert-actions' }, el('button', { type: 'button', className: 'btn ghost', text: 'Download a copy', onclick: download })) : null));
      const s = steps[state.step];
      if (s.id === 'athlete') {
        if (tier.equipment) root.append(el('div', { className: 'equip' }, el('b', { text: 'You will need: ' }), tier.equipment.join(', ')));
        root.append(renderAthlete());
      } else if (s.id === 'review') root.append(renderReview());
      else root.append(renderSection(s));
      if (s.id === 'review') {
        root.append(el('div', { className: 'formnav' },
          el('button', { type: 'button', className: 'btn ghost', text: '← Back', onclick: () => go(state.step - 1) }),
          el('button', { type: 'button', className: 'btn', text: busy ? 'Saving…' : (message && message.retry ? 'Try again' : 'Submit assessment'), disabled: busy, onclick: submit })));
      } else root.append(navButtons());
      root.append(el('div', { className: 'draftnote' }, 'Draft saved on this device. ', el('button', { type: 'button', className: 'linkbtn', text: 'Start over', onclick: () => { if (confirm('Clear this draft and start over?')) { state = freshState(); clearDraft(); render(); } } })));
    }

    render();
  }

  window.VeloUForm = { mount };
})();
