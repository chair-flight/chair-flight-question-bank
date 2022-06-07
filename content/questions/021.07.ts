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
