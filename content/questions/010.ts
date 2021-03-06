import { dedent } from "./base/dedent";
import { questionOneCorrect } from "./base/questionOneCorrect";

export const Q2EHB3BFME = questionOneCorrect({
  id: "Q2EHB3BFME",
  version: 1,
  learningObjectives: ["010.01.01.01.01", "010.01.02.03.01"],
  question: (subject) => dedent`
    The convention ${subject} took place in...
  `,
  correctOptions: [
    {
      subject: "establishing the International civil aviation organization",
      text: "Chicago 1944",
      why: "Chicago Convention: Established the International civil aviation organization",
    },
    {
      subject: "on offences and certain acts committed on board aircraft",
      text: "Tokyo 1963",
      why: "Tokyo convention: deals with offences and certain acts committed on board aircraft",
    },
  ],
  otherOptions: [
    {
      text: "Warsaw 1929",
      why: "",
    },
    {
      text: "Chicago 1929",
      why: "chicago convention was in 1944",
    },
    {
      text: "Montreal 1948",
      why: "",
    },
  ],
  explanation: dedent`
    You need to make yourself familiar with the following conventions:

    - Chicago Convention: Established the International civil aviation 
      organization
    - Tokyo convention: deals with offences and certain acts committed on 
      board aircraft
  `,
});

export const Q2KVB38UME = questionOneCorrect({
  id: "Q2KVB38UME",
  version: 1,
  learningObjectives: ["010.01.01.03.03"],
  question: (subject) => dedent`
    Annex ${subject} to the convention on internation civil aviation contains 
    SARPS for
  `,
  correctOptions: [
    {
      subject: "1",
      why: "1: Personnel Licensing -- 'Obtaining your license is priority 1'",
      text: "Personnel Licensing",
    },
    {
      subject: "2",
      why: "2: Rules of the Air -- '2 rules of the Air, VFR and IFR'",
      text: "Rules of the Air",
    },
    {
      subject: "3",
      why: "3: Meteorological Services -- '3º DALR'",
      text: "Meteorological Services",
    },
    {
      subject: "4",
      why: "4: Aeronautical Charts -- '4 cardinal points'",
      text: "Aeronautical Charts",
    },
    {
      subject: "5",
      why: "5: Units of Measurement -- 'CRP5'",
      text: "Units of Measurement",
    },
    {
      subject: "6",
      why: "6: Operation of Aircraft -- 'DC6 is an aircraft ¯\\_(ツ)_/¯'",
      text: "Operation of Aircraft",
    },
    {
      subject: "7",
      why: "7: Aircraft Nationality and Registration Marks -- 'The league of the 7 nations'",
      text: "Aircraft Nationality and Registration Marks",
    },
    {
      subject: "8",
      why: "8: Airworthiness of Aircraft -- '8 looks like a propeller'",
      text: "Airworthiness of Aircraft",
    },
    {
      subject: "9",
      why: "9: Facilitation -- 'NEIN NEIN 9'",
      text: "Facilitation",
    },
    {
      subject: "10",
      why: "10: Aeronautical Telecommunications -- 'Press 100 for operator'",
      text: "Aeronautical Telecommunications",
    },
    {
      subject: "11",
      why: "11: Air Traffic Services -- '1 to 1 communications'",
      text: "Air Traffic Services",
    },
    {
      subject: "12",
      why: "12: Search and Rescue -- 'The one before the accident investigation",
      text: "Search and Rescue",
    },
    {
      subject: "13",
      why: "13: Aircraft Accident and Incident Investigation -- '13 is bad luck'",
      text: "Aircraft Accident and Incident Investigation",
    },
    {
      subject: "14",
      why: "14: Aerodromes -- '14 aerodromes around Heathrow'",
      text: "Aerodromes",
    },
    {
      subject: "15",
      why: "15: Aeronautical Information Services -- '15 looks like IS (Information Services'",
      text: "Aeronautical Information Services",
    },
    {
      subject: "16",
      why: "16: Environmental Protection -- 'At 16 you should cary protection ¬‿¬'",
      text: "Environmental Protection",
    },
    {
      subject: "17",
      why: "17: Security -- '17 foot fence'",
      text: "Security",
    },
    {
      subject: "18",
      why: "18: The Safe Transportation of Dangerous Goods by Air -- 'At 18 you can start drinking (alcohol is a dangerous good'",
      text: "The Safe Transportation of Dangerous Goods by Air",
    },
    {
      subject: "19",
      why: "19: Safety Management -- '????'",
      text: "Safety Management",
    },
  ],
  otherOptions: [],
  explanation: dedent`
    Summary of the annexes to the convention with funny mnemonics ;)

    | Annex |                 Title                             | Mnemonic                                                         |
    |-------|---------------------------------------------------|------------------------------------------------------------------|
    | 1     | Personnel Licensing                               | Obtaining your license is priority 1                             |
    | 2     | Rules of the Air                                  | 2 rules of the Air, VFR and IFR                                  |
    | 3     | Meteorological Services                           | 3º DALR                                                          |
    | 4     | Aeronautical Charts                               | 4 cardinal points                                                |
    | 5     | Units of Measurement                              | CRP5                                                             |
    | 6     | Operation of Aircraft                             | DC6 is an aircraft ¯\\_(ツ)_/¯                                   |
    | 7     | Aircraft Nationality and Registration Marks       | The league of the 7 nations                                      |
    | 8     | Airworthiness of Aircraft                         | 8 looks like a propeller                                         |
    | 9     | Facilitation                                      | NEIN NEIN 9                                                      |
    | 10    | Aeronautical Telecommunications                   | "Press 100 for operator"                                         |
    | 11    | Air Traffic Services                              | 1 to 1 communications                                            |
    | 12    | Search and Rescue                                 | The one before the accident investigation                        | 
    | 13    | Aircraft Accident and Incident Investigation      | 13 is bad luck                                                   |
    | 14    | Aerodromes                                        | 14 aerodromes around Heathrow                                    |
    | 15    | Aeronautical Information Services                 | 15 looks like IS (Information Services)                          |
    | 16    | Environmental Protection                          | At 16 you should cary protection ¬‿¬                             | 
    | 17    | Security                                          | 17 foot fence                                                    |
    | 18    | The Safe Transportation of Dangerous Goods by Air | At 18 you can start drinking (alcohol is a dangerous good)       |
    | 19    | Safety Management                                 | ????                                                             |
  `,
});
