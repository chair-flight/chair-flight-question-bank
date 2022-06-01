import { default as invariant } from "tiny-invariant";
import { FunctionQuestion, LearningObjectiveId, QuestionId } from "../types";
import { getRandomShuffler } from "./random";

export const questionOneCorrect = (props: {
  id: QuestionId;
  version: number;
  learningObjectives: LearningObjectiveId[];
  question: ((subject: string) => string) | ((subject: string) => string)[];
  correctOptions: Array<{
    id: string;
    subject: string;
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
      const shuffledCorrect = props.correctOptions
        .map((entry) => ({
          ...entry,
          text: Array.isArray(entry.text)
            ? entry.text.sort(shuffle)[0]
            : entry.text,
        }))
        .sort(shuffle);
      const correctOption = shuffledCorrect[0];
      const questionFn = Array.isArray(props.question)
        ? props.question.sort(shuffle)[0]
        : props.question;

      invariant(
        props.correctOptions.length + props.otherOptions.length > 4,
        "Not enough options passed!"
      );
      invariant(
        props.correctOptions.length > 0,
        "Not enough correct options passed!"
      );

      const wrongOptions = [
        ...props.otherOptions,
        ...shuffledCorrect.filter(
          ({ subject }) => subject !== correctOption.subject
        ),
      ]
        .sort(shuffle)
        .slice(0, 3);

      const finalOptions = [...wrongOptions, correctOption].sort(shuffle);

      return {
        question: questionFn(correctOption.subject),
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