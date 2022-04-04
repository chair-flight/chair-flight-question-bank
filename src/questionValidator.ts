import { ZodSchema, z } from "zod";
import { QuestionMetadata } from "./types";

const noDuplicateIds = (): [(arr: { id: string }[]) => boolean, string] => {
  return [
    (arr) => arr.length === [...new Set(arr.map((i) => i.id))].length,
    "No duplicate Id's allowed!",
  ];
};

export const questionValidator: ZodSchema<QuestionMetadata> = z.object({
  id: z.string().min(6),
  contentId: z.string(),
  lo: z.array(z.string()),
  related: z.array(z.string()),
  annexes: z.array(z.string()),
  explanation: z.string(),
  explanationRef: z.string().optional(),
  texts: z.array(
    z.union([
      z.object({
        text: z.string(),
        variant: z.enum(["oneTwo"]),
        sameKey: z.boolean().default(false),
        uniqueKey: z.boolean().default(false),
      }),
      z.object({
        text: z.string(),
        variant: z.enum(["oneCorrect"]),
        sameKey: z.boolean().default(false),
        uniqueKey: z.boolean().default(false),
      }),
      z.object({
        text: z.string(),
        variant: z.enum(["multipleCorrect"]),
        select: z.number().min(3),
        sameKey: z.boolean().default(false),
        uniqueKey: z.boolean().default(false),
      }),
    ])
  ),
  options: z
    .array(
      z.object({
        id: z.string().min(6),
        why: z.string().default(""),
        key: z.number().optional(),
        innerText: z.string(),
        correct: z.boolean(),
        neverCorrect: z.boolean().default(false),
        subject: z.record(z.string()).optional(),
      })
    )
    .min(3)
    .refine(...noDuplicateIds()),
});
