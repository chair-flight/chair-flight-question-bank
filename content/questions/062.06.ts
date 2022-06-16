import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const Q8CAZ2TIO6 = questionOneCorrect({
  id: "Q8CAZ2TIO6",
  version: 1,
  learningObjectives: ["062.06.02.02.08"],
  question: (subject) => dedent`By using EGNOS in combination with GPS...`,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      the integrity is improved by reducing the mean failure reporting time 
      from up to 3 hours to 6 seconds.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      the errors caused by multi path and noise are eliminated.
    `,
    },
    {
      why: "",
      text: dedent`
      a better position accuracy is obtained but the integrity of the system is 
      not improved.
    `,
    },
    {
      why: "",
      text: dedent`
      no improvements are obtained apart from the redundancy.
    `,
    },
  ],
  explanation: dedent``,
});

export const QRBYAFLHIG = questionOneCorrect({
  id: "QRBYAFLHIG",
  version: 1,
  learningObjectives: ["062.06.02.04.03"],
  question: (subject) => dedent`
    AAIM (Aircraft Autonomous Integrity Monitoring) is a type of Airborne Based 
    Augmentation System that....
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      relies on GNSS information as well as information from additional on-board 
      sensors.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "can only function within the range of a Ground Based Augmentation System.",
    },
    {
      why: "",
      text: "relies on GNSS information only.",
    },
    {
      why: "",
      text: "relies on information from additional on-board sensors only.",
    },
  ],
  explanation: dedent``,
});

export const QHZ7ADCOWQ = questionOneCorrect({
  id: "QHZ7ADCOWQ",
  version: 1,
  learningObjectives: ["062.06.01.02.21"],
  question: (subject) => dedent`
    Referring to the NAVSTAR/GPS satellite navigation system, what is the 
    meaning of the term Receiver Autonomous Integrity Monitoring (RAIM)?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      it is a technique that ensures the integrity of the provided data by 
      redundant measurements.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      it is the ability of the GPS satellites to check the integrity of the 
      data transmitted by the monitoring stations of the ground segment.
    `,
    },
    {
      why: "",
      text: dedent`
      it is a method whereby a receiver ensures the integrity of the Pseudo 
      Random Noise -PRN- code transmitted by the satellites.
    `,
    },
    {
      why: "",
      text: dedent`
      it is a technique whereby the receivers of the world-wide distributed 
      monitor stations – ground segment – automatically determine the integrity 
      of the navigation message.
    `,
    },
  ],
  explanation: dedent``,
});

export const QKWBZ3QGLE = questionOneCorrect({
  id: "QKWBZ3QGLE",
  version: 1,
  learningObjectives: ["062.06.02.01.01"],
  question: (subject) => dedent`
    What does a Ground-Based Augmentation System (GBAS) require?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      One ground station to support an unlimited number of aircraft in the 
      airspace of its jurisdiction.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      At least two ground stations, one for each runway's end.
    `,
    },
    {
      why: "",
      text: dedent`
      One ground station, transmitting on UHF, to send error signals to all 
      the aircraft in the final approach segment.
    `,
    },
    {
      why: "",
      text: dedent`
      At least two ground stations to transmit to arriving aircraft; one to 
      give differential position corrections and the other to give integrity 
      information for each satellite.
    `,
    },
  ],
  explanation: dedent``,
});

export const Q0G8CJZJDW = questionOneCorrect({
  id: "Q0G8CJZJDW",
  version: 1,
  learningObjectives: ["062.06.02.01.04"],
  question: (subject) => dedent`
    What are the two functions of GBAS when the aircraft is approaching the 
    airfield?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      it corrects the aircraft's on-board GPS position and provides the 
      precision approach path details.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      it corrects the aircraft's on-board GPS position and provides the 
      non-precision approach path details.
    `,
    },
    {
      why: "",
      text: dedent`
      it replaces the aircraft's on-board GPS position and provides the precision 
      approach path details.
    `,
    },
    {
      why: "",
      text: dedent`
      it replaces the aircraft's on-board GPS position and provides the 
      non-precision approach path details.
    `,
    },
  ],
  explanation: dedent``,
});

