import { FunctionQuestion } from "../../../src/types";
import { getRandomShuffler } from "./random";

type CommonProps = Pick<
  FunctionQuestion,
  "id" | "version" | "learningObjectives"
>;

export const mergeQuestionVariants = <T extends CommonProps>(
  props: T,
  ...args: Array<(props: T) => FunctionQuestion>
): FunctionQuestion => {
  const handlers = args.map((arg) => arg(props));
  return {
    ...props,
    search: {
      texts: handlers.flatMap((h) => h.search.texts),
      options: handlers.flatMap((h) => h.search.options),
      explanation: handlers.flatMap((h) => h.search.explanation),
    },
    generate: (seed: string) => {
      const shuffle = getRandomShuffler(seed);
      const handler = shuffle(handlers)[0];
      return handler.generate(seed);
    },
  };
};
