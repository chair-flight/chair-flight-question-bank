import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const Q5FKFF4KHA = questionOneCorrect({
  id: "Q5FKFF4KHA",
  version: 1,
  learningObjectives: ["022.05.01.01.08"],
  question: (subject) => dedent`
    What is the minimum number of ${subject} platform?
  `,
  correctOptions: [
    {
      subject: ["accelerometers required on an INS"],
      why: "INS: tree laser ring gyros, and two accelerometers",
      text: "Two",
    },
    {
      subject: [
        "accelerometers required on an IRS",
        "gyros required on an IRS",
        "gyros required on an INS",
      ],
      why: "IRS: three laser ring gyros and three accelerometers",
      text: "Three",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "One",
    },
    {
      why: "",
      text: "Four",
    },
  ],
  explanation: dedent`
    - **INS**: three laser ring gyros and two accelerometers
    - **IRS**: three laser ring gyros and three accelerometers
  `,
});

export const QEEEMF1MYG = questionOneCorrect({
  id: "QEEEMF1MYG",
  version: 1,
  learningObjectives: ["022.02.04.01.08"],
  question: (subject) => dedent`
    If an aircraft is equipped with one altimeter which is compensated for 
    position error and another altimeter which is not, and all other 
    factors being equal...
  `,
  correctOptions: [
    {
      subject: "",
      why: dedent`
      at high speed the uncorrected altimeter will fail to correct for the 
      lower pressure, and will indicated a higher altitude.
    `,
      text: dedent`
      at high speed, the non compensated altimeter will indicate a higher 
      altitude.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      ATC will get an erroneous altitude report SSR.
    `,
    },
    {
      why: "",
      text: dedent`
      there will be no difference between them if air the data computer is 
      functioning normally.
    `,
    },
    {
      why: "",
      text: dedent`
      at high speed the non compensated altimeter will indicate a lower 
      altitude.
    `,
    },
  ],
  explanation: dedent``,
});

export const QZXC4UCSVX = questionOneCorrect({
  id: "QZXC4UCSVX",
  version: 1,
  learningObjectives: ["022.02.02.01.01"],
  question: (subject) => dedent`
    The ${subject} is...
  `,
  correctOptions: [
    {
      subject: "Total Air Temperature (TAT)",
      why: "",
      text: "the temperature resulting from the aircraft motion in the air.",
    },
    {
      subject: [
        "Static Air Temperature (SAT)",
        "Outside Air Temperature (OAT)",
      ],
      why: "",
      text: "the temperature of the undisturbed air mass outside the aircraft.",
    },
    {
      subject: ["Ram Air Temperature (RAT"],
      why: "",
      text: "the impact air temperature measured by the pitot probe.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      the average temperature resulting from the temperature measure of the 
      pitot and TAT probes.
    `,
    },

    {
      why: "",
      text: dedent`
      the static air temperature (SAT) multiplied by the recovery factor.
    `,
    },
  ],
  explanation: dedent``,
});

export const QZAFVWC1OO = questionOneCorrect({
  id: "QZAFVWC1OO",
  version: 1,
  learningObjectives: ["022.02.02.01.01"],
  question: (subject) => dedent`
    Given:

    - T<sub>SAT</sub> = tthe static temperature (SAT)
    - Kr = he recovery coefficient
    - M = the Mach number

    The ${subject} can be expressed approximately by the formula...
  `,
  correctOptions: [
    {
      subject: "total temperature",
      why: "",
      text: "T<sub>T</sub> = T<sub>S</sub>(1 + 0.2 M<sup>2</sup>).",
    },
    {
      subject: "ram air temperature",
      why: "",
      text: "T<sub>T</sub> = T<sub>S</sub>(1 + 0.2 Kr M<sup>2</sup>).",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "T<sub>T</sub> = T<sub>S</sub>(1 - 0.2 M<sup>2</sup>).",
    },
    {
      why: "",
      text: "T<sub>T</sub> = T<sub>S</sub>(1 - 0.2 Kr M<sup>2</sup>).",
    },
    {
      why: "",
      text: "T<sub>T</sub> = T<sub>S</sub> / (1 - 0.2 M<sup>2</sup>).",
    },
    {
      why: "",
      text: "T<sub>T</sub> = T<sub>S</sub> / (1 - 0.2 Kr M<sup>2</sup>).",
    },
  ],
  explanation: dedent``,
});

// TODO finish this
const QQTZZNR663 = mergeQuestionVariants({
  id: "QQTZZNR663",
  version: 1,
  learningObjectives: ["022.02.02.01.01"],
  result: ({
    mach,
    temperature,
    kr,
  }: {
    mach: number;
    temperature: number;
    kr: number;
  }) => 0,
  question:
    ({
      mach,
      temperature,
      kr,
    }: {
      mach: number;
      temperature: number;
      kr: number;
    }) =>
    () =>
      dedent`
    Given:

		- Mach number: M = ${mach.toPrecision(1)},
    - Measured impact temperature: -${mach.toPrecision(0)},°C
    - Recovery factor (Kr) of the temperature probe: ${mach.toPrecision(2)},

    The OAT is...
  `,
});

questionOneCorrect({
  id: "QQTZZNR663",
  version: 1,
  learningObjectives: ["022.02.02.01.01"],
  question: (subject) => dedent`
    Given:

		- Mach number: M = 0.70,
    - Measured impact temperature: -48°C
    - Recovery factor (Kr) of the temperature probe: 0.85

    The OAT is:
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "-65 °C",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "-51 °C",
    },
    {
      why: "",
      text: "-45 °C",
    },
    {
      why: "",
      text: "-64 °C",
    },
  ],
  explanation: dedent``,
});

