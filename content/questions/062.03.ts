import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const QIOJIX2GMP = questionOneCorrect({
  id: "QIOJIX2GMP",
  version: 1,
  learningObjectives: ["062.03.04.02.13", "062.03.04.02.06"],
  question: (subject) => dedent`
    Mode ${subject} transponders can provide vertical tracking by using a 
    _____ altitude increment.
  `,
  correctOptions: [
    {
      subject: "S",
      why: "Mode S",
      text: "25 ft",
    },
    {
      subject: "C",
      why: "Mode C",
      text: "100 ft",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "50 ft",
    },
    {
      why: "",
      text: "35 ft",
    },
  ],
  explanation: dedent``,
});

export const QDSM9AOF8K = mergeQuestionVariants(
  {
    id: "QDSM9AOF8K",
    version: 1,
    learningObjectives: ["062.03.03.05.02"],
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
    To improve the detection of precipitation areas in thunderstorms, in 
    which the top of the cloud lies at or slightly above the level of flight, 
    the tilt setting should be..
  `,
      correctOptions: [
        {
          subject: "",
          why: "",
          text: "lower when the aircraft climbs to a higher altitude.",
        },
      ],
      otherOptions: [
        {
          why: "",
          text: "higher when the selected range decreases.",
        },
        {
          why: "",
          text: "lower when the selected range increases.",
        },
        {
          why: "",
          text: "higher when the aircraft climbs to a higher altitude.",
        },
      ],
      explanation: dedent``,
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      Flying at FL330, ahead of you there is a thunderstorm and you want to climb 
      to FL360 to avoid bad weather. What is the correct regarding the tilt of 
      the AWR?
    `,
      correctOptions: [
        {
          subject: "",
          why: "",
          text: dedent`
          During a climb, the tilt needs to be decreased to scan for hazardous 
          clouds.
        `,
        },
      ],
      otherOptions: [
        {
          why: "",
          text: dedent`
          A high tilt setting is helpful to detect a thunderstorm during a climb.
        `,
        },
        {
          why: "",
          text: dedent`
          A low tilt setting should be used during descent if thunderstorms are 
          expected.
        `,
        },
        {
          why: "",
          text: dedent`
          During any phase of flight, the tilt of the weather radar will always 
          be adjusted to the optimum tilt.
        `,
        },
      ],
      explanation: dedent``,
    })
);

export const QFTNAGTDHA = questionOneCorrect({
  id: "QFTNAGTDHA",
  version: 1,
  learningObjectives: ["062.03.03.02.01"],
  question: (subject) => dedent`
    Which of the following statements is correct about the "gain" knob of an AWR?
  `,
  correctOptions: [
    {
      subject: "gain",
      why: "",
      text: dedent`
      It adjusts the receiver sensitivity in order to achieve optium target 
      acquisition.
    `,
    },
  ],
  otherOptions: [
    {
      why: "tilt",
      text: dedent`
      It is used to adjust antenna tilt.
    `,
    },
    {
      why: "",
      text: dedent`
      It can be used to activate the automatic gain control of the AWR.
    `,
    },
    {
      why: "",
      text: dedent`
      It adjusts the brightness of the display.
    `,
    },
  ],
  explanation: dedent``,
});

export const B8W81K94OL = questionOneCorrect({
  id: "B8W81K94OL",
  version: 1,
  learningObjectives: ["062.03.03.02.02"],
  question: (subject) => dedent`
    On the AWR display the most severe turbulence will be shown...
  `,
  correctOptions: [
    {
      subject: "",
      text: dedent`by a steep colour gradient.`,
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: dedent`alternating red and white.`,
      why: dedent``,
    },
    {
      text: dedent`by a black hole.`,
      why: dedent``,
    },
    {
      text: dedent`in flashing red.`,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const QUMT0CBYDR = questionOneCorrect({
  id: "QUMT0CBYDR",
  version: 1,
  learningObjectives: [],
  question: (subject) => dedent`
    The Airborne Weather Radar (AWR) is displayed on a coloured screen showing 
    the different contours associated with thunderstorms. What procedure should 
    be adopted to avoid a thunderstorm using the AWR?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      Fly on the upwind side of the thunderstorm and avoid red or magenta 
      coloured areas.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      Aim to avoid the thunderstorm by at least 5NM so as to avoid any 
      turbulence.
    `,
    },
    {
      why: "",
      text: dedent`
      Fly towards the area where the contours are the steepest and avoid any 
      areas that are yellow.
    `,
    },
    {
      why: "",
      text: dedent`
      The areas that have the worst precipitation are coloured yellow and they 
      should be avoided at all times.
    `,
    },
  ],
  explanation: dedent``,
});

export const Q8C5BGHHKG = questionOneCorrect({
  id: "Q8C5BGHHKG",
  version: 1,
  learningObjectives: ["062.03.04.02.09"],
  question: (subject) => dedent`
    Which of the following types of interrogations will a mode S transponder 
    reply to?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "SSR and TCAS interrogations.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "TCAS and ADS-B interrogations.",
    },
    {
      why: "",
      text: "SSR and primary radar interrogations.",
    },
    {
      why: "",
      text: "SSR and ADS-B interrogations.",
    },
  ],
  explanation: dedent``,
});

export const QKJJDM3FCZ = questionOneCorrect({
  id: "QKJJDM3FCZ",
  version: 1,
  learningObjectives: ["062.03.03.06.02"],
  question: (subject) => dedent`
    How should one avoid a thunderstorm?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      Fly on the upwind side of the storm, avoiding red and magenta coloured 
      areas on the screen.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      Fly through, turning on the anti-icing equipment available.
    `,
    },
    {
      why: "",
      text: dedent`
      Fly through, avoiding magenta on your AWR.
    `,
    },
    {
      why: "",
      text: dedent`
      Fly 5 NM to the side of the thunderstorm.
    `,
    },
  ],
  explanation: dedent``,
});
