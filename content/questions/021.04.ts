import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
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
