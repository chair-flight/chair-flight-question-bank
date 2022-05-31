import { QuestionBankIndex } from "./types";

import * as untypedQuestions from "./questions";

export const questions: QuestionBankIndex["questions"] = untypedQuestions;
export { content } from "./generated/content";
export { contentTree } from "./generated/contentTree";
export { learningObjectives } from "./generated/learningObjectives";
export * from "./types";
