import {
  FunctionQuestion,
  LearningObjectiveId,
  QuestionId,
} from "../../../src/types";
import { getRandomIdGenerator, getRandomShuffler } from "./random";

export const questionOneCorrect = (props: {
  id: QuestionId;
  version: number;
  learningObjectives: LearningObjectiveId[];
  question: ((subject: string) => string) | ((subject: string) => string)[];
  correctOptions: Array<{
    subject: string | string[];
    why: string;
    text: string | string[];
  }>;
  otherOptions: Array<{
    why: string;
    text: string;
  }>;
  explanation: string;
}): FunctionQuestion => {
  const subjects = props.correctOptions.reduce<string[]>((sum, option) => {
    return Array.isArray(option.subject)
      ? [...sum, ...option.subject]
      : [...sum, option.subject];
  }, []);
  const searchTexts = (
    Array.isArray(props.question) ? props.question : [props.question]
  ).flatMap((fn) => subjects.map((s) => fn(s)));
  const searchOptions = [
    ...props.correctOptions.flatMap((o) =>
      Array.isArray(o.text) ? o.text : [o.text]
    ),
    ...props.otherOptions.map((o) => o.text),
  ];
  return {
    id: props.id,
    version: props.version,
    learningObjectives: props.learningObjectives,
    search: {
      texts: searchTexts,
      options: searchOptions,
      explanation: [props.explanation],
    },
    generate: (seed: string) => {
      const shuffle = getRandomShuffler(seed);
      const getRandomId = getRandomIdGenerator(seed);
      const correctSubject = shuffle(props.correctOptions).reduce<string[]>(
        (sum, item) =>
          Array.isArray(item.subject)
            ? [...sum, ...item.subject]
            : [...sum, item.subject],
        []
      )[0];

      const resolvedCorrectOptionTemplates = shuffle(props.correctOptions).map(
        (item) => ({
          why: item.why,
          text: Array.isArray(item.text) ? shuffle(item.text)[0] : item.text,
          subject: item.subject,
        })
      );

      const selectedCorrectOptionTemplate = resolvedCorrectOptionTemplates.find(
        ({ subject }) =>
          Array.isArray(subject)
            ? subject.includes(correctSubject)
            : subject === correctSubject
      )!;

      const correctOption = {
        id: getRandomId(),
        why: selectedCorrectOptionTemplate.why,
        text: selectedCorrectOptionTemplate.text,
      };

      const wrongOptions = shuffle([
        ...props.otherOptions,
        ...resolvedCorrectOptionTemplates.filter(({ subject }) =>
          Array.isArray(subject)
            ? !subject.includes(correctSubject)
            : subject !== correctSubject
        ),
      ])
        .slice(0, 3)
        .map((obj) => ({
          ...obj,
          id: getRandomId(),
        }));

      const questionFn = Array.isArray(props.question)
        ? shuffle(props.question)[0]
        : props.question;

      const finalOptions = shuffle([...wrongOptions, correctOption]);

      return {
        key: `${props.id}_${seed}`,
        question: questionFn(correctSubject),
        correct: correctOption.id,
        annexes: [],
        explanation: props.explanation,
        options: [
          finalOptions[0],
          finalOptions[1],
          finalOptions[2],
          finalOptions[3],
        ],
      };
    },
  };
};
