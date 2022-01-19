import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
import { getNodeAttributes, getNodeInnerText, getQuestionData } from './common';
import {
  QuestionId,
  QuestionMetadata,
  QuestionOptionMetadata,
  Tree,
} from './types';

export const getQuestionsFromMdx = (
  mdxFile: string,
  contentId: string
): Record<QuestionId, QuestionMetadata> => {
  const questions: Record<QuestionId, QuestionMetadata> = {};

  const remarkGetQuestions = () => (tree: Tree) => {
    tree.children.forEach(leaf => {
      if (leaf.name === 'Question') {
        const { questionId, questionTextNode, optionNodes } =
          getQuestionData(leaf);
        const attributes = getNodeAttributes(leaf);
        const options = optionNodes.map<QuestionOptionMetadata>(node => ({
          attributes: getNodeAttributes(node),
          content: getNodeInnerText(node, mdxFile),
        }));

        questions[questionId] = {
          attributes,
          options,
          contentId,
          content: getNodeInnerText(questionTextNode, mdxFile),
        };
      }
    });
  };

  remark().use(remarkMdx).use(remarkGetQuestions).processSync(mdxFile);

  return questions;
};
