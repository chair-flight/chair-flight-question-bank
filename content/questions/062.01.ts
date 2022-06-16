import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const P5P7CQDKEB = questionOneCorrect({
  id: "P5P7CQDKEB",
  version: 1,
  learningObjectives: ["062.01.01.01.01"],
  question: (subject) => dedent`
    What is the speed of light (approximately)?
  `,
  correctOptions: [{ text: "300 000 km/s" }, { text: "30 000 000 m/s" }],
  otherOptions: [
    { text: "30 00 000 km/s" },
    { text: "300 000 000 m/s" },
    { text: "300 000 m/s" },
    { text: "150 000 km/s" },
    { text: "15 000 000 m/s" },
    { text: "15 00 000 km/s" },
    { text: "150 000 000 m/s" },
    { text: "150 000 m/s" },
    { text: "600 000 km/s" },
    { text: "60 000 000 m/s" },
    { text: "60 00 000 km/s" },
    { text: "600 000 000 m/s" },
    { text: "600 000 m/s" },
    { text: "800 m/s" },
  ],
  explanation: dedent`
    Memorize 300 000 km/s. Or, if you don't like counting zeroes, \`3E8\` 
    meters.
  `,
});

export const S5U3V6O7Y0 = questionOneCorrect({
  id: "S5U3V6O7Y0",
  version: 1,
  learningObjectives: [
    "062.01.01.01.02",
    "062.01.01.02.01",
    "062.01.01.02.02",
    "062.01.01.02.03",
    "062.01.01.02.05",
    "062.01.01.02.06",
  ],
  question: (subject) => dedent`What is the definition of **${subject}**?`,
  correctOptions: [
    {
      subject: "Cycle",
      why: "Definition of cycle",
      text: dedent`
            A complete series of values of a periodical process.
        `,
    },
    {
      subject: "Phase",
      why: "Definition of Phase",
      text: dedent`
    The fraction of one wavelength expressed in degrees from 000 degrees to 360
    degrees
`,
    },
    {
      subject: ["Phase Angle Difference", "Phase Angle Shift"],
      why: "Definition of Phase Angle Difference/Shift",
      text: dedent`
      The angular difference between the corresponding points of two cycles of equal
      wavelength, which is measurable in degrees.
    `,
    },
    {
      subject: "Wavelength",
      why: "Definition of wavelength",
      text: dedent`
        The physical distance travelled by a radio wave during one cycle of
        transmission.
      `,
    },
    {
      subject: "Amplitude",
      why: "Definition of amplitude",
      text: dedent`
        The maximum deflection in an oscillation or wave.
      `,
    },
    {
      subject: "Frequency",
      why: "Definition of frequency",
      text: dedent`
        the number of cycles occurring in 1 second expressed in Hertz(Hz).
      `,
    },
  ],
  otherOptions: [
    {
      why: dedent`
        Very close to the definition of Phase, with the correct definition being 
        &#x22;The fraction of one wave...&#x22;
      `,
      text: dedent`
        The deflection of one wavelength expressed in degrees from 000 degrees 
        to 360 degrees
      `,
    },
    {
      why: dedent`
        Very close to the definition of Phase, with the correct definition being 
        \`The fraction of one wave...\`,
      `,
      text: dedent`
        The position of one wavelength expressed in degrees from 000 degrees to 
        360 degrees
      `,
    },
  ],
  explanation: dedent`
  `,
});

export const QDSLHQ997S = questionOneCorrect({
  id: "QDSLHQ997S",
  version: 1,
  learningObjectives: ["062.01.01.03.01"],
  question: (subject) => dedent`
    ${subject} appears in the frequency spectrum of...
  `,
  correctOptions: [
    { subject: "VLF", text: "3-30 kHz" },
    { subject: "LF", text: "30-300 kHz" },
    { subject: "MF", text: "300-3 000 kHz" },
    { subject: "HF", text: "3-30 MHz" },
    { subject: "VHF", text: "30-300 MHz" },
    { subject: "UHF", text: "300-3 000 MHz" },
    { subject: "SHF", text: "3-30 GHz" },
    { subject: "EHF", text: "30-300 GHz" },
  ],
  otherOptions: [],
  explanation: dedent`
    - **VLF**:3-30 kHz
    - **LF**:30-300 kHz
    - **MF**:300-3 000 kHz
    - **HF**:3-30 MHz
    - **VHF**:30-300 MHz
    - **UHF**:300-3 000 MHz
    - **SHF**:3-30 GHz
    - **EHF**:30-300 GHz
  `,
});

