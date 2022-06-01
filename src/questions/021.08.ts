import dedent from "dedent";
import { mergeQuestionVariants } from "../base/mergeQuestionVariants";
import { questionOneCorrect } from "../base/questionOneCorrect";
import { questionOneTwo } from "../base/questionOneTwo";

export const QQDKRGQGRI = mergeQuestionVariants(
  {
    id: "QQDKRGQGRI",
    version: 1,
    learningObjectives: ["021.08.02.01.02"],
    explanation: dedent`
    TLDR memorize this table:

    |                | Jet A       | Jet A1      | Jet B       |
    | -------------- | ----------- | ----------- | ----------- |
    | Colour         | Transparent | Transparent | Transparent |
    | Density (kg/l) | 0.80        | 0.80        | 0.81        |
    | Flash Point    | 38ºC        | 38ºc        | -20ºc       |
    | Freezing Point | -40ºC       | -47ºC       | -60ºC       |
  `,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: [
        (subject) => dedent`
        The correct order of ${subject} freezing points of the three mentioned fuels is:
      `,
        (subject) => dedent`
        The correct order of ${subject} flashing points of the three mentioned fuels is:
      `,
      ],
      correctOptions: [
        {
          id: "QQDKRGQGRI-0",
          subject: "decreasing",
          why: "",
          text: "Jet A, Jet A-1, Jet B.",
        },
        {
          id: "QQDKRGQGRI-1",
          subject: "increasing",
          why: "",
          text: "Jet B, Jet A-1, Jet A.",
        },
      ],
      otherOptions: [
        {
          id: "QQDKRGQGRI-1",
          why: "",
          text: "Jet A-1, Jet B, Jet A",
        },
        {
          id: "QQDKRGQGRI-2",
          why: "",
          text: "Jet B, Jet A, Jet A-1",
        },
      ],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`What is the ${subject}?`,
      correctOptions: [
        {
          id: "QQDKRGQGRI-1",
          subject: "Freezing point of Jet A",
          why: "",
          text: "-40ºC",
        },
        {
          id: "QQDKRGQGRI-2",
          subject: "Freezing point of Jet A1",
          why: "",
          text: "-47ºC",
        },
        {
          id: "QQDKRGQGRI-3",
          subject: "Freezing point of Jet B",
          why: "",
          text: "-60ºC",
        },
        {
          id: "QQDKRGQGRI-4",
          subject: "Flash point of Jet A",
          why: "",
          text: "38ºC",
        },
        {
          id: "QQDKRGQGRI-5",
          subject: "Flash point of Jet B",
          why: "",
          text: "-20ºC",
        },
      ],
      otherOptions: [
        {
          id: "QQDKRGQGRI-6",
          why: "",
          text: "40ºC",
        },
      ],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: [
        () => dedent`What is the density of Jet A?`,
        () => dedent`What is the density of Jet B?`,
        () => dedent`What is the density of Jet A1?`,
      ],
      correctOptions: [
        {
          id: "QQDKRGQGRI-8",
          subject: "",
          why: "Jet A, Jet B, and Jet A1 all have about the same density",
          text: "0.8 kg/l",
        },
      ],
      otherOptions: [3, 4, 5, 6, 7, 9].map((i) => ({
        id: `QQDKRGQGRI-${i}`,
        why: "",
        text: "0.3",
      })),
    }),
  (props) =>
    questionOneTwo({
      ...props,
      statementPairs: [
        {
          correct: [
            "The freezing point for Jet A is at a higher temperature than that for Jet B",
            "The freezing point for Jet A-1 is at a higher temperature than that for Jet B",
            "The freezing point for Jet A is at a higher temperature than that for Jet A-1",
            "The freezing point for Jet B is at a lower temperature than that for Jet A",
            "The freezing point for Jet B is at a lower temperature than that for Jet A-1",
            "The freezing point for Jet A-1 is at a lower temperature than that for Jet A",
          ],
          wrong: [
            "The freezing point for Jet A is at a lower temperature than that for Jet B",
            "The freezing point for Jet A-1 is at a lower temperature than that for Jet B",
            "The freezing point for Jet A is at a lower temperature than that for Jet A-1",

            "The freezing point for Jet B is at a higher temperature than that for Jet A",
            "The freezing point for Jet B is at a higher temperature than that for Jet A-1",
            "The freezing point for Jet A-1 is at a higher temperature than that for Jet A",

            "The freezing point for Jet B is at about same temperature than that for Jet A",
            "The freezing point for Jet B is at about same temperature than that for Jet A-1",
            "The freezing point for Jet A-1 is at about same temperature than that for Jet A",
          ],
        },
        {
          correct: [
            "The flash point for Jet A is at a higher temperature than that for Jet B",
            "The flash point for Jet A-1 is at a higher temperature than that for Jet B",
            "The flash point for Jet A is at about the same temperature than that for Jet A-1",
            "The flash point for Jet B is at a lower temperature than that for Jet A",
            "The flash point for Jet B is at a lower temperature than that for Jet A-1",
            "The flash point for Jet A-1 is at about the same temperature than that for Jet A",
          ],
          wrong: [
            "The flash point for Jet A is at a lower temperature than that for Jet B",
            "The flash point for Jet A-1 is at a lower temperature than that for Jet B",
            "The flash point for Jet B is at a higher temperature than that for Jet A",
            "The flash point for Jet B is at a higher temperature than that for Jet A-1",
          ],
        },
      ],
    })
);

export const PO5CKPSPED = questionOneCorrect({
  id: "PO5CKPSPED",
  version: 1,
  learningObjectives: ["021.08.02.01.03"],
  question: () => dedent`
    Turbine fuel may contain additives in order to...
  `,
  correctOptions: [
    {
      id: "correct-1",
      subject: "",
      text: "Reduce the risk of ice crystal formation",
      why: dedent``,
    },
    {
      id: "correct-1",
      subject: "Prevent waxing of the fuel in low temperatures",
      text: "Reduce the risk of ice crystal formation",
      why: dedent`
        waxing of jet fuel describe the transition of jet fuel into a partially 
        crystalline state in low temperatures
      `,
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: dedent`
        Increase viscosity at high temperatures
      `,
      why: dedent``,
    },
    {
      id: "wrong-2",
      text: dedent`
        Enhance combustion temperature
      `,
      why: dedent``,
    },
    {
      id: "wrong-3",
      text: dedent`
        Increase the freezing point when operating in low temperatures
      `,
      why: dedent`
        Not increasing but decreasing the freezing point would be correct.
      `,
    },
    {
      id: "wrong-4",
      text: dedent`
        Improve overall performance at all temperature ranges.
      `,
      why: dedent``,
    },
  ],
  explanation: dedent`
    Fuel system icing inhibitors are additives added to jet fuel to reduce the
    freezing point and prevent ice crystal formation.
  `,
});
