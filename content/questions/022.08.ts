import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const QTPNOXMREP = questionOneCorrect({
  id: "QTPNOXMREP",
  version: 1,
  learningObjectives: ["022.08.02.01.03"],
  question: () => dedent`
    When the yaw damper system sends motion orders to the rudder...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "no feedback is provided on the rudder pedals.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "a feedback is provided on the rudder pedals only.",
    },
    {
      why: "",
      text: "a feedback is provided on the rudder pedals and the roll trim.",
    },
    {
      why: "",
      text: "a feedback is provided on the roll trim only.",
    },
  ],
  explanation: dedent``,
});
