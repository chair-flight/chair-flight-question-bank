import { FunctionQuestion } from "../types";
import { getRandomShuffler } from "./random";

type CommonProps = Omit<FunctionQuestion, "generate">;

export const mergeQuestionVariants = <T extends CommonProps>(
  props: T,
  ...args: Array<(props: T) => FunctionQuestion>
): FunctionQuestion => {
  const handlers = args.map((arg) => arg(props));

  return {
    ...props,
    generate: (seed: string) => {
      const shuffle = getRandomShuffler(seed);
      const handler = handlers.sort(shuffle)[0];
      return handler.generate(seed);
    },
  };
};
