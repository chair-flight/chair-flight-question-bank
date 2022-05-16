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

export enum QuestionTextVariant {
  oneTwo = "oneTwo",
  oneCorrect = "oneCorrect",
  multipleCorrect = "multipleCorrect",
}

export enum QuestionKeyVariant {
  random = "random",
  sameKey = "sameKey",
  uniqueKey = "uniqueKey",
}

export type Question = {
  id: string;
  contentId: ContentId;
  lo: string[];
  annexes: string[];
  explanation: string;
  contentRef: string | null;
  texts: Array<QuestionText>;
  options: Array<QuestionOption>;
};

export type QuestionText = {
  id: string;
  variant: QuestionTextVariant;
  text: string;
  select: number;
  key: number[] | null;
};

export type QuestionOption = {
  id: string;
  text: string;
  why: string;
  key: number | null;
  subject: string[] | null;
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
  los: Record<LearningObjectiveId, LearningObjectiveMetadata>;
  content: Record<ContentId, QuestionBankContentMetaData>;
  contentTree: Record<ContentId, QuestionBankContentMap>;
  questions: Record<QuestionId, Question>;
};
