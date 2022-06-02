import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const Q5FKFF4KHA = questionOneCorrect({
  id: "Q5FKFF4KHA",
  version: 1,
  learningObjectives: ["022.05.01.01.08"],
  question: (subject) => dedent`
    What is the minimum number of ${subject} platform?
  `,
  correctOptions: [
    {
      id: "Q5FKFF4KHA-3",
      subject: ["accelerometers required on an INS"],
      why: "INS: tree laser ring gyros, and two accelerometers",
      text: "Two",
    },
    {
      id: "Q5FKFF4KHA-3",
      subject: [
        "accelerometers required on an IRS",
        "gyros required on an IRS",
        "gyros required on an INS",
      ],
      why: "IRS: three laser ring gyros and three accelerometers",
      text: "Three",
    },
  ],
  otherOptions: [
    {
      id: "Q5FKFF4KHA-0",
      why: "",
      text: "One",
    },
    {
      id: "Q5FKFF4KHA-1",
      why: "",
      text: "Four",
    },
  ],
  explanation: dedent`
    - **INS**: three laser ring gyros and two accelerometers
    - **IRS**: three laser ring gyros and three accelerometers
  `,
});
