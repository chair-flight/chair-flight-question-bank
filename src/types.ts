export type AnswerId = string;
export type QuestionId = string;
export type QuestionBlockId = string;
export type ContentId = string;
export type LearningObjectiveId = string;

export enum CourseName {
  ATPL_A = "ATPL(A)",
  CPL_A = "CPL(A)",
  ATPL_H_IR = "ATPL(H)/IR",
  ATPL_H_VFR = "ATPL(H)/VFR",
  CPL_H = "CPL(H)",
  IR = "IR",
  CBIR_A = "CBIR(A)",
}

export type QuestionOption = {
  id: string;
  text: string;
  why: string;
};

export type Question = {
  question: string;
  correct: string;
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
  annexes: string[];
  explanation: string;
};

export type FunctionQuestion = {
  id: QuestionId;
  version: number;
  learningObjectives: LearningObjectiveId[];
  generate: (seed: string) => Question;
};

export type QuestionBankContentMetaData = {
  id: ContentId;
  title: string;
  text: string;
  questions: QuestionId[];
  los: LearningObjectiveId[];
};

export type QuestionBankContentMap = Record<
  ContentId,
  Record<ContentId, Record<ContentId, {}>>
>;

export type LearningObjectiveMetadata = {
  courses: CourseName[];
  text: string;
};

export type QuestionBankIndex = {
  learningObjectives: Record<LearningObjectiveId, LearningObjectiveMetadata>;
  content: Record<ContentId, QuestionBankContentMetaData>;
  contentTree: Record<ContentId, QuestionBankContentMap>;
  questions: Record<QuestionId, FunctionQuestion>;
};
