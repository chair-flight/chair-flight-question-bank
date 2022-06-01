import { dedent } from "../base/dedent";
import { questionOneCorrect } from "../base/questionOneCorrect";

export const DD5Q0CX1SK = questionOneCorrect({
  id: "DD5Q0CX1SK",
  version: 1,
  learningObjectives: ["021.01.01.01.01", "021.01.01.01.02"],
  question: (subject) => dedent`
    Select the option that best describes ${subject}.
  `,
  correctOptions: [
    {
      id: "fail-safe",
      subject: "a fail-safe designed structure",
      text: [
        dedent`
          A structure that has built-in redundancy with multiple load paths
        `,
      ],
      why: dedent`
        Definition of Fail-safe structure
      `,
    },
    {
      id: "safe-life",
      subject: "a Safe-life structure",
      text: [
        dedent`
          One load path is sufficient and the structural element can be removed 
          at the end of its lifetime
        `,
        dedent`
          The replacement of a part after a given number of cycles or hours of 
          use.
        `,
      ],
      why: dedent`
        Definition of safe life structure.
      `,
    },
    {
      id: "damage-tolerant",
      subject: "a Damage tolerant structure",
      text: [
        dedent`
          A structure capable of enduring damage safely until repairs can be 
          performed.
        `,
      ],
      why: dedent`
        Definition of Damage tolerant structure
      `,
    },
    {
      id: "redundancy",
      subject: "Redundancy",
      text: [
        dedent`
          The duplication or triplication of critical components or functions of 
          a system with the intention of increasing reliability of said system.
        `,
      ],
      why: dedent`
        Definition of Redundancy
      `,
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: dedent`
        Multiple load paths through a structure that is replaced after limited 
        usage
      `,
      why: dedent`
        This is a mix of the definition of a safe-life and a fail-safe structure
      `,
    },
    {
      id: "wrong-2",
      text: dedent`
        A single load path can withstand 1.5 times the maximum design load
      `,
      why: dedent`
        Different components have different design safety factors.
      `,
    },
    {
      id: "wrong-3",
      text: dedent`
        One Load path is sufficient and the structure should be redundant
      `,
      why: dedent`
        This is a contradiction. If one load path is sufficient, there is no
        redundancy.
      `,
    },
  ],
  explanation: dedent`
  `,
});

export const QJX11PHDQW = questionOneCorrect({
  id: "QJX11PHDQW",
  version: 1,
  learningObjectives: ["021.01.01.02.03"],
  question: [
    (subject: string) => dedent`
      Where can the design requirements for ${subject} certified by EASA be
      found?
    `,
    (subject: string) => dedent`
      What EASA publication lays down specifications of ${subject}
      aeroplanes?
    `,
  ],
  correctOptions: [
    {
      id: "correct-1",
      subject: "large aeroplanes",
      text: "CS-25",
      why: "Large aeroplanes => CS-25",
    },
    {
      id: "correct-2",
      subject: "Normal aeroplanes",
      text: "CS-23",
      why: "Normal aeroplanes => CS-23",
    },
    {
      id: "correct-3",
      subject: "Utility aeroplanes",
      text: "CS-23",
      why: "Utility aeroplanes => CS-23",
    },
    {
      id: "correct-4",
      subject: "Commuter aeroplanes",
      text: "CS-23",
      why: "Commuter aeroplanes => CS-23",
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: "CS-27",
      why: "Small Rotorcraft => CS-27",
    },
    {
      id: "wrong-2",
      text: "CS-29",
      why: "Large Rotorcraft => CS-29",
    },
  ],
  explanation: dedent`
    - Normal, Commuter, & Utility aeroplanes => CS-23
    - Large aeroplanes => CS-25
  `,
});

