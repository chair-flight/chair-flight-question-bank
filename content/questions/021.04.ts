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
