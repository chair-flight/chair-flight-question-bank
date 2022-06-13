import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";
import { questionOneTwo } from "./base/questionOneTwo";

export const LAIVWRGDXF = questionOneCorrect({
  id: "LAIVWRGDXF",
  version: 1,
  learningObjectives: ["021.05.04.01.01"],
  question: (subject) => dedent`
    Flight by wire systems. Which statement is correct?
  `,
  correctOptions: [
    {
      subject: "",
      text: "PCUs are operated by analogue signals",
      why: dedent``,
    },
    {
      subject: "",
      text: "PCUs operate an hydraulic actuator",
      why: dedent``,
    },
    {
      subject: "",
      text: "ACEs are operated by digital signals",
      why: dedent``,
    },
    {
      subject: "",
      text: "ACEs convert digital signals into analogue signals",
      why: dedent``,
    },
    {
      subject: "",
      text: "ACEs operate the PCU using an analogue signal",
      why: dedent``,
    },
    {
      subject: "",
      text: "PFCs send digital signals to the ACE",
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: "PCUs covert digital signals into analogue signals",
      why: "",
    },
    {
      text: "PCUs covert digital signals into hydraulic actuator movements",
      why: "",
    },
    {
      text: "Control wires feed pilot control movements into the PCUs",
      why: "",
    },
    {
      text: "ACEs convert analogue signals into digital signals",
      why: "",
    },
    {
      text: "ACEs convert digital signals into hydraulic actuator movements",
      why: "",
    },
    {
      text: "Flight controls are connected to control surfaces directly",
      why: "",
    },
  ],
  explanation: dedent`
  `,
});

