import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const QUENI5QDU1 = questionOneCorrect({
  id: "QUENI5QDU1",
  version: 1,
  learningObjectives: ["021.10.02.01.04"],
  question: () => dedent`
    When detonation is recognised in a piston engine, the correct procedure is 
    to...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "reduce manifold pressure and fully enrich the mixture.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "increase manifold pressure and fully enrich the mixture.",
    },
    {
      why: "",
      text: "increase manifold pressure and lean the mixture.",
    },
    {
      why: "",
      text: "reduce manifold pressure and lean the mixture.",
    },
  ],
  explanation: dedent`
    When the engine is detonating is because the conditions inside the 
    combustion chamber reach temperatures and pressures that allow combustion
    to start spontaneously before the designed ignition point.

    In simpler terms: The piston chamber is **too hot** and 
    **pressure is too high**.

    -  **too hot**: increase the mixture! The added fuel will go unburned and 
    since fuel has a higher heat capacity than air, it will take heat away from
    the combustion chamber cooling it down. 
    - **too high pressure**: decrease MAP! 
  `,
});

export const QQOLLEVRAW = questionOneCorrect({
  id: "QQOLLEVRAW",
  version: 1,
  learningObjectives: ["021.10.04.01.05"],
  question: () => dedent`
    The function of an accelerator pump in the carburettor of a piston engine 
    is to...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        enable proper functioning of a piston engine during throttle advance.
      `,
    },
  ],
  otherOptions: [
    {
      why: dedent`
        NOTE: engines with accelerator pumps can use them to serve the function 
        of a primer
      `,
      text: "enable engine starting.",
    },
    {
      why: "",
      text: "enable engine idling.",
    },
    {
      why: "",
      text: dedent`
        maintain a constant mixture in a piston engine at low and high power 
        settings.
      `,
    },
  ],
  explanation: dedent``,
});

export const Q4O4T9FX57 = questionOneCorrect({
  id: "Q4O4T9FX57",
  version: 1,
  learningObjectives: ["021.10.10.01.04"],
  question: () => dedent`
    The air in a piston engine turbocharger enters the centrifugal 
    compressor at...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        the eye of the impeller and leaves it almost at a tangent to the 
        periphery.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        the periphery and leaves via the eye of the impeller.
      `,
    },
    {
      why: "",
      text: dedent`
        a tangent to the rotor and leaves via the stator.
      `,
    },
    {
      why: "",
      text: dedent`
        the diffuser and is fed to the impeller at the optimum angle of attack.
      `,
    },
  ],
  explanation: dedent``,
});

export const QKDV2J6I8Q = questionOneCorrect({
  id: "QKDV2J6I8Q",
  version: 1,
  learningObjectives: ["021.10.04.01.08"],
  question: () => dedent`When applying carburettor heating...`,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "the mixture becomes richer.",
    },
    {
      subject: "",
      why: "",
      text: "the power output reduces.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "no change occurs in the mixture.",
    },
    {
      why: "When",
      text: "RPM increases immediately.",
    },
    {
      why: "",
      text: "the mixture becomes leaner.",
    },
    {
      why: "",
      text: "the power output increases.",
    },
  ],
  explanation: dedent`
    When applying carburettor heating, air is warmed before reaching the 
    carburettor. This causes the density of air to drop, which in turn
    causes the mixture ratio to increase.

    > **Remember**: Mixture ratio is the ratio of mass of air over the mass of 
    > fuel. If the air density is decreasing the mass of air is decreasing.

    An increase in the mixture ratio will decrease the power output of the 
    engine, as more fuel will go through the system unburned, carrying with it
    energy that would otherwise be supplied to the crankshaft.
  `,
});

export const QT4526LX2R = questionOneCorrect({
  id: "QT4526LX2R",
  version: 1,
  learningObjectives: ["021.10.02.01.03"],
  question: () => dedent`
    A piston engine may use a fuel of a different grade than the recommended...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "provided that the grade is higher",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "provided that the grade is lower",
    },
    {
      why: "",
      text: "never",
    },
    {
      why: "",
      text: "provided that it is an aeronautical petrol",
    },
  ],
  explanation: dedent``,
});

