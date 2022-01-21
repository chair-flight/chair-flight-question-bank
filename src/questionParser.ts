import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
import { Node, NodeAttribute } from './typesParser';
import {
  QuestionId,
  QuestionMetadata,
  QuestionAttributes,
  OptionAttributes,
} from './types';
import { Tree } from './typesParser';

const getRelevantNodes = (node: Node, depth = 1): Node[] => {
  const relevantNodes: Node[] = [];
  (node.children ?? []).forEach(node => {
    if (['Text', 'Option'].includes(node.name)) {
      relevantNodes.push(node);
      return;
    }
    if (depth <= 2) {
      relevantNodes.push(...getRelevantNodes(node, depth + 1));
    }
  });
  return relevantNodes;
};

const getQuestionData = (node: Node) => {
  const relevantNodes = getRelevantNodes(node);
  const questionTextNodes = relevantNodes.filter(node => node.name === 'Text');
  const optionNodes = relevantNodes.filter(node => node.name === 'Option');

  return {
    questionTextNodes,
    optionNodes,
  };
};

const getNodeInnerText = (node: Node, mdxFile: string): string => {
  const start = node.children[0].position.start.offset;
  const end = node.children[node.children.length - 1].position.end.offset;
  return mdxFile.slice(start, end);
};

const getQuestionText = getNodeInnerText;

const getQuestionAttributes = (node: Node): QuestionAttributes => ({
  id: node.attributes.find(n => n.name === 'id')?.value ?? '',
  variant: (node.attributes.find(n => n.name === 'id')?.value ??
    '') as QuestionAttributes['variant'],
  lo: node.attributes.find(n => n.name === 'lo')?.value,
  explanation: node.attributes.find(n => n.name === 'explanation')?.value,
});

const getAttributeValue = (
  value: string | NodeAttribute | undefined
): undefined | string | string[] => {
  if (!value) {
    return undefined;
  }
  if (typeof value === 'string') {
    return value;
  }
  const assumeNodeAttribute = value as NodeAttribute;
  try {
    return JSON.parse(assumeNodeAttribute.value);
  } catch (e) {
    return assumeNodeAttribute.value;
  }
};

const getOptionData = (node: Node, mdxFile: string): OptionAttributes => ({
  id: node.attributes.find(n => n.name === 'id')?.value ?? '',
  correct: !!node.attributes.find(n => n.name === 'correct') || undefined,
  why: node.attributes.find(n => n.name === 'why')?.value,
  subject: getAttributeValue(
    node.attributes.find(n => n.name === 'subject')?.value
  ),
  innerText: getNodeInnerText(node, mdxFile),
});

export const getQuestionsFromMdx = (
  mdxFile: string,
  contentId: string
): Record<QuestionId, QuestionMetadata> => {
  const questions: Record<QuestionId, QuestionMetadata> = {};

  const remarkGetQuestions = () => (tree: Tree) => {
    tree.children.forEach(leaf => {
      if (leaf.name === 'Question') {
        const { questionTextNodes, optionNodes } = getQuestionData(leaf);
        const attributes = getQuestionAttributes(leaf);
        const texts = questionTextNodes.map(n => getQuestionText(n, mdxFile));
        const options = optionNodes.map(n => getOptionData(n, mdxFile));

        if (!attributes.id) {
          throw new Error(`Missing question Id, question text:${texts[0]}`);
        }

        if (!attributes.variant) {
          throw new Error(`Question Id ${attributes.id}, is missing a variant`);
        }

        questions[attributes.id] = {
          attributes,
          texts,
          options,
          contentId,
        };
      }
    });
  };

  remark().use(remarkMdx).use(remarkGetQuestions).processSync(mdxFile);

  return questions;
};
