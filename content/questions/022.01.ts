import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";
import { questionOneTwo } from "./base/questionOneTwo";

export const QKXOPBJ5XN = questionOneCorrect({
  id: "QKXOPBJ5XN",
  version: 1,
  learningObjectives: ["022.01.02.01.04"],
  question: (subject) => dedent`
    The measurement of the turbine temperature or of the EGT is carried out at 
    the...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "outlet of the high pressure stage of the turbine.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "inlet of the combustion chamber.",
    },
    {
      why: "",
      text: "intake of the high pressure chamber.",
    },
    {
      why: "",
      text: "outlet of the combustion chamber.",
    },
  ],
  explanation: dedent``,
});

export const QUF95UDOCO = questionOneCorrect({
  id: "QUF95UDOCO",
  version: 1,
  learningObjectives: ["022.01.02.01.04"],
  question: (subject) => dedent`
    Which sensor is used to measure a temperature ${subject}?
  `,
  correctOptions: [
    {
      subject: "up to 500 ºC",
      why: "bimetallic strip => up to 500 ºC",
      text: "A bimetallic strip.",
    },
    {
      subject: "in excess of 500 ºC",
      why: "thermocouple => in excess 500 ºC",
      text: "A thermocouple.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "Mercury thermometer, bimetallic strip or thermocouple.",
    },
    {
      why: "",
      text: "A mercury thermometer.",
    },
  ],
  explanation: dedent``,
});

export const QPTVQCJGDA = questionOneCorrect({
  id: "QPTVQCJGDA",
  version: 1,
  learningObjectives: ["022.01.02.01.05"],
  question: (subject) => dedent`
    The ${subject} of the arc of a temperature gauge corresponds to:
  `,
  correctOptions: [
    {
      subject: "white sector",
      why: "White sector",
      text: "a special operating range.",
    },
    {
      subject: "amber or yellow sector",
      why: "amber or yellow sector",
      text: "an exceptional operating range.",
    },
    {
      subject: "green sector",
      why: "Green Sector",
      text: "a normal operating range.",
    },
    {
      subject: "red sector",
      why: "Red sector",
      text: "a forbidden operating range.",
    },
  ],
  otherOptions: [],
  explanation: dedent`
  - **white sector**: a special operating range.
  - **amber or yellow sector**: an exceptional operating range.
  - **green sector**: a normal operating range.
  - **red sector**: a forbidden operating range.
  `,
});

export const QJDZ8JLZUI = questionOneCorrect({
  id: "QJDZ8JLZUI",
  version: 1,
  learningObjectives: ["022.01.02.01.05"],
  question: (subject) => dedent`
    The red pointer which is normally on the red line on the EGT 
    (Exhaust Gas Temperature) indicators...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      moves when the corresponding value is exceeded and remains positioned at 
      the maximum value that has been reached.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      shows the limit value not to be exceeded.
    `,
    },
    {
      why: "",
      text: dedent`
      shows the vibration level of the engine under consideration.
    `,
    },
    {
      why: "",
      text: dedent`
      allows the display of the parameter value to be adopted during take-off.
    `,
    },
  ],
  explanation: dedent``,
});

export const MBNASF124A = mergeQuestionVariants(
  {
    id: "MBNASF124A",
    learningObjectives: ["022.01.03.01.04", "022.01.03.01.05"],
    version: 1,
    explanation: dedent`
  `,
  },
  (props) =>
    questionMultipleCorrect({
      ...props,
      select: {
        numberOfOptions: 4,
        numberOfCorrectOptions: 3,
      },
      statements: [
        { correct: "aircraft attitude." },
        { correct: "accelerations." },
        { correct: "fuel temperature." },
        { wrong: "atmospheric pressure." },
      ],
      question: (options) => dedent`
      The indication of a fuel float gauge varies with...
                
      ${options}
    `,
    }),
  (props) =>
    questionMultipleCorrect({
      ...props,
      select: {
        numberOfOptions: 4,
      },
      statements: [
        { correct: "is typically a DC powered system." },
        { wrong: "gives a mass information." },
        { wrong: "gives information independent of aircraft's attitude." },
        {
          wrong: "gives information all the more accurate as the tank is full.",
        },
      ],
      question: (options) => dedent`
      The indication of a fuel float gauge varies with...
                
      ${options}
    `,
    })
);

export const QPS3NRPWHI = questionOneCorrect({
  id: "QPS3NRPWHI",
  version: 1,
  learningObjectives: ["022.01.03.01.04", "022.01.03.01.05"],
  question: (subject) => dedent`
    The gauge indicating the quantity of fuel measured by a capacity gauging 
    system can be graduated directly in weight units because the dielectric 
    constant of fuel is...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "twice that of air and varies directly with density.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "the same as that of air and varies inversely with density.",
    },
    {
      why: "",
      text: "the same as that of air and varies directly with density.",
    },
    {
      why: "",
      text: "twice that of air and varies inversely with density.",
    },
  ],
  explanation: dedent``,
});

