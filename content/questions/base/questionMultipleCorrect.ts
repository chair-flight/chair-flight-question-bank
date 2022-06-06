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

export const questionMultipleCorrect = (props: {
  id: QuestionId;
  version: number;
  learningObjectives: LearningObjectiveId[];
  question?: (options: string) => string;
  select: Array<{
    minOptions: number;
    maxOptions: number;
    minCorrect: number;
    maxCorrect: number;
  }>;
  statements: Array<{
    correct?: string | string[];
    wrong?: string | string[];
  }>;
  explanation: string;
}): FunctionQuestion => {
  return {
    id: props.id,
    version: props.version,
    learningObjectives: props.learningObjectives,
    search: {
      texts: props.question ? [props.question("")] : [],
      options: [],
      explanation: [props.explanation],
    },
    generate: (seed: string) => {
      const shuffle = getRandomShuffler(seed);

      throw new Error();
    },
  };
};
