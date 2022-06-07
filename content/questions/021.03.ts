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
      text: "High thermal stability.",
      why: "",
    },
    {
      subject: "desirable",
      text: "Low corrosiveness.",
      why: "",
    },
    {
      subject: "desirable",
      text: "High flashpoint.",
      why: "",
    },
    {
      subject: "desirable",
      text: "Low flammability.",
      why: "",
    },
    {
      subject: "desirable",
      text: "Low volatility.",
      why: "",
    },
    {
      subject: "desirable",
      text: "Low viscosity.",
      why: "",
    },
    {
      subject: "undesirable",
      text: "Low thermal stability.",
      why: "",
    },
    {
      subject: "undesirable",
      text: "High corrosiveness.",
      why: "",
    },
    {
      subject: "undesirable",
      text: "Low flashpoint.",
      why: "",
    },
    {
      subject: "undesirable",
      text: "High flammability.",
      why: "",
    },
    {
      subject: "undesirable",
      text: "High volatility.",
      why: "",
    },
    {
      subject: "undesirable",
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
      subject: "synthetic",
      text: "Purple",
      why: "",
    },
    {
      subject: "mineral",
      text: "Red",
      why: "",
    },
  ],
  otherOptions: [
    {
      text: "Pink",
      why: "",
    },
    {
      text: "Yellow",
      why: "",
    },
    {
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
      subject: "typical",
      text: "3000 psi",
      why: "EASA Value for Typical hydraulic pressure",
    },
    {
      subject: "maximum",
      text: ["4000 psi", "5000 psi"],
      why: "EASA value for Maximum hydraulic pressure (4000 - 5000 psi)",
    },
  ],
  otherOptions: [
    {
      text: "1000",
      why: "",
    },
    {
      text: "2000",
      why: "",
    },
    {
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
