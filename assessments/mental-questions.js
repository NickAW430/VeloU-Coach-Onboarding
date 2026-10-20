// The VeloU Mental Skills Questionnaire, taken from https://velouniversity.typeform.com/mentalskillq.
// `reversed: true` means the scale runs from Strongly Agree (left) to Strongly Disagree (right), so the raw answer
// must be flipped when scoring. Answers are stored raw: 1 is the left end of the scale shown.
window.VELOU_MENTAL = {
 "intro": "Please answer the following questionnaire based on the previous week. There are not right or wrong answers! This is simply a tool to help us understand where you stand within different mental performance areas. The more honest you are in this questionnaire, the better we can tailor our mental performance training to your specific needs and optimize your physical performance.",
 "skillsIntro": "In the next 7 sections (from Mental Preparation to Imagery Ability) select the answer that best relates to your current abilities. Pay close attention as the scale changes for certain questions!",
 "groups": [
  {
   "kind": "personality",
   "title": "Personality Test",
   "description": "Please answer the first 50 questions honesty about yourself on a 5 point scale ranging from strongly disagree (1) to strongly agree (5). Each question will be stated as \"I...\".",
   "items": [
    {
     "text": "I am the life of the party.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt01"
    },
    {
     "text": "I feel little concern for others.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt02"
    },
    {
     "text": "I am always prepared.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt03"
    },
    {
     "text": "I get stressed out easily.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt04"
    },
    {
     "text": "I have a rich vocabulary.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt05"
    },
    {
     "text": "I don't talk a lot.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt06"
    },
    {
     "text": "I am interested in people.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt07"
    },
    {
     "text": "I leave my belongings around.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt08"
    },
    {
     "text": "I am relaxed most of the time.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt09"
    },
    {
     "text": "I have difficulty understanding abstract ideas.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt10"
    },
    {
     "text": "I feel comfortable around people.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt11"
    },
    {
     "text": "I insult people.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt12"
    },
    {
     "text": "I pay attention to details.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt13"
    },
    {
     "text": "I worry about things.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt14"
    },
    {
     "text": "I have a vivid imagination.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt15"
    },
    {
     "text": "I keep in the background.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt16"
    },
    {
     "text": "I sympathize with others' feelings.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt17"
    },
    {
     "text": "I make a mess of things.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt18"
    },
    {
     "text": "I seldom feel blue.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt19"
    },
    {
     "text": "I am not interested in abstract ideas.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt20"
    },
    {
     "text": "I start conversations.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt21"
    },
    {
     "text": "I am not interested in other people's problems.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt22"
    },
    {
     "text": "I get chores done right away.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt23"
    },
    {
     "text": "I am easily disturbed.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt24"
    },
    {
     "text": "I have excellent ideas.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt25"
    },
    {
     "text": "I have little to say.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt26"
    },
    {
     "text": "I have a soft heart.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt27"
    },
    {
     "text": "I often forget to put things back in their proper place.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt28"
    },
    {
     "text": "I get upset easily.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt29"
    },
    {
     "text": "I do not have a good imagination.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt30"
    },
    {
     "text": "I talk to a lot of different people at parties.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt31"
    },
    {
     "text": "I am not really interested in others.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt32"
    },
    {
     "text": "I like order.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt33"
    },
    {
     "text": "I change my mood a lot.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt34"
    },
    {
     "text": "I am quick to understand things.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt35"
    },
    {
     "text": "I don't like to draw attention to myself.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt36"
    },
    {
     "text": "I take time out for others.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt37"
    },
    {
     "text": "I shirk my duties.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt38"
    },
    {
     "text": "I have frequent mood swings.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt39"
    },
    {
     "text": "I use difficult words.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt40"
    },
    {
     "text": "I don't mind being the center of attention.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt41"
    },
    {
     "text": "I feel others' emotions.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt42"
    },
    {
     "text": "I follow a schedule.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt43"
    },
    {
     "text": "I get irritated easily.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt44"
    },
    {
     "text": "I spend time reflecting on things.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt45"
    },
    {
     "text": "I am quiet around strangers.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt46"
    },
    {
     "text": "I make people feel at ease.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt47"
    },
    {
     "text": "I am exacting in my work.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt48"
    },
    {
     "text": "I often feel blue.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt49"
    },
    {
     "text": "I am full of ideas.",
     "steps": 5,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "pt50"
    }
   ]
  },
  {
   "kind": "skill",
   "title": "Mental Preparation",
   "items": [
    {
     "text": "I always set myself goals in training.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_mental_preparation_01"
    },
    {
     "text": "I always have very specific goals.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_mental_preparation_02"
    },
    {
     "text": "I always analyze my performance after I complete a mistake or task.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_mental_preparation_03"
    },
    {
     "text": "I usually set goals that I achieve.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_mental_preparation_04"
    }
   ]
  },
  {
   "kind": "skill",
   "title": "Self Confidence",
   "items": [
    {
     "text": "I feel that I lack confidence in my performance.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_self_confidence_01"
    },
    {
     "text": "I approach all practices/games with confident thought.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_self_confidence_02"
    },
    {
     "text": "My confidence drains away as a game or bullpen day approaches.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_self_confidence_03"
    },
    {
     "text": "Throughout games and bullpens I keep a positive attitude.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_self_confidence_04"
    }
   ]
  },
  {
   "kind": "skill",
   "title": "Anxiety and Worry Management",
   "items": [
    {
     "text": "I often experience fears about failing.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_anxiety_and_worry_management_01"
    },
    {
     "text": "I worry that I will humiliate myself during an outing or bullpen.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_anxiety_and_worry_management_02"
    },
    {
     "text": "I let mistakes worry me when I perform.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_anxiety_and_worry_management_03"
    },
    {
     "text": "I worry too much about outings and bullpens.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_anxiety_and_worry_management_04"
    }
   ]
  },
  {
   "kind": "skill",
   "title": "Concentration Ability",
   "items": [
    {
     "text": "My thoughts are often elsewhere during training",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_concentration_ability_01"
    },
    {
     "text": "My concentration lets me down during training and outings",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_concentration_ability_02"
    },
    {
     "text": "Unexpected external factors impact my performance",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "hint": "External factors can include: a bad call, weather, pressure form coaches or teammates, noice, mound structure, etc.",
     "key": "sk_concentration_ability_03"
    },
    {
     "text": "Being easily distracted is a problem for me.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_concentration_ability_04"
    }
   ]
  },
  {
   "kind": "skill",
   "title": "Relaxation Ability",
   "items": [
    {
     "text": "I am able to mentally relax myself before an outing or bullpen.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_relaxation_ability_01"
    },
    {
     "text": "I become tense before outings or bullpens.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_relaxation_ability_02"
    },
    {
     "text": "being able to calm myself down is one of my strongpoints.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_relaxation_ability_03"
    }
   ]
  },
  {
   "kind": "skill",
   "title": "Motivation",
   "items": [
    {
     "text": "During outings or bullpens I am usually psyched enough to perform well.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_motivation_01"
    },
    {
     "text": "I really enjoy a tough task.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "hint": "Examples of tough tasks can include: facing a tough lineup, trying to perfect a complex movement/mechanic, etc.",
     "key": "sk_motivation_02"
    },
    {
     "text": "I know how to relax in high pressure situations.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_motivation_03"
    },
    {
     "text": "I am good at motivating myself.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_motivation_04"
    },
    {
     "text": "I usually feel that I give full effort during training.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_motivation_05"
    }
   ]
  },
  {
   "kind": "skill",
   "title": "Imagery Ability",
   "items": [
    {
     "text": "I can rehearse specific in-game situations including all 5 senses in my head.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_imagery_ability_01"
    },
    {
     "text": "I can rehearse my skills in my head before using them.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_imagery_ability_02"
    },
    {
     "text": "It is difficult for me to use mental pictures.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Agree",
     "right": "Strongly Disagree",
     "reversed": true,
     "key": "sk_imagery_ability_03"
    },
    {
     "text": "I can easily image how movements feel.",
     "steps": 7,
     "start": 1,
     "left": "Strongly Disagree",
     "right": "Strongly Agree",
     "reversed": false,
     "key": "sk_imagery_ability_04"
    }
   ]
  },
  {
   "kind": "selftalk",
   "title": "Self-Talk",
   "description": "Please answer these questions on a scale of 1-10 that best describes how you use self-talk. Each scale will be different.",
   "items": [
    {
     "text": "Your self-talk help you keep a passive focus on external factors (1)an active focus on the task at hand (10).",
     "steps": 10,
     "start": 1,
     "hint": "Passive =1, Active = 10",
     "key": "st01"
    },
    {
     "text": "Your self-talk helps you focus on the outcome (1) or the process (10).",
     "steps": 10,
     "start": 1,
     "hint": "Outcome = 1, Process = 10",
     "key": "st02"
    },
    {
     "text": "Your self-talk helps you focus on the past (1) or the present (10).",
     "steps": 10,
     "start": 1,
     "hint": "Past = 1, Present = 10",
     "key": "st03"
    },
    {
     "text": "Your self-talk helps you focus on the future (1) or the present (10).",
     "steps": 10,
     "start": 1,
     "hint": "Future = 1, Present = 10",
     "key": "st04"
    },
    {
     "text": "Your self-talk comes from a destructive focus (1) or a constructive focus (10).",
     "steps": 10,
     "start": 1,
     "hint": "Destructive = 1, Constructive = 10",
     "key": "st05"
    },
    {
     "text": "My self-talk tends to be pessimistic (1) or optimistic (10).",
     "steps": 10,
     "start": 1,
     "hint": "Pessimistic = 1, Optimistic 10",
     "key": "st06"
    }
   ]
  },
  {
   "kind": "stress",
   "title": "Perceived Stress",
   "description": "In this last section we are going to discuss your feelings and thoughts during the last month. In each case you will be asked to indicate ho often you felt or thought a certain way.",
   "items": [
    {
     "text": "I have been upset because of something that happened unexpectedly.",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps01"
    },
    {
     "text": "I have felt that I was unable to control the important things in my life.",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps02"
    },
    {
     "text": "I have felt nervous and \"stressed\".",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps03"
    },
    {
     "text": "I have felt confident about my ability to handle my personal problems.",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps04"
    },
    {
     "text": "I have felt that things are going my way.",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps05"
    },
    {
     "text": "I found that I could not cope with all of the things I have to do.",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps06"
    },
    {
     "text": "I have been able to control irritations in my life.",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps07"
    },
    {
     "text": "I have felt that I am on top of things.",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps08"
    },
    {
     "text": "I have been angered because of things that were outside of my control.",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps09"
    },
    {
     "text": "I have felt difficulties are piling up so high that I can not overcome them.",
     "choices": [
      "Never",
      "Almost Never",
      "Sometimes",
      "Fairly Often",
      "Very Often"
     ],
     "key": "ps10"
    }
   ]
  }
 ]
};