export const QU0NFUTGEG = questionOneCorrect({
  id: "QU0NFUTGEG",
  version: 1,
  learningObjectives: ["022.01.03.01.05"],
  question: (subject) => dedent`
    The quantity of fuel in the tanks is measured by capacitor type contents 
    gauges. The working principle of these sensors is to measure the...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "charge of condensers.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "volume of the fuel.",
    },
    {
      why: "",
      text: "height of the fuel.",
    },
    {
      why: "",
      text: "di-electric resistivity of the fuel.",
    },
  ],
  explanation: dedent``,
});

// TODO: also shows up as 021.08
export const TP61LNFHGG = questionOneCorrect({
  id: "TP61LNFHGG",
  version: 1,
  learningObjectives: ["022.01.03.01.05"],
  question: (subject) => dedent`
    The capacitance type fuel gauging system indicates the fuel quantity by
    measuring the...
  `,
  correctOptions: [{ text: "dielectric change between fuel and air" }],
  otherOptions: [
    { text: "resistivity variation of the fuel" },
    { text: "density variation o the fuel" },
    { text: "electrical resistance change" },
  ],
  explanation: dedent`
  `,
});

export const G82ZLMGBQU = questionOneCorrect({
  id: "G82ZLMGBQU",
  version: 1,
  learningObjectives: ["022.01.03.01.05"],
  question: (subject) => dedent`
  `,
  correctOptions: [{ text: "A full deflection of the gauge to empty" }],
  otherOptions: [
    { text: "A yellow flag on the gauge" },
    { text: "No change in contents indication" },
    { text: "A deflection of the gauge to full" },
  ],
  explanation: dedent`
    Upon failure, the fuel indicator will fail 'safe', that is, it will slowly 
    move towards indicating 0 fuel so that it never risks indicating that a 
    fuel tank has more fuel than it actually has.
  `,
});

export const QO3Y4R4I8J = questionOneCorrect({
  id: "QO3Y4R4I8J",
  version: 1,
  learningObjectives: ["022.01.05.01.01"],
  question: (subject) => dedent`
    The signal supplied by a transmitter fitted with a 3-phase AC generator, 
    connected to RPM indicator, is:
  `,
  correctOptions: [
    {
      subject: "electrical",
      why: "",
      text: dedent`
      a three-phase voltage, the frequency of which varies with the RPM; the 
      indicator is provided with a motor which drives a magnetic tachometer.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      an AC voltage, the frequency of which varies with the RPM; the indicator 
      converts the signal into square pulses which are then counted.
    `,
    },
    {
      why: "",
      text: dedent`
      an AC voltage varying with the RPM; the indicator rectifies the signal 
      via a diode bridge and is provided with a voltmeter.
    `,
    },
    {
      why: "",
      text: dedent`
      a DC voltage varying with the RPM; the indicator is a plain voltmeter 
      with a rev/min. scale.
    `,
    },
  ],
  explanation: dedent``,
});

export const QDDVRZLLWX = questionOneCorrect({
  id: "QDDVRZLLWX",
  version: 1,
  learningObjectives: ["022.01.07.01.02"],
  question: (subject) => dedent`
    Which statement is correct when:

    \`\`\`
    P = power
    T = torque
    n = RPM
    GS = groundspeed
    TAS = True Air Speed
    \`\`\`    
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "P = T × n",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "P= T × GS",
    },
    {
      why: "",
      text: "P = T × TAS",
    },
    {
      why: "",
      text: "P = T / n",
    },
  ],
  explanation: dedent``,
});

export const QCGQRXSPLM = questionOneCorrect({
  id: "QCGQRXSPLM",
  version: 1,
  learningObjectives: ["022.01.08.01.02"],
  question: (subject) => dedent`
    Refer to an aeroplane with two engines. If a synchroscope is installed, 
    it works on the basis of...
  `,
  correctOptions: [
    {
      why: "",
      text: dedent`
      a voltmeter which is fed by two tachometer-generators.
    `,
    },
  ],
  otherOptions: [
    {
      why: "The synchroscope does not sync two engines directly",
      text: dedent`
      a rotor from one engine is sending frequencies to the stator of the 
      other engine.
    `,
    },
    {
      why: "",
      text: dedent`
      an ammeter which is fed by two tachometer-generators.
    `,
    },
    {
      why: "",
      text: dedent`
      a galvanometer which is fed by two alternators.
    `,
    },
  ],
  explanation: dedent``,
});

export const QR5DWH03JT = questionOneCorrect({
  id: "QR5DWH03JT",
  version: 1,
  learningObjectives: ["022.01.09.01.02"],
  question: (subject) => dedent`
    The piezoelectric sensor consists of (1) ___ dial(s) and measures (2) ___.
  `,
  correctOptions: [
    {
      text: "(1) cockpit (2) vibration",
    },
  ],
  otherOptions: [
    {
      why: "piezoelectric sensors don't measure temperature",
      text: "(1) inertial (2) temperature",
    },
    {
      why: "piezoelectric sensors don't measure humidity",
      text: "(1) avionics (2) humidity",
    },
    {
      why: "No such thing as 'tangent' dials",
      text: "(1) tangent (2) pressure",
    },
  ],
  explanation: dedent`
    This question is a bit tricky since a piezoelectric sensor can be used
    for a platitude of things. However, they are never used for measuring 
    humidity nor temperature. "Tangent dials" are also not a thing.
  `,
});