export const QDSLHQ9973 = questionOneCorrect({
  id: "QDSLHQ9973",
  version: 1,
  learningObjectives: [
    "062.01.01.03.01",
    "062.02.01.01.01",
    "062.02.04.01.01",
    "062.02.06.01.02",
  ],
  question: (subject) => dedent`
  The ${subject} uses the following wave lengths....
  `,
  correctOptions: [
    {
      subject: "VHF direction finder",
      text: dedent`
        Metric
      `,
      why: dedent`
        VHF range is between 30-300Mhz. When we divide the speed of light by 
        this value we get a wave length between 1 and 10 metres.
      `,
    },
    {
      subject: "Distance Measuring Equipment (DME)",
      text: dedent`
        Decimetric
      `,
      why: dedent`
        DME range is between 960 - 1213 MHz in the UHF band. When we divide the 
        speed of light by this value we get a wave length between 0.3 and 0.24 
        metres.
      `,
    },
    {
      subject: "Microwave Landing System (MLS)",
      text: dedent`
        Centimetric
      `,
      why: dedent`
        MLS uses SHF, which is between  3-30 GHz. hen we divide the speed of 
        light by this value we get a wave length between 1 and 10 centimetres.
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        Hectometric
      `,
      why: dedent`
      `,
    },
  ],
  explanation: dedent`
    This question is really asking you the order of magnitude of the amplitude
    for waves used in givent spectrum.

    For VHF (30-300 MHz) transmissions:

    $$
    \\frac{3\\times10^{8} m/s}{(30 - 300)\\times10^{6} hz} \\approx (1 - 10)m
    $$

    The best answer is therefore metres.

    For DME (960 - 1213 MHz)

    $$
    \\frac{3\\times10^{8} m/s}{(960 - 1213)\\times10^{6} hz} \\approx (0.24 - 0.3)m
    $$

    The best answer is therefore Decimetres (0.1 metres = 1 Decimetre).

    For MLS, you are supposed to remember SHF (3-30 GHz) is used

    $$
    \\frac{3\~times10^{8} m/s}{(3 - 30)\\times10^{9} hz} \\approx (1 - 10)cm.
    $$
  `,
});

export const V4KVQ84KWM = questionOneCorrect({
  id: "V4KVQ84KWM",
  version: 1,
  learningObjectives: ["062.01.01.03.04"],
  question: (subject) => dedent`
    In light of the classifications according to International Telecommunication
    Union (ITU) regulations, what does the ${subject} symbol indicate? 
    
    (i.e.: A2A)
  `,
  correctOptions: [
    {
      subject: "First",
      text: [
        dedent`Type of modulation of the main carrier`,
        dedent`Nature of modulation of the main carrier`,
      ],
      why: dedent`Definition for first symbol`,
    },
    {
      subject: "Second",
      text: [
        dedent`Type of the signals Modulating the main carrier`,
        dedent`Nature of the signals Modulating the main carrier`,
      ],
      why: dedent`Definition for Second symbol`,
    },
    {
      subject: "Third",
      text: [
        dedent`Type of Information being transmitted`,
        dedent`Nature of the Information being transmitted`,
      ],
      why: dedent`Definition for Third symbol`,
    },
  ],
  otherOptions: [
    {
      text: [
        dedent`Type of modulation of the secondary carrier`,
        dedent`Nature of modulation of the secondary carrier`,
      ],
      why: dedent`Definition for Third symbol`,
    },
  ],
  explanation: dedent`
    - **First symbol**: Type of modulation of the main carrier
    - **Second symbol**: Type of the signals Modulating the main carrier
    - **Third symbol**: Type of Information being transmitted
  `,
});

export const V4KVQ84KWJ = questionOneCorrect({
  id: "V4KVQ84KWJ",
  version: 1,
  learningObjectives: ["062.01.01.03.03"],
  question: (subject) => dedent`
    Where is Single Side Band used?
  `,
  correctOptions: [
    {
      text: dedent`in HF two-way communication`,
    },
    {
      text: dedent`in VOLMET transmissions`,
    },
  ],
  otherOptions: [
    {
      text: dedent`in METAR transmissions`,
      why: dedent`
        METARs transmissions are not a thing. only VOLMET and MET reports exist.
        VOLMETs are transmitted using SSB while MET Reports are not.
      `,
    },
    {
      text: "in NDB transmissions",
    },
    {
      text: "in VHF transmissions",
    },
  ],
  explanation: dedent`
  `,
});

