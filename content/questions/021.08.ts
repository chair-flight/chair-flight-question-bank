import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionOneCorrect } from "./base/questionOneCorrect";
import { questionOneTwo } from "./base/questionOneTwo";

export const QQDKRGQGRI = mergeQuestionVariants(
  {
    id: "QQDKRGQGRI",
    version: 1,
    learningObjectives: ["021.08.02.01.02"],
    explanation: dedent`
    TLDR memorize this table:

    |                | Jet A       | Jet A1      | Jet B       |
    | -------------- | ----------- | ----------- | ----------- |
    | Colour         | Transparent | Transparent | Transparent |
    | Density (kg/l) | 0.80        | 0.80        | 0.81        |
    | Flash Point    | 38ºC        | 38ºc        | -20ºc       |
    | Freezing Point | -40ºC       | -47ºC       | -60ºC       |
  `,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: [
        (subject) => dedent`
        The correct order of ${subject} freezing points of the three mentioned fuels is:
      `,
        (subject) => dedent`
        The correct order of ${subject} flashing points of the three mentioned fuels is:
      `,
      ],
      correctOptions: [
        {
          id: "QQDKRGQGRI-0",
          subject: "decreasing",
          why: "",
          text: "Jet A, Jet A-1, Jet B.",
        },
        {
          id: "QQDKRGQGRI-1",
          subject: "increasing",
          why: "",
          text: "Jet B, Jet A-1, Jet A.",
        },
      ],
      otherOptions: [
        {
          id: "QQDKRGQGRI-1",
          why: "",
          text: "Jet A-1, Jet B, Jet A",
        },
        {
          id: "QQDKRGQGRI-2",
          why: "",
          text: "Jet B, Jet A, Jet A-1",
        },
      ],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`What is the ${subject}?`,
      correctOptions: [
        {
          id: "QQDKRGQGRI-1",
          subject: "Freezing point of Jet A",
          why: "",
          text: "-40ºC",
        },
        {
          id: "QQDKRGQGRI-2",
          subject: "Freezing point of Jet A1",
          why: "",
          text: "-47ºC",
        },
        {
          id: "QQDKRGQGRI-3",
          subject: "Freezing point of Jet B",
          why: "",
          text: "-60ºC",
        },
        {
          id: "QQDKRGQGRI-4",
          subject: "Flash point of Jet A",
          why: "",
          text: "38ºC",
        },
        {
          id: "QQDKRGQGRI-5",
          subject: "Flash point of Jet B",
          why: "",
          text: "-20ºC",
        },
      ],
      otherOptions: [
        {
          id: "QQDKRGQGRI-6",
          why: "",
          text: "40ºC",
        },
      ],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: [
        () => dedent`What is the density of Jet A?`,
        () => dedent`What is the density of Jet B?`,
        () => dedent`What is the density of Jet A1?`,
      ],
      correctOptions: [
        {
          id: "QQDKRGQGRI-8",
          subject: "",
          why: "Jet A, Jet B, and Jet A1 all have about the same density",
          text: "0.8 kg/l",
        },
      ],
      otherOptions: [3, 4, 5, 6, 7, 9].map((i) => ({
        id: `QQDKRGQGRI-${i}`,
        why: "",
        text: "0.3",
      })),
    }),
  (props) =>
    questionOneTwo({
      ...props,
      statementPairs: [
        {
          correct: [
            "The freezing point for Jet A is at a higher temperature than that for Jet B",
            "The freezing point for Jet A-1 is at a higher temperature than that for Jet B",
            "The freezing point for Jet A is at a higher temperature than that for Jet A-1",
            "The freezing point for Jet B is at a lower temperature than that for Jet A",
            "The freezing point for Jet B is at a lower temperature than that for Jet A-1",
            "The freezing point for Jet A-1 is at a lower temperature than that for Jet A",
          ],
          wrong: [
            "The freezing point for Jet A is at a lower temperature than that for Jet B",
            "The freezing point for Jet A-1 is at a lower temperature than that for Jet B",
            "The freezing point for Jet A is at a lower temperature than that for Jet A-1",

            "The freezing point for Jet B is at a higher temperature than that for Jet A",
            "The freezing point for Jet B is at a higher temperature than that for Jet A-1",
            "The freezing point for Jet A-1 is at a higher temperature than that for Jet A",

            "The freezing point for Jet B is at about same temperature than that for Jet A",
            "The freezing point for Jet B is at about same temperature than that for Jet A-1",
            "The freezing point for Jet A-1 is at about same temperature than that for Jet A",
          ],
        },
        {
          correct: [
            "The flash point for Jet A is at a higher temperature than that for Jet B",
            "The flash point for Jet A-1 is at a higher temperature than that for Jet B",
            "The flash point for Jet A is at about the same temperature than that for Jet A-1",
            "The flash point for Jet B is at a lower temperature than that for Jet A",
            "The flash point for Jet B is at a lower temperature than that for Jet A-1",
            "The flash point for Jet A-1 is at about the same temperature than that for Jet A",
          ],
          wrong: [
            "The flash point for Jet A is at a lower temperature than that for Jet B",
            "The flash point for Jet A-1 is at a lower temperature than that for Jet B",
            "The flash point for Jet B is at a higher temperature than that for Jet A",
            "The flash point for Jet B is at a higher temperature than that for Jet A-1",
          ],
        },
      ],
    })
);

