import { default as fs } from "fs";
import { default as matter } from "gray-matter";
import { questions } from "../content/questions";
import { QuestionBankIndex } from "../src/types";
import { getLosFormMdx } from "./parseLearningObjectives";

const TARGET_DIR = "./src/generated";

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR);
}

const content = fs
  .readdirSync("./content/pages")
  .filter((fileName) => fileName.includes(".mdx"))
  .map((fileName) => fs.readFileSync(`./content/pages/${fileName}`).toString())
  .reduce<QuestionBankIndex["content"]>((sum, file) => {
    const { data: frontMatter, content } = matter(file);
    const id = frontMatter.SyllabusReference;
    const los = getLosFormMdx(file);

    sum[id] = {
      id: id,
      text: content.split("## Summary")[1] ?? "",
      title: frontMatter.Title,
      questions: Object.values(questions)
        .filter(({ learningObjectives }, i) => learningObjectives.includes(id))
        .map(({ id }) => id),
      los: Object.keys(los),
    };
    return sum;
  }, {});

fs.writeFileSync(
  `${TARGET_DIR}/content.ts`,
  `
import { QuestionBankIndex } from "../types";

export const content : QuestionBankIndex["content"] = ${JSON.stringify(
    content,
    null,
    2
  )}
`
);
