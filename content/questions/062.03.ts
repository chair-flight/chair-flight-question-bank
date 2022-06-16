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
