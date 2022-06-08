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
          1 + random() * (Math.min(numberOfOptions, totalCorrect) - 1)
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
        .map((s, i) => (selectedCorrect.includes(s) ? i + 1 : undefined))
        .filter((s) => !!s)
        .join(", ");

      let iterations = 0;
      const wrongOptionTexts: string[] = [];
      while (wrongOptionTexts.length < 3) {
        iterations++;
        const length =
          props.select?.numberOfCorrectOptions ??
          1 + Math.round(random() * (numberOfOptions - 1));
        const newText = shuffle(statements.map((_, i) => i + 1))
          .slice(0, length)
          .sort()
          .join(", ");
        if (
          newText !== correctOptionText &&
          !wrongOptionTexts.includes(newText)
        ) {
          wrongOptionTexts.push(newText);
        }
        if (iterations > 100) {
          throw new Error("Too many iterations to find valid options");
        }
      }

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
