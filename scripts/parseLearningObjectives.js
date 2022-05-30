import { default as fs } from "fs";

const TARGET_DIR = "./src/generated";

export const CourseName = {
  ATPL_A: "ATPL(A)",
  CPL_A: "CPL(A)",
  ATPL_H_IR: "ATPL(H)/IR",
  ATPL_H_VFR: "ATPL(H)/VFR",
  CPL_H: "CPL(H)",
  IR: "IR",
  CBIR_A: "CBIR(A)",
};

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR);
}

const MATCH_LOS_TABLE_REGEX = /^\|(.*)/gm;
const MATCH_LOS_FROM_TABLE_REGEX = /(?=| ) (0.*) (?= \|)/gm;
const MATCH_LOS_TEXT_REGEX = /(?:\d\.[ \t]+\*\*0.*\*\* -- )/gm;

export const getLosFormMdx = (mdx) => {
  const textSection =
    mdx?.split("## Learning Objectives")[1]?.split("## Summary")[0] ?? "";
  const losTableEntries = textSection?.match(MATCH_LOS_FROM_TABLE_REGEX) ?? [];
  const losTextEntries =
    textSection
      ?.replace(MATCH_LOS_TABLE_REGEX, "")
      ?.split(MATCH_LOS_TEXT_REGEX)
      ?.map((n) => n.trim())
      ?.filter((n) => !!n) ?? [];

  if (losTableEntries.length !== losTextEntries.length) {
    console.error(losTableEntries, losTextEntries);
    throw new Error("Mismatch between the size of los texts, and los numbers!");
  }

  return losTableEntries.reduce((sum, entry, index) => {
    const [lo, ...values] = entry.split("|").map((e) => e.trim());
    sum[lo] = {
      courses: Object.values(CourseName).filter((_, i) => !!values[i]),
      text: losTextEntries[index] ?? "",
    };
    return sum;
  }, {});
};

const learningObjectives = fs
  .readdirSync("./pages")
  .filter((fileName) => fileName.includes(".mdx"))
  .map((fileName) => fs.readFileSync(`./pages/${fileName}`).toString())
  .reduce(
    (sum, doc) => ({
      ...sum,
      ...getLosFormMdx(doc),
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
