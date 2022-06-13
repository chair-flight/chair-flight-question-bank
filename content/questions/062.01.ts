import { dedent } from "./base/dedent";
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