export const QMUFPJMERR = questionOneCorrect({
  id: "QMUFPJMERR",
  version: 1,
  learningObjectives: ["022.02.03.01.01"],
  question: (subject) => dedent`
    The null-seeking probe uses (1)_______ for measurement and is subjected to 
    (2)______ error.
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "(1) a potentiometer (2) position",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "(1) the vertical magnetic component (2) deviation",
    },
    {
      why: "",
      text: "(1) the ADC (2) compressibility",
    },
    {
      why: "",
      text: "(1) magnetic field (2) variation",
    },
  ],
  explanation: dedent``,
});

export const QRWCNZYZVM = mergeQuestionVariants(
  {
    id: "QRWCNZYZVM",
    version: 1,
    learningObjectives: ["022.02.04.01.05"],
    explanation: dedent``,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      What is the advantage of a servo altimeter over a sensitive altimeter?
    `,
      correctOptions: [
        {
          subject: "",
          why: "",
          text: "It is a more accurate design.",
        },
      ],
      otherOptions: [
        {
          why: "",
          text: "It has a more precise reading.",
        },
        {
          why: "",
          text: "It is cheaper to produce and maintain.",
        },
        {
          why: "",
          text: "The sensitive altimeter has better accuracy than the servo altimeter.",
        },
      ],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      The primary factor which makes the servo-assisted altimeter more 
      accurate than the simple pressure altimeter is the use of...
    `,
      correctOptions: [
        {
          subject: "",
          why: "",
          text: "an induction pick-off device.",
        },
      ],
      otherOptions: [
        {
          why: "",
          text: "a subscale logarithmic function.",
        },
        {
          why: "",
          text: "more effective temperature compensating leaf springs.",
        },
        {
          why: "",
          text: "combination of counters/pointers.",
        },
      ],
    })
);

export const QA2HZKTR6S = mergeQuestionVariants(
  {
    id: "QA2HZKTR6S",
    version: 1,
    learningObjectives: ["022.02.04.01.05"],
    explanation: dedent``,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      What is  the main component of a sensitive altimeter?
    `,
      correctOptions: [
        {
          subject: "",
          why: "",
          text: "2 aneroid capsules.",
        },
      ],
      otherOptions: [
        {
          why: "",
          text: "The servo assistance.",
        },
        {
          why: "",
          text: "1 aneroid capsule.",
        },
        {
          why: "",
          text: "The total pressure sensing element.",
        },
      ],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      What is the purpose of a vibration motor in sensitive altimeters?
    `,
      correctOptions: [
        {
          subject: "",
          why: "",
          text: "To increase the accuracy of the indication.",
        },
      ],
      otherOptions: [
        {
          why: "",
          text: "To increase static friction in the gears.",
        },
        {
          why: "",
          text: "To compensate for vibrations caused by the piston engine.",
        },
        {
          why: "",
          text: "To prevent the “lock-in” phenomenon.",
        },
      ],
    })
);

export const QDICF5HGRL = questionOneCorrect({
  id: "QDICF5HGRL",
  version: 1,
  learningObjectives: ["022.02.05.01.02", "022.02.04.01.04", "022.02.06.01.03"],
  question: (subject) => dedent`
    The  ${subject} is fed by:
  `,
  correctOptions: [
    {
      subject: ["vertical speed indicator (VSI)", "Altimeter"],
      why: "",
      text: "static pressure.",
    },
    {
      subject: ["Air speed Indicator (ASI)"],
      why: "",
      text: "static and total pressure.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "dynamic pressure.",
    },
    {
      why: "",
      text: "total pressure.",
    },
  ],
  explanation: dedent``,
});

export const QQBQNRNF3O = questionOneCorrect({
  id: "QQBQNRNF3O",
  version: 1,
  learningObjectives: ["022.02.08.01.04"],
  question: (subject) => dedent`
    A modern airspeed indicator, calibrated according to the Saint-Venant 
    formula, indicates, in the absence of static and instrumental error...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "the equivalent airspeed (EAS).",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "the calibrated airspeed (CAS).",
    },
    {
      why: "",
      text: "the true airspeed (TAS).",
    },
    {
      why: "",
      text: "the airspeed, whatever the altitude.",
    },
  ],
  explanation: dedent``,
});

