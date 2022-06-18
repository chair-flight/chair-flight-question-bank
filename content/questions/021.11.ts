import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";
import { questionOneTwo } from "./base/questionOneTwo";

export const QLCIVHT8TY = questionOneCorrect({
  id: "QLCIVHT8TY",
  version: 1,
  learningObjectives: ["021.11.03.01.01"],
  question: () => dedent`
    The engine fuel control unit is protected from damage by debris by..
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "a fine filter located between the high-pressure fuel pump and the governor unit.",
    },
  ],
  otherOptions: [
    {
      why: "The high pressure fuel pump is downstream from the fuel control unit.",
      text: "a fine filter located prior to the high-pressure fuel pump at the inlet to the fuel control unit.",
    },
    {
      why: "Magnetic plugs are typically a feature of hydraulic systems, not fuel systems.",
      text: "magnetic plugs located at various positions throughout the fuel supply usually at the outlet of fuel pumps and valves.",
    },
    {
      why: "",
      text: "strainers at the inlet to the low-pressure fuel pumps.",
    },
  ],
  explanation: dedent``,
});

export const QVBSPAKI0H = questionOneCorrect({
  id: "QVBSPAKI0H",
  version: 1,
  learningObjectives: ["021.11.01.02.14"],
  question: () => dedent`
    How can Specific fuel consumption for a turboshaft engine be expressed?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "Kg per Hour per unit of shaft power.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "Kg per Hour per NM.",
    },
    {
      why: "",
      text: "Kg per Per unit of shaft power.",
    },
    {
      why: "",
      text: "Kg per Hour per km.",
    },
  ],
  explanation: dedent``,
});

export const AS8YOS0XWU = questionOneCorrect({
  id: "AS8YOS0XWU",
  version: 1,
  learningObjectives: ["021.11.02.02.21"],
  question: () => dedent`
    The internal geometry of a turbofan intake is...
  `,
  correctOptions: [
    {
      subject: "",
      text: [
        dedent`
          Divergent, to reduce airflow velocity and increase static pressure in 
          front of the fan.
        `,
      ],
      why: dedent`
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        Convergent, to reduce airflow velocity and increase static pressure in 
        front of the fan.
      `,
      why: dedent`
        Physically, this option does not make sense as a convergent duct would 
        result in an increased airflow velocity and a decreased static pressure.
      `,
    },
    {
      text: dedent`
        Divergent, to increase airflow velocity and decrease static pressure in 
        front of the fan.
      `,
      why: dedent`
       Physically, this option does not make sense as a divergent duct would 
       result in a decreased airflow velocity and an increased static pressure.
      `,
    },
    {
      text: dedent`
        Convergent, to increase airflow velocity and decrease static pressure in front
        of the fan.
      `,
      why: dedent`
        Physically this answer makes sense. However, we want to increase the 
        static pressure in front of the engine. This "helps" the air 
        flow into the engine as the pressure inside the engine will be lower 
        than the pressure outside, and air flows naturally from a higher 
        to a lower pressure.
      `,
    },
  ],
  explanation: dedent`
    There are two parts to this question. The first one is \`what is the 
    internal geometry of a turbofan intake\`? This first part is best understood 
    with an image:

    ![Cut-out of a turbofan Engine](021.11.02.02.21-01.jpg)

    you can clearly see that at the intake the radius of the casing is 
    increasing as we go deeper into the engine. This is therefore a 
    **divergent duct**.

    The second part of the question can be answered with a little bit of 
    knowledge from aerodynamics: A subsonic divergent flow will decrease in 
    speed and increase in static pressure. This can be explained by the
    [bernoulli theorem](content/081.01.01.01).
  `,
});

