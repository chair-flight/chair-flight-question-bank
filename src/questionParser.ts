import { remark } from "remark";
import remarkMdx from "remark-mdx";
import { Node } from "./typesParser";
import { QuestionId, QuestionMetadata } from "./types";
import { Tree } from "./typesParser";
import { questionValidator } from "./questionValidator";
import {
  getAttributeValueAsArray,
  getAttributeValueAsBoolean,
  getAttributeValueAsString,
  getAttributeValueAsNumber,
  getAttributeValueAsMap,
  getNodeInnerText,
} from "./nodeParser";

const getQuestionData = (node: Node) => {
  const getRelevantNodes = (node: Node, depth = 1) =>
    (node.children ?? []).reduce<Node[]>((sum, node) => {
      if (["Text", "Option", "Variables", "Explanation"].includes(node.name)) {
        sum.push(node);
      } else if (depth <= 2) {
        sum.push(...getRelevantNodes(node, depth + 1));
      }
      return sum;
    }, []);
  const relevantNodes = getRelevantNodes(node);
  const textNodes = relevantNodes.filter((node) => node.name === "Text");
  const optionNodes = relevantNodes.filter((node) => node.name === "Option");
  const explanationNode = relevantNodes.find(
    (node) => node.name === "Explanation"
  );

  return {
    textNodes,
    optionNodes,
    explanationNode,
  };
};

const getQuestionAttributes = (node: Node) => ({
  id: getAttributeValueAsString(node, "id"),
  lo: getAttributeValueAsArray(node, "lo"),
  explanationRef: getAttributeValueAsString(node, "explanation"),
});

const getTextAttributes = (node: Node, mdxFile: string) => ({
  variant: node.attributes.find((n) => n.name === "variant")?.value ?? "",
  select: getAttributeValueAsNumber(node, "select"),
  text: getNodeInnerText(node, mdxFile),
  subject: getAttributeValueAsString(node, "subject"),
  sameKey: getAttributeValueAsBoolean(node, "sameKey"),
  uniqueKey: getAttributeValueAsBoolean(node, "uniqueKey"),
});

const getExplanationAttributes = (node: Node | undefined, mdxFile: string) =>
  node ? getNodeInnerText(node, mdxFile) : "";

const getOptionData = (node: Node, mdxFile: string) => ({
  id: getAttributeValueAsString(node, "id"),
  key: getAttributeValueAsNumber(node, "key"),
  innerText: getNodeInnerText(node, mdxFile),
  correct: getAttributeValueAsBoolean(node, "correct"),
  neverCorrect: getAttributeValueAsBoolean(node, "neverCorrect"),
  subject: getAttributeValueAsMap(node, "subject"),
  why: getAttributeValueAsString(node, "why"),
});

export const getQuestionsFromMdx = (
  mdxFile: string,
  contentId: string
): Record<QuestionId, QuestionMetadata> => {
  const questions: Record<QuestionId, QuestionMetadata> = {};
  const questionsMdx = mdxFile.split("# Questions").pop() ?? "";

  const remarkGetQuestions = () => (tree: Tree) => {
    tree.children.forEach((leaf) => {
      if (leaf.name === "Question") {
        const { textNodes, optionNodes, explanationNode } =
          getQuestionData(leaf);
        const attributes = getQuestionAttributes(leaf);
        const texts = textNodes.map((n) => getTextAttributes(n, questionsMdx));
        const options = optionNodes.map((n) => getOptionData(n, questionsMdx));
        const explanation = getExplanationAttributes(explanationNode, mdxFile);
        const related: string[] = []; // TODO parse related question Ids and add them here
        const annexes: string[] = []; // TODO parse annex references and add them here
        const question = {
          ...attributes,
          texts,
          options,
          contentId,
          explanation,
          annexes,
          related,
        };

        try {
          questions[attributes.id!] = questionValidator.parse(question);
        } catch (e) {
          console.error("error parsing question, question: ", question);
          throw e;
        }
      }
    });
  };

  remark().use(remarkMdx).use(remarkGetQuestions).processSync(questionsMdx);

  return questions;
};
