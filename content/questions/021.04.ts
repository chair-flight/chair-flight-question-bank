import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

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
      id: "QPEZPNSAVN-1",
      subject: "usually operated",
      why: "",
      text: "an hydraulic system.",
    },
    {
      id: "QPEZPNSAVN-2",
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
      id: "QPEZPNSAVN-3",
      why: "",
      text: "an electric system.",
    },
    {
      id: "QPEZPNSAVN-4",
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
      id: "QPEZPNSAVN-1",
      subject: "damping",
      why: "Provides the damping function",
      text: "Hydraulically fluid.",
    },
    {
      id: "QPEZPNSAVN-2",
      subject: "spring",
      why: "Provides the spring function",
      text: "Nitrogen.",
    },
  ],
  otherOptions: [
    {
      id: "QPEZPNSAVN-3",
      why: dedent`
      Springs provide damping function in cars but are not suitable for the
      loads experimented in aircraft
    `,
      text: "springs.",
    },
    {
      id: "QPEZPNSAVN-4",
      why: "",
      text: "Water.",
    },
    {
      id: "QPEZPNSAVN-5",
      why: "",
      text: "Halon.",
    },
    {
      id: "QPEZPNSAVN-6",
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
      id: "QBMUUHFR4T-2",
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
      id: "QBMUUHFR4T-0",
      why: "",
      text: dedent`
        Rudder pedal nose wheel steering functions on the ground as well as in 
        the air.
      `,
    },
    {
      id: "QBMUUHFR4T-1",
      why: "",
      text: dedent`
        Rudder pedal nose wheel steering does not function during take-off.
      `,
    },
    {
      id: "QBMUUHFR4T-3",
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
      id: "QSXHKE4HRU-0",
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
      id: "QSXHKE4HRU-1",
      why: "",
      text: dedent`
        An oscillatory longitudinal movement of the nose-wheel about the lateral 
        axis of the aircraft caused by the landing gear being lowered prior to 
        landing or retracted after take-off.
      `,
    },
    {
      id: "QSXHKE4HRU-2",
      why: "",
      text: dedent`
        An oscillatory longitudinal movement of the nose-wheel about the lateral 
        axis of the aircraft when the nose wheel is in contact with the ground`,
    },
    {
      id: "QSXHKE4HRU-3",
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
      id: "QOKLUX0MEE-1",
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
      id: "QOKLUX0MEE-0",
      why: "",
      text: "on cabin windows.",
    },
    {
      id: "QOKLUX0MEE-2",
      why: "",
      text: "in fire warning systems.",
    },
    {
      id: "QOKLUX0MEE-3",
      why: "",
      text: "in cargo compartments.",
    },
    {
      id: "QOKLUX0MEE-4",
      why: "",
      text: "in landing gear axels.",
    },
    {
      id: "QOKLUX0MEE-5",
      why: "",
      text: "in hydraulic dampers.",
    },
    {
      id: "QOKLUX0MEE-6",
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
      id: "QZNCPQHCBC-1",
      subject: "",
      why: "",
      text: dedent`
        The circumferential movement of the tyre in relation to the wheel rim.
      `,
    },
  ],
  otherOptions: [
    {
      id: "QZNCPQHCBC-0",
      why: "",
      text: dedent`
        A gradual decrease in the circumferential movement of the tyre due to 
        wear.
      `,
    },
    {
      id: "QZNCPQHCBC-2",
      why: "",
      text: dedent`
        The decrease in inflation pressure due to increase in ambient 
        temperature.
      `,
    },
    {
      id: "QZNCPQHCBC-3",
      why: "",
      text: dedent`
        The increase in inflation pressure due to decrease in ambient 
        temperature.
      `,
    },
  ],
  explanation: dedent``,
});
