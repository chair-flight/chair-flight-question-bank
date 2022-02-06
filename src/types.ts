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

export type QuestionVariant = "correct" | "definition" | "calculation";

export type QuestionTextVariant = "oneTwo" | "oneCorrect" | "multipleCorrect";

export type QuestionBaseAttributes<V extends QuestionVariant> = {
  variant: V;
  id: string;
  contentId: ContentId;
  lo: string[];
  related: string[];
  annexes: string[];
  explanation: string;
};

export type QuestionMetadata =
  | (QuestionBaseAttributes<"correct"> & {
      texts: Array<
        | {
            variant: "oneCorrect" | "oneTwo";
            text: string;
          }
        | {
            variant: "multipleCorrect";
            text: string;
            select: number;
          }
      >;
      options: Array<{
        id: string;
        innerText: string;
        why?: string;
        correct: boolean;
      }>;
    })
  | (QuestionBaseAttributes<"definition"> & {
      texts: Array<
        | {
            variant: "oneCorrect" | "oneTwo";
            text: string;
          }
        | {
            variant: "multipleCorrect";
            text: string;
            select: number;
          }
      >;
      options: Array<{
        id: string;
        innerText: string;
        why?: string;
        subject?: string[];
      }>;
    })
  | (QuestionBaseAttributes<"calculation"> & {
      texts: Array<{
        text: string;
      }>;
      answerFunction: jsStringFunction;
      variables: Record<string, number[]>;
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
