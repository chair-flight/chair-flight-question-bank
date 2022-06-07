import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionOneCorrect } from "./base/questionOneCorrect";
import { questionOneTwo } from "./base/questionOneTwo";

export const ZRON7SV6I1 = mergeQuestionVariants(
  {
    id: "ZRON7SV6I1",
    version: 1,
    learningObjectives: ["021.01.01.01.01"],
    explanation: dedent`
  `,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
        Which Of these Statements about Structural design principles is correct?
      `,
      correctOptions: [
        {
          subject: "",
          text: "Fail Safe implies multiple load Paths",
          why: dedent``,
        },
        {
          subject: "",
          text: dedent`
            A safe life structure is based on use during a limited time period or
            number of cycles
          `,
          why: dedent``,
        },
        {
          subject: "",
          text: dedent`
            Safe life requires a structure to have a minimum stated design life 
            within which no catastrophic damage will occur
          `,
          why: dedent``,
        },
      ],
      otherOptions: [
        {
          text: dedent`
            Fail Safe implies the structure will fail, when one component fails,
          `,
          why: dedent`
          `,
        },
        {
          text: dedent`
            Safe life is the preferred design technique for aircraft
          `,
          why: dedent`
            Safe life structures tend to be extremely complex, and expensive to
            maintain, and are avoided for all systems where a duplication is not 
            possible (like engine fans).
          `,
        },
        {
          text: dedent`
            Safe life requires a structure to have a maximum stated design life 
            within which no catastrophic damage will occur
          `,
          why: dedent`
        `,
        },
        {
          text: dedent`
            Fail-safe Implies the structure will fail when one component fails
          `,
          why: dedent`
        `,
        },
        {
          text: dedent`
            Fail-safe structures are preferred to damage tolerant structures 
            as they are lighter due to not requiring extra structural members
          `,
          why: dedent`
            Fail-safe structures are preferred, but not because their lighter. 
            Also fail safe structures require extra redundant structural members.
          `,
        },
      ],
    }),
  (props) =>
    questionOneTwo({
      ...props,
      question: (options) => dedent`
        Which Of these Statements about Structural design principles is correct?

        ${options}
      `,
      statementPairs: [
        {
          correct: "Fail Safe implies multiple load Paths",
          wrong:
            "Fail Safe implies the structure will fail, when one component fails",
        },
        {
          correct: dedent`
            A safe life structure is based on use during a limited time period or 
            number of cycles
          `,
          wrong: dedent`
            A Safe life requires a structure to have a maximum stated design life 
            within which no catastrophic damage will occur
          `,
        },
        {
          correct: dedent`
            A Safe life requires a structure to have a minimum stated design 
            life within which no catastrophic damage will occur
          `,
          wrong: dedent`
            A Safe life requires a structure to have a maximum stated design 
            life within which no catastrophic damage will occur
          `,
        },
      ],
    })
);

export const DD5Q0CX1SK = questionOneCorrect({
  id: "DD5Q0CX1SK",
  version: 1,
  learningObjectives: ["021.01.01.01.01", "021.01.01.01.02"],
  question: (subject) => dedent`
    Select the option that best describes ${subject}.
  `,
  correctOptions: [
    {
      subject: "a fail-safe designed structure",
      text: dedent`
        A structure that has built-in redundancy with multiple load paths
      `,
      why: dedent`
        Definition of Fail-safe structure
      `,
    },
    {
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
      text: dedent`
        Multiple load paths through a structure that is replaced after limited 
        usage
      `,
      why: dedent`
        This is a mix of the definition of a safe-life and a fail-safe structure
      `,
    },
    {
      text: dedent`
        A single load path can withstand 1.5 times the maximum design load
      `,
      why: dedent`
        Different components have different design safety factors.
      `,
    },
    {
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
      subject: "large aeroplanes",
      text: "CS-25",
      why: "Large aeroplanes => CS-25",
    },
    {
      subject: [
        "Normal aeroplanes",
        "Utility aeroplanes",
        "Commuter aeroplanes",
      ],
      text: "CS-23",
      why: "Normal aeroplanes => CS-23",
    },
  ],
  otherOptions: [
    {
      text: "CS-27",
      why: "Small Rotorcraft => CS-27",
    },
    {
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
      subject: "Small Rotorcraft",
      text: "CS-27",
      why: "Small Rotorcraft => CS-27",
    },
    {
      subject: "Large Rotorcraft",
      text: "CS-29",
      why: "Large Rotorcraft => CS-29",
    },
  ],
  otherOptions: [
    {
      text: "CS-25",
      why: "Large aeroplanes => CS-25",
    },
    {
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
      subject: "Elastic",
      why: "Definition of elastic deformation",
      text: "is temporary and is reversed after the force is removed.",
    },
    {
      subject: "Plastic",
      why: "Definition of plastic deformation",
      text: "will cause irreversible buckling of the aircraft`s skin.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "will cause visible cracks to appear in the aircraft`s skin.",
    },
    {
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
      subject: "",
      why: "",
      text: "stress corrosion.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "intergrannular corrosion.",
    },
    {
      why: "",
      text: "creep.",
    },
    {
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
      subject: "",
      why: "",
      text: "in the line between the fuel control unit and the engine burners.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "in the line between the booster pump and the engine.",
    },
    {
      why: "",
      text: "at the outlet of the high pressure fuel pump.",
    },
    {
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
