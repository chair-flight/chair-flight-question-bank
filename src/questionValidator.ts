import { ZodSchema, z } from "zod";
import { QuestionMetadata } from "./types";

const questionBaseAttributes = {
  id: z.string().min(6),
  contentId: z.string(),
  lo: z.array(z.string()),
  explanation: z.string().optional(),
};

const optionBaseAttributes = {
  id: z.string().min(6),
  innerText: z.string(),
};

const noDuplicateIds = (): [(arr: { id: string }[]) => boolean, string] => {
  return [
    (arr) => arr.length === [...new Set(arr.map((i) => i.id))].length,
    "No duplicate Id's allowed!",
  ];
};

export const questionValidator: ZodSchema<QuestionMetadata> = z.union([
  z.object({
    variant: z.enum(["oneTwo"]),
    ...questionBaseAttributes,
    texts: z.array(z.string()),
    options: z
      .array(
        z.object({
          ...optionBaseAttributes,
          correct: z.boolean().default(false),
        })
      )
      .min(4)
      .refine(...noDuplicateIds()),
  }),
  z.object({
    variant: z.enum(["oneTwoDefinition"]),
    ...questionBaseAttributes,
    texts: z.array(z.string()),
    options: z
      .array(
        z.object({
          ...optionBaseAttributes,
          subject: z.array(z.string()).min(1).optional(),
        })
      )
      .min(4)
      .refine(...noDuplicateIds()),
  }),
  z.object({
    variant: z.enum(["oneCorrect"]),
    ...questionBaseAttributes,
    texts: z.array(z.string()),
    options: z
      .array(
        z.object({
          ...optionBaseAttributes,
          correct: z.boolean().default(false),
        })
      )
      .min(4)
      .refine(...noDuplicateIds())
      .refine((v) => !!v.find((v) => !!v.correct)),
  }),
  z.object({
    variant: z.enum(["multipleCorrect"]),
    ...questionBaseAttributes,
    texts: z.array(z.string()),
    options: z
      .array(
        z.object({
          ...optionBaseAttributes,
          correct: z.boolean().default(false),
        })
      )
      .min(4),
  }),
  z.object({
    variant: z.enum(["definition"]),
    ...questionBaseAttributes,
    texts: z.array(z.string()),
    options: z
      .array(
        z.object({
          ...optionBaseAttributes,
          subject: z.array(z.string()).min(1).optional(),
        })
      )
      .min(4)
      .refine(...noDuplicateIds())
      .refine((v) => !!v.find((v) => !!v.subject)),
  }),
  z.object({
    variant: z.enum(["calculation"]),
    ...questionBaseAttributes,
    texts: z.array(z.string()),
    options: z.tuple([
      z.object({
        ...optionBaseAttributes,
      }),
    ]),
    variables: z.record(z.array(z.number()).min(1)),
    answerFunction: z.string(),
  }),
]);
