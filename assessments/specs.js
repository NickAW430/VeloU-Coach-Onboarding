// What each Initial Intake level collects. Stations and protocols come from Coach Onboarding Module 7
// (Assessment execution); the movement screen comes from the movement screen spec in typeform/.
//
// A section is one station. A field is one thing the coach records. A field with a `metric` becomes a row in the
// measurements table (so it can be charted); everything else is kept in the assessment's JSON `data`.

(function () {
  const num = (key, label, o = {}) => Object.assign({ type: 'number', key, label }, o);
  const sel = (key, label, options, o = {}) => Object.assign({ type: 'select', key, label, options }, o);
  const trials = (key, label, o = {}) => Object.assign({ type: 'trials', key, label, count: 3, best: 'max' }, o);
  const note = (key, label, o = {}) => Object.assign({ type: 'textarea', key, label }, o);

  const YN = [['yes', 'Yes'], ['no', 'No']];
  const RL = [['right', 'Right'], ['left', 'Left']];

  const SECTIONS = {
    screen: {
      id: 'screen', title: 'Movement Screen', station: 1,
      blurb: 'Height and weight, then the seven exams in order. Each one confirms or questions what you saw in the one before. Never call a finding from one exam alone.',
      fields: [
        num('height_in', 'Height', { unit: 'in', metric: 'height_in', min: 40, max: 90, step: 0.25 }),
        num('weight_lb', 'Weight', { unit: 'lb', metric: 'weight_lb', min: 50, max: 400, step: 0.1 }),

        sel('e1', '1 of 7 · Barefoot walk. Standing, barefoot. What happens to the arch?', [
          ['arch_holds', 'Arch holds through the walk (pass)'],
          ['arch_flattens', 'Arch flattens (he had an arch to begin with)'],
          ['flat_footed', 'He presents flat-footed from the start']], { hint: 'Looking for foot strength and congruency with the gait pattern.' }),
        sel('e1b', 'Does the knee track with the eversion of the foot?', [
          ['knee_no', 'No, the knee does NOT track with the eversion'],
          ['knee_yes', 'Yes, the knee tracks with the eversion']], { showIf: { key: 'e1', equals: 'arch_flattens' } }),

        sel('e2a', '2 of 7 · Barefoot squat. His own stance, barefoot. As he lowers his center of mass, what does the foot do?', [
          ['foot_organized', 'Foot stays organized (no dysfunction seen)'],
          ['foot_corrects', 'Foot corrects out of the dysfunction as he lowers'],
          ['foot_no_correct', 'Foot does NOT correct']], { hint: 'Looking for dorsiflexion and hip ROM under load, and the stance he chooses.' }),
        sel('e2a3', 'Assume limited dorsiflexion. Confirm it with a manual test or a heel-elevated squat. What did you find?', [
          ['talus', 'Structural block (a jammed-up talus)'],
          ['soleus', 'Soft tissue (the soleus is limiting)'],
          ['heel_helped', 'Heel lift improved the squat'],
          ['heel_no_help', 'Heel lift did NOT improve the squat much, and the manual test shows limited dorsiflexion'],
          ['unconfirmed', 'Not confirmed yet']], { showIf: { key: 'e2a', equals: 'foot_no_correct' } }),
        sel('e2b', 'Barefoot squat. Depth and symmetry.', [
          ['full_pass', 'Full depth, feet organized, even on both sides (pass)'],
          ['deeper_one_side', 'Deeper on one side'],
          ['shallow', 'Shallow or limited depth']]),
        sel('e2b2', 'Which side is deeper?', RL, { showIf: { key: 'e2b', equals: 'deeper_one_side' } }),
        sel('e2c', 'Which stance did he choose?', [
          ['neutral', 'Neutral stance, reaches the bottom'],
          ['narrow', 'Narrow stance, reaches the bottom well'],
          ['wide', 'Wide stance, shallow squat']]),

        num('hip_ir_r', '3 of 7 · Prone hip IR / ER. Prone on the table. Hip IR, RIGHT leg', { unit: 'deg', metric: 'hip_ir', side: 'R', min: 0, max: 100, hint: 'Pass: 45° each leg.' }),
        num('hip_ir_l', 'Hip IR, LEFT leg', { unit: 'deg', metric: 'hip_ir', side: 'L', min: 0, max: 100, hint: 'Pass: 45° each leg.' }),
        sel('e3_er', "ER check (Craig's Test). Hand on the posterior pelvis, same side. Rotate the leg toward the other side. Where does the leg end up?", [
          ['pass', 'Nearly lays flat, slightly above the opposite leg (pass)'],
          ['limited', 'Limited']]),
        sel('e3_grab', 'Do the adductors or hamstrings grab as you push into IR?', YN),
        sel('e3_reps', 'Move in and out of IR for several reps. Does the ROM improve with reps?', [['yes', 'Yes, it improves'], ['no', 'No, it does not']]),
        num('e3_add', 'Adductor, supine. One leg straight. Passively move the other leg into horizontal abduction.', { unit: 'deg', metric: 'adductor_abduction', min: 0, max: 120, hint: 'Pass: 60° or more.' }),
        sel('e3_brevis', 'Adductor brevis, same leg. Bend the knee, ankle just above the opposite knee, resting flat on the other thigh. Press apart: does the bent knee come in line with the straight knee without much effort?', [
          ['sufficient', 'Yes (sufficient)'], ['no', 'No']]),
        sel('e3_lead', 'Is the lead-leg IR greater than the back-leg IR?', YN),

        sel('e4a', '4 of 7 · Exaggerated lunge reach. Pitching stance. He reaches as far as he can, then extends the back knee as much as possible. Can he get the hips square to the front?', [
          ['yes', 'Yes'], ['no_hip_ext', 'No, already a hip extension issue']]),
        sel('e4b', 'Arms overhead. Do both arms stay straight and reach his ears?', [
          ['yes', 'Yes'], ['no', "No: bent elbows, or arms that can't reach his ears (check shoulder flexion in exam 5)"]]),
        sel('e4c', 'Arch back as far as he can, still in the lunge. This tests thoracic plus hip extension together.', [
          ['pass', 'Back knee straight, arms straight, shoulders at least over his glutes (pass)'], ['limited', 'Limited somewhere']]),
        sel('e4d', 'Is he comfortable doing a back bridge?', YN),
        sel('e4e', 'Have him do the back bridge. Where does the arch come from?', [
          ['toward_arms', 'Downslope toward the arms: shoulder flexion is holding him back'],
          ['balanced', 'Balanced throughout: pass'],
          ['toward_legs', "Downslope toward the legs: posterior chain is weak, or can't reciprocally inhibit the anterior chain enough"]], { showIf: { key: 'e4d', equals: 'yes' } }),

        sel('e5', '5 of 7 · Supine shoulder flexion. Supine, knees bent, feet on the table. Do the arms move cleanly overhead?', [
          ['pass', 'Arms move cleanly overhead and lay flat on the table (pass)'], ['fail', "Arms can't lay flat or move cleanly"]]),
        sel('e5b', 'Which scapular or shoulder syndrome best matches what you see?', [
          ['downward_rotation', 'Scapular downward rotation'], ['depression', 'Scapular depression'], ['abduction', 'Scapular abduction'],
          ['winging_tilting', 'Scapular winging & tilting'], ['anterior_glide', 'Humeral anterior glide'], ['superior_glide', 'Humeral superior glide'],
          ['medial_rotation', 'Shoulder medial rotation'], ['unclear', 'None is clear, or not sure']], { showIf: { key: 'e5', equals: 'fail' } }),

        num('e6a', '6 of 7 · Tall-kneeling rotation. Hands criss-crossed on the shoulders, glutes squeezed so the pelvis cannot rotate. Rotation to the DOMINANT side', { unit: 'deg', metric: 'tk_rotation_dom', min: 0, max: 120, hint: 'Pass: at least 45° to the dominant side, thoracic rotation without the pelvis.' }),
        num('e6b', 'Rotation to the NON-DOMINANT side', { unit: 'deg', metric: 'tk_rotation_nondom', min: 0, max: 120 }),

        num('e7', '7 of 7 · Supine shoulder ER / IR. Total rotational arc, ER + IR', { unit: 'deg', metric: 'shoulder_arc_total', min: 60, max: 260, hint: 'Pass: around 180°. Slightly less is fine; he is not fully warmed up yet.' }),

        sel('e_conf', 'Was every finding confirmed by a second exam or a manual test?', [
          ['yes', 'Yes'], ['none', 'No findings to confirm'], ['no', 'No, something is still unconfirmed']]),
        note('e_notes', 'Anything else to record? Manual tests done, side noted, what to retest.'),
      ],
    },

    forceplate: {
      id: 'forceplate', title: 'Force Plate', station: 2,
      blurb: 'Enter the numbers from the best valid trial of each test, as reported by the force plate software.',
      protocols: [
        { name: 'CMJ (countermovement jump)', setup: 'Athlete waits for the plates to zero, then stands centered, feet shoulder-width apart, hands on hips, still while body weight is recorded.', cue: 'Keeping your hands on your hips and feet on the plate, jump as high as possible.', trials: '2-3 maximal jumps, 15-30 sec rest.', invalid: 'Feet move before takeoff, hands leave hips, multiple jumps, incomplete landing, excessive movement at start or end.' },
        { name: 'IMTP (isometric mid-thigh pull)', setup: 'Feet hip-width apart in the most natural athletic knee/hip position; bar at mid-thigh, hands gripping the bar. No straps; chalk is fine.', cue: 'Brace hard with your chest up, remove all slack from the bar, then pull as hard and as fast as possible against the fixed bar.', trials: '1-2 maximal pulls, 1 min rest.', invalid: 'Joint position changes, feet move, grip changes, the bar moves, a countermovement occurs, or effort is not sustained.' },
        { name: 'Squat jump', setup: 'Stands centered, feet shoulder-width apart, hands on hips; descends to the prescribed squat depth and holds briefly before jumping.', cue: 'Get into a comfortable squat position, hold still, then jump straight up as high and as fast as possible. Land naturally and stay balanced.', trials: '2-3 maximal jumps, 15-30 sec rest.', invalid: 'A countermovement before takeoff, feet reposition, hands leave hips, multiple jumps, position not held, uncontrolled landing.' },
        { name: 'CMJ rebound', setup: 'Stands centered, feet hip-width apart, hands on hips, from a stable upright start.', cue: 'Jump as high as possible, land, and immediately rebound into another maximal jump. Minimize ground contact time and try to repeat your first jump height.', trials: '2-3 maximal rebound-jump pairs, 15-30 sec rest.', invalid: 'An excessive pause between jumps, extra steps, hands leave hips, loss of balance, multiple contacts.' },
        { name: 'Plyo push-up', setup: 'After body weight is recorded, the athlete steps off, then sets up at the top of a push-up with hands centered on the plates.', cue: 'Push off the plates as explosively as possible and get your hands as high off the ground as you can. Land back on the plates with straight arms and absorb the landing.', trials: '2-3 maximal repetitions, 5-10 sec rest.', invalid: 'Hands move before takeoff, body position breaks, no clear hand separation, uneven contact, extra repetition, control lost on landing.' },
      ],
      fields: [
        { type: 'heading', label: 'CMJ' },
        num('cmj_peak_power', 'Peak power', { unit: 'W', metric: 'cmj_peak_power', min: 500, max: 8000 }),
        num('cmj_power_bm', 'Power / body mass', { unit: 'W/kg', metric: 'cmj_power_bm', min: 10, max: 80, step: 0.1 }),
        num('cmj_ecc_impulse', 'Eccentric impulse', { unit: 'N·s', metric: 'cmj_ecc_impulse', min: 20, max: 600 }),
        num('cmj_con_impulse', 'Concentric impulse', { unit: 'N·s', metric: 'cmj_con_impulse', min: 20, max: 600 }),
        { type: 'heading', label: 'IMTP' },
        num('imtp_peak_force', 'Peak force', { unit: 'N', metric: 'imtp_peak_force', min: 500, max: 8000 }),
        num('imtp_force_bm', 'Force / body mass', { unit: 'N/kg', metric: 'imtp_force_bm', min: 10, max: 100, step: 0.1 }),
        { type: 'heading', label: 'Squat jump' },
        num('sj_peak_power', 'Peak power', { unit: 'W', metric: 'sj_peak_power', min: 500, max: 8000 }),
        num('sj_jump_height', 'Jump height', { unit: 'in', metric: 'sj_jump_height', min: 3, max: 40, step: 0.1 }),
        { type: 'heading', label: 'CMJ rebound' },
        num('rj_rsi', 'Reactive strength', { unit: 'RSI', metric: 'rj_rsi', min: 0.1, max: 4, step: 0.01 }),
        num('rj_contact_ms', 'Ground contact time', { unit: 'ms', metric: 'rj_contact_ms', min: 80, max: 800 }),
        { type: 'heading', label: 'Plyo push-up' },
        num('ppu_peak_power', 'Peak power', { unit: 'W', metric: 'ppu_peak_power', min: 100, max: 4000 }),
        num('ppu_flight_ms', 'Flight time', { unit: 'ms', metric: 'ppu_flight_ms', min: 100, max: 900 }),
        note('fp_notes', 'Notes (invalid trials, anything that affected the numbers)'),
      ],
    },

    armcare: {
      id: 'armcare', title: 'ArmCare', station: 3, optional: true,
      blurb: 'Shoulder strength, before any throwing. Pros are read against an 80+ baseline. Skip this station if ArmCare is not being used.',
      protocols: [
        { name: 'ArmCare strength tests', setup: 'Supine, head down, feet straight. IR and ER: elbow slightly elevated on a pad at 90°. Scaption: arm straight at roughly 45°, still supine. Grip: half-kneeling, gripping the device with two fingers and the thumb.', cue: 'Keep your head down and feet straight. After the countdown, push as hard as you can into the device and maintain maximal force for 2-3 seconds.', trials: 'Two trials per exercise. If the two are far apart, run a third.', invalid: "The athlete's head leaves the ground, the feet are not straight, or the athlete is not aligned in the testing position." },
      ],
      fields: [
        { type: 'heading', label: 'Throwing arm' },
        num('ac_er_t', 'ER', { unit: 'lb', metric: 'armcare_er', armSide: 'throwing', min: 0, max: 150, step: 0.1 }),
        num('ac_ir_t', 'IR', { unit: 'lb', metric: 'armcare_ir', armSide: 'throwing', min: 0, max: 150, step: 0.1 }),
        num('ac_sc_t', 'Scaption', { unit: 'lb', metric: 'armcare_scaption', armSide: 'throwing', min: 0, max: 150, step: 0.1 }),
        num('ac_gr_t', 'Grip', { unit: 'lb', metric: 'armcare_grip', armSide: 'throwing', min: 0, max: 200, step: 0.1 }),
        { type: 'heading', label: 'Non-throwing arm' },
        num('ac_er_n', 'ER', { unit: 'lb', metric: 'armcare_er', armSide: 'other', min: 0, max: 150, step: 0.1 }),
        num('ac_ir_n', 'IR', { unit: 'lb', metric: 'armcare_ir', armSide: 'other', min: 0, max: 150, step: 0.1 }),
        num('ac_sc_n', 'Scaption', { unit: 'lb', metric: 'armcare_scaption', armSide: 'other', min: 0, max: 150, step: 0.1 }),
        num('ac_gr_n', 'Grip', { unit: 'lb', metric: 'armcare_grip', armSide: 'other', min: 0, max: 200, step: 0.1 }),
      ],
    },

    medballs: {
      id: 'medballs', title: 'Med Balls', station: 4,
      blurb: 'Ground to pelvis, 1 lb then 2 lb. Measure each throw with the radar gun. The best throw of the three counts.',
      protocols: [
        { name: 'Med ball throws', setup: 'Athlete assumes the prescribed throwing position with the 1 lb, then the 2 lb ball: on the mound for pitchers, from position for position players.', cue: 'Set up in a natural position, then throw the ball as fast as possible. Keep two hands on the med ball for the entire throw.', trials: '3 maximal throws per ball, 30 sec rest.', invalid: 'The starting position is not held, the athlete steps outside the designated area, the throw is released incorrectly, the ball is dropped, or the protocol is broken.' },
      ],
      fields: [
        trials('mb1', '1 lb ball', { unit: 'mph', metric: 'medball_1lb_velo', min: 10, max: 90, step: 0.1 }),
        trials('mb2', '2 lb ball', { unit: 'mph', metric: 'medball_2lb_velo', min: 10, max: 90, step: 0.1 }),
      ],
    },

    throws: {
      id: 'throws', title: 'Kneeling & Split-Stance Throw', station: 5,
      blurb: 'Legs removed, trunk to arm. Kneeling velocity has the highest single correlation to pitched velocity. Radar gun, best of three per side.',
      protocols: [
        { name: 'Kneeling throw', setup: 'Half-kneeling: front foot flat, rear knee on the ground, torso upright.', cue: 'Keeping your back knee on the ground, rotate and throw the ball as hard and as fast as possible.', trials: '3 maximal throws per side, 30 sec rest.', invalid: 'The rear knee or front foot moves, the athlete rises out of position, excessive lower-body assistance, mishandled throw.' },
        { name: 'Split-stance throw', setup: 'Front foot flat, back foot in a comfortable loaded position, torso neutral.', cue: 'Keeping your front foot on the ground, rotate and throw the ball as hard and as fast as possible. A follow-through with the back leg is allowed.', trials: '3 maximal throws per side, 30 sec rest.', invalid: 'The front foot lifts or moves, excessive momentum, excessive lower-body assistance, mishandled throw.' },
      ],
      fields: [
        { type: 'heading', label: 'Kneeling throw' },
        trials('kt_r', 'Right side', { unit: 'mph', metric: 'kneeling_throw_velo', side: 'R', min: 10, max: 90, step: 0.1 }),
        trials('kt_l', 'Left side', { unit: 'mph', metric: 'kneeling_throw_velo', side: 'L', min: 10, max: 90, step: 0.1 }),
        { type: 'heading', label: 'Split-stance throw' },
        trials('st_r', 'Right side', { unit: 'mph', metric: 'split_throw_velo', side: 'R', min: 10, max: 90, step: 0.1 }),
        trials('st_l', 'Left side', { unit: 'mph', metric: 'split_throw_velo', side: 'L', min: 10, max: 90, step: 0.1 }),
      ],
    },

    bullpen: {
      id: 'bullpen', title: 'Bullpen Velocity', station: 6, optional: true,
      blurb: 'What he actually throws. Skip this station for position players who are not throwing a bullpen.',
      protocols: [
        { name: 'Bullpen', setup: 'Regulation mound and rubber, with a catcher or target at the prescribed distance. Radar gun or Trackman positioned correctly and turned on.', cue: 'Use your normal pitching delivery and throw with game-intent. Stay consistent with your mechanics and attack the target.', trials: '15-20 pitches, multiple of each offering, normal recovery. Both windup and stretch.', invalid: 'A balk or illegal delivery, a slip or interruption, an aborted pitch, a pitch not thrown at the target, equipment failure, or an outside disruption.' },
      ],
      fields: [
        sel('bp_device', 'How was velocity measured?', [['radar', 'Radar gun'], ['trackman', 'Trackman']], { default: 'radar' }),
        num('bp_top', 'Top fastball velocity', { unit: 'mph', metric: 'bullpen_top_velo', min: 30, max: 110, step: 0.1 }),
        num('bp_avg', 'Average fastball velocity', { unit: 'mph', metric: 'bullpen_avg_velo', min: 30, max: 110, step: 0.1 }),
        num('bp_count', 'Pitches thrown', { unit: '', metric: 'bullpen_pitch_count', min: 1, max: 80, step: 1 }),
        note('bp_notes', 'Notes (pitch mix, anything that affected the session)'),
      ],
    },

    moundplate: {
      id: 'moundplate', title: 'Mound Force Plate', station: 6.5,
      draft: true,
      blurb: 'Force plate mound testing. These fields are a first draft: tell us what the mound plates report and we will replace them.',
      fields: [
        num('mp_drive_peak', 'Drive leg peak force', { unit: 'N', metric: 'mound_drive_peak_force', min: 100, max: 5000 }),
        num('mp_lead_brake', 'Lead leg peak braking force', { unit: 'N', metric: 'mound_lead_peak_braking_force', min: 100, max: 8000 }),
        num('mp_lead_vert', 'Lead leg peak vertical force', { unit: 'N', metric: 'mound_lead_peak_vertical_force', min: 100, max: 8000 }),
        num('mp_time_to_peak', 'Time to peak lead leg force', { unit: 'ms', metric: 'mound_time_to_peak_lead_force', min: 10, max: 1000 }),
        note('mp_notes', 'Notes'),
      ],
    },

    speed: {
      id: 'speed', title: 'Speed Testing', station: 7,
      blurb: 'Change of direction and straight-line speed.',
      protocols: [
        { name: '5-10-5 pro agility', setup: 'Three gates or lines set 5 yards apart in a straight line. Athlete straddles the middle line with one hand near the line.', cue: 'Go when the first gate fully fills green (or on the go). Sprint 5 yards, touch the line, change direction and sprint 10 yards to the far line, touch it, then sprint 5 yards through the middle.', trials: '2 trials per starting direction, 1 min rest.', invalid: 'A false start, a missed line touch, the wrong hand used, a displaced cone or line, or not finishing through the designated line.' },
        { name: '30-yard sprint', setup: 'A marked 30-yard lane with start, 10-yard split, and finish. Athlete starts in a consistent 2-point stance behind the start line.', cue: 'Accelerate as hard as possible through 30 yards. Keep sprinting through the finish; do not slow down early.', trials: '2 maximal sprints, 2 min rest. Record the 10-yard split and the 30-yard time.', invalid: 'A false start, starting ahead of the line, a slip or fall, slowing before the finish, leaving the lane, or timing equipment failure.' },
      ],
      fields: [
        sel('speed_timing', 'How was it timed?', [['stopwatch', 'Stopwatch (hand timed)'], ['laser', 'Laser timers']], { default: 'stopwatch', hint: 'Hand-timed and laser-timed numbers are not directly comparable, so we record which one this is.' }),
        { type: 'heading', label: '5-10-5' },
        trials('agility_l', 'Start left', { count: 2, best: 'min', unit: 's', metric: 'sprint_5_10_5', side: 'L', min: 3, max: 9, step: 0.01 }),
        trials('agility_r', 'Start right', { count: 2, best: 'min', unit: 's', metric: 'sprint_5_10_5', side: 'R', min: 3, max: 9, step: 0.01 }),
        { type: 'heading', label: '30-yard sprint' },
        trials('sprint_10', '10-yard split', { count: 2, best: 'min', unit: 's', metric: 'sprint_10yd_split', min: 1, max: 4, step: 0.01 }),
        trials('sprint_30', '30-yard time', { count: 2, best: 'min', unit: 's', metric: 'sprint_30yd', min: 3, max: 8, step: 0.01 }),
      ],
    },

    broad: {
      id: 'broad', title: 'Broad Jump', station: 8,
      blurb: 'Horizontal power, two-foot takeoff and landing. Measure with the tape from the takeoff line to the back of the heels.',
      protocols: [
        { name: 'Broad jump', setup: 'Athlete stands behind the takeoff line, feet about shoulder-width apart, stable, arms free to swing.', cue: 'Jump as far forward as possible. Use your arms, land on both feet, and stick the landing.', trials: '3 maximal jumps, 30 sec rest.', invalid: 'A foot crosses the takeoff line, a one-foot takeoff, falling backward or touching behind the landing point, stepping on landing, or losing balance.' },
      ],
      fields: [
        trials('bj', 'Distance', { unit: 'in', metric: 'broad_jump_in', min: 30, max: 160, step: 0.25 }),
      ],
    },
  };

  const TIERS = {
    basic: {
      level: 'basic', title: 'Basic Assessment',
      blurb: 'Very little technology. Built for remote evaluations and team evaluations.',
      equipment: ['Stopwatch', 'Tape measure', 'Radar gun', '1 lb med ball', '2 lb med ball'],
      sections: ['screen', 'medballs', 'throws', 'bullpen', 'speed', 'broad'],
      defaults: { speed_timing: 'stopwatch', bp_device: 'radar' },
    },
    advanced: {
      level: 'advanced', title: 'Advanced Assessment',
      blurb: 'Everything in Basic, plus force plate testing.',
      equipment: ['Force plates', 'Stopwatch', 'Tape measure', 'Radar gun', '1 lb med ball', '2 lb med ball'],
      sections: ['screen', 'forceplate', 'armcare', 'medballs', 'throws', 'bullpen', 'speed', 'broad'],
      defaults: { speed_timing: 'stopwatch', bp_device: 'radar' },
    },
    premier: {
      level: 'premier', title: 'Premier Assessment',
      blurb: 'Everything in Advanced, plus laser timers and force plate mound testing.',
      equipment: ['Force plates', 'Mound force plates', 'Laser timers', 'Tape measure', 'Radar gun', '1 lb med ball', '2 lb med ball'],
      sections: ['screen', 'forceplate', 'armcare', 'medballs', 'throws', 'bullpen', 'moundplate', 'speed', 'broad'],
      defaults: { speed_timing: 'laser', bp_device: 'radar' },
    },
  };

  window.VELOU_SPECS = { SECTIONS, TIERS };
})();
