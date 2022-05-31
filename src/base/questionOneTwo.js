import { default as invariant } from "tiny-invariant";
import { FunctionQuestion, LearningObjectiveId } from "../types";
import { getRandomShuffler } from "./random";

export const questionOneCorrect = (props: {
  id: string,
  version: number,
  learningObjectives: LearningObjectiveId[],
  statementPairs: Array<{
    id: string,
    correct: string | string[],
    wrong: string | string[],
  }>,
  explanation: string,
}): FunctionQuestion => {
  return {
    id: "Q2KVB38UME",
    version: 1,
    learningObjectives: ["010.01.01.03.03"],
    generate: (seed: string) => {
      const shuffle = getRandomShuffler(seed);
      const isFirstCorrect = shuffle() > 0.5;
      const isSecondCorrect = shuffle() > 0.5;
      const shuffledStatements = props.statementPairs.sort(shuffle);

      const getText = (arr: string | string[]): string => {
        return Array.isArray(arr) ? arr.sort(shuffle)[0] : arr;
      };

      const question = dedent`
        Which of the following statements are correct?

        1. ${getText(
          shuffledStatements[0][isFirstCorrect ? "correct" : "wrong"]
        )}
        2. ${getText(
          shuffledStatements[1][isSecondCorrect ? "correct" : "wrong"]
        )}
      `;

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
