import { dedent } from "./base/dedent";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const BNCAMAS1C = questionOneCorrect({
  id: "BNCAMAS1C",
  version: 1,
  learningObjectives: ["022.15.01.01.01"],
  question: (subject) => dedent`
    What is the definition of computer?
  `,
  correctOptions: [
    {
      text: "A machine for manipulating data according to a list of instructions.",
    },
  ],
  otherOptions: [
    {
      text: " A digital circuit that performs basic operations.",
      why: "Definition of an arithmetic and logic unit (ALU).",
    },
    {
      why: "Not necessarily true: computers predate microprocessors by a few decades.",
      text: "Definition of an arithmetic and logic unit (ALU).",
    },
    {
      text: "a component, normally called a CPU, that performs instructions stored in memory.",
      why: "Not a very accurate definition since a computer typically includes memory to store instructions and data.",
    },
  ],
  explanation: dedent`
  `,
});

export const ST5T542R78 = questionOneCorrect({
  id: "ST5T542R78",
  version: 1,
  learningObjectives: ["022.15.01.01.01", "022.15.01.01.02", "022.15.01.01.03"],
  question: (subject) => dedent`
    In the domain of computer terminology, 
    what is the definition of ${subject}?
  `,
  correctOptions: [
    {
      subject: "a bus",
      text: dedent`
        A facility responsible for  transferring data between different parts 
        of a computer, both internally and externally.
      `,
      why: "",
    },
    {
      subject: "hardware",
      text: "A collection of physical components that together make a computer",
      why: "",
    },
    {
      subject: "software",
      text: "A set of instructions that can be stored and run by computer.",
    },
    {
      subject: "Operating system",
      text: "The programme that controls a computer`s basic functions.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "The central processing unit`s control unit.",
    },
    {
      why: "",
      text: "The control display unit that allows computer control.",
    },
  ],
  explanation: dedent`
    Technically The LOs only require you to know what is the definition of 
    Software, Hardware, and Bus. But some other things are still asked :/
  `,
});

export const QFUHY1DTEI = questionOneCorrect({
  id: "QFUHY1DTEI",
  version: 1,
  learningObjectives: ["022.15.01.01.XX"],
  question: (subject) => dedent`
    A computer memory can consist of…
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "capacitors.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "voltage.",
    },
    {
      why: "",
      text: "resistors.",
    },
    {
      why: "",
      text: "diodes.",
    },
  ],
  explanation: dedent``,
});

export const QJVYJ2HSCB = questionOneCorrect({
  id: "QJVYJ2HSCB",
  version: 1,
  learningObjectives: ["022.15.01.01.XX"],
  question: (subject) => dedent`
    For internal communication with the memory, the central processing unit 
    makes use of...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "three buses: one address bus, one data bus, and one control bus.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "four buses: two parallel buses and two series buses.",
    },
    {
      why: "",
      text: "two unidirectional buses for two-way communication.",
    },
    {
      why: "",
      text: "one bidirectional bus for two-way communication.",
    },
  ],
  explanation: dedent``,
});

export const Q4WPQ939DC = questionOneCorrect({
  id: "Q4WPQ939DC",
  version: 1,
  learningObjectives: ["022.15.01.01.XX"],
  question: (subject) => dedent`
    If an aircraft software failure is classified as Level A, it refers to 
    the following severity of failure:
  `,
  correctOptions: [
    {
      subject: "A",
      text: "catastrophic",
    },
    {
      subject: "B",
      text: "Hazardous",
    },
    {
      subject: "C",
      text: "Major",
    },
    {
      subject: "D",
      text: "Minor",
    },
    {
      subject: "D",
      text: "Minor",
    },
    {
      subject: "E",
      text: "No Effect",
    },
  ],
  otherOptions: [],
  explanation: dedent`
    Out of the 2020 LOs....

    - **"A"**: catastrophic
    - **"B"**: Hazardous
    - **"C"**: Major
    - **"D"**: Minor
    - **"D"**: Minor
    - **"E"**: No Effect
  `,
});

export const Q4WPQDAS9C = questionMultipleCorrect({
  id: "Q4WPQDAS9C",
  version: 1,
  learningObjectives: ["022.15.01.01.04"],
  question: (subject) => dedent`
    Which of these systems can be categorized as an airborne computer along
    with peripheral equipment?
  `,
  statements: [
    { correct: "ADC with pitot probe(s),static port(s) and indicators" },
    { correct: "FMS with GPS, CDU/MCDU and ND" },
    { correct: "GPWS with radio altimeter, ADC and ND" },
    { wrong: "The air driven gyroscopic instruments and their displays" },
  ],
  explanation: dedent`
  `,
});
