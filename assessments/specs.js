// What each Initial Intake level collects. The question lists come from the VeloU intake Typeform plus the changes
// requested for the site; test protocols come from Coach Onboarding Module 7. The movement screen decision tree is in
// screen-flow.js.
//
// A section is one screen of the form. A field is one thing the coach records.
//   metric      the field also becomes a row in the measurements table, so it can be charted over time
//   athleteKey  the value belongs to the athlete record (not this assessment): team, position, parent contact, and so on
//   tiers       only show the field at these levels (basic, advanced, premier)
//   showIf      only show when another field in the same section has this answer: { key, equals } or { key, in: [...] }

(function () {
  const num = (key, label, o = {}) => Object.assign({ type: 'number', key, label }, o);
  const sel = (key, label, options, o = {}) => Object.assign({ type: 'select', key, label, options }, o);
  const multi = (key, label, options, o = {}) => Object.assign({ type: 'multi', key, label, options }, o);
  const text = (key, label, o = {}) => Object.assign({ type: 'text', key, label }, o);
  const note = (key, label, o = {}) => Object.assign({ type: 'textarea', key, label }, o);
  const trials = (key, label, o = {}) => Object.assign({ type: 'trials', key, label, count: 3, best: 'max' }, o);
  const file = (key, label, o = {}) => Object.assign({ type: 'file', key, label }, o);
  const heading = (label, o = {}) => Object.assign({ type: 'heading', label }, o);
  const same = list => list.map(x => [x, x]);

  const YN = [['yes', 'Yes'], ['no', 'No']];

  const SECTIONS = {
    intake: {
      id: 'intake', title: 'Initial Intake',
      blurb: 'About the athlete today. Two photos are needed: a head shot and a shirtless photo.',
      fields: [
        sel('playing_level', 'Current playing level', same(['7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade', 'Post Grad/Gap', 'College', 'Professional']), { athleteKey: 'playing_level' }),
        text('team', 'Current team', { athleteKey: 'team' }),
        text('residence', 'Current residence', { athleteKey: 'residence', hint: 'City and state.' }),
        sel('position', 'Position', same(['Pitcher', '2-Way', 'Catcher', 'Infielder', 'Outfielder', 'Utility']), { athleteKey: 'position' }),
        sel('throwing_arm', 'Throwing arm', [['R', 'Right'], ['L', 'Left'], ['S', 'Switch']], { athleteKey: 'dominant_hand' }),
        num('top_velo', 'Current top throwing velocity', { unit: 'mph', metric: 'reported_top_velo', min: 30, max: 110, step: 0.1 }),
        num('height_in', 'Height', { unit: 'in', metric: 'height_in', min: 40, max: 90, step: 0.25 }),
        num('weight_lb', 'Weight', { unit: 'lb', metric: 'weight_lb', min: 50, max: 400, step: 0.1 }),
        num('body_fat_photo', 'Body fat %, estimated from the shirtless photo', {
          unit: '%', metric: 'body_fat_pct', min: 3, max: 50, step: 0.1, tiers: ['basic', 'advanced'], method: 'photo',
          hint: 'Take the shirtless photo first, then enter the estimate from it.',
        }),
        num('body_fat_ultra', 'Body fat %, from the ultrasound body composition scan', {
          unit: '%', metric: 'body_fat_pct', min: 3, max: 50, step: 0.1, tiers: ['premier'], method: 'ultrasound',
        }),
        sel('reason', 'Primary reason for the evaluation', [
          ['velocity', 'I want to improve my throwing velocity'],
          ['command', 'I want to improve my command'],
          ['arsenal', 'I want to improve my pitching arsenal'],
          ['arm_health', 'I want to improve my arm health'],
          ['mechanics', 'I want to improve my throwing mechanics'],
          ['athleticism', 'I want to improve my athleticism'],
          ['competition', 'I want to improve my competition skills']]),
        heading('Photos'),
        file('photo_head', 'Athlete head shot', { kind: 'headshot', accept: 'image/*', image: true }),
        file('photo_shirtless', 'Athlete shirtless photo', { kind: 'shirtless', accept: 'image/*', image: true }),
      ],
    },

    injury: {
      id: 'injury', title: 'Injury History',
      blurb: 'Current and past injuries.',
      fields: [
        sel('status', 'Current injury status', [['currently_injured', 'Currently injured'], ['rehabbing', 'Rehabbing an injury'], ['previously_injured', 'Previously injured'], ['none', 'None']]),
        num('rehab_weeks', 'How far into rehab is the athlete?', { unit: 'weeks', min: 0, max: 156, step: 1, showIf: { key: 'status', equals: 'rehabbing' } }),
        sel('surgery', 'Was there surgery?', YN, { showIf: { key: 'status', in: ['rehabbing', 'previously_injured'] } }),
        text('surgery_detail', 'What surgery, and when?', { showIf: { key: 'surgery', equals: 'yes' } }),
        sel('cleared', 'Has the athlete been cleared?', YN, { showIf: { key: 'status', equals: 'previously_injured' } }),
        num('months_since', 'How far removed from the injury is the athlete?', { unit: 'months', min: 0, max: 240, step: 1, showIf: { key: 'status', equals: 'previously_injured' } }),
        multi('location', 'Where was the injury?', same(['Elbow', 'Shoulder', 'Head/Neck', 'Spine/Torso', 'Hip/Pelvis', 'Leg/Knee', 'Ankle/Foot', 'Other']), { showIf: { key: 'status', in: ['currently_injured', 'rehabbing', 'previously_injured'] } }),
        note('notes', 'Injury notes and context', { showIf: { key: 'status', in: ['currently_injured', 'rehabbing', 'previously_injured'] }, hint: 'Anything that helps explain it: mechanism, diagnosis, treatment, limitations.' }),
      ],
    },

    screen: {
      id: 'screen', title: 'Movement Screen', kind: 'flow',
      blurb: 'The exams run in order. Each answer decides the next question, so each one confirms or questions what you saw in the one before. Never call a finding from one exam alone.',
    },

    production: {
      id: 'production', title: 'Energy Production',
      blurb: 'Force plate numbers come from the best valid trial, as reported by the software. Speed and jump numbers are the best valid trial of each.',
      protocols: [
        { name: 'CMJ (countermovement jump)', setup: 'Athlete waits for the plates to zero, then stands centered, feet shoulder-width apart, hands on hips, still while body weight is recorded.', cue: 'Keeping your hands on your hips and feet on the plate, jump as high as possible.', trials: '2-3 maximal jumps, 15-30 sec rest.', invalid: 'Feet move before takeoff, hands leave hips, multiple jumps, incomplete landing, excessive movement at start or end.' },
        { name: 'Squat jump', setup: 'Stands centered, feet shoulder-width apart, hands on hips; descends to the prescribed squat depth and holds briefly before jumping.', cue: 'Get into a comfortable squat position, hold still, then jump straight up as high and as fast as possible. Land naturally and stay balanced.', trials: '2-3 maximal jumps, 15-30 sec rest.', invalid: 'A countermovement before takeoff, feet reposition, hands leave hips, multiple jumps, position not held, uncontrolled landing.' },
        { name: 'Rebound CMJ', setup: 'Stands centered, feet hip-width apart, hands on hips, from a stable upright start.', cue: 'Jump as high as possible, land, and immediately rebound into another maximal jump. Minimize ground contact time and try to repeat your first jump height.', trials: '2-3 maximal rebound-jump pairs, 15-30 sec rest.', invalid: 'An excessive pause between jumps, extra steps, hands leave hips, loss of balance, multiple contacts.' },
        { name: 'Plyo push-up', setup: 'After body weight is recorded, the athlete steps off, then sets up at the top of a push-up with hands centered on the plates.', cue: 'Push off the plates as explosively as possible and get your hands as high off the ground as you can. Land back on the plates with straight arms and absorb the landing.', trials: '2-3 maximal repetitions, 5-10 sec rest.', invalid: 'Hands move before takeoff, body position breaks, no clear hand separation, uneven contact, extra repetition, control lost on landing.' },
        { name: 'IMTP (isometric mid-thigh pull)', setup: 'Feet hip-width apart in the most natural athletic knee/hip position; bar at mid-thigh, hands gripping the bar. No straps; chalk is fine.', cue: 'Brace hard with your chest up, remove all slack from the bar, then pull as hard and as fast as possible against the fixed bar.', trials: '1-2 maximal pulls, 1 min rest.', invalid: 'Joint position changes, feet move, grip changes, the bar moves, a countermovement occurs, or effort is not sustained.' },
        { name: 'Broad jump', setup: 'Athlete stands behind the takeoff line, feet about shoulder-width apart, stable, arms free to swing.', cue: 'Jump as far forward as possible. Use your arms, land on both feet, and stick the landing.', trials: '3 maximal jumps, 30 sec rest. Measure from the takeoff line to the back of the heels.', invalid: 'A foot crosses the takeoff line, a one-foot takeoff, falling backward or touching behind the landing point, stepping on landing, or losing balance.' },
        { name: '5-10-5 pro agility', setup: 'Three gates or lines set 5 yards apart in a straight line. Athlete straddles the middle line with one hand near the line.', cue: 'Sprint 5 yards, touch the line, change direction and sprint 10 yards to the far line, touch it, then sprint 5 yards through the middle.', trials: '2 trials per starting direction, 1 min rest.', invalid: 'A false start, a missed line touch, the wrong hand used, a displaced cone or line, or not finishing through the designated line.' },
        { name: 'Straight-line sprints', setup: 'A marked lane with start and finish. Athlete starts in a consistent 2-point stance behind the start line.', cue: 'Accelerate as hard as possible through the finish. Keep sprinting; do not slow down early.', trials: '2 maximal sprints at each distance, 2 min rest.', invalid: 'A false start, starting ahead of the line, a slip or fall, slowing before the finish, leaving the lane, or timing equipment failure.' },
      ],
      fields: [
        heading('Countermovement jump (CMJ)'),
        num('cmj_peak_power', 'Peak power', { unit: 'W', metric: 'cmj_peak_power', min: 500, max: 8000 }),
        num('cmj_power_bm', 'Power / body mass', { unit: 'W/kg', metric: 'cmj_power_bm', min: 10, max: 80, step: 0.1 }),
        num('cmj_ecc_impulse', 'Eccentric impulse', { unit: 'N·s', metric: 'cmj_ecc_impulse', min: 20, max: 600 }),
        num('cmj_con_impulse', 'Concentric impulse', { unit: 'N·s', metric: 'cmj_con_impulse', min: 20, max: 600 }),
        heading('Squat jump'),
        num('sj_peak_power', 'Peak power', { unit: 'W', metric: 'sj_peak_power', min: 500, max: 8000 }),
        num('sj_jump_height', 'Jump height', { unit: 'in', metric: 'sj_jump_height', min: 3, max: 40, step: 0.1 }),
        heading('Rebound countermovement jump'),
        num('rj_rsi', 'Reactive strength', { unit: 'RSI', metric: 'rj_rsi', min: 0.1, max: 4, step: 0.01 }),
        num('rj_contact_ms', 'Ground contact time', { unit: 'ms', metric: 'rj_contact_ms', min: 80, max: 800 }),
        heading('Plyo push-up'),
        num('ppu_peak_power', 'Peak power', { unit: 'W', metric: 'ppu_peak_power', min: 100, max: 4000 }),
        num('ppu_flight_ms', 'Flight time', { unit: 'ms', metric: 'ppu_flight_ms', min: 100, max: 900 }),
        heading('Isometric mid-thigh pull (IMTP)'),
        num('imtp_peak_force', 'Peak force', { unit: 'N', metric: 'imtp_peak_force', min: 500, max: 8000 }),
        num('imtp_force_bm', 'Force / body mass', { unit: 'N/kg', metric: 'imtp_force_bm', min: 10, max: 100, step: 0.1 }),
        heading('Broad jump'),
        trials('bj', 'Distance', { unit: 'in', metric: 'broad_jump_in', min: 30, max: 160, step: 0.25 }),
        heading('Sprints'),
        sel('speed_timing', 'How were the sprints timed?', [['stopwatch', 'Stopwatch (hand timed)'], ['laser', 'Laser timers']], { default: 'stopwatch', hint: 'Hand-timed and laser-timed numbers are not directly comparable, so we record which one this is.' }),
        trials('agility_l', '5-10-5, start left', { count: 2, best: 'min', unit: 's', metric: 'sprint_5_10_5', side: 'L', min: 3, max: 9, step: 0.01 }),
        trials('agility_r', '5-10-5, start right', { count: 2, best: 'min', unit: 's', metric: 'sprint_5_10_5', side: 'R', min: 3, max: 9, step: 0.01 }),
        trials('sprint_10', '10-yard sprint', { count: 2, best: 'min', unit: 's', metric: 'sprint_10yd', min: 1, max: 4, step: 0.01 }),
        trials('sprint_30', '30-yard sprint', { count: 2, best: 'min', unit: 's', metric: 'sprint_30yd', min: 3, max: 8, step: 0.01 }),
        trials('sprint_60', '60-yard sprint', { count: 2, best: 'min', unit: 's', metric: 'sprint_60yd', min: 6, max: 14, step: 0.01 }),
        note('production_notes', 'Notes (invalid trials, anything that affected the numbers)'),
      ],
    },

    interference: {
      id: 'interference', title: 'Energy Interference', optional: true,
      blurb: 'Shoulder strength with the ArmCare device, before any throwing. Pros are read against an 80+ baseline. Skip this station if ArmCare is not being used.',
      protocols: [
        { name: 'ArmCare strength tests', setup: 'Supine, head down, feet straight. IR and ER: elbow slightly elevated on a pad at 90°. Scaption: arm straight at roughly 45°, still supine. Grip: half-kneeling, gripping the device with two fingers and the thumb.', cue: 'Keep your head down and feet straight. After the countdown, push as hard as you can into the device and maintain maximal force for 2-3 seconds.', trials: 'Two trials per exercise. If the two are far apart, run a third.', invalid: "The athlete's head leaves the ground, the feet are not straight, or the athlete is not aligned in the testing position." },
      ],
      fields: [
        num('ac_ir', 'Internal rotation strength', { unit: 'lb', metric: 'armcare_ir', min: 0, max: 150, step: 0.1 }),
        num('ac_er', 'External rotation strength', { unit: 'lb', metric: 'armcare_er', min: 0, max: 150, step: 0.1 }),
        num('ac_sc', 'Scaption strength', { unit: 'lb', metric: 'armcare_scaption', min: 0, max: 150, step: 0.1 }),
        num('ac_gr', 'Grip strength', { unit: 'lb', metric: 'armcare_grip', min: 0, max: 200, step: 0.1 }),
      ],
    },

    transference: {
      id: 'transference', title: 'Energy Transference',
      blurb: 'Med ball throws, then half-kneeling and split-stance throws. Measure each throw with the radar gun. The best of the three counts.',
      protocols: [
        { name: 'Med ball throws', setup: 'Athlete assumes the prescribed throwing position with the 2 lb, then the 1 lb ball: on the mound for pitchers, from position for position players.', cue: 'Set up in a natural position, then throw the ball as fast as possible. Keep two hands on the med ball for the entire throw.', trials: '3 maximal throws per ball, 30 sec rest.', invalid: 'The starting position is not held, the athlete steps outside the designated area, the throw is released incorrectly, the ball is dropped, or the protocol is broken.' },
        { name: 'Half-kneeling throw', setup: 'Front foot flat, rear knee on the ground, torso upright.', cue: 'Keeping your back knee on the ground, rotate and throw the ball as hard and as fast as possible.', trials: '3 maximal throws, 30 sec rest.', invalid: 'The rear knee or front foot moves, the athlete rises out of position, excessive lower-body assistance, mishandled throw.' },
        { name: 'Split-stance throw', setup: 'Front foot flat, back foot in a comfortable loaded position, torso neutral.', cue: 'Keeping your front foot on the ground, rotate and throw the ball as hard and as fast as possible. A follow-through with the back leg is allowed.', trials: '3 maximal throws, 30 sec rest.', invalid: 'The front foot lifts or moves, excessive momentum, excessive lower-body assistance, mishandled throw.' },
      ],
      fields: [
        trials('mb2', '2 lb med ball throw', { unit: 'mph', metric: 'medball_2lb_velo', min: 10, max: 90, step: 0.1 }),
        trials('mb1', '1 lb med ball throw', { unit: 'mph', metric: 'medball_1lb_velo', min: 10, max: 90, step: 0.1 }),
        trials('kneel', 'Half-kneeling baseball throw', { unit: 'mph', metric: 'kneeling_throw_velo', min: 10, max: 90, step: 0.1 }),
        trials('split', 'Split-stance baseball throw', { unit: 'mph', metric: 'split_throw_velo', min: 10, max: 90, step: 0.1 }),
      ],
    },

    mound_basic: {
      id: 'mound_basic', title: 'Mechanical Breakdown',
      blurb: 'There is no mound evaluation at this level. The breakdown comes from a video the athlete provides. Ask them to upload it now.',
      fields: [
        file('mech_video', 'Throwing mechanics video', { kind: 'mechanics_video', accept: 'video/*' }),
        note('mech_notes', 'Additional throwing notes and observations'),
      ],
    },

    mound_adv: {
      id: 'mound_adv', title: 'Mound Assessment',
      blurb: 'Bullpen on the mound with Trackman. Upload the Trackman report and the video breakdown collected today; they are stored in the athlete’s file.',
      fields: [
        num('tm_top_velo', 'Top Trackman throwing velocity', { unit: 'mph', metric: 'trackman_top_velo', min: 30, max: 110, step: 0.1 }),
        note('mound_notes', 'Additional throwing notes and observations'),
        file('tm_report', 'Trackman report', { kind: 'trackman_report', accept: '.pdf,.csv,.xls,.xlsx,application/pdf,text/csv,image/*' }),
        file('tm_video', 'Bullpen video (collected today)', { kind: 'trackman_video', accept: 'video/*' }),
      ],
    },

    mocap: {
      id: 'mocap', title: 'Motion Capture',
      blurb: 'Upload the motion capture video for the breakdown.',
      fields: [
        file('mocap_video', 'Motion capture video', { kind: 'mocap_video', accept: 'video/*' }),
        note('mocap_notes', 'Notes and observations'),
      ],
    },

    mental: {
      id: 'mental', title: 'Mental Skills Assessment', draft: true,
      blurb: 'The mental skills assessment is part of the Premier level. The questions are not defined yet; for now, record notes.',
      fields: [
        note('mental_notes', 'Mental skills notes'),
      ],
    },

    mound_plate: {
      id: 'mound_plate', title: 'Mound Force Plate', draft: true,
      blurb: 'Force plate mound testing. These fields are a first draft: tell us what the mound plates report and we will replace them.',
      fields: [
        num('mp_drive_peak', 'Drive leg peak force', { unit: 'N', metric: 'mound_drive_peak_force', min: 100, max: 5000 }),
        num('mp_lead_brake', 'Lead leg peak braking force', { unit: 'N', metric: 'mound_lead_peak_braking_force', min: 100, max: 8000 }),
        num('mp_lead_vert', 'Lead leg peak vertical force', { unit: 'N', metric: 'mound_lead_peak_vertical_force', min: 100, max: 8000 }),
        num('mp_time_to_peak', 'Time to peak lead leg force', { unit: 'ms', metric: 'mound_time_to_peak_lead_force', min: 10, max: 1000 }),
        note('mp_notes', 'Notes'),
      ],
    },
  };

  // Which numbers in the movement screen flow become chartable measurements.
  const SCREEN_METRICS = {
    e3_ir_r: { metric: 'hip_ir', side: 'R', unit: 'deg', min: 0, max: 100 },
    e3_ir_l: { metric: 'hip_ir', side: 'L', unit: 'deg', min: 0, max: 100 },
    e3_add: { metric: 'adductor_abduction', unit: 'deg', min: 0, max: 120 },
    e6a: { metric: 'tk_rotation_dom', unit: 'deg', min: 0, max: 120 },
    e6b: { metric: 'tk_rotation_nondom', unit: 'deg', min: 0, max: 120 },
    e7: { metric: 'shoulder_arc_total', unit: 'deg', min: 60, max: 260 },
  };

  // The levels differ only in the throwing exam (and, at Premier, ultrasound body fat and a mental skills assessment).
  const COMMON = ['intake', 'injury', 'screen', 'production', 'interference', 'transference'];
  const BASE_GEAR = ['Force plates', 'ArmCare', 'Stopwatch or laser timers', 'Tape measure', 'Radar gun', '1 lb med ball', '2 lb med ball'];
  const TIERS = {
    basic: {
      level: 'basic', title: 'Basic Assessment',
      blurb: 'The throwing evaluation is a video breakdown from a video the athlete provides.',
      equipment: BASE_GEAR,
      sections: [...COMMON, 'mound_basic'],
      defaults: { speed_timing: 'stopwatch' },
    },
    advanced: {
      level: 'advanced', title: 'Advanced Assessment',
      blurb: 'The throwing evaluation adds a Trackman report and a video breakdown collected on the day.',
      equipment: [...BASE_GEAR, 'Trackman', 'Camera for the bullpen video'],
      sections: [...COMMON, 'mound_adv'],
      defaults: { speed_timing: 'stopwatch' },
    },
    premier: {
      level: 'premier', title: 'Premier Assessment',
      blurb: 'The throwing evaluation adds a force plate mound assessment, motion capture breakdown, Trackman reporting, ultrasound body fat and a mental skills assessment.',
      equipment: [...BASE_GEAR, 'Trackman', 'Mound force plates', 'Motion capture', 'Ultrasound body composition'],
      sections: [...COMMON, 'mound_adv', 'mound_plate', 'mocap', 'mental'],
      defaults: { speed_timing: 'stopwatch' },
    },
  };

  window.VELOU_SPECS = { SECTIONS, TIERS, SCREEN_METRICS };
})();
