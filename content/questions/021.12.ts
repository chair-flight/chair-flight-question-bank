import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const QJ1YAH5TJJ = questionOneCorrect({
  id: "QJ1YAH5TJJ",
  version: 1,
  learningObjectives: ["021.12.02.02.01"],
  question: () => dedent`
    If an engine fire detection loop is broken, what indication will the system
    give when the  fire warning system is tested for that engine?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "No indication or a fault alert.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "A fault alert and a fire warning light.",
    },
    {
      why: "",
      text: "A fault alert and a fire warning bell.",
    },
    {
      why: "",
      text: "A fault alert and a red master warning light.",
    },
  ],
  explanation: dedent``,
});

export const QYF5KU1GMF = questionOneCorrect({
  id: "QYF5KU1GMF",
  version: 1,
  learningObjectives: ["021.12.02.02.02"],
  question: () => dedent`
    If a gas-filled engine fire detection loop is broken, the result will be...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "a decrease in pressure, causing a loop fault indication.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "an increase in pressure, causing a fire warning.",
    },
    {
      why: "",
      text: "a decrease in pressure, causing a fire warning.",
    },
    {
      why: "",
      text: "an increase in pressure, causing a loop fault indication.",
    },
  ],
  explanation: dedent`
    A gaseous loop indicator is triggered when the pressure inside the loop
    increases due to an increase of temperature. A rupture in the tube has
    the opposite effect reducing the pressure. 
    
    This allows to distinguish between a faulty state and a fire state.
  `,
});

export const QRYNQ9UIYU = questionOneCorrect({
  id: "QRYNQ9UIYU",
  version: 1,
  learningObjectives: ["021.12.02.02.02"],
  question: () => dedent`
    Gas-filled fire detectors work on the principle that heat causes the 
    internal pressure to..
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "increase, causing a fire warning indication.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "reduce, causing a fire warning indication.",
    },
    {
      why: "",
      text: "reduce, causing a loop fault indication.",
    },
    {
      why: "",
      text: "increase, causing a loop fault indication.",
    },
  ],
  explanation: dedent`
    A gaseous loop indicator is triggered when the pressure inside the loop
    increases due to an increase of temperature. A rupture in the tube has
    the opposite effect reducing the pressure. 
  `,
});

export const QA4RSZFTUS = mergeQuestionVariants(
  {
    id: "QA4RSZFTUS",
    version: 1,
    learningObjectives: ["021.12.01.01.01"],
    explanation: dedent``,
  },
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
    Optical smoke detectors work on the principle that smoke particles...
  `,
      correctOptions: [
        {
          subject: "",
          why: "",
          text: "reflect and scatter light.",
        },
      ],
      otherOptions: [
        {
          why: "",
          text: "are negatively charged.",
        },
        {
          why: "",
          text: "are positively charged.",
        },
        {
          why: "",
          text: "are visible using internal optical lenses.",
        },
      ],
    }),
  (props) =>
    questionOneCorrect({
      ...props,
      question: () => dedent`
      Which of these correctly describes a smoke detection mechanism:
    `,
      correctOptions: [
        {
          text: dedent`
          Labyrinth detector: Light reflects towards the photosensitive cell 
          and the labyrinth has a shielding function
        `,
        },
        {
          text: dedent`
          Light attenuation detector: Detect the diffusion of a beam of light
          which occurs when the beam is interrupted by smoke
        `,
        },
      ],
      otherOptions: [
        {
          why: "",
          text: dedent`
          Labyrinth detector: The photosensitive cell is blocked from the light by smoke
        `,
        },
        {
          why: "",
          text: dedent`
         Labyrinth detector: Light reflects away from the photosensitive cell
        `,
        },
        {
          why: "",
          text: dedent`
          Light Attenuation Detector: Light reflects away from the 
          photosensitive cell
        `,
        },
        {
          why: "",
          text: dedent`
          Light Attenuation Detector: Light reflects towards the photosensitive 
          cell and the labyrinth has a shielding function
        `,
        },
      ],
    })
);

export const QKXCOQUSZ6 = questionOneCorrect({
  id: "QKXCOQUSZ6",
  version: 1,
  learningObjectives: ["021.12.02.01.01"],
  question: () => dedent`
    In the event of a fire in a gas turbine engine...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "the fuel supply is isolated from the engine by pilot action.",
    },
    {
      subject: "",
      why: "",
      text: "the engine fire extinguisher is discharged by pilot action.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "the fuel installation is protected by an automatic fire extinguishing system.",
    },
    {
      why: "",
      text: "an automatic shut off valve is moved to the closed position controlled by the fire sensing system.",
    },
    {
      why: "",
      text: "the fuel supply is disconnected by a quick release coupling.",
    },
    {
      why: "",
      text: "the engine fire extinguisher is automatically activated.",
    },
  ],
  explanation: dedent`
    Despite the increasing automation of modern airplanes, in case of engine
    fire some operations still require manual intervention by the pilot. 

    The two most notable manual pilot actions are:
    - Shutting off Fuel supply to the affected engine
    - Discharging the fire extinguisher
  `,
});

export const QPBIISLIBJ = questionOneCorrect({
  id: "QPBIISLIBJ",
  version: 1,
  learningObjectives: ["021.12.02.02.01"],
  question: () => dedent`
    In a resistive single-loop continuous fire detection system without fault 
    protection, if the outer capillary tube is inadvertently crushed and the 
    inner core contacts the outer casing...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "the fire alarm is triggered.",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "there will be no effect on the system",
    },
    {
      why: "",
      text: "the power supply is cut off automatically.",
    },
    {
      why: "",
      text: "the main engine fire extinguisher is automatically activated.",
    },
  ],
  explanation: dedent`

  `,
});