export const VLXPD8Y1OR = mergeQuestionVariants(
  {
    id: "VLXPD8Y1OR",
    version: 1,
    learningObjectives: ["062.01.02.03.01"],
    correctOptions: [
      {
        subject: "directional",
        text: dedent`Loop Antenna`,
        why: dedent`
      `,
      },
      {
        subject: "directional",
        text: dedent`Parabolic Antenna`,
        why: dedent`
        Parabolic antennas are the kind you usually see in rooftops. By their 
        design alone you can see they are meant to emit or receive signals 
        from one particular direction.
      `,
      },
      {
        subject: "directional",
        text: dedent`Slotted planar Antenna`,
        why: dedent`
        Slotted planar antenas use a flat surface with a slot facing a specific 
        direction to emit or receive signals
      `,
      },
      {
        subject: "directional",
        text: dedent`Helical Antenna`,
        why: dedent`
      `,
      },

      {
        subject: "omni-directional",
        text: dedent`Dipole Antenna`,
        why: dedent`
         dipole are the simplest of antennas and emit en every direction
      `,
      },
      {
        subject: "omni-directional",
        text: dedent`Sense antenna`,
        why: dedent`
      `,
      },
    ],
    explanation: dedent`
  `,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: (subject) => dedent`
      Which of these is a ${subject} antenna?
    `,
      otherOptions: [],
    }),
  ({ correctOptions, ...props }) =>
    questionMultipleCorrect({
      ...props,
      question: (options) => dedent`
      Which of the following designs are considered to be directional
      antennas?

      ${options}
   `,
      statements: correctOptions.map(({ subject, text }) => ({
        correct: subject === "directional" ? text : undefined,
        wrong: subject !== "directional" ? text : undefined,
      })),
    }),
  ({ correctOptions, ...props }) =>
    questionMultipleCorrect({
      ...props,
      question: (options) => dedent`
      Which of the following designs are considered to be omni-directional
      antennas?

      ${options}
   `,
      statements: correctOptions.map(({ subject, text }) => ({
        correct: subject === "directional" ? text : undefined,
        wrong: subject !== "directional" ? text : undefined,
      })),
    })
);

export const QRCXSIERSZ = questionOneCorrect({
  id: "QRCXSIERSZ",
  version: 1,
  learningObjectives: ["062.01.03.06.03", "062.02.02.03.04"],
  question: (subject) => dedent`
    Which failure in radio navigation is connected with "Fading"?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "Twilight/night Effect",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "Mountain Effect",
    },
    {
      why: "",
      text: "Shoreline/coastal Effect",
    },
    {
      why: "",
      text: "Static Discharge",
    },
  ],
  explanation: dedent``,
});

export const QM4EOUYRNE = questionOneCorrect({
  id: "QM4EOUYRNE",
  version: 1,
  learningObjectives: ["062.01.02.03.02"],
  question: (subject) => dedent`
    What is correct regarding antenna shadowing?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      Reduced reception by an antenna when part of the airframe blocks the 
      signal to the antenna.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      Terrain blocking the path between the transmitter and receiver/aircraft 
      antenna.
    `,
    },
    {
      why: "",
      text: dedent`
      Protection of a radar-reception antenna from the strong signals produced 
      by a nearby transmission antenna.
    `,
    },
    {
      why: "",
      text: dedent`
      Poor reception of GPS signals due to very weak signals compared to the 
      background noise at that frequency.
    `,
    },
  ],
  explanation: dedent``,
});

export const Q8G5ZMLUPE = questionOneCorrect({
  id: "Q8G5ZMLUPE",
  version: 1,
  learningObjectives: ["062.01.03.06.01"],
  question: () => dedent`
    The skip distance is...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      the distance from transmitter to earth surface up to the point where the 
      first sky wave can be received
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      the distance from transmitter to the maximum range of the ground wave
    `,
    },
    {
      why: "",
      text: dedent`
      the distance from transmitter to the maximum range of the sky wave
    `,
    },
    {
      why: "",
      text: dedent`
      the distance from transmitter to an obstacle which limits the extension 
      of the ground wave
    `,
    },
  ],
  explanation: dedent``,
});
