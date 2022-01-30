export type AnswerId = string;
export type QuestionId = string;
export type QuestionBlockId = string;
export type ContentId = string;
export type LearningObject = string;
export type jsStringFunction = string;

export type CourseName =
  | "ATPL(A)"
  | "CPL(A)"
  | "ATPL(H)/IR"
  | "ATPL(H)/VFR"
  | "CPL(H)"
  | "IR"
  | "CBIR(A)";

export type QuestionVariant =
  | "oneTwo"
  | "definition"
  | "oneCorrect"
  | "multipleCorrect"
  | "calculation";

export type OptionAttributes = {
  id: string;
  innerText: string;
  why?: string;
};

export type OptionBaseAttributes = {
  id: string;
  innerText: string;
};

export type QuestionBaseAttributes<V extends QuestionVariant> = {
  variant: V;
  id: string;
  contentId: ContentId;
  lo: string[];
  explanation?: string;
};

export type QuestionMetadata =
  | (QuestionBaseAttributes<"oneTwo"> & {
      texts: Array<string>;
      options: Array<
        OptionAttributes & {
          correct?: boolean;
        }
      >;
    })
  | (QuestionBaseAttributes<"oneCorrect"> & {
      texts: Array<string>;
      options: Array<
        OptionAttributes & {
          correct?: boolean;
        }
      >;
    })
  | (QuestionBaseAttributes<"multipleCorrect"> & {
      texts: Array<string>;
      options: Array<
        OptionAttributes & {
          correct?: boolean;
        }
      >;
    })
  | (QuestionBaseAttributes<"definition"> & {
      texts: Array<string>;
      options: Array<
        OptionAttributes & {
          subject?: string[];
        }
      >;
    })
  | (QuestionBaseAttributes<"calculation"> & {
      texts: Array<string>;
      answerFunction: jsStringFunction;
      variables: Record<string, number[]>;
      options: [OptionAttributes];
    });

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
  los: Record<LearningObject, CourseName[]>;
  content: Record<ContentId, QuestionBankContentMetaData>;
  contentTree: Record<ContentId, QuestionBankContentMap>;
  questions: Record<QuestionId, QuestionMetadata>;
};
