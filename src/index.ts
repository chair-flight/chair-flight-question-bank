import { QuestionBankIndex } from "./types";
import { content } from "./generated/content";
import { contentTree } from "./generated/contentTree";
import { learningObjectives } from "./generated/learningObjectives";

const index: QuestionBankIndex = {
  content,
  contentTree,
  learningObjectives,
  questions: {},
};

export default index;
