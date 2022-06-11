import { default as fs } from "fs";
import { questions } from "../content/questions";
import { CourseName, QuestionBankIndex } from "../src/types";

const TARGET_DIR = "./src/generated";

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR);
}

const MATCH_LOS_TABLE_REGEX = /^\|(.*)/gm;
const MATCH_LOS_FROM_TABLE_REGEX = /(?=| ) (0.*) (?= \|)/gm;
const MATCH_LOS_TEXT_REGEX = /(?:\d+\.[ \t]+\*\*0.*\*\* -- )/gm;

export const getLosFormMdx = (contentId: string, mdx: string) => {
  const textSection =
    mdx?.split("## Learning Objectives")[1]?.split("## Summary")[0] ?? "";
  const losTableEntries = textSection?.match(MATCH_LOS_FROM_TABLE_REGEX) ?? [];
  const losTextEntries =
    textSection
      ?.replace(MATCH_LOS_TABLE_REGEX, "")
      ?.replace(MATCH_LOS_TEXT_REGEX, "potato    ")
      ?.split("potato")
      ?.map((e) =>
        e
          .split("\n")
          .map((e) => e.trim())
          .join("\n")
      )
      ?.map((n) => n.trim())
      ?.filter((n) => !!n) ?? [];

  if (losTableEntries.length !== losTextEntries.length) {
    console.error(losTableEntries, losTextEntries);
    throw new Error("Mismatch between the size of los texts, and los numbers!");
  }

  return losTableEntries.reduce<QuestionBankIndex["learningObjectives"]>(
    (sum, entry, index) => {
      const [lo, ...values] = entry.split("|").map((e) => e.trim());
      sum[lo] = {
        contentId,
        courses: Object.values(CourseName).filter(
          (_, i) => !!values[i]
        ) as CourseName[],
        questions: Object.values(questions)
          .filter(({ learningObjectives }, i) =>
            learningObjectives.includes(lo)
          )
          .map(({ id }) => id),
        text: losTextEntries[index] ?? "",
      };
      return sum;
    },
    {}
  );
};

const learningObjectives = fs
  .readdirSync("./content/pages")
  .filter((fileName) => fileName.includes(".mdx"))
  .map((filename) => filename.replace(".mdx", ""))
  .map((fileName) => [
    fileName,
    fs.readFileSync(`./content/pages/${fileName}.mdx`).toString(),
  ])
  .reduce(
    (sum, [contentId, doc]) => ({
      ...sum,
      ...getLosFormMdx(contentId, doc),
    }),
    {}
  );

fs.writeFileSync(
  `${TARGET_DIR}/learningObjectives.ts`,
  `
import { CourseName, QuestionBankIndex } from "../types";

export const learningObjectives : QuestionBankIndex["learningObjectives"] = ${Object.entries(
    CourseName
  ).reduce(
    (sum, [k, v]) => sum.replaceAll(`"${v}"`, `CourseName.${k}`),
    JSON.stringify(learningObjectives, null, 2)
  )}
`
);
