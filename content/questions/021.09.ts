import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const QNY7QQYIBA = questionOneCorrect({
  id: "QNY7QQYIBA",
  version: 1,
  learningObjectives: ["021.09.04.03.04"],
  question: () => dedent`
    AC generators operated in parallel must have the same:
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "voltage and phase.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "frequency and amperage.",
    },
    {
      why: "",
      text: "voltage and amperage.",
    },
    {
      why: "",
      text: "amperage and kVAR.",
    },
  ],
  explanation: dedent`
    When you run two generators in parallel you want to make sure that energy
    is never flowing from one generator to the other. To achieve this you must
    make sure the voltage is the same at all times for both generators. 
    
    In the case of an AC generator this means that the both the frequency and 
    the voltage must be in sync. Amperage is not relevant since you can have
    different currents in both generators.
  `,
});

export const QNBLC3VWYO = questionOneCorrect({
  id: "QNBLC3VWYO",
  version: 1,
  learningObjectives: ["021.09.01.07.07"],
  question: () => dedent`
    Which of the following statements is correct?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "Short term overcurrent is normal.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "Overcurrent is normal.",
    },
    {
      why: "",
      text: "Protective devices must trip as soon as a overcurrent is detected.",
    },
    {
      why: "",
      text: "Any overcurrent is abnormal.",
    },
  ],
  explanation: dedent`
    over current situations may be transient, so a tolerance is given to avoid 
    triggering the fuse unnecessarily. 
    
    (**note**: in the domain of electronics, 'transient' is measured in 
    microseconds, a fuse will trigger instantaneously from a 'human' 
    perspective).`,
});

export const QNBLC3VWYP = questionOneCorrect({
  id: "QNBLC3VWYP",
  version: 1,
  learningObjectives: ["021.09.01.07.07", "021.09.01.07.01"],
  question: [
    () => dedent`
      A current limiter fuse (thermal) in a DC generation system is used to...
    `,
    () => dedent`
      A thermal circuit breaker is used to...
    `,
  ],
  correctOptions: [
    {
      subject: "",
      why: "",
      text: [
        "allow a short term overload before rupturing.",
        "protect the system in the event of a prolonged overcurrent.",
      ],
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "limit the current in the armature.",
    },
    {
      why: "",
      text: "limit the current in the field circuit.",
    },
    {
      why: "",
      text: "instantaneously rupture to limit the current in the load.",
    },
    {
      why: "",
      text: "protect the system in the event of any overcurrent.",
    },
    {
      why: "",
      text: "protect the system in the event of a prolonged overheating.",
    },
  ],
  explanation: dedent`
    over current situations may be transient, so a tolerance is given to avoid 
    triggering the fuse unnecessarily. 
    
    (**note**: in the domain of electronics, 'transient' is measured in 
    microseconds, a fuse will trigger instantaneously from a 'human' 
    perspective).`,
});

export const Q183L3D0SR = questionOneCorrect({
  id: "Q183L3D0SR",
  version: 1,
  learningObjectives: ["021.09.04.04.05"],
  question: () => dedent`
    When carrying out a battery condition check using the aircraft's 
    voltmeter...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        a load should be applied to the battery in order to give a better 
        indication of condition.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        the load condition is unimportant.
      `,
    },
    {
      why: "",
      text: dedent`
        the battery should be isolated.
      `,
    },
    {
      why: "",
      text: dedent`
        no load should be applied to the battery because it would reduce the 
        voltage.
      `,
    },
  ],
  explanation: dedent`
    A condition check of a battery usually consists in comparing the battery
    state with and without a load applied. A battery in poor condition might 
    indicate a high voltage without any load, but drop to a very low voltage
    as soon as a load is applied.
  `,
});

export const QAOPVETDSM = questionOneCorrect({
  id: "QAOPVETDSM",
  version: 1,
  learningObjectives: ["021.09.03.03.04"],
  question: (subject) => dedent`
    In flight, if the Constant Speed Drive (CSD) temperature indicator is in 
    the red arc...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        The pilot must disconnect it. The generator is not available for the 
        rest of flight.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        The pilot can disconnect it to allow it to cool down. After normal 
        operating temperature is recovered, the CSD can be started again.
      `,
    },
    {
      why: "",
      text: dedent`
        The pilot must disconnect it to allow it to cool down. After normal 
        operating temperature is recovered, the CSD can be started again.
      `,
    },
    {
      why: "",
      text: dedent`
        The pilot must disconnect it and manually control the alternator.
      `,
    },
    {
      why: "",
      text: "The pilot has to throttle back.",
    },
  ],
  explanation: dedent``,
});

