import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const QH4WX8FA9F = questionOneCorrect({
  id: "QH4WX8FA9F",
  version: 1,
  learningObjectives: ["022.03.01.01.03"],
  question: () => dedent`
    The dip angle in the terrestrial magnetic field is given by the 
    following equation...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "dip = cos<sup>-1</sup>(H/T)",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "dip = sin<sup>-1</sup>(H/T)",
    },
    {
      why: "",
      text: "dip = 12 x T/H",
    },
    {
      why: "",
      text: "dip = T/Z",
    },
  ],
  explanation: dedent`
    This question is a bit tricky since it relies on you memorizing what 
    H and T are...

    - H is the Horizontal component of the magnetic field
    - T is the total component of the magnetic field.
    
    Now, you just need to remember that Dip is 0 at the equator and maximum
    at the poles. In other words, H is maximum at the equator and 0 at the 
    poles.

    The $$arccos(0) = 1$$ and $$arccos(1) = 0$$. So for the equator you 
    would have $$H = T$$ and $$dip = 0$$. for this to add up only one equation
    can be true...

    \`\`\`
    dip = cos<sup>-1</sup>(H/T
    \`\`\`
  `,
});

export const Q9CJP6U1EU = questionOneCorrect({
  id: "Q9CJP6U1EU",
  version: 1,
  learningObjectives: ["022.03.02.01.01", "022.03.02.01.03"],
  question: (subject) => dedent`
    Permanent magnetism in aircraft arises chiefly from...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
      hammering, and the effect of the Earth's magnetic field, whilst under 
      construction.
    `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      exposure to the Earth's magnetic field during normal operation.
    `,
    },
    {
      why: "",
      text: dedent`
      the combined effect of aircraft electrical equipment and the Earth's 
      magnetic field.
    `,
    },
    {
      why: "",
      text: dedent`
      the effect of internal wiring and exposure to electrical storms.
    `,
    },
  ],
  explanation: dedent``,
});