export const PO5CKPSPED = questionOneCorrect({
  id: "PO5CKPSPED",
  version: 1,
  learningObjectives: ["021.08.02.01.03"],
  question: () => dedent`
    Turbine fuel may contain additives in order to...
  `,
  correctOptions: [
    {
      id: "correct-1",
      subject: "",
      text: "Reduce the risk of ice crystal formation",
      why: dedent``,
    },
    {
      id: "correct-1",
      subject: "Prevent waxing of the fuel in low temperatures",
      text: "Reduce the risk of ice crystal formation",
      why: dedent`
        waxing of jet fuel describe the transition of jet fuel into a partially 
        crystalline state in low temperatures
      `,
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: dedent`
        Increase viscosity at high temperatures
      `,
      why: dedent``,
    },
    {
      id: "wrong-2",
      text: dedent`
        Enhance combustion temperature
      `,
      why: dedent``,
    },
    {
      id: "wrong-3",
      text: dedent`
        Increase the freezing point when operating in low temperatures
      `,
      why: dedent`
        Not increasing but decreasing the freezing point would be correct.
      `,
    },
    {
      id: "wrong-4",
      text: dedent`
        Improve overall performance at all temperature ranges.
      `,
      why: dedent``,
    },
  ],
  explanation: dedent`
    Fuel system icing inhibitors are additives added to jet fuel to reduce the
    freezing point and prevent ice crystal formation.
  `,
});

