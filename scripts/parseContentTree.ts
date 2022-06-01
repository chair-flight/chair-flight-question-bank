import { default as fs } from "fs";
import { default as lodash } from "lodash";
import { QuestionBankIndex } from "../src/types";

const TARGET_DIR = "./src/generated";

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR);
}

const contentTree = fs
  .readdirSync("./pages")
  .filter((fileName) => fileName.includes(".mdx"))
  .sort((a, b) => b.localeCompare(a))
  .map((f) => f.replace(".mdx", "").split("."))
  .sort((a, b) => (a.length > b.length ? 1 : -1))
  .reduce<QuestionBankIndex["contentTree"]>((sum, blocks) => {
    const blockPath = blocks.map((_, i, arr) =>
      i === 0 && arr[0] === "071" && arr.length > 1
        ? "070"
        : arr.slice(0, i + 1).join(".")
    );

    lodash.set(sum, blockPath, {});
    return sum;
  }, {});

fs.writeFileSync(
  `${TARGET_DIR}/contentTree.ts`,
  `
import { QuestionBankIndex } from "../types";

export const contentTree : QuestionBankIndex["contentTree"] = ${JSON.stringify(
    contentTree,
    null,
    2
  )}
`
);
