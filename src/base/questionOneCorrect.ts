import { default as invariant } from "tiny-invariant";
import { FunctionQuestion, LearningObjectiveId } from "../types";
import { getRandomShuffler } from "./random";

export const questionOneCorrect = (props: {
  id: string;
  version: number;
  question: (subject: string) => string;
  learningObjectives: LearningObjectiveId[];
  correctOptions: Array<{
    id: string;
    subject: string;
    why: string;
    text: string;
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
      const shuffledCorrect = props.correctOptions.sort(shuffle);
      const correct = shuffledCorrect.pop();

      invariant(
        props.correctOptions.length + props.otherOptions.length > 4,
        "Not enough options passed!"
      );
      invariant(
        props.correctOptions.length > 0,
        "Not enough correct options passed!"
      );
      invariant(correct !== undefined, "Not enough correct options passed!");

      const wrongOptions = [...props.otherOptions, ...shuffledCorrect]
        .sort(shuffle)
        .slice(0, 3);

      const finalOptions = [...wrongOptions, correct].sort(shuffle);

      return {
        question: props.question(correct.subject),
        correct: correct.id,
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
