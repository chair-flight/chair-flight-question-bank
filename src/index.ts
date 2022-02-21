import fs from "fs";
import matter from "gray-matter";
import lodash from "lodash";
import { QuestionBankIndex } from "./types";
import { getQuestionsFromMdx } from "./questionParser";
import { getLosFormMdx } from "./losParser";

const files = fs
  .readdirSync("./questionBank")
  .filter((f) => f.includes(".mdx"));
const images = fs.readdirSync("./questionBank/images");

const contentIndex = files
  .map((f) => f.replace(".mdx", ""))
  .sort((a, b) => b.localeCompare(a))
  .reverse()
  .reduce<QuestionBankIndex>(
    (sum, fileName) => {
      console.log(`Parsing ${fileName}`);
      const markdownWithMeta = fs.readFileSync(
        `./questionBank/${fileName}.mdx`
      );

      const { data: frontMatter, content } = matter(markdownWithMeta);

      const id = frontMatter.SyllabusReference as string;
      const questions = getQuestionsFromMdx(content, id);
      const los = getLosFormMdx(content);
      const blocks = id.split(".");
      const blockPath = blocks
        .map((_, i) =>
          i === 0 && blocks[0] === "071" && blocks.length > 1
            ? "070"
            : blocks.slice(0, i + 1).join(".")
        )
        .filter(
          (name, index, arr) => !!sum.content[name] || index === arr.length - 1
        );

      lodash.set(sum.contentTree, blockPath, {});

      sum.content[id] = {
        id: id,
        title: frontMatter.Title,
        questions: Object.keys(questions),
      };

      Object.keys(questions).forEach((q) => {
        if (sum.questions[q]) {
          throw new Error(`Found duplicate question ${q}`);
        }
      });

      sum.questions = {
        ...sum.questions,
        ...questions,
      };

      sum.los = {
        ...sum.los,
        ...los,
      };

      return sum;
    },
    {
      los: {},
      content: {},
      contentTree: {},
      questions: {},
    }
  );

const jsonFile = JSON.stringify(contentIndex, null, 2);
const originalTypesFile = fs.readFileSync("./src/types.ts").toString();
const indexFile = `export const questionBank = ${jsonFile}`;
const typesFile = `${originalTypesFile}
 
export declare const questionBank : QuestionBankIndex; 
`;

fs.rmdirSync("./lib", { recursive: true });
fs.mkdirSync("./lib/content/images", { recursive: true });
fs.writeFileSync("./lib/index.js", indexFile);
fs.writeFileSync("./lib/index.json", jsonFile);
fs.writeFileSync("./lib/index.d.ts", typesFile);
fs.copyFileSync(`./lib-tsc-out/src/losParser.js`, `./lib/losParser.js`);
fs.copyFileSync(`./lib-tsc-out/src/losParser.d.ts`, `./lib/losParser.d.ts`);

files.forEach((f) =>
  fs.copyFileSync(`./questionBank/${f}`, `./lib/content/${f}`)
);

images.forEach((f) =>
  fs.copyFileSync(`./questionBank/images/${f}`, `./lib/content/images/${f}`)
);

const coveredLos = Object.values(contentIndex.questions).reduce<string[]>(
  (sum, q) => [...sum, ...q.lo],
  []
);

const statistics = Object.keys(contentIndex.los).reduce<
  Record<string, [number, number]>
>((sum, lo) => {
  const index = lo.split(".")[0] ?? "";
  return {
    ...sum,
    [index]: [
      (sum[index]?.[0] ?? 0) + Number(coveredLos.includes(lo)),
      (sum[index]?.[1] ?? 0) + 1,
    ],
  };
}, {});

Object.entries(statistics)
  .map(
    ([module, [covered, total]]) =>
      `<img src="https://img.shields.io/badge/coverage%20${module}-${covered}%2F${total}%20${(
        (covered / total) *
        100
      ).toFixed()}%25-red" />`
  )
  .map((entry) => console.log(entry));
