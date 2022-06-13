import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";
import { questionOneTwo } from "./base/questionOneTwo";

export const QPEZPNSAVN = questionOneCorrect({
  id: "QPEZPNSAVN",
  version: 1,
  learningObjectives: ["021.04.01.02.01", "021.04.01.02.09"],
  question: (subject) => dedent`
    In a commercial transport aeroplane the landing gear system is ${subject} 
    by...
  `,
  correctOptions: [
    {
      subject: "usually operated",
      why: "",
      text: "an hydraulic system.",
    },
    {
      subject: "operated in emergency situations",
      why: "System used as a method for emergency gear extension",
      text: [
        "a gravity free fall system",
        "a pneumatic system.",
        "a mechanical system.",
      ],
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "an electric system.",
    },
    {
      why: "",
      text: "a magnetic system.",
    },
  ],
  explanation: dedent``,
});

export const QPEZPNSAVM = questionOneCorrect({
  id: "QPEZPNSAVM",
  version: 1,
  learningObjectives: ["021.04.01.02.01"],
  question: (subject) => dedent`
    The ${subject} function on a landing gear shock absorber used on large
    aircraft is provided by...
  `,
  correctOptions: [
    {
      subject: "damping",
      why: "Provides the damping function",
      text: "Hydraulically fluid.",
    },
    {
      subject: "spring",
      why: "Provides the spring function",
      text: "Nitrogen.",
    },
  ],
  otherOptions: [
    {
      why: dedent`
      Springs provide damping function in cars but are not suitable for the
      loads experimented in aircraft
    `,
      text: "springs.",
    },
    {
      why: "",
      text: "Water.",
    },
    {
      why: "",
      text: "Halon.",
    },
    {
      why: "",
      text: "Oxigen.",
    },
  ],
  explanation: dedent`
    A landing gear system contains an oleo-strut, a piston filled with an 
    incompressible hydraulic fluid and air. 
    
    Air, being a compressible fluid provides a spring function. When you 
    compress the landing gear strut, the air is compressed, but it wants to 
    expand back to its original state providing a counter force, exactly like a 
    spring. In an idealized world this is would be an adiabatic process and all
    the energy that is placed in the spring is converted back into force. 

    Hydraulic fluid, being an incompressible fluid, is forced to move through a
    very short diaphragm orifice a process that due to friction results in a
    transformation of energy onto heat. In other words, it dissipates energy
    exactly like a damper. 
  `,
});

export const QBMUUHFR4T = questionOneCorrect({
  id: "QBMUUHFR4T",
  version: 1,
  learningObjectives: ["021.04.02.01.01"],
  question: () => dedent`
    Which statements about rudder pedal nose wheel steering is correct?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        Rudder pedal nose wheel steering provides a smaller deflection of the 
        nose wheel than the hand wheel steering (tiller).
      `,
    },
    {
      subject: "",
      why: "",
      text: dedent`
        When testing the rudder function during taxi, additional pilot input
        is needed to prevent nose wheel steering.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        Rudder pedal nose wheel steering functions on the ground as well as in 
        the air.
      `,
    },
    {
      why: "",
      text: dedent`
        Rudder pedal nose wheel steering does not function during take-off.
      `,
    },
    {
      why: "",
      text: dedent`
        Rudder pedal nose wheel steering provides a larger deflection of the 
        nose wheel as manual or tiller control.
      `,
    },
  ],
  explanation: dedent``,
});

export const QSXHKE4HRU = questionOneCorrect({
  id: "QSXHKE4HRU",
  version: 1,
  learningObjectives: ["021.04.02.01.05"],
  question: () => dedent`
    Select the option that best describes "nose-wheel shimmy"
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        An oscillatory lateral movement of the nose-wheel about the longitudinal 
        axis of the aircraft when the nose wheel is in contact with the ground.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        An oscillatory longitudinal movement of the nose-wheel about the lateral 
        axis of the aircraft caused by the landing gear being lowered prior to 
        landing or retracted after take-off.
      `,
    },
    {
      why: "",
      text: dedent`
        An oscillatory longitudinal movement of the nose-wheel about the lateral 
        axis of the aircraft when the nose wheel is in contact with the ground`,
    },
    {
      why: "",
      text: dedent`
        An oscillatory lateral movement of the nose-wheel about the longitudinal 
        axis of the aircraft caused by the landing gear being lowered prior to 
        landing or retracted after take-off.
      `,
    },
  ],
  explanation: dedent``,
});