export const QJX11PHDQB = questionOneCorrect({
  id: "QJX11PHDQB",
  version: 1,
  learningObjectives: ["021.01.01.02.04"],
  question: [
    (subject: string) => dedent`
      Where can the design requirements for ${subject} certified by EASA be
      found?
    `,
    (subject: string) => dedent`
      What EASA publication lays down specifications of ${subject}
      aeroplanes?
    `,
  ],
  correctOptions: [
    {
      id: "correct-1",
      subject: "Small Rotorcraft",
      text: "CS-27",
      why: "Small Rotorcraft => CS-27",
    },
    {
      id: "correct-2",
      subject: "Large Rotorcraft",
      text: "CS-29",
      why: "Large Rotorcraft => CS-29",
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: "CS-25",
      why: "Large aeroplanes => CS-25",
    },
    {
      id: "wrong-2",
      text: "CS-23",
      why: "Normal aeroplanes => CS-23",
    },
  ],
  explanation: dedent`
    - Small Rotorcraft => CS-27
    - Large Rotorcraft => CS-29
  `,
});

export const QOKF03CAOL = questionOneCorrect({
  id: "QOKF03CAOL",
  version: 1,
  learningObjectives: ["021.01.02.01.01"],
  question: (subject) => dedent`
    "${subject} deformation" in relation to aircraft structures is a 
    shape change that..
  `,
  correctOptions: [
    {
      id: "QOKF03CAOL-1",
      subject: "Elastic",
      why: "Definition of elastic deformation",
      text: "is temporary and is reversed after the force is removed.",
    },
    {
      id: "QOKF03CAOL-1",
      subject: "Plastic",
      why: "Definition of plastic deformation",
      text: "will cause irreversible buckling of the aircraft`s skin.",
    },
  ],
  otherOptions: [
    {
      id: "QOKF03CAOL-0",
      why: "",
      text: "will cause visible cracks to appear in the aircraft`s skin.",
    },
    {
      id: "QOKF03CAOL-3",
      why: "",
      text: "is temporary but its not reversed after the force is removed.",
    },
  ],
  explanation: dedent`
    __(This question is only marginally related to the LOs but it's still a 
    common appearance in exams)__

    - **Plastic Deformation**: will cause irreversible buckling of the 
      aircraft's skin.
    - **Elastic Deformation**: is temporary and is reversed after the 
      §force is removed.
  `,
});

export const QEXXTPLLUJ = questionOneCorrect({
  id: "QEXXTPLLUJ",
  version: 1,
  learningObjectives: ["021.01.03.01.04"],
  question: () => dedent`
    A steady tensile load combined with corrosive conditions, can produce a 
    form of metal fatigue known as...
  `,
  correctOptions: [
    {
      id: "QEXXTPLLUJ-2",
      subject: "",
      why: "",
      text: "stress corrosion.",
    },
  ],
  otherOptions: [
    {
      id: "QEXXTPLLUJ-0",
      why: "",
      text: "intergrannular corrosion.",
    },
    {
      id: "QEXXTPLLUJ-1",
      why: "",
      text: "creep.",
    },
    {
      id: "QEXXTPLLUJ-3",
      why: "",
      text: "strain.",
    },
  ],
  explanation: dedent``,
});

export const QP9EYOS6KH = questionOneCorrect({
  id: "QP9EYOS6KH",
  version: 1,
  learningObjectives: ["021.08.01.02.07", "021.11.03.01.03"],
  question: () => dedent`
    Fuel flow information for gas turbine engines is measured...
  `,
  correctOptions: [
    {
      id: "QP9EYOS6KH-0",
      subject: "",
      why: "",
      text: "in the line between the fuel control unit and the engine burners.",
    },
  ],
  otherOptions: [
    {
      id: "QP9EYOS6KH-1",
      why: "",
      text: "in the line between the booster pump and the engine.",
    },
    {
      id: "QP9EYOS6KH-2",
      why: "",
      text: "at the outlet of the high pressure fuel pump.",
    },
    {
      id: "QP9EYOS6KH-3",
      why: "",
      text: "in the inlet of the high-pressure fuel pump.",
    },
  ],
  explanation: dedent`
    This question is not explicitly mentioned in any Learning Objective, but 
    in any case it's interesting to know that the fuel flow information is 
    measured at the latest possible point, before going to the burners, and
    after passing through the fuel control unit.
  `,
});
