import { dedent } from "../base/dedent";
import { questionOneCorrect } from "../base/questionOneCorrect";

export const QLSJXPLEGC = questionOneCorrect({
  id: "QLSJXPLEGC",
  version: 1,
  learningObjectives: ["021.13.01.01.01"],
  question: () => dedent`
    The "EMERGENCY" position of a cockpit oxygen mask:
  `,
  correctOptions: [
    {
      id: "QLSJXPLEGC-1",
      subject: "",
      why: "",
      text: "should be used when there is smoke on the flight deck.",
    },
  ],
  otherOptions: [
    {
      id: "QLSJXPLEGC-0",
      why: "",
      text: "should be used when the oxygen supply pressure starts to drop.",
    },
    {
      id: "QLSJXPLEGC-2",
      why: "",
      text: "must be used during an emergency descent.",
    },
    {
      id: "QLSJXPLEGC-3",
      why: "",
      text: "is the normal position of the oxygen mask regulator.",
    },
  ],
  explanation: dedent``,
});

export const QBDPMAJHMY = questionOneCorrect({
  id: "QBDPMAJHMY",
  version: 1,
  learningObjectives: [],
  question: (subject) => dedent`
    What is the name of the mode in which ${subject}?
  `,
  correctOptions: [
    {
      id: "QBDPMAJHMY-0",
      subject: "100% oxygen is inhaled on demand",
      why: "100% mode",
      text: "100%.",
    },
    {
      id: "QBDPMAJHMY-1",
      subject: "100% oxygen with positive pressure is supplied continuously",
      why: "Emergency mode",
      text: "Emergency.",
    },
    {
      id: "QBDPMAJHMY-2",
      subject: "oxygen is mixed with cabin air",
      why: "Normal / Dilluter demand mode",
      text: ["Normal.", "Diluter-demand"],
    },
  ],
  otherOptions: [
    {
      id: "QBDPMAJHMY-3",
      why: "",
      text: "Stand by.",
    },
  ],
  explanation: dedent`
    Modes of operation:

    - **normal (diluter demand)**: oxygen is mixed with cabin air
    - **100 per cent**: 100% oxygen is inhaled on demand
    - **emergency**: 100% oxygen with positive pressure is supplied continuously
  `,
});

export const QGFNANJ8IW = questionOneCorrect({
  id: "QGFNANJ8IW",
  version: 1,
  learningObjectives: [],
  question: (subject) => dedent`
    In jet transport aeroplanes, oxygen for the ${subject}
    system is stored as a...
  `,
  correctOptions: [
    {
      id: "QGFNANJ8IW-2",
      subject: "flight deck oxygen",
      why: "Flight deck systems are only gaseous",
      text: "gas.",
    },
    {
      id: "QGFNANJ8IW-3",
      subject: "built-in passenger oxygen",
      why: "Passenger systems are usually chemical, but can also be gaseous",
      text: "chemical compound or a gas.",
    },
  ],
  otherOptions: [
    {
      id: "QGFNANJ8IW-0",
      why: "",
      text: "chemical compound.",
    },
    {
      id: "QGFNANJ8IW-1",
      why: "",
      text: "liquid.",
    },
  ],
  explanation: dedent``,
});