export const QOIGNO99US = questionOneCorrect({
  id: "QOIGNO99US",
  version: 1,
  learningObjectives: ["021.11.02.02.16"],
  question: () => dedent`
    Compressor stall in a gas turbine engine is due to:
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "an excessively high angle of attack of the rotor blades.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "an excessively high axial velocity.",
    },
    {
      why: "",
      text: "an inadequate fuel flow.",
    },
    {
      why: "",
      text: "an excessively low angle of attack of the rotor blades.",
    },
  ],
  explanation: dedent``,
});

export const QYLPO7LROI = questionOneCorrect({
  id: "QYLPO7LROI",
  version: 1,
  learningObjectives: ["021.11.02.02.21"],
  question: () => dedent`
    The primary function of the diffuser located between the compressor and the 
    combustion chamber of a gas turbine engine is to...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "decrease the flow velocity.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "convert kinetic energy into mechanical energy.",
    },
    {
      why: "",
      text: "increase Static pressure.",
    },
    {
      why: "",
      text: "increase the temperature of the compressed air.",
    },
  ],
  explanation: dedent``,
});

export const QFCVDCFVC6 = questionOneCorrect({
  id: "QFCVDCFVC6",
  version: 1,
  learningObjectives: ["021.11.03.04.02"],
  question: () => dedent`
    The accessory gearbox of a fanjet engine is driven by...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "The high pressure shaft.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "An hydraulic motor.",
    },
    {
      why: "",
      text: "An electric motor.",
    },
    {
      why: "",
      text: "The fan shaft.",
    },
  ],
  explanation: dedent``,
});

export const QSUFLLF9KW = questionOneCorrect({
  id: "QSUFLLF9KW",
  version: 1,
  learningObjectives: ["021.11.01.01.02"],
  question: () => dedent`
    The following thrust formula is given: 
    
    \`\`\`
    F = m (vj - vv) + A (pj - p0)
    \`\`\`
    
    Which answer states the correct explanation of the two parts of the right 
    side of the formula?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        - m (vj - vv): the thrust caused by the acceleration of the air mass flow. 
        - A (pj - p0): the thrust caused by the pressure difference at the exhaust.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        - m (vj - vv): the thrust of the core section. 
        - A (pj - p0): the thrust of the fan section of a turbofan.
       `,
    },
    {
      why: "",
      text: dedent`
        - m (vj - vv): the thrust of the hot section 
        - A (pj - p0): the thrust of the cold section of a turbofan.
      `,
    },
    {
      why: "",
      text: dedent`
        - m (vj - vv): the thrust of the propeller. 
        - A (pj - p0): the thrust of the exhaust of a turboprop.
      `,
    },
  ],
  explanation: dedent``,
});

export const QXXH3WQQMI = questionOneCorrect({
  id: "QXXH3WQQMI",
  version: 1,
  learningObjectives: ["021.11.03.01.01"],
  question: () => dedent`
    The pressurising function of the pressurising and dump valve in a gas 
    turbine engine fuel system is to..
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        allow fuel to the nozzles only if the fuel pressure is high enough for 
        sufficient atomisation.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        allow oil to the fuel-oil heat exchanger, preventing ice crystals 
        blocking the fuel lines.
      `,
    },
    {
      why: "",
      text: dedent`
        prevent fuel leakage in the combustion chamber after engine shut-down.
      `,
    },
    {
      why: "",
      text: dedent`
        prevent overpressure at the fuel nozzles.
      `,
    },
  ],
  explanation: dedent``,
});

export const QLIF9KJKLS = questionOneCorrect({
  id: "QLIF9KJKLS",
  version: 1,
  learningObjectives: ["021.11.02.02.13"],
  question: () => dedent`
    One advantage of having three instead of two spools in some high-bypass 
    turbofan engine is that...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        fewer variable stator vanes and variable inlet guide vanes are required 
        to prevent compressor stall at low rotor speeds.
      `,
    },
    {
      subject: "",
      why: "",
      text: "a smaller air starter driving only a single spool can be used.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        there is a lower fuel consumption and more thrust due to higher overall 
        pressure ratio.`,
    },
    {
      why: "",
      text: dedent`
        fewer variable stator vanes and variable inlet guide vanes 
        are required to prevent compressor stall at high rotor speeds.`,
    },
    {
      why: "",
      text: dedent`
        there is a lower fuel consumption due to a higher overall pressure
        ratio.
      `,
    },
    {
      why: "",
      text: dedent`
        if one spool seizes, the remaining spool(s) will continue to operate 
        normally.
      `,
    },
    {
      why: "",
      text: dedent`a compressor stall cannot occur under any condition.`,
    },
    {
      why: "",
      text: dedent`engine length can be reduced.`,
    },
  ],
  explanation: dedent``,
});

export const QVZWMIKLSR = questionOneCorrect({
  id: "QVZWMIKLSR",
  version: 1,
  learningObjectives: ["021.11.02.04.08"],
  question: () => dedent`
    The maximum operating temperature of a gas turbine engine is usually imposed 
    due to temperature limitations on the...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "turbine section.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "compressor section.",
    },
    {
      why: "",
      text: "casing of the combustion chamber.",
    },
    {
      why: "",
      text: "jet pipe.",
    },
  ],
  explanation: dedent``,
});

