import { default as invariant } from "tiny-invariant";
import {
  FunctionQuestion,
  LearningObjectiveId,
  QuestionId,
  QuestionOption,
} from "../types";
import { getRandomShuffler } from "./random";

export const questionOneCorrect = (props: {
  id: QuestionId;
  version: number;
  learningObjectives: LearningObjectiveId[];
  question: ((subject: string) => string) | ((subject: string) => string)[];
  correctOptions: Array<{
    id: string;
    subject: string | string[];
    why: string;
    text: string | string[];
  }>;
  otherOptions: Array<{
    id: string;
    why: string;
    text: string;
  }>;
  explanation: string;
}): FunctionQuestion => {
  return {
    id: "Q2KVB38UME",
    version: 1,
    learningObjectives: ["010.01.01.03.03"],
    generate: (seed: string) => {
      const shuffle = getRandomShuffler(seed);
      const correctSubject = shuffle(props.correctOptions).reduce<string[]>(
        (sum, item) =>
          Array.isArray(item.subject)
            ? [...sum, ...item.subject]
            : [...sum, item.subject],
        []
      )[0];

      const resolvedCorrectOptionTemplates = shuffle(props.correctOptions).map(
        (item) => ({
          id: item.id,
          why: item.why,
          text: Array.isArray(item.text) ? shuffle(item.text)[0] : item.text,
          subject: item.subject,
        })
      );

      const correctOption = resolvedCorrectOptionTemplates.find(
        ({ subject }) =>
          subject === correctSubject || subject.includes(correctSubject)
      );

      invariant(!!correctOption, "No correctOption option could be found!");

      const wrongOptions = shuffle([
        ...props.otherOptions,
        ...resolvedCorrectOptionTemplates.filter(
          ({ subject }) =>
            subject !== correctSubject || !subject.includes(correctSubject)
        ),
      ]).slice(0, 3);

      const questionFn = Array.isArray(props.question)
        ? shuffle(props.question)[0]
        : props.question;

      const finalOptions = shuffle([...wrongOptions, correctOption]);

      return {
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
