import { default as invariant } from "tiny-invariant";
import { FunctionQuestion, LearningObjectiveId } from "../types";
import { getRandomShuffler } from "./random";

export const questionOneCorrect = (props: {
  id: string;
  version: number;
  question: ((subject: string) => string) | ((subject: string) => string)[];
  learningObjectives: LearningObjectiveId[];
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
      const correctOption = shuffledCorrect.pop();
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
      invariant(
        correctOption !== undefined,
        "Not enough correct options passed!"
      );

      const wrongOptions = [...props.otherOptions, ...shuffledCorrect]
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