export const QN5ISCAVG5 = questionOneCorrect({
  id: "QN5ISCAVG5",
  version: 1,
  learningObjectives: ["021.11.01.02.02"],
  question: () => dedent`
    In a theoretical gas turbine cycle, combustion takes place...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "at constant pressure.",
    },
    {
      subject: "",
      why: "",
      text: "continuously.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "intermittently",
    },
    {
      why: "",
      text: "at constant energy",
    },
    {
      why: "This is the case for reciprocal engines.",
      text: "at constant volume",
    },
    {
      why: "",
      text: "temperature",
    },
  ],
  explanation: dedent``,
});

export const QV6XVWMC52 = questionOneCorrect({
  id: "QV6XVWMC52",
  version: 1,
  learningObjectives: ["021.11.04.01.07"],
  question: () => dedent`
    The purpose of gas turbine engine trending is to...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "enhance maintenance planning and detect anomalies.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "obtain a timely indication when an engine requires to be shut down due to problems.",
    },
    {
      why: "",
      text: "collect metal particles from the oil system.",
    },
    {
      why: "",
      text: "assess engine condition using non-destructive inspection.",
    },
  ],
  explanation: dedent`
    Engine Trend Analysis is a method of assessing the health of an engine over
    time. This allows to enhance maintenance planning and detect anomalies. For
    example, An engine operating limits may set the normal operating range of 
    oil temperatures between 65º and 95º, but when monitoring the trend of a 
    specific engine it is verified the normal operating engine is below 70º 
    over 99.5% of the time. 
    
    In this scenario an operating speed of 75º may be sufficient to trigger an
    investigation of engine condition since despite being within limits, 
    something may be off.
  `,
});

export const QD8RYN3PMT = questionMultipleCorrect({
  id: "QD8RYN3PMT",
  version: 1,
  learningObjectives: ["021.11.03.05.02"],
  question: (options) => dedent`
    The use of igniters in a gas turbine engine is required:
    
    ${options}

    The combination that regroups all of the correct statements is...
  `,
  statements: [
    {
      wrong: "throughout the operating range of the engine",
    },
    {
      wrong: "during engine acceleration",
    },
    {
      correct: "for in-flight relights",
    },
  ],
  explanation: dedent``,
});

export const QB4G1PILCV = questionOneTwo({
  id: "QB4G1PILCV",
  version: 1,
  learningObjectives: ["021.11.02.01.02"],
  question: (options) => dedent`
    Which of the following statements is correct about the flow in a 
    divergent (subsonic) gas turbine engine intake?

    ${options}
  `,
  statementPairs: [
    {
      correct: "The dynamic pressure decreases in flow direction.",
      wrong: "The dynamic pressure increases in flow direction.",
    },
    {
      correct: "The airflow velocity decreases in flow direction.",
      wrong: "The airflow velocity increases in flow direction.",
    },
    {
      correct: "The total pressure remains constant in flow direction.",
      wrong: [
        "The total pressure increases in flow direction.",
        "The total pressure decreases in flow direction.",
      ],
    },
    {
      correct: "The total temperatures remains constant in flow direction.",
      wrong: [
        "The total temperatures increases in flow direction.",
        "The total temperatures decreases in flow direction.",
      ],
    },
    {
      correct: "The static temperature increases in flow direction.",
      wrong: "The static temperature decreases in flow direction.",
    },
    {
      correct: "The static pressure increases in flow direction.",
      wrong: "The static pressure decreases in flow direction.",
    },
  ],
  explanation: dedent`
    In a subsonic divergent intake we will observe air expansion. As such...

    - **Total Pressure / Temperature** - Remains constant
    - **Static Pressure / Temperature** - Increases
    - **Dynamic pressure / flow velocity - Decreases
  `,
});

