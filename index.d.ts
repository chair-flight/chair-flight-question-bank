type AnswerId = string;
type QuestionId = string;
type QuestionBlockId = string;
type ContentId = string;
type LearningObjectiveId = string;
declare enum CourseName {
  ATPL_A = "ATPL(A)",
  CPL_A = "CPL(A)",
  ATPL_H_IR = "ATPL(H)/IR",
  ATPL_H_VFR = "ATPL(H)/VFR",
  CPL_H = "CPL(H)",
  IR = "IR",
  CBIR_A = "CBIR(A)",
}
type QuestionOption = {
  id: string;
  text: string;
  why: string;
};
type Question = {
  question: string;
  correct: string;
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
  annexes: string[];
  explanation: string;
};
type FunctionQuestion = {
  id: QuestionId;
  version: number;
  learningObjectives: LearningObjectiveId[];
  generate: (seed: string) => Question;
};
type QuestionBankContentMetaData = {
  id: ContentId;
  title: string;
  text: string;
  questions: QuestionId[];
  los: LearningObjectiveId[];
};
type QuestionBankContentMap = Record<
  ContentId,
  Record<ContentId, Record<ContentId, {}>>
>;
type LearningObjectiveMetadata = {
  courses: CourseName[];
  questions: QuestionId[];
  text: string;
};
type QuestionBankIndex = {
  learningObjectives: Record<LearningObjectiveId, LearningObjectiveMetadata>;
  content: Record<ContentId, QuestionBankContentMetaData>;
  contentTree: Record<ContentId, QuestionBankContentMap>;
  questions: Record<QuestionId, FunctionQuestion>;
};
declare const questions: QuestionBankIndex["questions"];
declare const content: QuestionBankIndex["content"];
declare const contentTree: QuestionBankIndex["contentTree"];
declare const learningObjectives: QuestionBankIndex["learningObjectives"];
export {
  questions,
  content,
  contentTree,
  learningObjectives,
  AnswerId,
  QuestionId,
  QuestionBlockId,
  ContentId,
  LearningObjectiveId,
  CourseName,
  QuestionOption,
  Question,
  FunctionQuestion,
  QuestionBankContentMetaData,
  QuestionBankContentMap,
  LearningObjectiveMetadata,
  QuestionBankIndex,
};
