import { dedent } from "./base/dedent";
import { mergeQuestionVariants } from "./base/mergeQuestionVariants";
import { questionMultipleCorrect } from "./base/questionMultipleCorrect";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const FPVT3TZPXK = questionOneCorrect({
  id: "FPVT3TZPXK",
  version: 1,
  learningObjectives: ["062.02.01.02.01", "062.02.01.02.02"],
  question: (subject) => dedent`
   What is the Q code for a ${subject}
  `,
  correctOptions: [
    {
      subject: "Magnetic Bearing from a VDF station",
      text: "QDR",
      why: dedent`QDR - Magnetic Bearing from a VDF station`,
    },
    {
      subject: "Magnetic Bearing to a VDF station",
      text: "QDM",
      why: dedent`QDM - Magnetic Bearing to a VDF station`,
    },
    {
      subject: "True Bearing from a VDF station",
      text: "QTE",
      why: dedent`QTE - True Bearing from a VDF station`,
    },
    {
      subject: "True Bearing to a VDF",
      text: "QUJ",
      why: dedent`QUJ - True Bearing to a VDF`,
    },
  ],
  otherOptions: [],
  explanation: dedent`
    Each country / language ends up coming up to mnemonics to memorize these. 
    I ended up going with the spanish one (despite not being a spanish speaker
    myself): 

    - **QDM**: Q de Morro - Q "in the head" - Magnetic with the station in front of you 
    - **QDR**: Q de Rabo - Q "from the arse" - Magnetic with the station in your arse.
    
    For the True bearings, I just remember that  \`it's CUTE(QTE) to go away from the station\`. 
    **QUJ** is the one that is left after that. 
    
    If you have better mnemonics... please contribute :)
  `,
});

export const B018572MHD = questionOneCorrect({
  id: "B018572MHD",
  version: 1,
  learningObjectives: ["062.02.01.04.03"],
  question: (subject) => dedent`
    The VDF class ${subject} bearing is accurate within
  `,
  correctOptions: [
    {
      subject: "A",
      text: "+/- 2º",
      why: "class A",
    },
    {
      subject: "B",
      text: "+/- 5º",
      why: "class B",
    },
    {
      subject: "C",
      text: "+/- 10º",
      why: "class C",
    },
    {
      subject: "D",
      text: "In excess of 10º",
      why: "class D",
    },
  ],
  otherOptions: [
    {
      text: dedent`Less than 1º`,
      why: dedent`No such class is predicted in the annex`,
    },
    {
      text: dedent`+/- 1º`,
      why: dedent`No such class is predicted in the annex`,
    },
  ],
  explanation: dedent`
    - **class A**: +/- 2º
    - **class B**: +/- 5º
    - **class C**: +/- 10º
    - **class D**: In excess of 10º
  `,
});

export const QATJRKDUEQ = questionOneCorrect({
  id: "QATJRKDUEQ",
  version: 1,
  learningObjectives: ["062.02.06.01.03"],
  question: (subject) => dedent`
    MLS is primarily being installed at airports where...
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: dedent`
        ILS encounters difficulties because of surrounding buildings and/or the 
        terrain or interference from local music stations.
      `,
    },
  ],
  otherOptions: [
    {
      why: "",
      text: dedent`
      topographical conditions preclude the installation of ILS marker beacons.
    `,
    },
    {
      why: "",
      text: dedent`
      the main approach paths lead over water.
    `,
    },
    {
      why: "",
      text: dedent`
      meteorological conditions are likely to cause ILS ducting by super 
      refraction.
    `,
    },
  ],
  explanation: dedent``,
});

export const Q1YDKY48UG = questionOneCorrect({
  id: "Q1YDKY48UG",
  version: 1,
  learningObjectives: ["062.02.03.04.02"],
  question: (subject) => dedent`
    A pilot is tracking inbound to a VOR grounds located on an area with varying 
    terrain and  man-made obstructions. 
    
    The pilot notices that the CDI is fluctuating slightly, even though they are 
    constantly and accurately tracking inbound to the  station and there is no
    apparent wind effect.
    
    What is the term used to describe these fluctuations?
  `,
  correctOptions: [
    {
      subject: "",
      why: "",
      text: "Scalloping",
    },
  ],
  otherOptions: [
    {
      why: "",
      text: "Coastal refraction",
    },
    {
      why: "",
      text: "Quadrantal error",
    },
    {
      why: "",
      text: "Night effect",
    },
  ],
  explanation: dedent``,
});
