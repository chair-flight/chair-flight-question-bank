import { sum } from "lodash";
import {
  FunctionQuestion,
  LearningObjectiveId,
  QuestionId,
} from "../../../src/types";
import { dedent } from "./dedent";
import { getRandomShuffler } from "./random";

const defaultQuestion = (options: string) => dedent`
Which of the following statements are correct?

${options}
`;

export const questionOneTwo = (props: {
  id: QuestionId;
  version: number;
  learningObjectives: LearningObjectiveId[];
  question?: (options: string) => string;
  statementPairs: Array<{
    correct?: string | string[];
    wrong?: string | string[];
  }>;
  explanation: string;
}): FunctionQuestion => {
  const searchTexts = props.statementPairs.reduce<string[]>(
    (sum, { correct = "", wrong = "" }) => [
      ...sum,
      ...(Array.isArray(correct) ? correct : [correct]),
      ...(Array.isArray(wrong) ? wrong : [wrong]),
    ],
    []
  );
  return {
    id: props.id,
    version: props.version,
    learningObjectives: props.learningObjectives,
    search: {
      texts: searchTexts,
      options: [],
      explanation: [props.explanation],
    },
    generate: (seed: string) => {
      const shuffle = getRandomShuffler(seed);
      const shuffledStatements = shuffle(props.statementPairs);

      const isFirstCorrect = (() => {
        if (!shuffledStatements[0].correct) {
          return false;
        }
        if (!shuffledStatements[0].wrong) {
          return true;
        }
        return shuffle([true, false])[0];
      })();
      const isSecondCorrect = (() => {
        if (!shuffledStatements[1].correct) {
          return false;
        }
        if (!shuffledStatements[1].wrong) {
          return true;
        }
        return shuffle([true, false])[0];
      })();

      const getText = (arr: string | string[]): string => {
        return Array.isArray(arr) ? shuffle(arr)[0] : arr;
      };

      const question = (props.question ?? defaultQuestion)(dedent`
        1. ${getText(
          shuffledStatements[0][isFirstCorrect ? "correct" : "wrong"] ?? ""
        )}
        2. ${getText(
          shuffledStatements[1][isSecondCorrect ? "correct" : "wrong"] ?? ""
        )}
      `);

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
        key: `${props.id}_${seed}`,
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
