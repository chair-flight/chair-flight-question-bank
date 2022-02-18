import { CourseName } from "./types";

const MATCH_REGEX_AND_CROSS = /(?=| ) (0.*) (?= \|)/gm;

const ALL_MODES: CourseName[] = [
  "ATPL(A)",
  "CPL(A)",
  "ATPL(H)/IR",
  "ATPL(H)/VFR",
  "CPL(H)",
  "IR",
  "CBIR(A)",
];

export const getLosFormMdx = (mdx: string): Record<string, CourseName[]> => {
  const data = mdx.match(MATCH_REGEX_AND_CROSS) ?? [];
  return data.reduce<Record<string, CourseName[]>>((sum, entry) => {
    const [lo, ...values] = entry.split("|").map((e) => e.trim());
    sum[lo] = ALL_MODES.filter((_, i) => !!values[i]);
    return sum;
  }, {});
};