export const QVEIKPL9TD = questionMultipleCorrect({
  id: "QVEIKPL9TD",
  version: 1,
  learningObjectives: ["021.11.02.02.02"],
  question: (options) => dedent`
    The characteristics of an axial compressor in a gas turbine engine 
    compared to a centrifugal compressor with the same engine diameter are:

    ${options}

    The combination that regroups all of the correct statements is...
  `,
  statements: [
    {
      correct: "A low pressure ratio by stage.",
      wrong: "A high pressure ratio by stage.",
    },
    {
      correct: "The possibility of compressing a large mass airflow.",
      wrong: "The inability of compressing a large mass airflow.",
    },
  ],
  select: {
    numberOfCorrectOptions: 2,
    numberOfOptions: 4,
  },
  explanation: dedent``,
});

export const QXGASRA4NB = mergeQuestionVariants(
  {
    id: "QXGASRA4NB",
    version: 1,
    learningObjectives: ["021.11.02.04.02"],
    explanation: dedent`
      - **P** - Flow static Pressure
      - **T** - Flow static Temperature
      - **V** - Flow velocity
      - **E** - Flow total energy - Kinetic Energy (from its velocity) + 
        Potential Energy (from its pressure)

      |                     | Impulse Turbine | Reaction Turbine |
      | ------------------- | --------------- | ---------------- |
      | P/T at Stator Vanes | Decreases       | Decreases        |
      | V at Stator Vanes   | Increases       | Increases        |
      | E at Stator Vanes   | Constant        | Constant         |
      |                     |                 |                  |
      | P/T at Rotor blades | Constant        | Decreases        |
      | V at Rotor blades   | Decreases       | Decreases        |
      | E at Rotor blades   | Decreases       | Decreases        |
    `,
    question: (subject: string) => (options: string) =>
      dedent`
      Which of these statements about an reaction turbine are correct or 
      incorrect?

      ${options}
    `,
  },
  (props) =>
    questionOneTwo({
      ...props,
      question: props.question("impulse"),
      statementPairs: [
        {
          correct: [
            "The pressure decreases across the nozzle guide vanes",
            "The velocity increases across the nozzle guide vanes",
            "The total energy remains constant across the nozzle guide vanes",
          ],
          wrong: [
            "The pressure increases across the nozzle guide vanes",
            "The velocity decreases across the nozzle guide vanes",
            "The total energy increases across the nozzle guide vanes",
            "The total energy decreases across the nozzle guide vanes",
          ],
        },
        {
          correct: [
            "The pressure remains constant across the rotor blades",
            "The velocity decreases across the rotor blades",
            "The total energy decreases across the rotor blades",
          ],
          wrong: [
            "The pressure increases across the rotor blades",
            "The pressure decreases across the rotor blades",
            "The velocity increases across the rotor blades",
            "The velocity remains constant across the rotor blades",
            "The total energy remains constant across the rotor blades",
            "The total energy increases across the rotor blades",
          ],
        },
      ],
    }),
  (props) =>
    questionOneTwo({
      ...props,
      question: props.question("reaction"),
      statementPairs: [
        {
          correct: [
            "The pressure decreases across the nozzle guide vanes",
            "The velocity increases across the nozzle guide vanes",
            "The total energy remains constant across the nozzle guide vanes",
          ],
          wrong: [
            "The pressure increases across the nozzle guide vanes",
            "The velocity decreases across the nozzle guide vanes",
            "The total energy increases across the nozzle guide vanes",
            "The total energy decreases across the nozzle guide vanes",
          ],
        },
        {
          correct: [
            "The pressure decreases across the rotor blades",
            "The velocity decreases across the rotor blades",
            "The total energy decreases across the rotor blades",
          ],
          wrong: [
            "The pressure increases across the rotor blades",
            "The pressure remains constant across the rotor blades",
            "The velocity increases across the rotor blades",
            "The velocity remains constant across the rotor blades",
            "The total energy remains constant across the rotor blades",
            "The total energy increases across the rotor blades",
          ],
        },
      ],
    })
);

