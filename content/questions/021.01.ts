import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
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
        Which of these statements about structural design principles is correct?
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
  learningObjectives: ["021.01.01.01.01", "021.01.01.01.02", "021.01.01.02.01"],
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

export const QQXG5U56AN = questionOneCorrect({
  id: "QQXG5U56AN",
  version: 1,
  learningObjectives: ["021.01.02.01.01"],
  question: () => dedent`
    The property of a material to return to its original shape after 
    the stress has been removed is called...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "elastic deformation",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "strain",
    },
    {
      why: "",
      text: "strength",
    },
    {
      why: "",
      text: "plastic deformation",
    },
  ],
  explanation: dedent`
    This question is not explicitly mentioned in any Learning Objective, but you
    are expected to know the difference between Elastic and plastic deformation

    - **Elastic deformation**: The material returns to its original shape after
      the stress has been removed (like an elastic band)
    - **Plastic deformation**: The material is permanently deformed and no longer
      returns to its original shape once the stress has been removed
  `,
});

export const QEXXTPLLUJ = mergeQuestionVariants(
  {
    id: "QEXXTPLLUJ",
    version: 1,
    learningObjectives: ["021.01.03.01.04"],
  },
  (props) =>
    questionOneCorrect({
      ...props,
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
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
      Stress corrosion cracking is caused by a combination of...
    `,
      correctOptions: [
        {
          subject: "",
          why: "",
          text: "tensile load and corrosive condition.",
        },
      ],
      otherOptions: [
        {
          why: "",
          text: "high airframe cycles and corrosive condition.",
        },
        {
          why: "",
          text: "hard landings and high aircraft mass.",
        },
        {
          why: "",
          text: "high aircraft mass and adverse weather conditions.",
        },
      ],
      explanation: dedent``,
    })
);

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

export const LYARH7K1PV = questionOneCorrect({
  id: "LYARH7K1PV",
  version: 1,
  learningObjectives: ["021.01.02.01.01"],
  question: () => dedent`What causes stress?`,
  correctOptions: [
    {
      subject: "",
      text: dedent`Cycle loads`,
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: dedent`Ageing`,
      why: dedent``,
    },
    {
      text: dedent`Fatigue`,
      why: dedent`
        Mechanical fatigue is a consequence of cyclic stress loads, and not a 
        cause of stress
      `,
    },
    {
      text: dedent`Long working hours`,
      why: dedent``,
    },
    {
      text: dedent`Corrosion`,
      why: dedent``,
    },
    {
      text: dedent`High aircraft mass`,
      why: dedent``,
    },
  ],
  explanation: dedent`
    Sometimes Context is important. This is AGK, so it's implicit that we are
    talking about Mechanical Stress.
  `,
});

export const QO18F0ONTF = questionOneCorrect({
  id: "QO18F0ONTF",
  version: 1,
  learningObjectives: ["021.01.02.01.03"],
  question: (subject) => dedent`
    During a pre-flight inspection, what could indicate stress damage on an
    aircraft?
  `,
  correctOptions: [
    {
      subject: "",
      text: dedent`Wrinkled or stretched skin`,
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: dedent`Loose or missing screws`,
      why: dedent``,
    },
    {
      text: dedent`Hydraulic leak in the landing gear`,
      why: dedent``,
    },
    {
      text: dedent`Flight control movement is restricted`,
      why: dedent``,
    },
  ],
  explanation: dedent`
    Key word here is "stress damage". All other options refer to other types of
    damage
  `,
});

export const QPGA2BGJXE = questionMultipleCorrect({
  id: "QPGA2BGJXE",
  version: 1,
  learningObjectives: ["021.01.02.01.03"],
  question: (options) => dedent`
    Which one of the following areas are most prone to experiencing stress and 
    should be given particular attention during a walk around?

    ${options}
  `,
  statements: [
    {
      correct: "Wing spar and skin near the root of the wing",
    },
    {
      wrong: "Wing spar and skin near the tip of the wing",
    },
    {
      correct: "Fuselage skin near the bulkhead",
    },
    {
      correct: "Aircraft skin on the bottom and top of the fuselage",
    },
    {
      correct: "Fuselage around the windows",
    },
    {
      wrong: "Engine nacelles",
    },
  ],
  explanation: dedent``,
});