export const QJVPKUBN6G = questionOneCorrect({
  id: "QJVPKUBN6G",
  version: 1,
  learningObjectives: ["021.09.01.01.04"],
  question: () => dedent`
    Electrical bonding of an aircraft is used to..
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "equalise the electrical potential of the different aircraft parts",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "prevent the aircraft from being struck by lightning",
    },
    {
      why: "",
      text: dedent`
        ensure the electrical potential of the aircraft structure remains at 
        0 volts
      `,
    },
    {
      why: "",
      text: "eliminate the need for grounding the aircraft during refuelling",
    },
  ],
  explanation: dedent``,
});

export const QUSW1EXVRD = questionOneCorrect({
  id: "QUSW1EXVRD",
  version: 1,
  learningObjectives: [
    "021.09.01.02.04",
    "021.09.01.02.08",
    "021.09.01.03.04",
    "021.09.04.03.05",
    "021.09.02.01.06",
  ],
  question: (subject) => dedent`
    What unit of measurement is used to express ${subject}?
  `,
  correctOptions: [
    {
      subject: ["voltage", "difference of potential"],
      why: "Unit for voltage / difference of potential",
      text: "Volt",
    },
    {
      subject: "electrical resistance",
      why: "Unit for electrical resistance",
      text: "Ohm",
    },
    {
      why: "Unit for electrical work (and any other type of work)",
      subject: "electrical work",
      text: "Joule",
    },
    {
      why: "Unit for electrical power (and any other type of power)",
      subject: "electrical power",
      text: "Watt",
    },
    {
      why: "Unit for electrical current",
      subject: "electrical current",
      text: "Ampere",
    },
    {
      why: "Unit for frequency",
      subject: "frequency",
      text: "Hertz",
    },
    {
      why: "Unit for frequency",
      subject: "battery capacity",
      text: "Ampere Hour",
    },
    {
      why: "Unit for total power consumed in an AC system",
      subject: "total power consumed in an AC system",
      text: "Volt Ampere",
    },
  ],
  otherOptions: [
    {
      text: "RPM",
      why: dedent`( ??)
        Implicitly, it represent a frequency, but it's not the 
        unit of measurement of frequency. That would be Hz
      `,
    },
    {
      text: "Ampere per hour",
      why: dedent`
        Ampere per hour is a unit that has no significant physical meaning.
      `,
    },
  ],
  explanation: dedent`
    Units of measurement in the field of Electrics:

    - **Voltage / Difference of potential - Volt (V)
    - **Electrical Resistance** - Ohm (??)
    - **Electrical Work** - Joule (J)
    - **Electrical Power** - Watt (W = J/s)
    - **Electrical Current** - Ampere (A)
    - **Frequency - Hertz (Hz = 1/s)
    - **Battery capacity - Ampere Hour (Ah)
    - **total power consumed in an AC system** - Volt Ampere

    Pitfalls: 
    
    - Ampere per hour is not the same as Ampere hour (A/h ??? Ah)
  `,
});

export const QE7NZ238BD = questionOneCorrect({
  id: "QE7NZ238BD",
  version: 1,
  learningObjectives: ["021.09.03.04.01", "021.09.03.04.03", "021.09.03.04.02"],
  question: (subject) => dedent`
    ${subject} by...
  `,
  correctOptions: [
    {
      subject: "Alternating current can be derived from direct current",
      why: "",
      text: "an inverter.",
    },
    {
      subject: "Direct current can be derived from alternate current",
      why: "",
      text: "a rectifier.",
    },
    {
      subject: dedent`
        Direct current with a different voltage can be derived from 
        direct current
      `,
      why: "",
      text: "a transformer.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "an alternating current motor.",
    },
  ],
  explanation: dedent``,
});

export const QE7NZ238B2 = questionOneCorrect({
  id: "QE7NZ238B2",
  version: 1,
  learningObjectives: ["021.09.03.04.01", "021.09.03.04.03", "021.09.03.04.02"],
  question: (subject) => dedent`
    ${subject} converts...
  `,
  correctOptions: [
    {
      text: "28V DC to 115V AC",
      subject: "An inverter",
    },
    {
      text: "115V AC to 28V DC",
      subject: "A rectifier",
    },
    {
      text: "28V DC to 14V DC",
      subject: "A transformer",
    },
  ],
  otherOptions: [
    {
      text: "115V AC to 115V AC at a different frequency",
    },
  ],
  explanation: dedent``,
});

export const M74281FMAC = questionOneCorrect({
  id: "M74281FMAC",
  version: 1,
  learningObjectives: ["021.09.01.07.06"],
  question: (subject) => dedent`
    If a circuit overload is not detected, what may occur?
  `,
  correctOptions: [
    {
      subject: "",
      text: dedent`
         The electrical line could overheat and cause a fire.
      `,
      why: dedent`
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        The fuse may trigger.
      `,
      why: dedent`
        In this case the overload was detected.
      `,
    },
    {
      text: dedent`
        The generators will overheat and cause a fire.
      `,
      why: dedent`
        
      `,
    },
    {
      text: dedent`
        The bypass line will be activated
      `,
      why: dedent`
        No such thing as a bypass line on an electrical circuit. 
      `,
    },
  ],
  explanation: dedent`
  `,
});

export const GNDAMDASFC = questionOneCorrect({
  id: "GNDAMDASFC",
  version: 1,
  learningObjectives: ["021.09.02.01.08"],
  question: () => dedent`
    During cruise, all generators aboard have failed. You have connected
    all the critical electrical equipment to the Battery Bus bar as per the QRH.
    What must you be aware of?
  `,
  correctOptions: [
    {
      text: dedent`
         The batteries have a limited charge, so you won't be able to operate
         your electrical equipment indefinitely. 
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        You must closely monitor the battery temperature to avoid thermal 
        runaway.
      `,
    },
    {
      text: dedent`
        AC equipment can't be powered by the battery and can't be used for 
        the rest of the flight
      `,
      why: dedent`
        An inverter can be sued to convert from DC to AC. 
      `,
    },
    {
      text: dedent`
        DC equipment can't be powered by the battery and can't be used for 
        the rest of the flight
      `,
      why: dedent`
        The battery supplies DC.
      `,
    },
  ],
  explanation: dedent`
  `,
});

export const QGT6FQPXLD = questionOneCorrect({
  id: "QGT6FQPXLD",
  version: 1,
  learningObjectives: ["021.09.03.02.04"],
  question: () => dedent`
    "Frequency wild" in relation to a AC generation system means the 
    generator...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "output frequency varies with engine speed.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "output frequency is too low.",
    },
    {
      why: "",
      text: "voltage regulator is out of adjustment.",
    },
    {
      why: "",
      text: "output frequency is too high.",
    },
  ],
  explanation: dedent``,
});