export const QOKLUX0MEE = questionOneCorrect({
  id: "QOKLUX0MEE",
  version: 1,
  learningObjectives: ["021.04.04.01.03"],
  question: () => dedent`
    Thermal plugs are installed...
  `,
  correctOptions: [
    {
      subject: "",
      why: dedent`
        Thermal plugs allow for tires to deflate when reaching critical 
        temperatures preventing an explosion.
      `,
      text: ["on wheel hubs.", "on the wheels"],
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "on cabin windows.",
    },
    {
      why: "",
      text: "in fire warning systems.",
    },
    {
      why: "",
      text: "in cargo compartments.",
    },
    {
      why: "",
      text: "in landing gear axels.",
    },
    {
      why: "",
      text: "in hydraulic dampers.",
    },
    {
      why: "Plugs are installed on the wheels themselves, not the tyres!",
      text: "in tyres.",
    },
  ],
  explanation: dedent``,
});

export const QZNCPQHCBC = questionOneCorrect({
  id: "QZNCPQHCBC",
  version: 1,
  learningObjectives: ["021.04.04.01.02"],
  question: () => dedent`
    What is tyre creep?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        The circumferential movement of the tyre in relation to the wheel rim.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        A gradual decrease in the circumferential movement of the tyre due to 
        wear.
      `,
    },
    {
      why: "",
      text: dedent`
        The decrease in inflation pressure due to increase in ambient 
        temperature.
      `,
    },
    {
      why: "",
      text: dedent`
        The increase in inflation pressure due to decrease in ambient 
        temperature.
      `,
    },
  ],
  explanation: dedent``,
});

export const MSA1Z4BVY3 = mergeQuestionVariants(
  {
    id: "MSA1Z4BVY3",
    version: 1,
    learningObjectives: ["021.04.01.02.01", "021.04.01.02.02"],
    explanation: "",
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
      Over-centre mechanisms in a landing gear are used to...
    `,
      correctOptions: [
        {
          subject: "",
          text: dedent`Lock the landing gear in the up or down positions`,
          why: dedent``,
        },
      ],
      otherOptions: [
        {
          text: dedent`Lock the landing gear in the down position only.`,
          why: dedent``,
        },
        {
          text: dedent`Lock the landing gear in the up position only.`,
          why: dedent``,
        },
        {
          text: dedent`
          Ensure the nose-wheel is positioned fore and aft prior to retraction.
        `,
          why: dedent``,
        },
      ],
    }),
  (props) =>
    questionOneTwo({
      ...props,
      question: (options) => dedent`
      Which of these statements are correct about the function of  the over 
      centre mechanisms in landing gear?

      ${options}
    `,
      statementPairs: [
        {
          correct: "Lock the landing gear in the up or down positions",
          wrong: [
            "Lock the landing gear in the up position only",
            "Lock the landing gear in the down position only",
          ],
        },
        {
          wrong: dedent`
          Ensure the nose-wheel is positioned fore and aft prior to retraction
        `,
        },
      ],
    })
);

export const ZCD1Z4BVY2 = questionOneCorrect({
  id: "ZCD1Z4BVY2",
  version: 1,
  learningObjectives: ["021.04.01.02.05"],
  question: (subject) => dedent`
    What state is indicated when ${subject} on the landing gear position
    indicator
  `,
  correctOptions: [
    {
      subject: "all Green lights are lit",
      text: dedent`Landing gear in the down position and locked.`,
      why: dedent`All Green lights are lit`,
    },
    {
      subject: "at least one red light is lit",
      text: dedent`
        The corresponding landing gear system is in a transition state
      `,
      why: dedent`At least one red light is lit`,
    },
    {
      subject: "no lights are lit",
      text: dedent`Landing gear is in the up position and locked.`,
      why: dedent`No lights are lit.`,
    },
  ],
  otherOptions: [
    {
      text: dedent`Landing gear is malfunctioning`,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const QLXJDSDSCO = questionOneCorrect({
  id: "QLXJDSDSCO",
  version: 1,
  learningObjectives: ["021.04.01.02.01", "021.04.01.02.02"],
  question: () => dedent`
    Landing gear torsion links are used to..
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "prevent rotation of the landing gear piston in the oleo strut.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "absorb the lateral stresses to which the gear is subjected.",
    },
    {
      why: "",
      text: "control the rate of oleo strut recoil.",
    },
    {
      why: "",
      text: "prevent extension of the oleo strut when the gear is retracted.",
    },
  ],
  explanation: dedent``,
});

