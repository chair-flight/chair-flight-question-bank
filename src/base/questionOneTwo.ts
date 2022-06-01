import { FunctionQuestion, LearningObjectiveId, QuestionId } from "../types";
import { dedent } from "./dedent";
import { getRandomShuffler } from "./random";

export const questionOneTwo = (props: {
  id: QuestionId;
  version: number;
  learningObjectives: LearningObjectiveId[];
  statementPairs: Array<{
    correct: string | string[];
    wrong: string | string[];
  }>;
  explanation: string;
}): FunctionQuestion => {
  return {
    id: props.id,
    version: props.version,
    learningObjectives: props.learningObjectives,
    generate: (seed: string) => {
      const shuffle = getRandomShuffler(seed);
      const isFirstCorrect = shuffle([true, false])[0];
      const isSecondCorrect = shuffle([true, false])[0];
      const shuffledStatements = shuffle(props.statementPairs);

      const getText = (arr: string | string[]): string => {
        return Array.isArray(arr) ? shuffle(arr)[0] : arr;
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

      const finalOptions = shuffle([
        {
          id: "both-correct",
          text: "Both Statements are correct",
          why: "",
        },
        {
          id: "1-correct",
          text: "Only the first statement is correct",
          why: "",
        },
        {
          id: "2-correct",
          text: "Only the second statement is correct",
          why: "",
        },
        {
          id: "none-correct",
          text: "None of the statements are correct",
          why: "",
        },
      ]);

      const correct = (() => {
        if (isFirstCorrect && isSecondCorrect) {
          return "both-correct";
        }
        if (isFirstCorrect) {
          return "1-correct";
        }
        if (isSecondCorrect) {
          return "2-correct";
        }
        return "none-correct";
      })();

      return {
        question,
        correct,
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
