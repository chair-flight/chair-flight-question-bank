import dedent from "dedent";
import { questionOneCorrect } from "../base/questionOneCorrect";

export const QQDKRGQGRI = questionOneCorrect({
  id: "QQDKRGQGRI",
  version: 1,
  learningObjectives: ["021.08.02.01.02"],
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
  explanation: dedent`
    TLDR memorize this table:

    |                | Jet A       | Jet A1      | Jet B       |
    | -------------- | ----------- | ----------- | ----------- |
    | Colour         | Transparent | Transparent | Transparent |
    | Density (kg/l) | 0.80        | 0.80        | 0.81        |
    | Flash Point    | 38ºC        | 38ºc        | -20ºc       |
    | Freezing Point | -40ºC       | -47ºC       | -60ºC       |
  `,
});
