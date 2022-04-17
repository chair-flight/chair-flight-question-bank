import { CourseName, LearningObjectiveMetadata } from "./types";

const MATCH_LOS_TABLE_REGEX = /(?=| ) (0.*) (?= \|)/gm;
const MATCH_LOS_TEXT = /(?:\. \*\*0.*\*\* -- )((?:.|\n)*?)\n(?:\d|##|\|)/gm;

export const getLosFormMdx = (
  mdx: string
): Record<string, LearningObjectiveMetadata> => {
  const textSection =
    mdx?.split("## Learning Objectives")[1]?.split("## Summary")[0] ?? "";
  const losTableEntries = textSection?.match(MATCH_LOS_TABLE_REGEX) ?? [];
  const losTextEntries =
    textSection
      ?.replace(/^\|(.*)/gm, "")
      ?.split(/(?:\d\. \*\*0.*\*\* -- )/gm)
      ?.map((n) => n.trim())
      ?.filter((n) => !!n) ?? [];

  if (losTableEntries.length !== losTextEntries.length) {
    console.error(losTableEntries, losTextEntries);
    throw new Error("Mismatch between the size of los texts, and los numbers!");
  }

  return losTableEntries.reduce<Record<string, LearningObjectiveMetadata>>(
    (sum, entry, index) => {
      const [lo, ...values] = entry.split("|").map((e) => e.trim());
      sum[lo] = {
        courses: Object.values(CourseName).filter((_, i) => !!values[i]),
        text: losTextEntries[index] ?? "",
      };
      return sum;
    },
    {}
  );
};
