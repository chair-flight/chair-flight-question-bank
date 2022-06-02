import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const QJ1YAH5TJJ = questionOneCorrect({
  id: "QJ1YAH5TJJ",
  version: 1,
  learningObjectives: ["021.12.02.02.01"],
  question: () => dedent`
    If an engine fire detection loop is broken, what indication will the system
    give when the  fire warning system is tested for that engine?
  `,
  correctOptions: [
    {
      id: "QJ1YAH5TJJ-3",
      subject: "",
      why: "",
      text: "No indication or a fault alert.",
    },
  ],
  otherOptions: [
    {
      id: "QJ1YAH5TJJ-0",
      why: "",
      text: "A fault alert and a fire warning light.",
    },
    {
      id: "QJ1YAH5TJJ-1",
      why: "",
      text: "A fault alert and a fire warning bell.",
    },
    {
      id: "QJ1YAH5TJJ-2",
      why: "",
      text: "A fault alert and a red master warning light.",
    },
  ],
  explanation: dedent``,
});

export const QYF5KU1GMF = questionOneCorrect({
  id: "QYF5KU1GMF",
  version: 1,
  learningObjectives: ["021.12.02.02.02"],
  question: () => dedent`
    If a gas-filled engine fire detection loop is broken, the result will be...
  `,
  correctOptions: [
    {
      id: "QYF5KU1GMF-2",
      subject: "",
      why: "",
      text: "a decrease in pressure, causing a loop fault indication.",
    },
  ],
  otherOptions: [
    {
      id: "QYF5KU1GMF-0",
      why: "",
      text: "an increase in pressure, causing a fire warning.",
    },
    {
      id: "QYF5KU1GMF-1",
      why: "",
      text: "a decrease in pressure, causing a fire warning.",
    },
    {
      id: "QYF5KU1GMF-3",
      why: "",
      text: "an increase in pressure, causing a loop fault indication.",
    },
  ],
  explanation: dedent`
    A gaseous loop indicator is triggered when the pressure inside the loop
    increases due to an increase of temperature. A rupture in the tube has
    the opposite effect reducing the pressure. 
    
    This allows to distinguish between a faulty state and a fire state.
  `,
});

export const QRYNQ9UIYU = questionOneCorrect({
  id: "QRYNQ9UIYU",
  version: 1,
  learningObjectives: ["021.12.02.02.02"],
  question: () => dedent`
    Gas-filled fire detectors work on the principle that heat causes the 
    internal pressure to..
  `,
  correctOptions: [
    {
      id: "QRYNQ9UIYU-3",
      subject: "",
      why: "",
      text: "increase, causing a fire warning indication.",
    },
  ],
  otherOptions: [
    {
      id: "QRYNQ9UIYU-0",
      why: "",
      text: "reduce, causing a fire warning indication.",
    },
    {
      id: "QRYNQ9UIYU-1",
      why: "",
      text: "reduce, causing a loop fault indication.",
    },
    {
      id: "QRYNQ9UIYU-2",
      why: "",
      text: "increase, causing a loop fault indication.",
    },
  ],
  explanation: dedent`
    A gaseous loop indicator is triggered when the pressure inside the loop
    increases due to an increase of temperature. A rupture in the tube has
    the opposite effect reducing the pressure. 
  `,
});
