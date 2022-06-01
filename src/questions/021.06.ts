import { dedent } from "../base/dedent";
import { questionOneCorrect } from "../base/questionOneCorrect";

export const QQW4B4EAVJ = questionOneCorrect({
  id: "QQW4B4EAVJ",
  version: 1,
  learningObjectives: ["021.06.03.01.04"],
  question: () => dedent`
    In a typical bootstrap cooling system, the supply air is..
  `,
  correctOptions: [
    {
      id: "QQW4B4EAVJ-2",
      subject: "",
      why: "",
      text: dedent`
        compressed, passed through a secondary heat exchanger, and then across 
        an expansion turbine.
      `,
    },
    {
      id: "QQW4B4EAVJ-2",
      subject: "",
      why: "",
      text: dedent`
        passed through a aprimary heat exchanger, and then across a compressor 
        and a secondary heat exchanger
      `,
    },
  ],
  otherOptions: [
    {
      id: "QQW4B4EAVJ-0",
      why: "",
      text: dedent`
        passed across an expansion turbine, then through a secondary heat 
        exchanger and then across a compressor.
      `,
    },
    {
      id: "QQW4B4EAVJ-1",
      why: "",
      text: dedent`
        passed across an expansion turbine, then directly to the heat exchanger.
      `,
    },
    {
      id: "QQW4B4EAVJ-3",
      why: "",
      text: dedent`
        passed across an expansion turbine, then compressed and passed through 
        a secondary heat exchanger.
      `,
    },
  ],
  explanation: dedent`
    1. Hot Bleed air from the engine 
    2. primary heat exchanger
    3. Compressor
    4. Secondary heat exchange
    5. Expansion turbine
    6. Dehumidifier
    7. Humidity and temperature control
  `,
});
