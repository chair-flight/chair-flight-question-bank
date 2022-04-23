import { ZodSchema, z } from "zod";
import { default as hash } from "object-hash";
import {
  Question,
  QuestionKeyVariant,
  QuestionOption,
  QuestionText,
  QuestionTextVariant,
} from "./types";
import { has } from "lodash";

const appendId = (val: unknown) => {
  const castVal = val as Record<string, unknown>;
  return {
    ...castVal,
    id: hash(castVal),
  };
};

export const questionTextSchema: ZodSchema<
  QuestionText,
  {},
  Partial<QuestionText>
> = z.preprocess(
  appendId,
  z.object({
    id: z.string(),
    text: z.string(),
    key: z.array(z.number()).nullable().default(null),
    select: z.number().default(-1),
    variant: z.nativeEnum(QuestionTextVariant),
    subject: z.array(z.string()).default([""]),
  })
);

export const questionOptionSchema: ZodSchema<
  QuestionOption,
  {},
  Partial<QuestionOption>
> = z.preprocess(
  appendId,
  z.object({
    id: z.string(),
    text: z.string(),
    why: z.string().default(""),
    key: z.number().nullable().default(null),
    subject: z.array(z.string()).nullable().default(null),
  })
);

export const questionSchema: ZodSchema<
  Question,
  {},
  Partial<Question>
> = z.object({
  id: z.string(),
  contentId: z.string(),
  lo: z.array(z.string()).default([]),
  annexes: z.array(z.string()).default([]),
  explanation: z.string().default(""),
  contentRef: z.string().nullable().default(null),
  texts: z.array(questionTextSchema as ZodSchema<QuestionText>).min(1),
  options: z.array(questionOptionSchema as ZodSchema<QuestionOption>).min(3),
  subjects: z.array(z.string()),
});
