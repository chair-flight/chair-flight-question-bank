import fs from 'fs';
import matter from 'gray-matter';
import lodash from 'lodash';
import { QuestionBankIndex } from './types';
import { getQuestionsFromMdx } from './questionParser';

const files = fs.readdirSync('./questionBank').filter(f => f.includes('.mdx'));

const contentIndex = files
  .map(f => f.replace('.mdx', ''))
  .sort((a, b) => b.localeCompare(a))
  .reverse()
  .reduce<QuestionBankIndex>(
    (sum, fileName) => {
      const markdownWithMeta = fs.readFileSync(
        `./questionBank/${fileName}.mdx`
      );

      const { data: frontMatter, content } = matter(markdownWithMeta);

      const id = frontMatter.SyllabusReference as string;
      const questions = getQuestionsFromMdx(content, id);
      const blocks = id.split('.');

      lodash.set(
        sum.contentTree,
        blocks.map((_, i) => blocks.slice(0, i + 1).join('.')),
        {}
      );

      sum.content[id] = {
        id: id,
        title: frontMatter.Title,
        questions: Object.keys(questions),
      };

      sum.questions = {
        ...sum.questions,
        ...questions,
      };

      return sum;
    },
    {
      content: {},
      contentTree: {},
      questions: {},
    }
  );

const jsonFile = JSON.stringify(contentIndex, null, 2);
const originalTypesFile = fs.readFileSync('./src/types.ts').toString();
const indexFile = `export const questionBank = ${jsonFile}`;
const typesFile = `${originalTypesFile}
 
export declare const questionBank : QuestionBankIndex; 
`;

fs.rmdirSync('./lib', { recursive: true });
fs.mkdirSync('./lib/content', { recursive: true });
fs.writeFileSync('./lib/index.js', indexFile);
fs.writeFileSync('./lib/index.json', jsonFile);
fs.writeFileSync('./lib/index.d.ts', typesFile);

files.forEach(f =>
  fs.copyFileSync(`./questionBank/${f}`, `./lib/content/${f}`)
);