export const MBNASF124A = questionMultipleCorrect({
  id: "MBNASF124A",
  learningObjectives: ["062.06.02.01.03"],
  version: 1,
  statements: [
    {
      wrong: "almanac data",
    },
    {
      correct: "integrety data",
    },
    {
      correct: "approach data",
    },
    {
      wrong: "Receiver noise correction",
    },
  ],
  select: {
    numberOfCorrectOptions: 2,
    numberOfOptions: 4,
  },
  question: (options) => dedent`
    A GBAS system communicates with an aircraft using GPS to provide aircraft 
    with information, including:
              
    ${options}
  `,
  explanation: dedent`
  `,
});

export const QZYCBIM2SZ = questionOneCorrect({
  id: "QZYCBIM2SZ",
  version: 1,
  learningObjectives: ["062.06.02.01.03", "062.02.06.03.01", "062.02.05.03.01"],
  question: (subject) => dedent`
    The minimum coverage of a ${subject} station is approximately...
  `,
  correctOptions: [
    {
      subject: "Ground-Based Augmentation System (GBAS)",
      why: "",
      text: "20 NM",
    },
    {
      subject: "Microwave Landing System (MLS)",
      why: "",
      text: "20 NM",
    },
    {
      subject: "ILS Localiser",
      why: "",
      text: "15 NM",
    },
    {
      subject: "ILS glidescope",
      why: "",
      text: "10 NM",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "30 NM",
    },
    {
      why: "",
      text: "12 NM",
    },
  ],
  explanation: dedent``,
});

export const QMSN9DPLM0 = questionOneCorrect({
  id: "QMSN9DPLM0",
  version: 1,
  learningObjectives: ["062.06.02.02.06", "062.06.02.01.09"],
  question: (subject) => dedent`
    Amongst others, ${subject} allows for the implementation of:
  `,
  correctOptions: [
    {
      subject: "SBAS",
      why: "",
      text: "3D Type-A and Type-B approaches.",
    },
    {
      subject: "GBAS",
      why: "",
      text: "GLS approaches.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "4D FMS approaches.",
    },
    {
      why: "",
      text: "1D Baro-VNAV approaches.",
    },
    {
      why: "",
      text: "2D precision and non-precision approaches.",
    },
    {
      why: "",
      text: "2D precision and non-precision approaches.",
    },
  ],
  explanation: dedent``,
});

