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