export const BLL8DZRLQY = questionOneCorrect({
  id: "BLL8DZRLQY",
  version: 1,
  learningObjectives: [""],
  question: (subject) => dedent`
    When an emergency nitrogen bottle is used for the landing gear...
  `,
  correctOptions: [
    {
      subject: "",
      text: "It lowers the landing gear but the doors remain open",
      why: dedent`
        Pneumatic emergency systems typically only perform the crucial operation 
        of locking the gear down. All other luxuries are not performed
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        it lowers the landing gear and subsequently closes the door
      `,
      why: dedent``,
    },
    {
      text: dedent`
        it retracts the landing gear
      `,
      why: dedent``,
    },
    {
      text: dedent`
        it lowers or retracts the landing gear depending on the setting in the
        cockpit
      `,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const JU456HPUIB = mergeQuestionVariants(
  {
    id: "JU456HPUIB",
    version: 1,
    learningObjectives: ["021.04.01.02.09"],
    explanation: dedent`
    `,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      The backup system of a landing gear is of the free fall type. What must be
      moved first using mechanic or electronic means, before the gear can fall
      under their own weight?
    `,
      correctOptions: [
        {
          subject: "",
          text: dedent`
          The up lock mechanism
        `,
          why: dedent`
          This is technically incorrect, but its the only possibly 
          correct answer.
        `,
        },
      ],
      otherOptions: [
        {
          text: dedent`
          The landing gear lever must be selected down
        `,
          why: dedent`
          The backup system bypasses the normal system completely. Usually the 
          emergency process will include a step to put the landing gear leaver 
          in the down position, but it's not the first step in the process.
        `,
        },
        {
          text: dedent`
          The landing gear actuators
        `,
          why: dedent`
        `,
        },
        {
          text: dedent`
          The selector valve
        `,
          why: dedent`
        `,
        },
      ],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
      If the back-up system of extending a landing gear is of the free-fall type,
      what is moved with mechanical power?
    `,
      correctOptions: [
        {
          subject: "",
          text: dedent`
          The cut-out valve
        `,
          why: dedent`
          In a free fall mechanism the entire landing gear movement is powered 
          by gravity. The exception is the cut out valve that allows to release 
          hydraulic pressure keeping the system in place, which is operated 
          mechanically. Usually by a valve in the cockpit
        `,
        },
      ],
      otherOptions: [
        {
          text: dedent`
          The up lock mechanism
        `,
          why: dedent`
          the up lock mechanism is under hydraulic pressure. It is operated 
          indirectly when this pressure is removed by opening the cut out valve
        `,
        },
        {
          text: dedent`
          The landing gear actuators
        `,
          why: dedent`
        `,
        },
        {
          text: dedent`
          The selector valve
        `,
          why: dedent`
        `,
        },
      ],
    })
);

export const MSA1Z4BVY1 = questionOneCorrect({
  id: "MSA1Z4BVY1",
  version: 1,
  learningObjectives: ["021.04.01.02.06"],
  question: (subject) => dedent`
    When does the anti-retract latch blocks the landing gear operation?
  `,
  correctOptions: [
    {
      subject: "",
      text: dedent`With the aircraft on the ground`,
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: dedent`When the IAS is too low for gear retraction`,
      why: dedent``,
    },
    {
      text: dedent`When the IAS is too high for gear retraction`,
      why: dedent``,
    },
    {
      text: dedent`
        When there is a hydraulic failure and the gear is the locked down 
        position
      `,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const EDPTV2Y3SJ = mergeQuestionVariants(
  {
    id: "EDPTV2Y3SJ",
    version: 1,
    learningObjectives: [
      "021.04.03.04.01",
      "021.04.03.04.02",
      "021.04.03.04.04",
    ],
    explanation: dedent`
    `,
    correctOptions: [
      {
        text: dedent`
          Without pilot interference an autobrake system continues to operate
          until standstill
        `,
        why: dedent`
          This is true, and required by technical requirements for type 
          certification.
        `,
      },
      {
        text: dedent`
          During landing and RTO, an autobrake keeps operating until the pilot 
          presses the brake pedals
        `,
        why: dedent``,
      },
      {
        text: [
          dedent`
            During landing an autobrake keeps operating when reverse thrust is 
            selected
          `,
          dedent`
            It will remain active until the aircraft comes to a stop, unless
            disconnected by the pilot
          `,
        ],
        why: dedent`
        `,
      },
      {
        text: dedent`
          When using the lowest autobrake setting and reverse thrust, the brake
          temperature will be reduced.
        `,
        why: dedent`
        `,
      },
      {
        text: dedent`
          An autobrake gives constant deceleration on dry runway
        `,
        why: dedent`
          The autobrake system maintains a pre-selected deceleration rate, 
          adapting the brake force as the plane slows down, or as other means 
          of breaking become active (i.e: thrust reverser). Do not confuse 
          with RTO mode where all the available brake pressure is applied!
        `,
      },
    ],
    otherOptions: [
      {
        text: dedent`
          In general, if the autobrake system is inoperative, take-off is 
          forbidden as manual braking will never achieve the brake rate of the 
          autobrake system.
        `,
        why: dedent`
          Although the second part of the statement is correct, an INOP 
          autobrake just increases the Take off distance required. If enough 
          runway is available, take off is still allowed.
        `,
      },
      {
        text: dedent`
          An armed autobrake system will always try to achieve the selected 
          deceleration level directly after main wheel touchdown
        `,
        why: dedent`
          Not correct since in most aircraft the autobrake engages a couple of 
          seconds after touch down
        `,
      },
      {
        text: dedent`
          Manual braking while taxing will disarm the RTO mode
        `,
        why: dedent`
          RTO is only disabled if braking occurs above a relatively high speed 
          (90kts for a 737-800).
        `,
      },
      {
        text: dedent`
          For a given touchdown speed on a dry runway without the use of 
          reverse thrust, the stopping distance solely depends on the selected 
          ABS setting and weight of the aeroplane.
        `,
        why: dedent`
          Not correct since it also depends on pressure altitude, temperature, 
          and a myriad of other factors
        `,
      },
      {
        text: dedent`
          A take-off warning will be generated if the autobrake system has not 
          been armed.
        `,
        why: dedent`
          This is not necessarily true, and depends a lot on aircraft type.
        `,
      },
      {
        text: dedent`
          In most aircraft, there is an option in the autobrake to select the 
          exact landing distance.
        `,
        why: dedent`
          Autobrake control determines the constant deceleration profile 
          of the aircraft, not the exact distance as this depends on other
          factors like the touch down speed and point.
        `,
      },
      {
        text: dedent`
          An autobrake can be used if anti-skid is inoperative
        `,
        why: dedent`
          Aerobraking with INOP anti-skid would result in a hydroplaning 
          aircraft for wet runways which is not a good idea.
        `,
      },
      {
        text: dedent`
          An autobrake will always stop the aeroplane within the shortest 
          possible distance
        `,
        why: dedent`
          This is not correct, as the autobrake maintains a constant deceleration 
          ratio. Only in RTO mode is the deceleration rate maximum
        `,
      },
      {
        text: dedent`
          If used at low setting, using a thrust reverser will have no effect.
        `,
      },
      {
        text: dedent`
          It is disconnected automatically if thrust reversers are deployed.
        `,
      },
    ],
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
        The correct statement in relation to the autobrake system is...
      `,
    }),
  (props) =>
    questionOneTwo({
      ...props,
      question: (options) => dedent`
        Which of these statements in relation to the autobrake system are 
        correct?

        ${options}
      `,
      statementPairs: [
        ...props.correctOptions.map(({ text }) => ({
          correct: text,
        })),
        ...props.otherOptions.map(({ text }) => ({
          wrong: text,
        })),
      ],
    }),
  (props) =>
    questionMultipleCorrect({
      ...props,
      question: (options) => dedent`
        Which of these statements in relation to the autobrake system are 
        correct?

        ${options}
      `,
      statements: [
        ...props.correctOptions.map(({ text }) => ({
          correct: text,
        })),
        ...props.otherOptions.map(({ text }) => ({
          wrong: text,
        })),
      ],
    })
);

/** TODO Finish implementation :) */
const RESK47GB58 = mergeQuestionVariants(
  {
    id: "RESK47GB58",
    version: 1,
    learningObjectives: ["021.04.03.04.01"],
    explanation: dedent`
  `,
    correctOptions: [
      {
        text: dedent`
        With RTO inoperable, take off might not be allowed because the minimum 
        break distance with manual braking is much longer.
      `,
        why: "",
      },
      {
        text: dedent`
        After RTO braking action, the brakes block the wheel rims.
      `,
        why: dedent`
      `,
      },
    ],
    wrongOptions: [
      {
        text: [
          dedent`
          After RTO braking action, the hydraulic pressure is reduced to zero
        `,
          dedent`
          After RTO braking action, The brake pressure is released.
        `,
        ],
        why: dedent`
        After RTO braking action, brakes remain in the locked position, so 
        pressure remains.
      `,
      },
      {
        text: dedent`
        RTO mode can be used for take-off and Landing
      `,
        why: dedent`
        RTO mode can only be used for take off.
      `,
      },
      {
        text: dedent`
        Manual braking is the most efficient way to decelerate an aircraft
      `,
        why: dedent`
      `,
      },
      {
        text: dedent`
        RTO has a fixed force with which the aircraft must be decelerated
      `,
        why: dedent`
        the RTO applies a fixed hydraulic pressure, but the force that is 
        applied varies with weight on the wheels.
      `,
      },
    ],
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
      The correct statement in relation to the autobrake system in RTO mode 
      is...
    `,
      correctOptions: props.correctOptions,
      otherOptions: props.wrongOptions,
    })
);

export const FIAR77L7GS = questionOneCorrect({
  id: "FIAR77L7GS",
  version: 1,
  learningObjectives: ["021.04.03.04.03"],
  question: (subject) => dedent`
    Assume an autobrake system that is ON and armed. When will the system revert
    to normal anti-skid function?
  `,
  correctOptions: [
    {
      subject: "",
      text: dedent`
        When any of the throttle levers are advanced to take-off thrust
      `,
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: dedent`Once the nose wheel touches the ground`,
      why: dedent``,
    },
    {
      text: dedent`When spoilers are manually deployed`,
      why: dedent``,
    },
    {
      text: dedent`If skidding occurs on any wheel`,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const MBNASF124A = questionMultipleCorrect({
  id: "MBNASF124A",
  learningObjectives: ["021.04.04.01.06"],
  version: 1,
  statements: [
    {
      correct: "Small cuts in the tread surface",
    },
    {
      correct: "A bulge in the sidewall",
    },
    {
      correct: "tread detachment",
    },
    {
      wrong: "Oil spots on the tyre surface",
    },
    {
      wrong: "Uneven tread wear",
    },
  ],
  question: (options) => dedent`
    Which of the following conditions would require tyre replacement before the
    next flight?

    ${options}
  `,
  explanation: dedent`
    Require replacement when...

    - **Small cuts in the tread surface**: tyre cut deepness is hard to 
      evaluate. Any detected cut should result in tyre replacement or repair
    - **A bulge in the sidewall**: Indicates an air leak. 
    - **tread detachment**: Similar to cuts.

    Not a factor

    - **Uneven tread wear**: This is normal so long as the tread wearing remains
      below the maximum wear.
    - **Oil spots on the tyre surface** this indicates a potential issue with 
      the breaking system, or the gear hydraulic strut, but the tyre is not at
      risk.
  `,
});

export const BKF2Q804CL = questionOneCorrect({
  id: "BKF2Q804CL",
  version: 1,
  learningObjectives: ["021.04.04.01.02"],
  question: (subject) => dedent`
    An under-inflated tyre will ...
  `,
  correctOptions: [
    { text: "be prone to creep" },
    { text: "experience increased wear at the shoulders" },
  ],
  otherOptions: [
    {
      text: "be prone to viscous water planning",
      why: "",
    },
    {
      text: "have an increased hydroplanning speed",
      why: "The hydroplanning speed increases with tyre pressure",
    },
    {
      text: "experience reduced wear at the shoulders",
      why: "The tendecy is to experience increased wear at the shoulders",
    },
  ],
  explanation: dedent`
  `,
});