export const TER32CQELG = mergeQuestionVariants(
  {
    id: "TER32CQELG",
    version: 1,
    learningObjectives: [
      "062.06.01.01.01",
      "062.06.02.02.07",
      "062.06.02.04.02",
    ],
    options: [
      {
        subject: "GNSS",
        why: "Chinese GNSS System (under construction)",
        text: "BeiDou",
      },
      {
        subject: "GNSS",
        why: "European GNSS System (under construction)",
        text: "Galileo",
      },
      {
        subject: "GNSS",
        why: "American GNSS System (GPS)",
        text: "NAVSTAR",
      },
      {
        subject: "GNSS",
        why: "Russian GNSS System",
        text: "GLONASS",
      },
      {
        subject: "ABAS using only GNSS",
        why: "RAIM stands for Receiver Autonomous Integrity Monitoring",
        text: "RAIM",
      },
      {
        subject: "SBAS",
        why: "European Satellite-based augmentation systems (SBASs)",
        text: "EGNOS",
      },
      {
        subject: "SBAS",
        why: "American Satellite-based augmentation systems (SBASs)",
        text: "WAAS",
      },
      {
        subject: "SBAS",
        why: "Japanse Satellite-based augmentation systems (SBASs)",
        text: "MSAS",
      },
      {
        subject: "SBAS",
        why: "Indian Satellite-based augmentation systems (SBASs)",
        text: "GAGAN",
      },
    ],
    explanation: "",
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      Which of the following is a name of a ${subject} system
    `,
      correctOptions: props.options,
      otherOptions: [],
    }),
  (props) =>
    questionMultipleCorrect({
      ...props,
      question: (options) => dedent`
      Which of the following are names of GNSS systems?

      ${options}
    `,
      statements: props.options.map(({ subject, text }) => ({
        correct: subject === "GNSS" ? text : undefined,
        wrong: subject === "GNSS" ? undefined : text,
      })),
    }),
  (props) =>
    questionMultipleCorrect({
      ...props,
      question: (options) => dedent`
      Which of the following are names of SBAS systems?

      ${options}
    `,
      select: {
        numberOfCorrectOptions: 2,
        numberOfOptions: 5,
      },
      statements: props.options.map(({ subject, text }) => ({
        correct: subject === "SBAS" ? text : undefined,
        wrong: subject === "SBAS" ? undefined : text,
      })),
    })
);

export const BL1KT1K8QH = questionOneCorrect({
  id: "BL1KT1K8QH",
  version: 1,
  learningObjectives: ["062.06.01.01.02"],
  question: (subject) => dedent`
    Which statement is correct with regards to NAVSTAR 
    GPS/GLONASS/GALILEO/BeiDou?
  `,
  correctOptions: [
    {
      subject: "",
      text: dedent`
        All three systems use time measurements to determine position
      `,
      why: dedent`
        This is the basic principle of all GNSS systems
      `,
    },
  ],
  otherOptions: [
    {
      why: dedent`
        All systems use a different frequency and require separate receivers.
      `,
      text: dedent`
        They are all using a common frequency requiring only one receiver to benefit
        of the 3 systems.
      `,
    },
    {
      why: dedent`
        Only GPS and GALILEO use this model. Fun fact! The WGS84 model was 
        designed to produce the least ammount of errors for the continental 
        USA. As such it's often inadequate in distant places like Russia and 
        China.
      `,
      text: dedent`
        All 3 systems are based on the WGS84 ellipsoid
      `,
    },
    {
      why: dedent`
        All these systems are designed to provide better coverage and accuracy 
        for users in the sub-polar zones
      `,
      text: dedent`
        They are the most accurate in Polar areas
      `,
    },
  ],
  explanation: dedent`
  `,
});

export const TOBW00QMBU = questionOneCorrect({
  id: "TOBW00QMBU",
  version: 1,
  learningObjectives: ["062.06.01.02.04"],
  question: [
    () => dedent`
      In which frequency band do GNSS systems transmit their information?
    `,
    () => dedent`
      In which frequency band do GNSS systems transmit their information to civil
      aircraft?
    `,
    () => dedent`
      In which frequency band do GNSS systems transmit their information to military
      aircraft?
    `,
    () => dedent`
      In which frequency band do GNSS systems transmit their information on the L1
      band?
    `,
    () => dedent`
      In which frequency band do GNSS systems transmit their information on the L2
      band?
    `,
  ],
  correctOptions: [{ text: "UHF" }],
  otherOptions: [
    { text: "VHF" },
    { text: "EHF" },
    { text: "SHF" },
    { text: "LF" },
  ],
  explanation: dedent`
  `,
});

export const QQSPK5M7LW = questionOneCorrect({
  id: "QQSPK5M7LW",
  version: 1,
  learningObjectives: ["062.01.01.06.04"],
  question: (subject) => dedent`
    A reason that GPS satellites use helical antennae is
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "that the signal has a circular polarization.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "to achieve better omni directional receiving qualities.",
    },
    {
      why: "",
      text: "to improve the signal to noise ratio.",
    },
    {
      why: "",
      text: "to neutralize the ionospheric delay.",
    },
  ],
  explanation: dedent``,
});
