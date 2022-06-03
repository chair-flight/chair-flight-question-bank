import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const QRQSE0BTIB = questionOneCorrect({
  id: "QRQSE0BTIB",
  version: 1,
  learningObjectives: ["021.03.02.01.01"],
  question: (subject) => dedent`
    What is a ${subject} property of hydraulic fluids?
  `,
  correctOptions: [
    {
      subject: "desirable",
      id: "High thermal stability.",
      text: "High thermal stability.",
      why: "",
    },
    {
      subject: "desirable",
      id: "Low corrosiveness.",
      text: "Low corrosiveness.",
      why: "",
    },
    {
      subject: "desirable",
      id: "High flashpoint.",
      text: "High flashpoint.",
      why: "",
    },
    {
      subject: "desirable",
      id: "Low flammability.",
      text: "Low flammability.",
      why: "",
    },
    {
      subject: "desirable",
      id: "Low volatility.",
      text: "Low volatility.",
      why: "",
    },
    {
      subject: "desirable",
      id: "Low viscosity.",
      text: "Low viscosity.",
      why: "",
    },
    {
      subject: "undesirable",
      id: "Low thermal stability.",
      text: "Low thermal stability.",
      why: "",
    },
    {
      subject: "undesirable",
      id: "High corrosiveness.",
      text: "High corrosiveness.",
      why: "",
    },
    {
      subject: "undesirable",
      id: "Low flashpoint.",
      text: "Low flashpoint.",
      why: "",
    },
    {
      subject: "undesirable",
      id: "High flammability.",
      text: "High flammability.",
      why: "",
    },
    {
      subject: "undesirable",
      id: "High volatility.",
      text: "High volatility.",
      why: "",
    },
    {
      subject: "undesirable",
      id: "High viscosity.",
      text: "High viscosity.",
      why: "",
    },
  ],
  otherOptions: [],
  explanation: dedent`
    Desirable properties:

    - High thermal stability.
    - Low corrosiveness.
    - High flashpoint.
    - Low flammability.
    - Low volatility.
    - Low viscosity.
  `,
});

export const MAK4NBVY3 = questionOneCorrect({
  id: "MAK4NBVY3",
  version: 1,
  learningObjectives: ["021.03.02.01.03"],
  question: (subject) => dedent`
  The color of ${subject} hydraulic fluid is...
  `,
  correctOptions: [
    {
      id: "MAK4NBVY3-1",
      subject: "synthetic",
      text: "Purple",
      why: "",
    },
    {
      id: "MAK4NBVY3-2",
      subject: "mineral",
      text: "Red",
      why: "",
    },
  ],
  otherOptions: [
    {
      id: "MAK4NBVY3-3",
      text: "Pink",
      why: "",
    },
    {
      id: "MAK4NBVY3-4",
      text: "Yellow",
      why: "",
    },
    {
      id: "MAK4NBVY3-5",
      text: "Green",
      why: "",
    },
  ],
  explanation: dedent`
    - synthetic hydraulic fluid =>  Purple (most common!)
    - Mineral hydraulic fluid => Red
  `,
});

export const MSA1Z4BVY2 = questionOneCorrect({
  id: "MSA1Z4BVY2",
  version: 1,
  learningObjectives: ["021.03.02.02.07"],
  question: (subject) => dedent`
    What is the ${subject} operating pressure of high-pressure hydraulic system
    in large aircraft
  `,
  correctOptions: [
    {
      id: "correct-1",
      subject: "typical",
      text: "3000 psi",
      why: "EASA Value for Typical hydraulic pressure",
    },
    {
      id: "correct-2",
      subject: "maximum",
      text: ["4000 psi", "5000 psi"],
      why: "EASA value for Maximum hydraulic pressure (4000 - 5000 psi)",
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: "1000",
      why: "",
    },
    {
      id: "wrong-2",
      text: "2000",
      why: "",
    },
    {
      id: "wrong-3",
      text: "6000",
      why: "",
    },
  ],
  explanation: dedent`
    According to EASA:

    > high-pressure hydraulic system is typically operating at 3000 psi but on 
    some aircraft a hydraulic pressure of 4000 to 5000 psi may also be used.
  `,
});
