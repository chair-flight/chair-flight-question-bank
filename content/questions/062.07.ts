import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const BGAQ9F8WLU = mergeQuestionVariants(
  {
    id: "BGAQ9F8WLU",
    learningObjectives: ["062.07.01.02.01"],
    version: 1,
    explanation: dedent`
  `,
    correctOptions: [
      { text: "Navigational aid infrastructure" },
      { text: "Navigation specification" },
      { text: "Navigation application" },
    ],
    otherOptions: [
      { text: "Pilot training" },
      { text: "Integrity control" },
      { text: "Aircraft type" },
    ],
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
      Which of the following is a component of PBN?
    `,
    }),
  (props) =>
    questionMultipleCorrect({
      ...props,
      question: () => dedent`
      Which of the following are components of PBN?
    `,
      select: {
        numberOfCorrectOptions: 3,
        numberOfOptions: 5,
      },
      statements: [
        ...props.correctOptions.map(({ text }) => ({
          correct: text,
        })),
        ...props.otherOptions.map(({ text }) => ({
          wrong: text,
        })),
      ],
    })
);

export const KIPOVQSYG9 = questionOneCorrect({
  id: "KIPOVQSYG9",
  version: 1,
  learningObjectives: ["062.07.02.03.01"],
  question: (subject) => dedent`
    The "X" in ${subject} X" is interpreted as the _______ navigation (LNAV)
    accuracy (total system error) in _______, which is expected to be achieved
    at least _______ of the flight time by the population of aircraft operating
    within the given airspace, route or procedure.
  `,
  correctOptions: [
    {
      subject: ["RNP", "RNAV"],
      text: dedent`lateral, NM, 95%`,
      why: dedent`Always correct for both RNP and RNAV`,
    },
  ],
  otherOptions: [
    { text: "lateral, NM, 90%" },
    { text: "lateral, NM, 85%" },
    { text: "lateral, NM, 100%" },
    { text: "lateral, km, 95%" },
    { text: "lateral, km, 90%" },
    { text: "lateral, km, 85%" },
    { text: "lateral, km, 100%" },
    { text: "longitudinal, NM, 95%" },
    { text: "longitudinal, NM, 90%" },
    { text: "longitudinal, NM, 85%" },
    { text: "longitudinal, NM, 100%" },
    { text: "longitudinal, km, 95%" },
    { text: "longitudinal, km, 90%" },
    { text: "longitudinal, km, 85%" },
    { text: "longitudinal, km, 100%" },
  ],
  explanation: dedent`
  `,
});

export const NUD2WBKBVK = questionOneCorrect({
  id: "NUD2WBKBVK",
  version: 1,
  learningObjectives: [
    "062.07.02.03.03",
    "062.07.02.03.04",
    "062.07.02.03.05",
    "062.07.02.03.06",
    "062.07.02.03.07",
    "062.07.02.03.08",
    "062.07.02.03.09",
    "062.07.02.03.10",
    "062.07.02.03.11",
    "062.07.02.03.12",
  ],
  question: (subject) => dedent`
    ${subject} might be used for...
  `,
  explanation: dedent`
    Table summary:

    |             | Approach | Departure | arrival | En-route continental | En-route Oceanic / remote |
    | ----------- | -------- | --------- | ------- | -------------------- | ------------------------- |
    | RNAV 10     |          |           |         |                      | x                         |
    | RNAV 5      |          |           | x       | x                    |                           |
    | RNAV 2      |          | x         | x       | x                    |                           |
    | RNAV 1      |          | x         | x       |                      |                           |
    | RNP 4       |          |           |         |                      | x                         |
    | RNP 2       |          |           |         | x                    | x                         |
    | RNP 1       |          | x         | x       |                      |                           |
    | RNP App     | x        |           |         |                      |                           |
    | RNP AR APCH | x        |           |         |                      |                           |

    |             | Approach | Departure | arrival | ER-C | ER-O |
    | ----------- | -------- | --------- | ------- | ---- | ---- |
    | RNAV 10     |          |           |         |      | x    |
    | RNAV 5      |          |           | x       | x    |      |
    | RNAV 2      |          | x         | x       | x    |      |
    | RNAV 1      | x        | x         | x       |      |      |
    | RNP 4       |          |           |         |      | x    |
    | RNP 2       |          |           |         | x    | x    |
    | RNP 1       | x        | x         | x       |      |      |
    | RNP App     | x        |           |         |      |      |
    | RNP AR APCH | x        |           |         |      |      |
  
  `,
  correctOptions: [
    {
      subject: ["RNAV 10", "RNP 4", "RNP 2"],
      why: `Used for ${["RNAV 10", "RNP 4", "RNP 2"].join(", ")}.`,
      text: dedent`oceanic phases of a flight.`,
    },
    {
      subject: ["RNAV 10", "RNP 4", "RNP 2"],
      why: `Used for ${["RNAV 10", "RNP 4", "RNP 2"].join(", ")}.`,
      text: dedent`remote phases of a flight.`,
    },
    {
      subject: ["RNAV 5", "RNAV 2", "RNP 2"],
      why: `Used for ${["RNAV 5", "RNAV 2", "RNP 2"].join(", ")}.`,
      text: dedent`en-route phase phases of a flight`,
    },
    {
      subject: ["RNAV 5", "RNAV 2", "RNAV 1", "RNP 1"],
      why: `Used for ${["RNAV 5", "RNAV 2", "RNAV 1", "RNP 1"].join(", ")}.`,
      text: dedent`arrival phase phases of a flight`,
    },
    {
      subject: ["RNAV 5", "RNAV 2", "RNAV 1", "RNP 1"],
      why: `Used for ${["RNAV 5", "RNAV 2", "RNAV 1", "RNP 1"].join(", ")}.`,
      text: dedent`arrival phase phases of a flight`,
    },
    {
      subject: ["RNAV 2", "RNAV 1", "RNP 1"],
      why: `Used for ${["RNAV 2", "RNAV 1", "RNP 1"].join(", ")}.`,
      text: dedent`departure phases of a flight`,
    },
    {
      subject: ["RNP 0.3"],
      why: `Used for ${["RNP 0.3"].join(", ")}.`,
      text: dedent`
        all phases of flight except for oceanic/remote and final approach, 
        primarily for helicopters
      `,
    },
    {
      subject: ["RNAV 1", "RNP 1", "RNP 0.3"],
      why: `Used for ${["RNAV 1", "RNP 1", "RNP 0.3"].join(", ")}.`,
      text: dedent`
        en-route phases of low-level instrument flight rule (IFR) helicopter 
        flights.
      `,
    },
    {
      subject: ["RNAV APCH", "RNP AR APCH"],
      why: `Used for ${["RNAV APCH", "RNP AR APCH"].join(", ")}.`,
      text: dedent`approach phase of a flight.`,
    },
  ],
  otherOptions: [
    {
      text: "In all phases of flight",
      why: "No specification is used in all phases of flight",
    },
  ],
});
