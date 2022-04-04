export type AnswerId = string;
export type QuestionId = string;
export type QuestionBlockId = string;
export type ContentId = string;
export type LearningObjective = string;
export type jsStringFunction = string;

export type CourseName =
  | "ATPL(A)"
  | "CPL(A)"
  | "ATPL(H)/IR"
  | "ATPL(H)/VFR"
  | "CPL(H)"
  | "IR"
  | "CBIR(A)";

export type QuestionTextVariant = "oneTwo" | "oneCorrect" | "multipleCorrect";

export type QuestionBaseAttributes = {
  id: string;
  contentId: ContentId;
  lo: string[];
  related: string[];
  annexes: string[];
  explanation: string;
  explanationRef?: string;
};

export type QuestionMetadata = QuestionBaseAttributes & {
  texts: Array<
    | {
        variant: "oneCorrect";
        text: string;
        sameKey?: boolean;
        subject?: string;
        uniqueKey?: boolean;
      }
    | {
        variant: "oneTwo";
        text: string;
        sameKey?: boolean;
        subject?: string;
        uniqueKey?: boolean;
      }
    | {
        variant: "multipleCorrect";
        text: string;
        select: number;
        sameKey?: boolean;
        uniqueKey?: boolean;
      }
  >;
  options: Array<{
    id: string;
    innerText: string;
    why?: string;
    correct?: boolean;
    neverCorrect?: boolean;
    key?: number;
    subject?: Record<string, string>;
  }>;
};

export type QuestionBankContentMetaData = {
  id: ContentId;
  title: string;
  questions: QuestionId[];
  los: LearningObjective[];
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
  los: Record<LearningObjective, LearningObjectiveMetadata>;
  content: Record<ContentId, QuestionBankContentMetaData>;
  contentTree: Record<ContentId, QuestionBankContentMap>;
  questions: Record<QuestionId, QuestionMetadata>;
};
