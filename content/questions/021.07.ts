import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const VN4NNHQZ8P = questionOneCorrect({
  id: "VN4NNHQZ8P",
  version: 1,
  learningObjectives: ["021.07.01.01.04"],
  question: (subject) => dedent`The ${subject} anti-ice system...`,
  correctOptions: [
    {
      subject: "wing",
      why: "",
      text: "The leading edge or the slats, either partially or completely.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "protects the whole leading edge except for the slats",
    },
    {
      why: "",
      text: "protects the whole leading edge and the whole under wing surface",
    },
    {
      why: "",
      text: "protects the whole upper wing surface and the flaps",
    },
    {
      why: "",
      text: "prevents ice formation on the trailing edge flaps.",
    },
    {
      why: "",
      text: "removes ice formed on the leading edge flaps.",
    },
    {
      why: "",
      text: "removes ice formed on the tail surfaces.",
    },
  ],
  explanation: dedent``,
});

export const QKLCMAHEVX = questionOneCorrect({
  id: "QKLCMAHEVX",
  version: 1,
  learningObjectives: ["021.07.01.01.02"],
  question: () => dedent`
    On most transport aircraft, flight deck windows are protected against icing 
    by...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "electrical heating.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "vinyl coating.",
    },
    {
      why: "",
      text: "rain repellent systems.",
    },
    {
      why: "",
      text: "anti-icing fluid.",
    },
  ],
  explanation: dedent``,
});

export const QJ2QNTTXWK = questionOneCorrect({
  id: "QJ2QNTTXWK",
  version: 1,
  learningObjectives: ["021.07.02.01.01"],
  question: () => dedent`
    A Rosemount Ice Detector provides an indication of ice accretion by 
    measuring the
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "resonant vibration frequency.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "differential temperature.",
    },
    {
      why: "",
      text: "differential air pressure.",
    },
    {
      why: "",
      text: "differential voltage.",
    },
  ],
  explanation: dedent``,
});

export const WNR5OTGE1K = questionOneCorrect({
  id: "WNR5OTGE1K",
  version: 1,
  learningObjectives: ["021.07.02.01.01"],
  question: (subject) => dedent`
    ecrease in dynamic pressure
  `,
  correctOptions: [{ text: dedent`Decrease in dynamic pressure` }],
  otherOptions: [
    { text: dedent`Decrease in static pressure` },
    { text: dedent`Increase in static pressure` },
    { text: dedent`Increase in dynamic pressure` },
  ],
  explanation: dedent`
  `,
});

export const B05R40DDBT = questionOneCorrect({
  id: "B05R40DDBT",
  version: 1,
  learningObjectives: ["021.07.02.01.01"],
  question: (subject) => dedent`
  What best describes a ${subject}?
  `,
  correctOptions: [
    {
      subject: "Pressure differential system",
      text: dedent`
        The total pressure measured at set of small holes is compared against one
        large hole of equal area. When icing conditions are observed, a pressure
        differential between the 2 sets can be measured.
      `,
    },
    {
      subject: "Smith ice detector",
      text: dedent`
        A vane protruding to the airflow has holes in front and the back. When 
        icing conditions are observed, the holes in front of the vane become 
        blocked resulting in a pressure deferential which can be measured.
      `,
    },
    {
      subject: "Rosemount ice detector",
      text: dedent`
        A vibrating rod is placed onto the incoming airflow. When icing 
        conditions are observed the vibration frequency is reduced resulting in 
        an alarm light in the cockpit
      `,
    },
    {
      subject: "Hot rod ice detector",
      text: dedent`
        A rod is installed in a position easily visible from the cockpit and 
        provided with a flood light. Flight deck crew can use it to visually 
        observe the accumulation of ice.
      `,
    },
  ],
  otherOptions: [],
  explanation: dedent`
  `,
});
