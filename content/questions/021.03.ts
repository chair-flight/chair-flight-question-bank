import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const QRQSE0BTIB = mergeQuestionVariants(
  {
    id: "QRQSE0BTIB",
    version: 1,
    learningObjectives: ["021.03.02.01.01"],
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
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      What is a ${subject} property of hydraulic fluids?
    `,
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
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
      Which property must a fluid have for a hydraulic system to 
      operate correctly?
    `,
      correctOptions: props.correctOptions.filter(
        ({ subject }) => subject === "desirable"
      ),
      otherOptions: props.correctOptions.filter(
        ({ subject }) => subject !== "desirable"
      ),
      explanation: dedent`
      Desirable properties:

      - High thermal stability.
      - Low corrosiveness.
      - High flashpoint.
      - Low flammability.
      - Low volatility.
      - Low viscosity.
    `,
    })
);

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

export const HNVH63KULS = mergeQuestionVariants(
  {
    id: "HNVH63KULS",
    version: 1,
    learningObjectives: ["021.03.02.02.13"],
    definitions: {
      reservoirs: dedent`
      To store an adequate supply of fluid for the system
    `,
      "pressurized reservoirs": dedent`
      to assure the pump inlet is provided with a continuos and adequate supply 
      of fluid free from foaming
    `,
      accumulators: [
        dedent`
        to Store power for the limited operation of a hydraulic unit when the pump is
        not operating
      `,
        dedent`
        to Dampen pressure surges in the hydraulic system
      `,
      ],
      "fluid cooler return lines'": dedent`
      to return fluid from the actuators to the reservoir
    `,
      "piston actuators": dedent`
      to convert the hydraulic force into linear mechanical force.
    `,
      "hydraulic motors": dedent`
      to convert the hydraulic force into rotary mechanical force
    `,
      filters: dedent`
      to remove undesired particles and contaminating substances from the system.
    `,
      "non-return (check) valves": dedent`
      to allow fluid to flow in one direction only.
    `,
      "shuttle Valves": dedent`
      to switch to the secondary system in case of leak in the primary system.
    `,
      "relief valves": dedent`
      to prevent excessive pressure from building up inside the system.
    `,
      "restrictor valves": dedent`
      to reduce the rate of actuator movement.
    `,
      "Selector valves": dedent`
      to allow for the control of the direction of movement of an hydraulic actuator
    `,
      "bypass valves": dedent`
      to allow fluid to flow around a filter unit in case of blockage.
    `,
      "fire shut‑off valves": dedent`
      to restrict hydraulic flow in case of fire with the intention to prevent
    hydraulic fluid ignition.
    `,
      "priority valves": dedent`
      to maintain enough hydraulic pressure in critical systems in case of low
      overall system pressure
    `,
      "fuse valves": dedent`
      to prevent total system loss in case of a hydraulic leak
    `,
    } as Record<string, string | string[]>,
    explanation: dedent``,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      In a modern hydraulic system, what is the function of ${subject}
    `,
      correctOptions: Object.entries(props.definitions).map(
        ([term, definition]) => ({
          subject: term,
          text: definition,
          why: term,
        })
      ),
      otherOptions: [
        {
          text: "to compress hydraulic fluids",
          why: dedent`
          Hydraulic fluids are incompressible. No device in an hydraulic 
          system has this function.
        `,
        },
        {
          text: "To store pressure",
          why: dedent`
          he closest valid definition is the accumulator, but that stores 
          power / dampens pressure surges.
        `,
        },
      ],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => {
        const entry = props.definitions[subject];
        const definition = Array.isArray(entry) ? entry[0] : entry;
        return dedent`
        Which hydraulic component has the following function? 

        > ${definition}
      `;
      },
      correctOptions: Object.entries(props.definitions).map(
        ([term, definition]) => ({
          subject: term,
          text: term,
          why: Array.isArray(definition) ? definition.join("/ ") : definition,
        })
      ),
      otherOptions: [],
    })
);

export const NBF1Z4BVY2 = questionOneCorrect({
  id: "NBF1Z4BVY2",
  version: 1,
  learningObjectives: ["021.03.02.02.13"],
  question: (subject) => dedent`
    An aircraft hydraulic selector valve which ${subject}
    when the system actuating mechanism is at idle is a....
  `,
  correctOptions: [
    {
      subject: "has a low pressure fluid flow",
      text: dedent`An open centre hydraulic selector valve`,
      why: dedent`
        An open centre hydraulic selector valve has a low pressure fluid flow 
        when hte mechanism is idle
      `,
    },
    {
      subject: "has no fluid flow",
      text: dedent`A Closed centre hydraulic selector valve`,
      why: dedent`
        A Closed centre hydraulic selector valve has no fluid flow when the 
        mechanism is idle.
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`A positive return selector valve`,
      why: dedent`There is no such a thing.`,
    },
    {
      text: dedent`A pressure neutral hydraulic valve`,
      why: dedent`There is no such a thing.`,
    },
  ],
  explanation: dedent`
  `,
});