export const Q7AIYLFNHA = questionMultipleCorrect({
  id: "Q7AIYLFNHA",
  version: 1,
  learningObjectives: ["021.10.08.01.07", "021.10.07.01.06"],
  question: (options) => dedent`
    Given the following statements about diesel engines:

    ${options}

    The combination that regroups all of the correct statements is...
  `,
  statements: [
    {
      wrong: "power is set by the mixture control.",
      correct: "there is no mixture control.",
    },
    {
      correct: "the amount of power is determined by the fuel flow only.",
      wrong: dedent`
        the amount of power is determined by the operation of a throttle valve.
      `,
    },
    {
      correct: "thermal efficiency is higher than that for a petrol engine.",
      wrong: "thermal efficiency is lower than that for a petrol engine.",
    },
    {
      correct: "compression rate is much higher than that for a petrol engine.",
      wrong: "compression rate is much lower than that for a petrol engine.",
    },
    {
      wrong: "diesel fuel is more inflammable than petrol.",
    },
  ],
  select: {
    numberOfCorrectOptions: 3,
    numberOfOptions: 5,
  },
  explanation: dedent``,
});

export const QL4UXT8LNI = questionOneCorrect({
  id: "QL4UXT8LNI",
  version: 1,
  learningObjectives: ["021.10.01.02.01"],
  question: () => dedent`
    The formula to calculate the total displacement of a multi-cylinder 
    piston engine is..
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "piston area x piston stroke x number of cylinders.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "piston area x piston stroke.",
    },
    {
      why: "",
      text: "cylinder volume x number of cylinders.",
    },
    {
      why: "",
      text: "cylinder length x cylinder diameter.",
    },
  ],
  explanation: dedent``,
});

export const R124VAFAC5 = mergeQuestionVariants(
  {
    id: "R124VAFAC5",
    version: 1,
    learningObjectives: ["021.10.01.02.01"],
    correctOptions: [
      {
        subject: "a crankcase",
        text: dedent`
        To house the crankshaft in a reciprocating internal combustion 
        engine.
      `,
      },
      {
        subject: "a crankshaft",
        text: dedent`
        To perform a conversion between the reciprocating motion of the pistons 
        to a rotational motion.
      `,
      },
      {
        subject: "a connecting rod",
        text: dedent`
        To convert the reciprocating motion of a single piston into the rotation 
        of the crankshaft
      `,
      },
      {
        subject: "a piston",
        text: dedent`
        To transfer force from expanding gas in the cylinder to the crankshaft. 
      `,
      },
      {
        subject: "a piston pin",
        text: dedent`
        To provide a bearing for the connecting rod to pivot upon as the 
        piston moves
      `,
      },
      {
        subject: "piston rings",
        text: dedent`
        to seal the combustion chamber so that there is minimal loss of gases 
        to the crank case.
      `,
      },
      {
        subject: "valves",
        text: dedent`
        To allow or restrict the flow of fluid or gas to and from the combustion 
        chambers or cylinders during engine operation.
      `,
      },
      {
        subject: "a push rod",
        text: dedent`
        To convert a rotational motion from the camshaft to a reciprocal motion 
        of a specific valve
      `,
      },
      {
        subject: "a camshaft",
        text: dedent`
        To convert a rotational motion to a reciprocal motion
      `,
      },
      {
        subject: "rocker arm",
        text: dedent`
        To transfer the motion of a pushrod to the corresponding intake/exhaust 
        valve.
      `,
      },
      {
        subject: "camshaft gear",
        text: dedent`
        To keep the valve timing and crank strokes working in tune.
      `,
      },
    ],
    otherOptions: [],
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      In a piston engine, what is the function of ${subject}?
    `,
      explanation: dedent`
    You should be familiar with the following components and their definitions:

    ${props.correctOptions
      .map(({ text, subject }) => `- **${subject}**: ${text}`)
      .join("\n")}
  `,
    })
);
