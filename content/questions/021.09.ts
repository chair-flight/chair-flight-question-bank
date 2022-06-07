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
