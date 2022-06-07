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
          subject: "decreasing",
          why: "",
          text: "Jet A, Jet A-1, Jet B.",
        },
        {
          subject: "increasing",
          why: "",
          text: "Jet B, Jet A-1, Jet A.",
        },
      ],
      otherOptions: [
        {
          why: "",
          text: "Jet A-1, Jet B, Jet A",
        },
        {
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
          subject: "Freezing point of Jet A",
          why: "",
          text: "-40ºC",
        },
        {
          subject: "Freezing point of Jet A1",
          why: "",
          text: "-47ºC",
        },
        {
          subject: "Freezing point of Jet B",
          why: "",
          text: "-60ºC",
        },
        {
          subject: "Flash point of Jet A",
          why: "",
          text: "38ºC",
        },
        {
          subject: "Flash point of Jet B",
          why: "",
          text: "-20ºC",
        },
      ],
      otherOptions: [
        {
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
          subject: "",
          why: "Jet A, Jet B, and Jet A1 all have about the same density",
          text: "0.8 kg/l",
        },
      ],
      otherOptions: [3, 4, 5, 6, 7, 9].map((i) => ({
        id: `QQDKRGQGRI-${i}`,
        why: "",
        text: `0.${i}`,
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
      subject: "",
      text: "Reduce the risk of ice crystal formation",
      why: dedent``,
    },
    {
      subject: "",
      text: "Reduce the risk of ice crystal formation",
      why: dedent`
        waxing of jet fuel describe the transition of jet fuel into a partially 
        crystalline state in low temperatures
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        Increase viscosity at high temperatures
      `,
      why: dedent``,
    },
    {
      text: dedent`
        Enhance combustion temperature
      `,
      why: dedent``,
    },
    {
      text: dedent`
        Increase the freezing point when operating in low temperatures
      `,
      why: dedent`
        Not increasing but decreasing the freezing point would be correct.
      `,
    },
    {
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
          subject: "",
          text: "increases the risk of Carburettor Icing",
          why: dedent``,
        },
        {
          subject: "",
          text: "increases the risk of Engine Fire",
          why: dedent``,
        },
        {
          subject: "",
          text: "increases the risk of Carburettor Icing",
          why: dedent``,
        },
      ],
      otherOptions: [
        {
          text: dedent` increases Manifold pressure`,
          why: dedent`
          it will decrease the maximum MAP since detonation will occur at a 
          lower pressure
        `,
        },
        {
          text: dedent`lowers the risk of Carburettor Icing`,
          why: dedent``,
        },
        {
          text: dedent`lowers the risk of Engine Fire`,
          why: dedent`
          
        `,
        },
        {
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
      subject: ["boost pump", "centrifugal boost pump"],
      text: dedent`
        To pressurize the fuel system so that fuel reaches the engines.
      `,
      why: dedent`
        Boost pump / centrifugal boost pump
      `,
    },
    {
      subject: ["pressure valves", "relief valves"],
      text: dedent`
        To prevent the accumulation of excessive pressure in the fuel system.
      `,
      why: dedent`
        Pressure valves / relief valves
      `,
    },
    {
      subject: ["filter", "strainer"],
      text: dedent`
        To remove solid particles that could otherwise damage the fuel system.
      `,
      why: dedent`
        Filters / Strainers
      `,
    },
    {
      subject: "ventilation system",
      text: dedent`
        To prevent the creation of low pressure or excessive overpressure 
        in the tank.
      `,
      why: dedent`Ventilation system`,
    },
    {
      subject: "sump",
      text: dedent`
        To provide a single point in the fuel tank where fuel accumulates as 
        the tank empties.
      `,
      why: dedent``,
    },
    {
      subject: "drain valves",
      text: dedent`
        To take allow the sampling of fuel and the emptying of the tanks for
        maintenance.
      `,
      why: dedent`Drain valves`,
    },
    {
      subject: ["fuel dump system", "jettison system"],
      text: dedent`
        To allow for rapid fuel dumping in the case of emergency landing with an
        excessive landing mass.
      `,
      why: dedent`Fuel dump system / jettison system`,
    },
    {
      subject: ["feed-box"],
      text: dedent`
        To increase the fuel level at the boost pump location.
      `,
      why: dedent`Fuel dump system / jettison system`,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        To prevent fuel freezing during flight in icing conditions.
      `,
      why: dedent``,
    },
    {
      text: dedent`
        To detect particles and contaminants that could damage the engine.
      `,
      why: dedent``,
    },
    {
      text: dedent`
        It decreases the fuel level at the boost pump location and ventilates 
        the tank during refuelling.
      `,
      why: dedent``,
    },
    {
      why: "",
      text: "It distributes the fuel to the various tanks during refuelling.",
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
      subject: "wet wing aircraft wing tanks",
      text: ["Integral tanks"],
      why: dedent`used in wet wing aircraft wing tanks`,
    },
    {
      subject: "dry wing aircraft wing tanks",
      text: ["Rigid tanks", "Drum tanks"],
      why: dedent`used in dry wing aircraft wing tanks`,
    },
    {
      subject: "wing tips to store additional fuel",
      text: ["Tip tanks"],
      why: dedent`used in wing tips to store additional fuel`,
    },
  ],
  otherOptions: [
    {
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
      subject: ["Baffle valves", "baffle check valves"],
      text: "Prevent fuel movement to the wing tips",
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: "Close the vent lines in case of turbulence",
      why: "",
    },
    {
      text: "Prevent positive buildup inside the tank",
      why: "",
    },
    {
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
      subject: "",
      text: dedent`20 to 100 PSI`,
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: dedent`5 to 20 PSI`,
      why: dedent``,
    },
    {
      text: dedent`1 to 5 PSI`,
      why: dedent``,
    },
    {
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
      text: dedent`measurements alone`,
      why: dedent`
        although this is commonly done in small aircraft, it's too unreliable 
        for large aircraft with significant temperature operational ranges
      `,
    },
    {
      text: dedent`
        measurements from the dipstick and the fuel's specific gravity.
      `,
      why: dedent``,
    },
    {
      text: dedent`
        measurements from the dipstick and the current OAT.
      `,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const QT8SI2VBBQ = questionOneCorrect({
  id: "QT8SI2VBBQ",
  version: 1,
  learningObjectives: ["021.08.02.02.010"],
  question: () => dedent`
    Concerning the fuel system high-pressure shut-off valve (HPSOV) 
    of a gas turbine engine...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        ignition is activated before fuel is delivered by the HPSOV to the 
        fuel nozzles.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        the HPSOV is mounted in the wing front spar near the pylon.`,
    },
    {
      why: "",
      text: dedent`
        the HPSOV is located between the HP fuel pump and the fuel 
        control unit.
      `,
    },
    {
      why: "",
      text: dedent`
        manual HPSOV control from the cockpit is not possible with 
        FADEC equipped engines.
      `,
    },
  ],
  explanation: dedent``,
});
