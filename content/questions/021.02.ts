import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const Q0KKWBVUUO = questionOneCorrect({
  id: "Q0KKWBVUUO",
  version: 1,
  learningObjectives: ["021.02.04.01.10"],
  question: () => dedent`
    Windscreen heating systems usually:
  `,
  correctOptions: [
    {
      subject: "",
      why: dedent`
        This is a "Keep it Simple stupid" system. It's also how most cheap 
        electric kitchen stoves work.
      `,
      text: dedent`
      cycle on/off to maintain a windscreen temperature within a specified 
      range.
    `,
    },
  ],
  otherOptions: [
    {
      why: "Window heating is AC!",
      text: dedent`
      are powered from the emergency DC Bus.
    `,
    },
    {
      why: "Window heating is done using electrical current",
      text: dedent`
      consist of warm air from the cabin conditioning system blown across the 
      inner surface of the windscreen.
    `,
    },
    {
      why: "",
      text: dedent`
      depend upon the pilot monitoring the windscreen temperature probe for 
      control of the heating system.
    `,
    },
  ],
  explanation: dedent``,
});

export const MQJFFJJQO6 = questionOneCorrect({
  id: "MQJFFJJQO6",
  version: 1,
  learningObjectives: ["021.02.04.01.10"],
  question: (subject) => dedent`
    Cockpit indications associated with a windscreen heating system usually
    comprise of...
  `,
  correctOptions: [
    {
      subject: "",
      text: dedent`
        A green system "ON" information light and an amber system failure light
      `,
      why: dedent`This is the setup on the 737`,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        No indications are usually installed. Only the position of the 
      switch is used.
      `,
      why: dedent`
      `,
    },
    {
      text: dedent`
        Green or Blue lights that switch ON/OFF according to the current state 
        of the heating elements.
      `,
      why: dedent`
      `,
    },
    {
      text: dedent`
        An amber system "ON" information light and a red system failure light
      `,
      why: dedent`
      `,
    },
  ],
  explanation: dedent`
    Not really part of the LO. Typically EASA likes to use the 737 as a
    reference as the "most common used" setup.
  `,
});

export const PE0CKDB02M = questionOneCorrect({
  id: "PE0CKDB02M",
  version: 1,
  learningObjectives: ["021.02.06.01.04"],
  question: () => dedent`
    What is it the main reason that makes it undesirable for an aeroplane 
    designed for long distance flights to be used for short distances?
  `,
  correctOptions: [
    {
      subject: "",
      text: dedent`
        The lifetime of the fatigue sensitive parts has been based on a 
        determined load spectrum.
      `,
      why: dedent`
      `,
    },
  ],
  otherOptions: [
    {
      text: dedent`
        The procedures and check lists would be too long for short flights.
      `,
      why: dedent`
      `,
    },
    {
      text: dedent`
        The fuel consumption for these type of aeroplanes would be excessive in 
        such short flights.
      `,
      why: dedent`
      `,
    },
    {
      text: dedent`
        The fuel tanks would be mostly empty causing stresses at the wing joint 
        that would otherwise not be common.
      `,
      why: dedent`
      `,
    },
  ],
  explanation: dedent`
    All the provided answers are, in a way, correct. However the greatest 
    limitation on an airframe lifetime, is the amount of 
    compression-decompression cycles that it goes through. Most long range 
    aircraft have lifespans significantly higher than a smaller aircraft, 
    because they undergo one or two compression cycles a day, 
    instead of 6 or more.

    Using aircraft designed for long-range flights in short flights would 
    greatly diminish their lifespan, and severely impact their economic return.
  `,
});
