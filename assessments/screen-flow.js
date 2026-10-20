// Movement screen decision tree for the intake forms. Generated from the Coach Onboarding Module 7 reasoning trees
// (7.3 movement screen, 7.4 shoulder syndromes) via typeform/build_form.py, plus the front-foot-elevated lunge after the squat.
// Each screen is a question or a statement; `route` is checked top to bottom and the first true condition wins,
// otherwise the flow moves to the next screen in `order`. Routes only ever go forward.
window.VELOU_SCREEN = {
 "order": [
  "e1",
  "e1b",
  "s1b_no",
  "s1b_yes",
  "s1c",
  "e2a",
  "s2a_fix",
  "e2a3",
  "s2a_struct",
  "s2a_soft",
  "s2a_sev",
  "e2b",
  "e2b2",
  "s2b",
  "e2c",
  "s2c_n",
  "s2c_w",
  "e2d_r",
  "e2d_r2",
  "e2d_l",
  "e2d_l2",
  "e3_ir_r",
  "e3_ir_l",
  "s3_post",
  "s3_lim",
  "e3_er",
  "e3_grab",
  "e3_reps",
  "s3_add",
  "e3_add_r",
  "e3_brevis_r",
  "e3_add_l",
  "e3_brevis_l",
  "e3_lead",
  "s3_lead",
  "e4a",
  "e4b",
  "e4c",
  "e4d",
  "e4e",
  "e5",
  "s5",
  "e5b",
  "s5_downward-rotation",
  "s5_depression",
  "s5_abduction",
  "s5_winging",
  "s5_anterior-glide",
  "s5_superior-glide",
  "s5_medial-rotation",
  "e6a",
  "e6b",
  "s6_acc",
  "s6_lim",
  "e7",
  "s_rule",
  "e_conf",
  "e_notes"
 ],
 "screens": {
  "e1": {
   "type": "choice",
   "title": "1 of 7 · Barefoot walk. Standing, barefoot. What happens to the arch?",
   "desc": "Looking for: foot strength and congruency with the gait pattern.",
   "choices": [
    [
     "pass",
     "Arch holds through the walk (pass)"
    ],
    [
     "flat",
     "Arch flattens (he had an arch to begin with)"
    ],
    [
     "flatfoot",
     "He presents flat-footed from the start"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e1",
      "choice": "pass"
     },
     "to": "e2a"
    },
    {
     "if": {
      "op": "is",
      "field": "e1",
      "choice": "flat"
     },
     "to": "e1b"
    },
    {
     "if": {
      "op": "is",
      "field": "e1",
      "choice": "flatfoot"
     },
     "to": "s1c"
    }
   ]
  },
  "e1b": {
   "type": "choice",
   "title": "Does the knee track with the eversion of the foot?",
   "choices": [
    [
     "no",
     "No, the knee does NOT track with the eversion"
    ],
    [
     "yes",
     "Yes, the knee tracks with the eversion"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e1b",
      "choice": "no"
     },
     "to": "s1b_no"
    },
    {
     "if": {
      "op": "is",
      "field": "e1b",
      "choice": "yes"
     },
     "to": "s1b_yes"
    }
   ]
  },
  "s1b_no": {
   "type": "statement",
   "title": "Assume the problem is upstream at the hip.",
   "desc": "Check it in the prone hip IR / ER exam (exam 3).",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e2a"
    }
   ]
  },
  "s1b_yes": {
   "type": "statement",
   "title": "The hip is strong enough to handle the foot position.",
   "desc": "Now ask whether the dysfunction is a byproduct of how he moves and produces force.",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e2a"
    }
   ]
  },
  "s1c": {
   "type": "statement",
   "title": "Flat-footed from the start is a different finding.",
   "desc": "Record it and move on. The collapsing-arch path does not apply."
  },
  "e2a": {
   "type": "choice",
   "title": "2 of 7 · Barefoot squat. His own stance, barefoot. As he lowers his center of mass, what does the foot do?",
   "desc": "Looking for: dorsiflexion and hip ROM under load, and the stance he chooses.",
   "choices": [
    [
     "ok",
     "Foot stays organized (no dysfunction seen)"
    ],
    [
     "fix",
     "Foot corrects out of the dysfunction as he lowers"
    ],
    [
     "nofix",
     "Foot does NOT correct"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e2a",
      "choice": "ok"
     },
     "to": "e2b"
    },
    {
     "if": {
      "op": "is",
      "field": "e2a",
      "choice": "fix"
     },
     "to": "s2a_fix"
    },
    {
     "if": {
      "op": "is",
      "field": "e2a",
      "choice": "nofix"
     },
     "to": "e2a3"
    }
   ]
  },
  "s2a_fix": {
   "type": "statement",
   "title": "Loading the foot fixed it.",
   "desc": "Train the feet to strengthen the arch.",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e2b"
    }
   ]
  },
  "e2a3": {
   "type": "choice",
   "title": "Assume limited dorsiflexion. Confirm it with a manual test or a heel-elevated squat. What did you find?",
   "desc": "Check the hip next (exam 3) as well.",
   "choices": [
    [
     "struct",
     "Structural block (a jammed-up talus)"
    ],
    [
     "soft",
     "Soft tissue (the soleus is limiting)"
    ],
    [
     "improved",
     "Heel lift improved the squat"
    ],
    [
     "severe",
     "Heel lift did NOT improve the squat much, and the manual test shows limited dorsiflexion"
    ],
    [
     "pending",
     "Not confirmed yet"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e2a3",
      "choice": "struct"
     },
     "to": "s2a_struct"
    },
    {
     "if": {
      "op": "is",
      "field": "e2a3",
      "choice": "soft"
     },
     "to": "s2a_soft"
    },
    {
     "if": {
      "op": "is",
      "field": "e2a3",
      "choice": "severe"
     },
     "to": "s2a_sev"
    },
    {
     "if": {
      "op": "is",
      "field": "e2a3",
      "choice": "improved"
     },
     "to": "e2b"
    },
    {
     "if": {
      "op": "is",
      "field": "e2a3",
      "choice": "pending"
     },
     "to": "e2b"
    }
   ]
  },
  "s2a_struct": {
   "type": "statement",
   "title": "A jammed-up talus.",
   "desc": "Train to that.",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e2b"
    }
   ]
  },
  "s2a_soft": {
   "type": "statement",
   "title": "The soleus is limiting.",
   "desc": "Train to that.",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e2b"
    }
   ]
  },
  "s2a_sev": {
   "type": "statement",
   "title": "The posterior chain is severely weak.",
   "desc": "The stance he chooses shapes how we train him."
  },
  "e2b": {
   "type": "choice",
   "title": "2 of 7 · Barefoot squat. Depth and symmetry.",
   "choices": [
    [
     "pass",
     "Full depth, feet organized, even on both sides (pass)"
    ],
    [
     "deeper",
     "Deeper on one side"
    ],
    [
     "limited",
     "Shallow or limited depth"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e2b",
      "choice": "pass"
     },
     "to": "e2c"
    },
    {
     "if": {
      "op": "is",
      "field": "e2b",
      "choice": "deeper"
     },
     "to": "e2b2"
    },
    {
     "if": {
      "op": "is",
      "field": "e2b",
      "choice": "limited"
     },
     "to": "e2c"
    }
   ]
  },
  "e2b2": {
   "type": "choice",
   "title": "Which side is deeper?",
   "choices": [
    [
     "r",
     "Right"
    ],
    [
     "l",
     "Left"
    ]
   ]
  },
  "s2b": {
   "type": "statement",
   "title": "That hip likely has more internal rotation.",
   "desc": "Compare it with the prone hip IR numbers in exam 3."
  },
  "e2c": {
   "type": "choice",
   "title": "Which stance did he choose?",
   "choices": [
    [
     "neutral",
     "Neutral stance, reaches the bottom"
    ],
    [
     "narrow",
     "Narrow stance, reaches the bottom well"
    ],
    [
     "wide",
     "Wide stance, shallow squat"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e2c",
      "choice": "neutral"
     },
     "to": "e2d_r"
    },
    {
     "if": {
      "op": "is",
      "field": "e2c",
      "choice": "narrow"
     },
     "to": "s2c_n"
    },
    {
     "if": {
      "op": "is",
      "field": "e2c",
      "choice": "wide"
     },
     "to": "s2c_w"
    }
   ]
  },
  "s2c_n": {
   "type": "statement",
   "title": "Likely enough dorsiflexion, with sufficient or excessive hip IR.",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e2d_r"
    }
   ]
  },
  "s2c_w": {
   "type": "statement",
   "title": "Likely an ER-biased hip, possibly limited into IR.",
   "desc": "In exam 3: if the manual hip IR test shows NO IR limit, the posterior chain is likely weak and not pulling him into posterior tilt on the way down."
  },
  "e2d_r": {
   "type": "choice",
   "title": "Front-foot-elevated lunge. Right foot forward, front foot elevated. Is there a loss of internal rotation on the front (right) hip?",
   "desc": "Looking for: loss of IR on the front hip and loss of ER control on the back hip.",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "no",
     "No"
    ]
   ]
  },
  "e2d_r2": {
   "type": "choice",
   "title": "Right foot forward. Is there a loss of external rotation control on the back (left) hip?",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "no",
     "No"
    ]
   ]
  },
  "e2d_l": {
   "type": "choice",
   "title": "Front-foot-elevated lunge. Left foot forward, front foot elevated. Is there a loss of internal rotation on the front (left) hip?",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "no",
     "No"
    ]
   ]
  },
  "e2d_l2": {
   "type": "choice",
   "title": "Left foot forward. Is there a loss of external rotation control on the back (right) hip?",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "no",
     "No"
    ]
   ]
  },
  "e3_ir_r": {
   "type": "choice",
   "title": "3 of 7 · Prone hip IR / ER. Prone on the table. Hip IR, RIGHT leg.",
   "desc": "Sufficient: 45° or more of IR on each leg. Limited: under 45°.",
   "choices": [
    [
     "suff",
     "Sufficient"
    ],
    [
     "lim",
     "Limited"
    ],
    [
     "exc",
     "Excessive"
    ]
   ]
  },
  "e3_ir_l": {
   "type": "choice",
   "title": "Hip IR, LEFT leg.",
   "desc": "Sufficient: 45° or more of IR on each leg. Limited: under 45°.",
   "choices": [
    [
     "suff",
     "Sufficient"
    ],
    [
     "lim",
     "Limited"
    ],
    [
     "exc",
     "Excessive"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "and",
      "of": [
       {
        "op": "is",
        "field": "e2c",
        "choice": "wide"
       },
       {
        "op": "or",
        "of": [
         {
          "op": "is",
          "field": "e3_ir_r",
          "choice": "suff"
         },
         {
          "op": "is",
          "field": "e3_ir_r",
          "choice": "exc"
         }
        ]
       },
       {
        "op": "or",
        "of": [
         {
          "op": "is",
          "field": "e3_ir_l",
          "choice": "suff"
         },
         {
          "op": "is",
          "field": "e3_ir_l",
          "choice": "exc"
         }
        ]
       }
      ]
     },
     "to": "s3_post"
    },
    {
     "if": {
      "op": "or",
      "of": [
       {
        "op": "is",
        "field": "e3_ir_r",
        "choice": "lim"
       },
       {
        "op": "is",
        "field": "e3_ir_l",
        "choice": "lim"
       }
      ]
     },
     "to": "s3_lim"
    },
    {
     "if": {
      "op": "always"
     },
     "to": "e3_er"
    }
   ]
  },
  "s3_post": {
   "type": "statement",
   "title": "Wide stance, shallow squat, and NO IR limit on the table.",
   "desc": "The posterior chain is likely weak and not pulling him into posterior tilt on the way down.",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e3_er"
    }
   ]
  },
  "s3_lim": {
   "type": "statement",
   "title": "IR is under the 45° standard on at least one side.",
   "desc": "Read it against the squat. A wide stance with a shallow squat points to an ER-biased hip, possibly limited into IR."
  },
  "e3_er": {
   "type": "choice",
   "title": "ER check (Craig's Test). Hand on the posterior pelvis, same side. Rotate the leg toward the other side. Where does the leg end up?",
   "choices": [
    [
     "pass",
     "Nearly lays flat, slightly above the opposite leg (pass)"
    ],
    [
     "limited",
     "Limited"
    ]
   ]
  },
  "e3_grab": {
   "type": "choice",
   "title": "Do the adductors or hamstrings grab as you push into IR?",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "no",
     "No"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e3_grab",
      "choice": "yes"
     },
     "to": "e3_reps"
    },
    {
     "if": {
      "op": "is",
      "field": "e3_grab",
      "choice": "no"
     },
     "to": "e3_lead"
    }
   ]
  },
  "e3_reps": {
   "type": "choice",
   "title": "Move in and out of IR for several reps. Does the ROM improve with reps?",
   "choices": [
    [
     "yes",
     "Yes, it improves"
    ],
    [
     "no",
     "No, it does not"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e3_reps",
      "choice": "yes"
     },
     "to": "s3_add"
    },
    {
     "if": {
      "op": "is",
      "field": "e3_reps",
      "choice": "no"
     },
     "to": "e3_lead"
    }
   ]
  },
  "s3_add": {
   "type": "statement",
   "title": "ROM improves with reps.",
   "desc": "Check adductor mobility and adductor brevis, both supine (next four questions, one pair for each leg)."
  },
  "e3_add_r": {
   "type": "choice",
   "title": "Adductor, supine. One leg straight. Passively move the RIGHT leg into horizontal abduction.",
   "desc": "Sufficient: 60° or more.",
   "choices": [
    [
     "suff",
     "Sufficient"
    ],
    [
     "lim",
     "Limited"
    ],
    [
     "exc",
     "Excessive"
    ]
   ]
  },
  "e3_brevis_r": {
   "type": "choice",
   "title": "Adductor brevis, RIGHT leg. Bend the knee, ankle just above the opposite knee, resting flat on the other thigh. One hand on the opposite pelvis, one on the bent knee, press apart. Does the bent knee come in line with the straight knee without much effort?",
   "choices": [
    [
     "yes",
     "Yes (sufficient)"
    ],
    [
     "no",
     "No"
    ]
   ]
  },
  "e3_add_l": {
   "type": "choice",
   "title": "Adductor, supine. One leg straight. Passively move the LEFT leg into horizontal abduction.",
   "desc": "Sufficient: 60° or more.",
   "choices": [
    [
     "suff",
     "Sufficient"
    ],
    [
     "lim",
     "Limited"
    ],
    [
     "exc",
     "Excessive"
    ]
   ]
  },
  "e3_brevis_l": {
   "type": "choice",
   "title": "Adductor brevis, LEFT leg. Bend the knee, ankle just above the opposite knee, resting flat on the other thigh. One hand on the opposite pelvis, one on the bent knee, press apart. Does the bent knee come in line with the straight knee without much effort?",
   "choices": [
    [
     "yes",
     "Yes (sufficient)"
    ],
    [
     "no",
     "No"
    ]
   ]
  },
  "e3_lead": {
   "type": "choice",
   "title": "Is the lead-leg IR greater than the back-leg IR?",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "no",
     "No"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e3_lead",
      "choice": "yes"
     },
     "to": "s3_lead"
    },
    {
     "if": {
      "op": "is",
      "field": "e3_lead",
      "choice": "no"
     },
     "to": "e4a"
    }
   ]
  },
  "s3_lead": {
   "type": "statement",
   "title": "Common in pitchers.",
   "desc": "Note it. It isn't automatically a problem."
  },
  "e4a": {
   "type": "choice",
   "title": "4 of 7 · Exaggerated lunge reach. Pitching stance. He reaches as far as he can until he feels very extended, then extends the back knee as much as possible. Can he get the hips square to the front?",
   "desc": "Looking for: hip extension, then the whole anterior sling.",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "no",
     "No, already a hip extension issue"
    ]
   ]
  },
  "e4b": {
   "type": "choice",
   "title": "Arms overhead. Do both arms stay straight and reach his ears?",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "no",
     "No: bent elbows, or arms that can't reach his ears (check shoulder flexion in exam 5)"
    ]
   ]
  },
  "e4c": {
   "type": "choice",
   "title": "Arch back as far as he can, still in the lunge. This tests thoracic plus hip extension together.",
   "choices": [
    [
     "pass",
     "Back knee straight, arms straight, shoulders at least over his glutes (pass)"
    ],
    [
     "limited",
     "Limited somewhere"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e4c",
      "choice": "pass"
     },
     "to": "e5"
    },
    {
     "if": {
      "op": "is",
      "field": "e4c",
      "choice": "limited"
     },
     "to": "e4d"
    }
   ]
  },
  "e4d": {
   "type": "choice",
   "title": "Is he comfortable doing a back bridge?",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "no",
     "No"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e4d",
      "choice": "yes"
     },
     "to": "e4e"
    },
    {
     "if": {
      "op": "is",
      "field": "e4d",
      "choice": "no"
     },
     "to": "e5"
    }
   ]
  },
  "e4e": {
   "type": "choice",
   "title": "Have him do the back bridge. Where does the arch come from?",
   "choices": [
    [
     "arms",
     "Downslope toward the arms: shoulder flexion is holding him back"
    ],
    [
     "bal",
     "Balanced throughout: pass"
    ],
    [
     "legs",
     "Downslope toward the legs: posterior chain is weak, or can't reciprocally inhibit the anterior chain enough"
    ]
   ]
  },
  "e5": {
   "type": "choice",
   "title": "5 of 7 · Supine shoulder flexion. Supine, knees bent, feet on the table. Do the arms move cleanly overhead?",
   "desc": "Looking for: clean shoulder flexion.",
   "choices": [
    [
     "pass",
     "Arms move cleanly overhead and lay flat on the table (pass)"
    ],
    [
     "fail",
     "Arms can't lay flat or move cleanly"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e5",
      "choice": "pass"
     },
     "to": "e6a"
    },
    {
     "if": {
      "op": "is",
      "field": "e5",
      "choice": "fail"
     },
     "to": "s5"
    }
   ]
  },
  "s5": {
   "type": "statement",
   "title": "Have him stand and take his shirt off.",
   "desc": "Watch how the scapulae move, static and dynamic. Match what you see to a syndrome on the next screen."
  },
  "e5b": {
   "type": "choice",
   "title": "Which scapular or shoulder syndrome best matches what you see?",
   "choices": [
    [
     "downward-rotation",
     "Scapular downward rotation"
    ],
    [
     "depression",
     "Scapular depression"
    ],
    [
     "abduction",
     "Scapular abduction"
    ],
    [
     "winging",
     "Scapular winging & tilting"
    ],
    [
     "anterior-glide",
     "Humeral anterior glide"
    ],
    [
     "superior-glide",
     "Humeral superior glide"
    ],
    [
     "medial-rotation",
     "Shoulder medial rotation"
    ],
    [
     "none",
     "None is clear, or not sure"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "is",
      "field": "e5b",
      "choice": "downward-rotation"
     },
     "to": "s5_downward-rotation"
    },
    {
     "if": {
      "op": "is",
      "field": "e5b",
      "choice": "depression"
     },
     "to": "s5_depression"
    },
    {
     "if": {
      "op": "is",
      "field": "e5b",
      "choice": "abduction"
     },
     "to": "s5_abduction"
    },
    {
     "if": {
      "op": "is",
      "field": "e5b",
      "choice": "winging"
     },
     "to": "s5_winging"
    },
    {
     "if": {
      "op": "is",
      "field": "e5b",
      "choice": "anterior-glide"
     },
     "to": "s5_anterior-glide"
    },
    {
     "if": {
      "op": "is",
      "field": "e5b",
      "choice": "superior-glide"
     },
     "to": "s5_superior-glide"
    },
    {
     "if": {
      "op": "is",
      "field": "e5b",
      "choice": "medial-rotation"
     },
     "to": "s5_medial-rotation"
    },
    {
     "if": {
      "op": "is",
      "field": "e5b",
      "choice": "none"
     },
     "to": "e6a"
    }
   ]
  },
  "s5_downward-rotation": {
   "type": "statement",
   "title": "Scapular downward rotation",
   "desc": "**Look for**\n- Inferior medial border closer to the spine than the superior border\n- Shoulders lower at the acromion end than at the neck\n\n**Confirm**\n- After 30° abduction and 60° flexion, the scapula re-enters downward rotation instead of continuing upward\n- Decreased humeral elevation in the final phase of flexion\n- Inferior angle doesn't reach midaxillary at the end of upward rotation\n\n**Inhibit (short)**\n- Rhomboids\n- Levator scapula\n- Pectoralis minor\n- Latissimus dorsi\n- Deltoid\n- Supraspinatus\n\n**Activate (weak)**\n- Upper trapezius\n- Lower trapezius\n- Serratus anterior\n\n**Use**\n- Vertical shrugs\n- Quadruped moves\n- Wall slide variations\n- Landmine presses\n- Shoulder flexion\n\n**Avoid**\n- Shrugs\n- Heavy carries\n- Frequent deadlifting\n- Pull / chin-up\n- Excessive scapular adduction",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e6a"
    }
   ]
  },
  "s5_depression": {
   "type": "statement",
   "title": "Scapular depression",
   "desc": "**Look for**\n- Like downward rotation, but rhomboids and levator scapulae usually aren't short\n- Long neck; superior angle below T2\n- Lat dominance may be interfering with elevation\n\n**Confirm**\n- Active-assisted scapular elevation separates out associated pain\n- Upper trap doesn't elevate the shoulder during elevation\n- Pain in the upper trap region\n\n**Inhibit (short)**\n- Pectoralis minor\n- Latissimus dorsi\n- Pectoralis major\n\n**Activate (weak)**\n- Upper trapezius\n- Middle trapezius\n- Levator scapula\n\n**Use**\n- Wall-assisted flexion\n- Quadruped moves\n- Wall slide variations\n- Landmine presses\n- OH carry\n\n**Avoid**\n- Shrugs\n- Heavy carries\n- Frequent deadlifting\n- Pull / chin-up\n- Prone trap raises",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e6a"
    }
   ]
  },
  "s5_abduction": {
   "type": "statement",
   "title": "Scapular abduction",
   "desc": "**Look for**\n- Medial border more than 3\" from the spine\n- Scapula rotated more than 30° into the frontal plane\n\n**Confirm**\n- Measure medial border to spine\n- Active-assisted adduction produces pain in shoulder flexion\n\n**Inhibit (short)**\n- Pectoralis major\n- Pectoralis minor\n- Deltoid\n- Supraspinatus\n- Serratus anterior\n\n**Activate (weak)**\n- Upper trapezius\n- Middle trapezius\n- Rhomboids\n\n**Use**\n- Horizontal rowing variations\n- Prone abduction\n- Heavy carries\n- Adducted goblet position\n\n**Avoid**\n- Zercher positioning\n- Serratus-dominant exercises\n- Overhead pressing",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e6a"
    }
   ]
  },
  "s5_winging": {
   "type": "statement",
   "title": "Scapular winging & tilting",
   "desc": "**Look for**\n- Inferior angle protrudes (tilting)\n- Thoracic kyphosis (tilting)\n- Medial border protrudes from the thorax (winging)\n- Flat thoracic spine (winging)\n\n**Confirm**\n- Scapula and humerus move 1:1\n- Insufficient posterior tilt even with passive guidance\n\n**Inhibit (short)**\n- Pectoralis minor\n- Rotator cuff\n- Deltoid\n- Serratus anterior*\n\n**Activate (weak)**\n- Upper trapezius\n- Lower trapezius\n- Middle trapezius\n- Serratus anterior*\n- Rhomboids\n\n**Use**\n- Prone trap raises\n- Wall slide variations\n- Quadruped movements\n- Wall press / push-up\n\n**Avoid**\n- Anything that lets winging continue during the rep\n\n*Serratus anterior appears on both sides on the poster.",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e6a"
    }
   ]
  },
  "s5_anterior-glide": {
   "type": "statement",
   "title": "Humeral anterior glide",
   "desc": "**Look for**\n- More than 1/3 of the humeral head in front of the acromion\n- Distal humerus posterior to the proximal end\n- Usually with an anteriorly tilted scapula\n\n**Confirm**\n- Passively correcting the glide reduces symptoms\n- A small indentation below the acromion on the back of the shoulder\n\n**Inhibit (short)**\n- Pectoralis minor\n- Pectoralis major\n\n**Activate (weak)**\n- External rotators\n\n**Use**\n- Banded ER + IR\n- Supine flexion\n- Horizontal row\n- T-spine mobility\n- Quadruped\n\n**Avoid**\n- Overhead pressing\n- Rowing with anterior glide\n- Heavy IR focus",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e6a"
    }
   ]
  },
  "s5_superior-glide": {
   "type": "statement",
   "title": "Humeral superior glide",
   "desc": "**Look for**\n- Humeral head rides up into the acromion during elevation, flexion, and abduction\n\n**Confirm**\n- Sharp pain at the front and side of the acromion in abduction and rotation\n- Correcting depressed shoulders doesn't change humeral head height\n- Symptoms in flexion drop with the elbows bent\n\n**Inhibit (short)**\n- Deltoid\n- Teres minor\n- Supraspinatus\n\n**Activate (weak)**\n- Supraspinatus\n- Infraspinatus\n\n**Use**\n- Wall slides + lift-offs\n- Prone ER lift-offs\n- Prone IR without superior glide\n- Prone trap raises\n\n**Avoid**\n- ER in adduction\n- Abduction with a straight elbow\n- Resisted flexion with a straight elbow",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e6a"
    }
   ]
  },
  "s5_medial-rotation": {
   "type": "statement",
   "title": "Shoulder medial rotation",
   "desc": "**Look for**\n- Humerus medially rotated in the anatomical position\n- Elbows sit away from the body\n\n**Confirm**\n- Shoulder flexion bends the elbow and flares it out\n- Less humeral lateral rotation during flexion\n- Palms face backward in the anatomical position\n\n**Inhibit (short)**\n- Latissimus dorsi\n- Pectoralis minor\n- Pectoralis major\n- Teres major\n\n**Activate (weak)**\n- Lateral rotators\n\n**Use**\n- Shoulder flexion\n- Wall slides\n- Quadruped movements\n- External rotation\n- Bottoms-up carries\n\n**Avoid**\n- Pull / chin-ups\n- OH pressing\n- Zercher positioning",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e6a"
    }
   ]
  },
  "e6a": {
   "type": "choice",
   "title": "6 of 7 · Tall-kneeling rotation. Hands criss-crossed on the shoulders. Squeeze the glutes so the pelvis can't rotate. Rotation to the DOMINANT side.",
   "desc": "Sufficient: at least 45° to the dominant side. Looking for thoracic rotation without the pelvis.",
   "choices": [
    [
     "suff",
     "Sufficient"
    ],
    [
     "lim",
     "Limited"
    ],
    [
     "exc",
     "Excessive"
    ]
   ]
  },
  "e6b": {
   "type": "choice",
   "title": "Rotation to the NON-DOMINANT side.",
   "choices": [
    [
     "suff",
     "Sufficient"
    ],
    [
     "lim",
     "Limited"
    ],
    [
     "exc",
     "Excessive"
    ]
   ],
   "route": [
    {
     "if": {
      "op": "and",
      "of": [
       {
        "op": "is",
        "field": "e6a",
        "choice": "exc"
       },
       {
        "op": "is",
        "field": "e6b",
        "choice": "lim"
       }
      ]
     },
     "to": "s6_acc"
    },
    {
     "if": {
      "op": "or",
      "of": [
       {
        "op": "is",
        "field": "e6a",
        "choice": "lim"
       },
       {
        "op": "is",
        "field": "e6b",
        "choice": "lim"
       }
      ]
     },
     "to": "s6_lim"
    },
    {
     "if": {
      "op": "always"
     },
     "to": "e7"
    }
   ]
  },
  "s6_acc": {
   "type": "statement",
   "title": "Excessive to the dominant side and limited to the non-dominant side is acceptable.",
   "desc": "As long as it comes with sufficient or excessive IR in the front hip. Check it against exam 3.",
   "route": [
    {
     "if": {
      "op": "always"
     },
     "to": "e7"
    }
   ]
  },
  "s6_lim": {
   "type": "statement",
   "title": "Under the 45° standard on at least one side.",
   "desc": "Record it and confirm with the next exam or a manual test."
  },
  "e7": {
   "type": "choice",
   "title": "7 of 7 · Supine shoulder ER / IR. Total rotational arc, ER + IR.",
   "desc": "Sufficient: around 180°. Slightly less is fine; he isn't fully warmed up yet.",
   "choices": [
    [
     "suff",
     "Sufficient"
    ],
    [
     "lim",
     "Limited"
    ],
    [
     "exc",
     "Excessive"
    ]
   ]
  },
  "s_rule": {
   "type": "statement",
   "title": "The screen is a chain of evidence.",
   "desc": "Never call a finding from one exam alone. Confirm it with the next one or with a manual test."
  },
  "e_conf": {
   "type": "choice",
   "title": "Was every finding confirmed by a second exam or a manual test?",
   "choices": [
    [
     "yes",
     "Yes"
    ],
    [
     "none",
     "No findings to confirm"
    ],
    [
     "no",
     "No, something is still unconfirmed"
    ]
   ]
  },
  "e_notes": {
   "type": "longtext",
   "title": "Anything else to record? Manual tests done, side noted, what to retest."
  }
 }
};