export const QVGG8YODIU = questionOneCorrect({
  id: "QVGG8YODIU",
  version: 1,
  learningObjectives: ["021.05.04.01.02"],
  question: () => dedent`
    What is an advantage of a FBW system compared with a conventional 
    flight control system?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "Weight saving",
    },
    {
      subject: "",
      why: "",
      text: "Reduced pilot workload",
    },
    {
      subject: "",
      why: "",
      text: "Flight envelope protection",
    },
  ],
  otherOptions: [
    {
      why: "The aerodynamic characteristics of the aircraft are not changed",
      text: "Flight envelope exceedance",
    },
    {
      why: "The aerodynamic characteristics of the aircraft are not changed",
      text: "Profile drag reduction",
    },
    {
      why: "The aerodynamic characteristics of the aircraft are not changed",
      text: "Mach number reduction",
    },
  ],
  explanation: dedent`
    Advantages of fly by wire system:
    
    - weight saving; 
    - reduced pilot workload;
    - flight-envelope protection.
  `,
});

export const C470WY82 = questionOneCorrect({
  id: "C470WY82",
  version: 1,
  learningObjectives: [
    "021.05.01.02.01",
    "021.05.01.03.01",
    "021.05.01.03.02.02",
  ],
  question: (subject) => dedent`
    What is the basic principle of a fully ${subject} flight control system?
  `,
  correctOptions: [
    {
      subject: "manual",
      text: dedent`
        The flight control surfaces are connected to the flight deck controls 
        by means  of mechanical links only.
      `,
      why: dedent`Definition of fully manual flight control system`,
    },
    {
      subject: "powered",
      text: dedent`
        The flight control surfaces are not connected to the flight deck 
        controls by any mechanical means.
      `,
      why: dedent`Definition of fully automatic flight control system`,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        A system that is an irreversible system because there is no flight deck 
        flight control feedback when a flight control surface is in motion.
      `,
      why: dedent`
        A Fully automatic control system may provide feedback provided a Q-feel
        unit is installed.
      `,
    },
    {
      text: dedent`
        A system that is manually operated by the pilot by means of the flight 
        control elements and is powered by an hydraulic system.
      `,
      why: dedent``,
    },
    {
      text: dedent`
        The deflection angle of the flight control surface will vary with 
        airspeed, therefore, the flight control forces are constant.
      `,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const PPZM66TKNR = questionOneCorrect({
  id: "PPZM66TKNR",
  version: 1,
  learningObjectives: ["021.05.01.03.02", "021.05.01.03.01", "021.05.01.02.01"],
  question: (subject: string) => dedent`
    A flight control is said to be  ${subject} when...
  `,
  correctOptions: [
    {
      subject: "irreversible",
      text: dedent`
        There is no feedback to the pilot's controls of the aerodynamic forces
        acting on the control surface
      `,
      why: dedent`Definition of irreversible system`,
    },
    {
      subject: "reversible",
      text: dedent`
        There is feedback to the pilot's controls of the aerodynamic forces 
        acting on the control surface
      `,
      why: dedent`Definition of reversible system`,
    },
  ],
  otherOptions: [
    {
      text: "There is a need to have an artificial feel system",
      why: dedent`
        **Caution**: This is not the definition of an irreversible system.

        An irreversible system may not have an artificial feel system 
        (i.e.: Airbus side stick)
      `,
    },
    {
      text: dedent`
        The flight control system has an alternate means of control in case of a
        control jam
      `,
      why: dedent``,
    },
    {
      text: dedent`
        The pilot does not feel any force when moving the flight control surface 
        in flight
      `,
      why: dedent`
      **Caution**: This is not the definition of an irreversible system.

      An irreversible system may have an artificial feeling system installed
      in parallel with the control system.
    `,
    },
  ],
  explanation: dedent`
  `,
});

export const QOMFNZ202J = questionOneCorrect({
  id: "QOMFNZ202J",
  version: 1,
  learningObjectives: ["021.05.01.03.02"],
  question: (subject: string) => dedent`
    Trimming of aileron and rudder in an ${subject} flight control system...
  `,
  correctOptions: [
    {
      subject: "irreversible",
      text: dedent`
        is achieved by adjusting the "zero force point" of the feel system
      `,
      why: dedent``,
    },
    {
      subject: "reversible",
      text: dedent`
        is achieved by adjusting the neutral point of the flight control 
        actuator
      `,
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: "is not possible",
      why: dedent``,
    },
    {
      text: "is not necessary",
      why: dedent``,
    },
  ],
  explanation: dedent`
    If you have ever flown a small aircraft, you are used to reversible flight 
    controls and how they are trimmed. You were probably thought to hold the 
    control yoke in the position that maintains straight and level flight, and 
    then adjust the trim until you no longer have to do force to maintain the 
    yoke in that position. You have "adjusted the neutral point of the flight 
    control actuator".

    An irreversible control system is different. It's basically the same 
    experience you get with a cheap joystick playing flight simulator. The stick 
    will always center in the same position, but you can still trim the 
    aircraft, but the "zero force point" of the feel system will change.
  `,
});

export const WPE84BPS20 = mergeQuestionVariants(
  {
    id: "WPE84BPS20",
    version: 1,
    learningObjectives: [
      "021.05.02.01.01",
      "021.05.01.01.01",
      "021.05.01.01.02",
      "021.05.02.01.02",
    ],
    primaryFlightControls: [
      "Aileron",
      "Rudder",
      "Elevator",
      "Flaperon",
      "Roll Spoilers",
    ],
    secondaryFlightControls: [
      "Trimmable Stabilizer",
      "Speed Brake",
      "Flaps",
      "Slats",
      "Lift augmentation devices",
    ],
    question: (subject: string) => (options: string) =>
      dedent`
    Which of the following are ${subject} Flight Controls?

    ${options},
  `,
    explanation: dedent`
    Primary flight controls:

    - Aileron
    - Rudder
    - Elevator
    - Flaperon
    - Roll Spoilers

    Secondary flight controls:
     
    - Trimmable Stabilizer
    - Speed Brake
    - Flaps
    - Slats
    - Lift augmentation devices 
  `,
  },
  (props) =>
    questionMultipleCorrect({
      ...props,
      question: props.question("primary"),
      statements: [
        ...props.primaryFlightControls.map((correct) => ({ correct })),
        ...props.secondaryFlightControls.map((wrong) => ({ wrong })),
      ],
    }),
  (props) =>
    questionMultipleCorrect({
      ...props,
      question: props.question("secondary"),
      statements: [
        ...props.secondaryFlightControls.map((correct) => ({ correct })),
        ...props.primaryFlightControls.map((wrong) => ({ wrong })),
      ],
    })
);

export const N2HGF03ISU = questionOneCorrect({
  id: "N2HGF03ISU",
  version: 1,
  learningObjectives: ["021.05.02.01.02"],
  question: () => dedent`What is the purpose of a trim tab?`,
  correctOptions: [
    {
      subject: "",
      text: dedent`
        Reduce hinge moments, with the side-effect of reducing control surface
        efficiency
      `,
      why: dedent``,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        Increase hinge moments, with the side-effect of reducing control surface
        efficiency
      `,
      why: dedent``,
    },
    {
      text: dedent`
        Reduce hinge moments, with the side-effect of increasing control surface
        efficiency
      `,
      why: dedent``,
    },
    {
      text: dedent`
        Increase hinge moments, with the side-effect of increasing control 
        surface efficiency
      `,
      why: dedent``,
    },
  ],
  explanation: dedent`
  `,
});

export const BFGC5S8IHG = questionOneTwo({
  id: "BFGC5S8IHG",
  version: 1,
  question: (options) => dedent`
    Which of these statements about rudder limiting are correct?

    ${options}
  `,
  learningObjectives: ["021.05.01.05.05"],
  statementPairs: [
    {
      correct: [
        dedent`
          A rudder ratio changer system reduces the rudder deflection for a 
          given pedal deflection as the IAS increases
        `,
        dedent`
          A rudder ratio changer system increases the rudder deflection for a 
          given pedal deflection as the IAS decreases
        `,
      ],
      wrong: [
        dedent`
          A rudder ratio changer system reduces the rudder deflection for a 
          given pedal deflection as the IAS decreases
        `,
        dedent`
          A rudder ratio changer system increases the rudder deflection for a 
          given pedal deflection as the IAS increases
        `,
        dedent`
          A rudder ratio changer system limits both rudder and rudder pedal 
          deflection as the IAS increases.
        `,
      ],
    },
    {
      correct: [
        dedent`
          A variable stop system limits both rudder and rudder pedal deflection 
          as the IAS increases.
        `,
      ],
      wrong: [
        dedent`
          A variable stop system limits both rudder and rudder pedal deflection 
          as the IAS decreases.
        `,
        dedent`
          A variable stop system reduces the rudder deflection for a given pedal
          deflection as the IAS increases.
        `,
      ],
    },
  ],
  explanation: dedent`
  
  `,
});

export const ZF5WXIL87B = questionOneTwo({
  id: "ZF5WXIL87B",
  version: 1,
  learningObjectives: ["021.05.01.05.04"],
  statementPairs: [
    {
      correct: [
        dedent`Manual Flight Controls should have a gust lock.`,
        dedent`Reversible Flight Controls should have a gust lock.`,
      ],
      wrong: [
        dedent`Manual Flight Controls do not need to have a gust lock.`,
        dedent`Reversible Flight Controls do not need to have a gust lock.`,
      ],
    },
    {
      correct: [
        dedent`Irreversible Flight Controls do not need to have a gust lock.`,
      ],
      wrong: [dedent`Irreversible Flight Controls must have a gust lock.`],
    },
    {
      correct: dedent`
        There should be suitable design precautions to prevent flight with the 
        gust lock engaged.`,
    },
    {
      wrong: dedent`
        A gust lock can be used in flight to reduce the effects of turbulence.
      `,
    },
  ],
  explanation: dedent`
    Summary of correct statements:

    - Reversible / Manual flight controls **Need a gust lock**
    - Irreversible / Fully powered controls **Need not a gust lock***
    - There should be suitable design precautions to prevent flight with the 
      gust lock engaged.
    - A gust lock can't be used in flight.
    
    * In irreversible systems, a gust lock is not needed since the hydraulic 
    actuator is able to lock itself in the failed or neutral position.
  `,
});

export const G5SGAS2QF0 = questionOneCorrect({
  id: "G5SGAS2QF0",
  version: 1,
  learningObjectives: ["021.05.02.01.06", "021.05.02.01.07", "021.05.02.01.08"],
  question: (subject) => dedent`
    What best describes a ${subject} device?
  `,
  correctOptions: [
    {
      subject: ["flap load relief", "flap load-limiting protection"],
      text: dedent`
        A system that retracts the flaps when the airspeed is becoming too high 
        and exceeds operation limit
      `,
      why: dedent`
      `,
    },
    {
      subject: ["auto slat"],
      text: dedent`
        A system that extends slats automatically when the angle of attack 
        becomes too high
      `,
      why: dedent`
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        A system that extends flaps automatically when the ange of attack 
        becomes too high
      `,
      why: dedent`
      `,
    },
    {
      text: dedent`
        A system that retracts flaps automatically when the ange of attack 
        becomes too high
      `,
      why: dedent`
      `,
    },
    {
      text: dedent`
        A system that retracts slats automatically when the ange of attack 
        becomes too high
      `,
      why: dedent`
      `,
    },
    {
      text: dedent`
        A system that retracts slats automatically when the airspeed is becoming 
        too high and exceeds operation limit
      `,
      why: dedent`
      `,
    },
  ],
  explanation: dedent`
  `,
});

export const SCBXUGU7W3 = questionOneCorrect({
  id: "SCBXUGU7W3",
  version: 1,
  learningObjectives: ["021.05.02.01.03"],
  question: (subject) => dedent`
    On large transport category aircraft, ${subject} are typically powered
    by....
  `,
  correctOptions: [
    {
      subject: ["trailing edge flaps", "leading edge devices", " slats"],
      text: dedent`
        The Hydraulic system, with an electrical system backup
      `,
      why: dedent`
        True for "trailing edge flaps", "leading edge devices", and " slats".

        These are critical systems whose failure would drastically endanger the 
        safe conduct of a flight
      `,
    },
    {
      subject: ["horizontal stabilizer", "speed brakes"],
      text: dedent`
        The hydraulic system, with no backup system
      `,
      why: dedent`
        True for "horizontal stabilizer" and "speed brakes".

        These systems are not as essential as the other primary and secondary 
        systems. In case of failure, the plane is still flyable.
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`The electrical system, with an Hydraulic backup`,
    },
    {
      text: dedent`The Pneumatic system, with an Hydraulic backup`,
    },
    {
      text: dedent`The Pneumatic system, with an Electrical backup`,
    },
    {
      text: dedent`The Hydraulic system, with a Manual backup`,
    },
    {
      text: dedent`The Hydraulic system, with a Electrical backup`,
    },
  ],
  explanation: dedent`
  `,
});

export const QN0PK15VDM = questionOneCorrect({
  id: "QN0PK15VDM",
  version: 1,
  learningObjectives: ["021.05.04.01.02", "021.05.04.01.05"],
  question: (subject) => dedent`
    Which of the following protections is available ona fly-by-wire control
    system?
  `,
  correctOptions: [
    { text: "Excessive g load" },
    { text: "Stall" },
    { text: "Excessive Bank Angle" },
    { text: "Excessive Pitch Angle" },
    { text: "Overspeed" },
  ],
  otherOptions: [
    { text: "Ground obstacle" },
    { text: "Other aircraft collision" },
    { text: "Restricted airspeed " },
  ],
  explanation: dedent`
  `,
});

export const QNVAK15VDM = questionOneCorrect({
  id: "QNVAK15VDM",
  version: 1,
  learningObjectives: ["021.05.01.03.02"],
  question: (subject) => dedent`
    After turning off all systems in your aircraft you notice the rudder is 
    fully deflected to the right, but the rudder pedals are centered. Which type
    of control system does your aircraft have?
  `,
  correctOptions: [
    {
      text: ["Irreversible controls", "Fully powered controls"],
    },
  ],
  otherOptions: [
    {
      text: ["Reversible controls", "Fully Manual controls"],
    },
    {
      text: "Power assisted controls",
    },
    {
      text: dedent`
        It's impossible to say as all types of controls behave the same after 
        power down.
      `,
    },
  ],
  explanation: dedent`
  `,
});

export const AVM46F35MB = questionOneCorrect({
  id: "AVM46F35MB",
  version: 1,
  learningObjectives: ["021.05.02.01.02"],
  question: [
    () => dedent`
      Air brakes usage is limited by a maximum operating air speed. Why is such
      a limit imposed?
    `,
    () => dedent`
      Spoiler usage is limited by a maximum operating air speed. Why is such
      a limit imposed?
    `,
  ],
  correctOptions: [
    {
      text: dedent`
        To prevent structural damage to the spoilers caused by excessive 
        dynamic pressure
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        To prevent excessive yawing moments caused by asymmetrical spoiler
        deployment
      `,
    },
    {
      text: dedent`
        To avoid longitudinal instability at high speeds
      `,
    },
    {
      text: dedent`
        Because braking at very high speeds is not very fuel efficient.
      `,
    },
  ],
  explanation: dedent`
  `,
});
