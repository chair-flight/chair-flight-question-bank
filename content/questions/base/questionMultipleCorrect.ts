import {
  FunctionQuestion,
  LearningObjectiveId,
  QuestionId,
} from "../../../src/types";
import {
  getRandomGenerator,
  getRandomIdGenerator,
  getRandomShuffler,
} from "./random";

export const questionMultipleCorrect = (props: {
  id: QuestionId;
  version: number;
  learningObjectives: LearningObjectiveId[];
  question: (options: string) => string;
  select?: {
    /** If left undefined, a random number between 3 and 6 is selected */
    numberOfOptions?: number;
    /**
     * If left undefined, a random number between 1 and numberOfOptions is
     * selected
     */
    numberOfCorrectOptions?: number;
  };
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
      const random = getRandomGenerator(seed);
      const shuffle = getRandomShuffler(seed);
      const getRandomId = getRandomIdGenerator(seed);
      const totalCorrect = props.statements.filter((s) => !!s.correct).length;
      const totalStatements = props.statements.length;
      const shuffledStatements = shuffle(props.statements);
      const numberOfOptions =
        props.select?.numberOfOptions ??
        Math.round(3 + random() * (Math.min(6, totalStatements) - 3));
      const numberOfCorrectStatements =
        props.select?.numberOfCorrectOptions ??
        Math.round(
          1 + random() * (Math.min(1, numberOfOptions, totalCorrect) - 1)
        );

      const selectedCorrect = shuffledStatements
        .filter((s): s is { correct: string | string[] } => !!s.correct)
        .slice(0, numberOfCorrectStatements)
        .map((t) =>
          Array.isArray(t.correct) ? shuffle(t.correct)[0] : t.correct
        );

      const selectedWrong = shuffledStatements
        .filter((s): s is { wrong: string | string[] } => !!s.wrong)
        .slice(0, numberOfOptions - numberOfCorrectStatements)
        .map((t) => (Array.isArray(t.wrong) ? shuffle(t.wrong)[0] : t.wrong));

      const statements = shuffle([...selectedWrong, ...selectedCorrect]);

      const correctOptionId = getRandomId();
      const correctOptionText = statements
        .map((s, i) => (selectedCorrect.includes(s) ? i : undefined))
        .filter((s) => !!s)
        .join(", ");

      const wrongOptionTexts = ["potato", "kiwi", "banana"];

      const options = shuffle([
        {
          text: correctOptionText,
          id: correctOptionId,
          why: "",
        },
        ...wrongOptionTexts.map((text) => ({
          text,
          id: getRandomId(),
          why: "",
        })),
      ]);

      const optionsAsText = options.map((t, i) => `${i + 1}) ${t}`).join("\n");

      return {
        key: `${props.id}_${seed}`,
        id: props.id,
        correct: correctOptionId,
        question: props.question(optionsAsText),
        options: [options[0], options[1], options[2], options[3]],
        annexes: [],
        explanation: props.explanation,
      };
    },
  };
};