export const B27P8Z6JJI = mergeQuestionVariants(
  {
    id: "B27P8Z6JJI",
    version: 1,
    learningObjectives: ["021.08.01.01.01"],
    explanation: dedent`
    `,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
    Using MOGAS in a piston engine aircraft instead of AVGAS...
    `,
      correctOptions: [
        {
          id: "correct-1",
          subject: "",
          text: "increases the risk of Carburettor Icing",
          why: dedent``,
        },
        {
          id: "correct-1",
          subject: "",
          text: "increases the risk of Engine Fire",
          why: dedent``,
        },
        {
          id: "correct-1",
          subject: "",
          text: "increases the risk of Carburettor Icing",
          why: dedent``,
        },
      ],
      otherOptions: [
        {
          id: "wrong-1",
          text: dedent` increases Manifold pressure`,
          why: dedent`
          it will decrease the maximum MAP since detonation will occur at a 
          lower pressure
        `,
        },
        {
          id: "wrong-2",
          text: dedent`lowers the risk of Carburettor Icing`,
          why: dedent``,
        },
        {
          id: "wrong-3",
          text: dedent`lowers the risk of Engine Fire`,
          why: dedent`
          
        `,
        },
        {
          id: "wrong-4",
          text: dedent`lowers the risk of Detonation`,
          why: dedent``,
        },
      ],
    }),
  (props) =>
    questionOneTwo({
      ...props,
      question: (options) => dedent`
      Using MOGAS in a piston engine aircraft instead of AVGAS...

      ${options}
    `,
      statementPairs: [
        {
          correct: "increases the risk of Carburettor Icing",
          wrong: "lowers the risk of Carburettor Icing",
        },
        {
          correct: "increases the risk of Engine Fire",
          wrong: "lowers the risk of Engine Fire",
        },
        {
          correct: "increases the risk of Detonation",
          wrong: "lowers the risk of Detonation",
        },
      ],
    })
);

export const CV2ZV15SWP = questionOneCorrect({
  id: "CV2ZV15SWP",
  version: 1,
  learningObjectives: ["021.08.01.02.02", "021.08.02.02.01"],
  question: (subject) => dedent`
    What is the function of the following component in a fuel system: 
    **${subject}**?
  `,
  correctOptions: [
    {
      id: "correct-1",
      subject: ["boost pump", "centrifugal boost pump"],
      text: dedent`
        To pressurize the fuel system so that fuel reaches the engines.
      `,
      why: dedent`
        Boost pump / centrifugal boost pump
      `,
    },
    {
      id: "correct-2",
      subject: ["pressure valves", "relief valves"],
      text: dedent`
        To prevent the accumulation of excessive pressure in the fuel system.
      `,
      why: dedent`
        Pressure valves / relief valves
      `,
    },
    {
      id: "correct-3",
      subject: ["filter", "strainer"],
      text: dedent`
        To remove solid particles that could otherwise damage the fuel system.
      `,
      why: dedent`
        Filters / Strainers
      `,
    },
    {
      id: "correct-4",
      subject: "ventilation system",
      text: dedent`
        To prevent the creation of low pressure or excessive overpressure 
        in the tank.
      `,
      why: dedent`Ventilation system`,
    },
    {
      id: "correct-5",
      subject: "sump",
      text: dedent`
        To provide a single point in the fuel tank where fuel accumulates as 
        the tank empties.
      `,
      why: dedent``,
    },
    {
      id: "correct-6",
      subject: "drain valves",
      text: dedent`
        To take allow the sampling of fuel and the emptying of the tanks for
        maintenance.
      `,
      why: dedent`Drain valves`,
    },
    {
      id: "correct-7",
      subject: ["fuel dump system", "jettison system"],
      text: dedent`
        To allow for rapid fuel dumping in the case of emergency landing with an
        excessive landing mass.
      `,
      why: dedent`Fuel dump system / jettison system`,
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: dedent`
        To prevent fuel freezing during flight in icing conditions.
      `,
      why: dedent``,
    },
    {
      id: "wrong-2",
      text: dedent`
        To detect particles and contaminants that could damage the engine.
      `,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const IRRWA4K9AZ = questionOneCorrect({
  id: "IRRWA4K9AZ",
  version: 1,
  learningObjectives: ["021.08.01.02.04"],
  question: (subject) => dedent`
    What type of fuel tank is used in ${subject}?
  `,
  correctOptions: [
    {
      id: "correct-1",
      subject: "wet wing aircraft wing tanks",
      text: ["Integral tanks"],
      why: dedent`used in wet wing aircraft wing tanks`,
    },
    {
      id: "correct-2",
      subject: "dry wing aircraft wing tanks",
      text: ["Rigid tanks", "Drum tanks"],
      why: dedent`used in dry wing aircraft wing tanks`,
    },
    {
      id: "correct-3",
      subject: "wing tips to store additional fuel",
      text: ["Tip tanks"],
      why: dedent`used in wing tips to store additional fuel`,
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: dedent`Removable tanks`,
      why: dedent`not relevant to LOs`,
    },
  ],
  explanation: dedent`
  `,
});

export const DKVGIVFZBT = questionOneCorrect({
  id: "DKVGIVFZBT",
  version: 1,
  learningObjectives: ["021.08.02.02.01"],
  question: (subject) => dedent`
  The purpose of ${subject} in wing fuel tanks is to...
  `,
  correctOptions: [
    {
      id: "correct-1",
      subject: "Baffles",
      text: [
        "Dampen the movement of fuel inside the tank",
        "Restrict fuel movement in the tank",
      ],
      why: dedent`
        Baffles restrict / dampen the movement of flow inside a tank.

        (N.B: restrict as in 'make harder', not as in 'make impossible').
      `,
    },
    {
      id: "correct-2",
      subject: ["Baffle valves", "baffle check valves"],
      text: "Prevent fuel movement to the wing tips",
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: "Close the vent lines in case of turbulence",
      why: "",
    },
    {
      id: "wrong-2",
      text: "Prevent positive buildup inside the tank",
      why: "",
    },
    {
      id: "wrong-3",
      text: "Limit high fuel flow during refuelling operations",
      why: "",
    },
  ],
  explanation: dedent`
  `,
});

export const O687IQRFBO = questionOneCorrect({
  id: "O687IQRFBO",
  version: 1,
  learningObjectives: ["021.08.02.02.01"],
  question: () => dedent`
    The operating pressure of a booster pump in a fuel supply system of a gas
    turbine aircraft is..
  `,
  correctOptions: [
    {
      id: "correct-1",
      subject: "",
      text: dedent`20 to 100 PSI`,
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: dedent`5 to 20 PSI`,
      why: dedent``,
    },
    {
      id: "wrong-1",
      text: dedent`1 to 5 PSI`,
      why: dedent``,
    },
    {
      id: "wrong-1",
      text: dedent`100 to 300 PSI`,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const CC915FWXQO = questionOneCorrect({
  id: "CC915FWXQO",
  version: 1,
  learningObjectives: ["021.08.02.02.05"],
  question: [
    () => "The quantity of fuel measure by a dip stick is determined using...",
    () => "The quantity of fuel measure by a drop stick is determined using...",
  ],
  correctOptions: [
    {
      id: "correct-1",
      subject: "",
      text: dedent`
        measurements from the dip stick and data tables in the aircraft 
        documentation
      `,
      why: dedent`
      `,
    },
  ],
  otherOptions: [
    {
      id: "wrong-1",
      text: dedent`measurements alone`,
      why: dedent`
        although this is commonly done in small aircraft, it's too unreliable 
        for large aircraft with significant temperature operational ranges
      `,
    },
    {
      id: "wrong-2",
      text: dedent`
        measurements from the dipstick and the fuel's specific gravity.
      `,
      why: dedent``,
    },
    {
      id: "wrong-3",
      text: dedent`
        measurements from the dipstick and the current OAT.
      `,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});