export const QZMESY1O14 = questionOneCorrect({
  id: "QZMESY1O14",
  version: 1,
  learningObjectives: ["022.02.06.01.03"],
  question: (subject) => dedent`
    ${subject} of the airspeed indicator we will find...
  `,
  correctOptions: [
    {
      subject: "In the air-tight instrument case ",
      why: "Air tight instrument case => static pressure",
      text: "static pressure.",
    },
    {
      subject: "Inside the capsule",
      why: "Inside the capsule => total pressure",
      text: "total pressure.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "ram air.",
    },
    {
      why: "",
      text: "dynamic pressure.",
    },
  ],
  explanation: dedent``,
});

export const QVRTUAI30A = questionOneCorrect({
  id: "QVRTUAI30A",
  version: 1,
  learningObjectives: ["022.02.06.01.09"],
  question: (subject) => dedent`
    What is “unreliable airspeed”?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      Airspeed indications affected by pitot/static system errors, but without 
      triggering a warning and being automatically removed from displays and 
      computations.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      Airspeed indications affected by pitot/static system errors, triggering a 
      warning and being automatically removed from displays and computations.
    `,
    },
    {
      why: "",
      text: dedent`
      A procedure dealing with the recovery of the ASI only.
    `,
    },
    {
      why: "",
      text: dedent`
      A modern commercial aviation EFIS feature.
    `,
    },
  ],
  explanation: dedent``,
});

export const QYNMZWLXTJ = mergeQuestionVariants(
  {
    id: "QYNMZWLXTJ",
    version: 1,
    learningObjectives: ["022.02.08.01.04"],
    explanation: dedent``,
  },
  (props) =>
    questionMultipleCorrect({
      ...props,
      question: (options) => dedent`
      The compressibility correction to CAS to give EAS:

      ${options}

      The combination regrouping all the correct statements is...
    `,
      select: {
        numberOfCorrectOptions: 2,
        numberOfOptions: 4,
      },
      statements: [
        { correct: "is always negative." },
        { correct: "depends on Mach number only." },
        { wrong: "may be positive." },
        { wrong: "depends on pressure altitude only." },
      ],
    }),
  (props) =>
    questionMultipleCorrect({
      ...props,
      question: (options) => dedent`
      The compressibility correction to CAS to give EAS:

      ${options}

      The combination regrouping all the correct statements is...
    `,
      select: {
        numberOfCorrectOptions: 2,
        numberOfOptions: 4,
      },
      statements: [
        { correct: "is always lower or equal to 1." },
        { correct: "depends on Mach number only." },
        { wrong: "may be greater than 1." },
        { wrong: "depends on pressure altitude only." },
      ],
    })
);