export const Q5MKRFZN3V = questionOneCorrect({
  id: "Q5MKRFZN3V",
  version: 1,
  learningObjectives: ["021.11.02.04.06"],
  question: () => dedent`
    A gas turbine engine turbine section may employ active clearance control...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        to provide enhanced clearances between the blade tips and the casing.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        to cool the turbine disc.
      `,
    },
    {
      why: "",
      text: dedent`
        as a method of attaching the stators and rotors to the hub of the disc.
      `,
    },
    {
      why: "",
      text: dedent`
        to reduce “creep” in the blades.
      `,
    },
  ],
  explanation: dedent``,
});

export const QZCLPLEQKT = questionMultipleCorrect({
  id: "QZCLPLEQKT",
  version: 1,
  learningObjectives: ["021.10.10.02.06"],
  question: (options) => dedent`
    The FADEC (Full Authority Digital Engine Control) can provide...

    ${options}
  `,
  statements: [
    {
      correct: "thrust reverser control.",
    },
    {
      correct: "engine operation within safe limits.",
    },
    {
      correct: "automatic engine starting sequence.",
    },
    {
      correct: "automatic thrust rating control.",
    },
  ],
  explanation: dedent``,
  select: {
    numberOfOptions: 4,
    numberOfCorrectOptions: 4,
  },
});

export const QX8ZENGWBV = questionOneCorrect({
  id: "QX8ZENGWBV",
  version: 1,
  learningObjectives: ["021.11.03.02.08"],
  question: () => dedent`
    What is the source of power for a FADEC?
  `,
  correctOptions: [
    {
      subject: "",
      why: "The FADEC must have its own source of electrical power",
      text: "the FADEC power source(s) on the engine.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "the APU generator.",
    },
    {
      why: "",
      text: "the aircraft battery.",
    },
    {
      why: "",
      text: "the aircraft generator.",
    },
  ],
  explanation: dedent`
    This question and answer combo might look a bit redundant, but the important
    takeaway is that the FADEC must have it's own power source. All other 
    listed power sources are generic power shared by multiple systems.
  `,
});

export const QGGKJVQKHC = questionOneCorrect({
  id: "QGGKJVQKHC",
  version: 1,
  learningObjectives: ["021.11.01.02.10"],
  question: () => dedent`
    By-pass ratio in a turbine engine is the ratio of the:
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "cold air mass flow to the hot air mass flow.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "speed of the combusted air to the speed of the by-pass air.",
    },
    {
      why: "",
      text: "intake air pressure to the turbine delivery air pressure.",
    },
    {
      why: "",
      text: "tertiary air mass flow to the primary air mass flow.",
    },
  ],
  explanation: dedent``,
});

export const QA0UV21SNS = questionOneCorrect({
  id: "QA0UV21SNS",
  version: 1,
  learningObjectives: ["021.11.02.02.11"],
  question: () => dedent`
    Which of the following statements regarding variable inlet guide vanes 
    (VIGVs) and variable stator vanes (VSVs) on a high-bypass turbine 
    engine is correct?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        VIGVs are located at the front of the HP compressor and, together with 
        the VSVs, control compressor airflow.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        VIGVs are located in the front of the fan and control both fan and 
        compressor air flow. VSVs are used in the compressor only and are used 
        to increase pressure ratio.
      `,
    },
    {
      why: "",
      text: dedent`
        VIGVs prevent LP compressor stall and VSVs prevent HP compressor stall.
      `,
    },
    {
      why: "",
      text: dedent`
        If VIGVs move towards the open position, VSVs move towards the closed 
        position.
      `,
    },
  ],
  explanation: dedent``,
});

export const QA0UV21SNT = questionOneCorrect({
  id: "QA0UV21SNT",
  version: 1,
  learningObjectives: ["021.11.02.02.11"],
  question: () => dedent`
    What is the purpose of IGVs?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        Optimize the angle of the air flow in the first stage of the compressor
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
        Reduce velocity y of the air flow in the combustion chamber.
      `,
    },
    {
      why: "",
      text: dedent`
        Increase the velocity of the air flow in the first stage of the compressor
      `,
    },
    {
      why: "",
      text: dedent`
        Optimize the angle of the air flow in the diffuser
      `,
    },
  ],
  explanation: dedent``,
});
