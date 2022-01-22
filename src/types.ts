export type AnswerId = string;
export type QuestionId = string;
export type QuestionBlockId = string;
export type ContentId = string;

export type OptionAttributes = {
  id: string;
  innerText: string;
  correct?: boolean;
  why?: string;
  subject?: string[];
};

export type QuestionAttributes = {
  id: string;
  variant: 'oneTwo' | 'definition' | 'oneCorrect' | 'multipleCorrect';
  lo?: string[];
  explanation?: string;
};

export type QuestionMetadata = {
  contentId: ContentId;
  attributes: QuestionAttributes;
  texts: Array<string>;
  options: Array<OptionAttributes>;
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
