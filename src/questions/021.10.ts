import dedent from "dedent";
import { questionOneCorrect } from "../base/questionOneCorrect";

export const QUENI5QDU1 = questionOneCorrect({
  id: "QUENI5QDU1",
  version: 1,
  learningObjectives: [],
  question: () => dedent`
    When detonation is recognised in a piston engine, the correct procedure is 
    to...
  `,
  correctOptions: [
    {
      id: "QUENI5QDU1-0",
      subject: "",
      why: "",
      text: "reduce manifold pressure and fully enrich the mixture.",
    },
  ],
  otherOptions: [
    {
      id: "QUENI5QDU1-1",
      why: "",
      text: "increase manifold pressure and fully enrich the mixture.",
    },
    {
      id: "QUENI5QDU1-2",
      why: "",
      text: "increase manifold pressure and lean the mixture.",
    },
    {
      id: "QUENI5QDU1-3",
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
      id: "QQOLLEVRAW-1",
      subject: "",
      why: "",
      text: dedent`
        enable proper functioning of a piston engine during throttle advance.
      `,
    },
  ],
  otherOptions: [
    {
      id: "QQOLLEVRAW-0",
      why: dedent`
        NOTE: engines with accelerator pumps can use them to serve the function 
        of a primer
      `,
      text: "enable engine starting.",
    },
    {
      id: "QQOLLEVRAW-2",
      why: "",
      text: "enable engine idling.",
    },
    {
      id: "QQOLLEVRAW-3",
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
      id: "Q4O4T9FX57-2",
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
      id: "Q4O4T9FX57-0",
      why: "",
      text: dedent`
        the periphery and leaves via the eye of the impeller.
      `,
    },
    {
      id: "Q4O4T9FX57-1",
      why: "",
      text: dedent`
        a tangent to the rotor and leaves via the stator.
      `,
    },
    {
      id: "Q4O4T9FX57-3",
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
      id: "QKDV2J6I8Q-1",
      subject: "",
      why: "",
      text: "the mixture becomes richer.",
    },
    {
      id: "QKDV2J6I8Q-2",
      subject: "",
      why: "",
      text: "the power output reduces.",
    },
  ],
  otherOptions: [
    {
      id: "QKDV2J6I8Q-3",
      why: "",
      text: "no change occurs in the mixture.",
    },
    {
      id: "QKDV2J6I8Q-4",
      why: "When",
      text: "RPM increases immediately.",
    },
    {
      id: "QKDV2J6I8Q-5",
      why: "",
      text: "the mixture becomes leaner.",
    },
    {
      id: "QKDV2J6I8Q-6",
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