export const QTBTFC1YKE = questionOneCorrect({
  id: "QTBTFC1YKE",
  version: 1,
  learningObjectives: ["021.01.05.01.01"],
  question: () => dedent`
    In a hard-time maintenance programme, a component must be replaced...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "at a specified number of flight cycles or hours.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "if there is evidence of stress loads.",
    },
    {
      why: "",
      text: "after a complaint from the flight crew.",
    },
    {
      why: "",
      text: "if it fails a visual inspection.",
    },
  ],
  explanation: dedent``,
});

export const A49I12JXEM = mergeQuestionVariants(
  {
    id: "A49I12JXEM",
    version: 1,
    learningObjectives: ["021.01.05.01.01"],
    definitions: {
      "Fixed Time maintenance": dedent`
      Replacement of a part based on the number of cycles or on the time of use, 
      regardless of its actual condition state
    `,
      "Condition monitoring": dedent`
      Using continuos means of observation to determine the optimal time to 
      perform component maintenance
    `,
      "On Condition maintenance": dedent`
      Replacing a part based on indicators of its deteriorating condition
    `,
      "Soft time maintenance": dedent`
      A component getting replaced at some point when convenient to the 
      operator
    `,
    } as Record<string, string>,

    explanation: dedent`
    - **Fixed Time / Hard time maintenance** - Replacement of a part based on 
      the number of cycles or on the time of use, regardless of its actual 
      condition state
    - **Condition monitoring** - Using continuos means of observation to 
      determine the optimal time to perform component maintenance
    - **On Condition maintenance** - Replacing a part based on indicators of 
      its deteriorating condition
    - **Soft time maintenance** - A component getting replaced at some point 
      when convenient to the operator
  `,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      ${props.definitions[subject]} is the definition of...
    `,
      correctOptions: Object.entries(props.definitions).map(
        ([term, definition]) => ({
          subject: term,
          text: term,
          why: definition,
        })
      ),
      otherOptions: [],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      What statement best describes ${subject}
    `,
      correctOptions: Object.entries(props.definitions).map(
        ([term, definition]) => ({
          subject: term,
          text: definition,
          why: term,
        })
      ),
      otherOptions: [],
    })
);

export const Q5WBWLA1YM = questionOneCorrect({
  id: "Q5WBWLA1YM",
  version: 1,
  learningObjectives: ["021.01.02.01.02"],
  question: () => dedent`
    Consider an aircraft on the ground in a hangar. 
    
    Which loads are acting in the skin of a cantilever wing outboard of the 
    wing landing gear?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "Tension in the upper skin, compression in the lower skin.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "Tension in both the upper and the lower skin.",
    },
    {
      why: "",
      text: "Compression in the upper surface, tension in the lower skin.",
    },
    {
      why: "",
      text: "Compression in both the upper and the lower skin.",
    },
  ],
  explanation: dedent``,
});

export const QSILUO0NHD = questionMultipleCorrect({
  id: "QSILUO0NHD",
  version: 1,
  learningObjectives: ["021.01.03.01.03"],
  question: (options) => dedent`
    Which one of the following liquids are considered highly corrosive?

    ${options}
  `,
  statements: [
    {
      wrong: "Anti-icing fluid",
    },
    {
      wrong: "De-icing fluid",
    },
    {
      wrong: "Window washer",
    },
    {
      correct: "Hydraulic fluid",
    },
    {
      wrong: "Engine oil",
    },
  ],
  explanation: dedent`
    This question is a bit special. Learning objective \`021.03.02.01.01\` tries
    to highlight the ideal properties of hydraulic fluids which include being
    "non corrosive". Despite this you should be aware that Skydrol, the hydraulic
    fluid most commonly used in modern airliners is highly corrosive, specially
    at high temperatures.

    You should also be aware that Skydrol is highly toxic to humans. 

    All other fluids are relatively non corrosive.
  `,
});

// TODO create question sort
export const Q6NILX4ZZZ = questionOneCorrect({
  id: "Q6NILX4ZZZ",
  version: 1,
  learningObjectives: ["021.01.03.01.02"],
  question: () => dedent`
    Organise the following environments from the highest to the lowest rates of 
    corrosion:

    1. Desert  
    2. Mediterranean 
    3. Rainforest  
    4. Arctic
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "3, 2, 1, 4.",
    },
  ],
  otherOptions: [
    {
      text: "3, 2, 4, 1.",
    },
    {
      why: "",
      text: "1, 2, 3, 4.",
    },
    {
      why: "",
      text: "2, 3, 1, 4.",
    },
    {
      why: "",
      text: "4, 1, 2, 3.",
    },
  ],
  explanation: dedent`
    The primary drive for an accelerated corrosion is humidity. As such you 
    can put in the top of the list a Rainforest (close to 100% humidity), and
    Mediterranean climate (70%+ humidity on a daily basis). 

    The arctic climate, despite of being full of water in frozen state has a 
    permanent humidity of 0%, while a desert still experiences some degree
    of humidity, albeit very low. As such the correct ordering from the 
    highest to the lowest rate of corrosion should be:
   
    3. Rainforest  
    2. Mediterranean 
    1. Desert  
    4. Arctic
  `,
});
