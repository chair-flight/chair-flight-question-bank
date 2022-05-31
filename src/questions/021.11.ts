import dedent from "dedent";
import { questionOneCorrect } from "../base/questionOneCorrect";

export const QLCIVHT8TY = questionOneCorrect({
  id: "QLCIVHT8TY",
  version: 1,
  learningObjectives: ["021.11.03.01.01"],
  question: () => dedent`
    The engine fuel control unit is protected from damage by debris by..
  `,
  correctOptions: [
    {
      id: "QLCIVHT8TY-2",
      subject: "",
      why: "",
      text: "a fine filter located between the high-pressure fuel pump and the governor unit.",
    },
  ],
  otherOptions: [
    {
      id: "QLCIVHT8TY-0",
      why: "The high pressure fuel pump is downstream from the fuel control unit.",
      text: "a fine filter located prior to the high-pressure fuel pump at the inlet to the fuel control unit.",
    },
    {
      id: "QLCIVHT8TY-1",
      why: "Magnetic plugs are typically a feature of hydraulic systems, not fuel systems.",
      text: "magnetic plugs located at various positions throughout the fuel supply usually at the outlet of fuel pumps and valves.",
    },
    {
      id: "QLCIVHT8TY-3",
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
      id: "QVBSPAKI0H-1",
      subject: "",
      why: "",
      text: "Kg per Hour per unit of shaft power.",
    },
  ],
  otherOptions: [
    {
      id: "QVBSPAKI0H-0",
      why: "",
      text: "Kg per Hour per NM.",
    },
    {
      id: "QVBSPAKI0H-2",
      why: "",
      text: "Kg per Per unit of shaft power.",
    },
    {
      id: "QVBSPAKI0H-3",
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
      id: "AS8YOS0XWU-1",
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
      id: "AS8YOS0XWU-2",
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
      id: "AS8YOS0XWU-3",
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
      id: "AS8YOS0XWU-4",
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
      id: "QOIGNO99US-2",
      subject: "",
      why: "",
      text: "an excessively high angle of attack of the rotor blades.",
    },
  ],
  otherOptions: [
    {
      id: "QOIGNO99US-0",
      why: "",
      text: "an excessively high axial velocity.",
    },
    {
      id: "QOIGNO99US-1",
      why: "",
      text: "an inadequate fuel flow.",
    },
    {
      id: "QOIGNO99US-3",
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
      id: "QYLPO7LROI-3",
      subject: "",
      why: "",
      text: "decrease the flow velocity.",
    },
  ],
  otherOptions: [
    {
      id: "QYLPO7LROI-0",
      why: "",
      text: "convert kinetic energy into mechanical energy.",
    },
    {
      id: "QYLPO7LROI-1",
      why: "",
      text: "increase total pressure.",
    },
    {
      id: "QYLPO7LROI-2",
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
      id: "QFCVDCFVC6-2",
      subject: "",
      why: "",
      text: "The high pressure shaft.",
    },
  ],
  otherOptions: [
    {
      id: "QFCVDCFVC6-0",
      why: "",
      text: "An hydraulic motor.",
    },
    {
      id: "QFCVDCFVC6-1",
      why: "",
      text: "An electric motor.",
    },
    {
      id: "QFCVDCFVC6-3",
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
      id: "QSUFLLF9KW-2",
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
      id: "QSUFLLF9KW-0",
      why: "",
      text: dedent`
        - m (vj - vv): the thrust of the core section. 
        - A (pj - p0): the thrust of the fan section of a turbofan.
       `,
    },
    {
      id: "QSUFLLF9KW-1",
      why: "",
      text: dedent`
        - m (vj - vv): the thrust of the hot section 
        - A (pj - p0): the thrust of the cold section of a turbofan.
      `,
    },
    {
      id: "QSUFLLF9KW-3",
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
      id: "QXXH3WQQMI-3",
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
      id: "QXXH3WQQMI-0",
      why: "",
      text: dedent`
        allow oil to the fuel-oil heat exchanger, preventing ice crystals 
        blocking the fuel lines.
      `,
    },
    {
      id: "QXXH3WQQMI-1",
      why: "",
      text: dedent`
        prevent fuel leakage in the combustion chamber after engine shut-down.
      `,
    },
    {
      id: "QXXH3WQQMI-2",
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
      id: "QLIF9KJKLS-7",
      subject: "",
      why: "",
      text: dedent`
        fewer variable stator vanes and variable inlet guide vanes are required 
        to prevent compressor stall at low rotor speeds.
      `,
    },
    {
      id: "QSTBUWL1FM-8",
      subject: "",
      why: "",
      text: "a smaller air starter driving only a single spool can be used.",
    },
  ],
  otherOptions: [
    {
      id: "QLIF9KJKLS-1",
      why: "",
      text: dedent`
        there is a lower fuel consumption and more thrust due to higher overall 
        pressure ratio.`,
    },
    {
      id: "QLIF9KJKLS-2",
      why: "",
      text: dedent`
        fewer variable stator vanes and variable inlet guide vanes 
        are required to prevent compressor stall at high rotor speeds.`,
    },
    {
      id: "QLIF9KJKLS-3",
      why: "",
      text: dedent`
        there is a lower fuel consumption due to a higher overall pressure
        ratio.
      `,
    },
    {
      id: "QLIF9KJKLS-4",
      why: "",
      text: dedent`
        if one spool seizes, the remaining spool(s) will continue to operate 
        normally.
      `,
    },
    {
      id: "QLIF9KJKLS-5",
      why: "",
      text: dedent`a compressor stall cannot occur under any condition.`,
    },
    {
      id: "QLIF9KJKLS-6",
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
      id: "QVZWMIKLSR-0",
      subject: "",
      why: "",
      text: "turbine section.",
    },
  ],
  otherOptions: [
    {
      id: "QVZWMIKLSR-1",
      why: "",
      text: "compressor section.",
    },
    {
      id: "QVZWMIKLSR-2",
      why: "",
      text: "casing of the combustion chamber.",
    },
    {
      id: "QVZWMIKLSR-3",
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
      id: "QN5ISCAVG5-0",
      subject: "",
      why: "",
      text: "at constant pressure.",
    },
    {
      id: "QN5ISCAVG5-1",
      subject: "",
      why: "",
      text: "continuously.",
    },
  ],
  otherOptions: [
    {
      id: "QN5ISCAVG5-2",
      why: "",
      text: "intermittently",
    },
    {
      id: "QN5ISCAVG5-3",
      why: "",
      text: "at constant energy",
    },
    {
      id: "QN5ISCAVG5-4",
      why: "This is the case for reciprocal engines.",
      text: "at constant volume",
    },
    {
      id: "QN5ISCAVG5-5",
      why: "",
      text: "temperature",
    },
  ],
  explanation: dedent``,
});
