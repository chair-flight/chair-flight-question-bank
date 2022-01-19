export type AnswerId = string;
export type QuestionId = string;
export type QuestionBlockId = string;
export type ContentId = string;

export type QuestionOptionMetadata = {
  attributes: Record<string, string>;
  content: string;
};

export type QuestionMetadata = {
  contentId: ContentId;
  content: string;
  attributes: Record<string, string>;
  options: Array<QuestionOptionMetadata>;
};

export type QuestionBankContentMetaData = {
  id: ContentId;
  title: string;
  questions: QuestionId[];
};

export type QuestionBankContentMap = Record<
  ContentId,
  Record<ContentId, Record<ContentId, {}>>
>;

export type QuestionBankIndex = {
  content: Record<ContentId, QuestionBankContentMetaData>;
  contentTree: Record<ContentId, QuestionBankContentMap>;
  questions: Record<QuestionId, QuestionMetadata>;
};

export interface Node {
  type: string;
  name: string;
  attributes: {
    type: string;
    name: string;
    value: string;
  }[];
  children: Node[];
  position: {
    start: { line: number; column: number; offset: number };
    end: { line: number; column: number; offset: number };
  };
}

export interface Tree {
  children: Node[];
}
