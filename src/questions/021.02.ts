import dedent from "dedent";
import { questionOneCorrect } from "../base/questionOneCorrect";

export const Q0KKWBVUUO = questionOneCorrect({
  id: "Q0KKWBVUUO",
  version: 1,
  learningObjectives: ["021.02.04.01.10"],
  question: () => dedent`
    Windscreen heating systems usually:
  `,
  correctOptions: [
    {
      id: "Q0KKWBVUUO-1",
      subject: "",
      why: 'This is a "Keep it Simple stupid" system. It\'s also how most cheap eletric kitchen stoves work.',
      text: dedent`
      cycle on/off to maintain a windscreen temperature within a specified 
      range.
    `,
    },
  ],
  otherOptions: [
    {
      id: "Q0KKWBVUUO-0",
      why: "Window heating is AC!",
      text: dedent`
      are powered from the emergency DC Bus.
    `,
    },
    {
      id: "Q0KKWBVUUO-2",
      why: "Window heating is done using electrical current",
      text: dedent`
      consist of warm air from the cabin conditioning system blown across the 
      inner surface of the windscreen.
    `,
    },
    {
      id: "Q0KKWBVUUO-3",
      why: "",
      text: dedent`
      depend upon the pilot monitoring the windscreen temperature probe for 
      control of the heating system.
    `,
    },
  ],
  explanation: dedent``,
});
