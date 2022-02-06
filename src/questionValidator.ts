import { ZodSchema, z } from "zod";
import { QuestionMetadata } from "./types";

const noDuplicateIds = (): [(arr: { id: string }[]) => boolean, string] => {
  return [
    (arr) => arr.length === [...new Set(arr.map((i) => i.id))].length,
    "No duplicate Id's allowed!",
  ];
};

export const questionValidator: ZodSchema<QuestionMetadata> = z.union([
  z.object({
    variant: z.enum(["correct"]),
    id: z.string().min(6),
    contentId: z.string(),
    lo: z.array(z.string()),
    explanation: z.string(),
    related: z.array(z.string()),
    annexes: z.array(z.string()),
    texts: z.array(
      z.object({
        text: z.string(),
        variant: z.enum(["oneTwo", "oneCorrect", "multipleCorrect"]),
      })
    ),
    options: z
      .array(
        z.object({
          id: z.string().min(6),
          innerText: z.string(),
          correct: z.boolean(),
        })
      )
      .min(4)
      .refine(...noDuplicateIds()),
  }),
  z.object({
    variant: z.enum(["definition"]),
    id: z.string().min(6),
    contentId: z.string(),
    lo: z.array(z.string()),
    explanation: z.string(),
    related: z.array(z.string()),
    annexes: z.array(z.string()),
    texts: z.array(
      z.object({
        text: z.string(),
        variant: z.enum(["oneCorrect", "oneTwo", "multipleCorrect"]),
      })
    ),
    options: z
      .array(
        z.object({
          id: z.string().min(6),
          innerText: z.string(),
          subject: z.array(z.string()).optional(),
        })
      )
      .min(4)
      .refine(...noDuplicateIds()),
  }),
  z.object({
    variant: z.enum(["calculation"]),
    id: z.string().min(6),
    contentId: z.string(),
    lo: z.array(z.string()),
    explanation: z.string(),
    related: z.array(z.string()),
    annexes: z.array(z.string()),
    variables: z.record(z.array(z.number()).min(1)),
    answerFunction: z.string(),
    texts: z.array(
      z.object({
        text: z.string(),
      })
    ),
  }),
]);
