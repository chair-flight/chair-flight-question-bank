import { dedent } from "../base/dedent";
import { questionOneCorrect } from "../base/questionOneCorrect";

export const VN4NNHQZ8P = questionOneCorrect({
  id: "VN4NNHQZ8P",
  version: 1,
  learningObjectives: ["021.07.01.01.04"],
  question: (subject) => dedent`The ${subject} anti-ice system...`,
  correctOptions: [
    {
      id: "VN4NNHQZ8P-1",
      subject: "wing",
      why: "",
      text: "The leading edge or the slats, either partially or completely.",
    },
  ],
  otherOptions: [
    {
      id: "VN4NNHQZ8P-1",
      why: "",
      text: "protects the whole leading edge except for the slats",
    },
    {
      id: "VN4NNHQZ8P-2",
      why: "",
      text: "protects the whole leading edge and the whole under wing surface",
    },
    {
      id: "VN4NNHQZ8P-3",
      why: "",
      text: "protects the whole upper wing surface and the flaps",
    },
    {
      id: "VN4NNHQZ8P-4",
      why: "",
      text: "prevents ice formation on the trailing edge flaps.",
    },
    {
      id: "VN4NNHQZ8P-5",
      why: "",
      text: "removes ice formed on the leading edge flaps.",
    },
    {
      id: "VN4NNHQZ8P-6",
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
      id: "QKLCMAHEVX-2",
      subject: "",
      why: "",
      text: "electrical heating.",
    },
  ],
  otherOptions: [
    {
      id: "QKLCMAHEVX-0",
      why: "",
      text: "vinyl coating.",
    },
    {
      id: "QKLCMAHEVX-1",
      why: "",
      text: "rain repellent systems.",
    },
    {
      id: "QKLCMAHEVX-3",
      why: "",
      text: "anti-icing fluid.",
    },
  ],
  explanation: dedent``,
});
