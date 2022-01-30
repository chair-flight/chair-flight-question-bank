import { remark } from "remark";
import remarkMdx from "remark-mdx";
import { Node, NodeAttribute } from "./typesParser";
import { QuestionId, QuestionMetadata, QuestionVariant } from "./types";
import { Tree } from "./typesParser";
import { questionValidator } from "./questionValidator";

const getRelevantNodes = (node: Node, depth = 1): Node[] => {
  const relevantNodes: Node[] = [];
  (node.children ?? []).forEach((node) => {
    if (["Text", "Option", "Variables"].includes(node.name)) {
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
  const questionTextNodes = relevantNodes.filter(
    (node) => node.name === "Text"
  );
  const optionNodes = relevantNodes.filter((node) => node.name === "Option");
  const variablesNode = relevantNodes.find((node) => node.name === "Variables");

  return {
    questionTextNodes,
    optionNodes,
    variablesNode,
  };
};

const getNodeInnerText = (node: Node, mdxFile: string): string => {
  const start = node.children[0].position.start.offset;
  const end = node.children[node.children.length - 1].position.end.offset;
  return mdxFile.slice(start, end);
};

const getQuestionText = getNodeInnerText;

const getQuestionAttributes = (node: Node) => ({
  id: node.attributes.find((n) => n.name === "id")?.value ?? "",
  variant: (node.attributes.find((n) => n.name === "variant")?.value ??
    "") as QuestionVariant,
  lo: getAttributeValueAsArray(
    node.attributes.find((n) => n.name === "lo")?.value
  ),
  explanation: node.attributes.find((n) => n.name === "explanation")?.value,
});

const getAttributeValueAsArray = (
  value: string | NodeAttribute | undefined
): undefined | string[] => {
  if (!value) {
    return undefined;
  }
  if (typeof value === "string") {
    return [value];
  }
  const assumeNodeAttribute = value as NodeAttribute;
  try {
    return JSON.parse(assumeNodeAttribute.value);
  } catch (e) {
    return [assumeNodeAttribute.value];
  }
};

const getAttributeValueAsString = (
  value: string | NodeAttribute | undefined
): undefined | string => {
  if (!value) {
    return undefined;
  }
  if (typeof value === "string") {
    return value;
  }
  const assumeNodeAttribute = value as NodeAttribute;
  if (typeof assumeNodeAttribute.value === "string") {
    return assumeNodeAttribute.value;
  }
  throw new Error("something went very wrong :(");
};

const getAttributeValueAsMap = (
  value: string | NodeAttribute | undefined
): undefined | Record<string, number[]> => {
  if (!value) {
    return undefined;
  }
  const assumeNodeAttribute = value as NodeAttribute;
  try {
    let response;
    eval(`response = ${assumeNodeAttribute.value}`);
    return response as unknown as Record<string, number[]>;
  } catch (e) {
    throw new Error("Unable to retrieve value for attribute :(");
  }
};

const getOptionData = (node: Node, mdxFile: string) => ({
  id: node.attributes.find((n) => n.name === "id")?.value ?? "",
  correct: !!node.attributes.find((n) => n.name === "correct") || undefined,
  why: node.attributes.find((n) => n.name === "why")?.value,
  subject: getAttributeValueAsArray(
    node.attributes.find((n) => n.name === "subject")?.value
  ),
  innerText: getNodeInnerText(node, mdxFile),
});

const getVariablesData = (node?: Node) => {
  const variables = node?.attributes?.find(
    (n) => n.name === "variables"
  )?.value;
  const answerFunction = node?.attributes?.find(
    (n) => n.name === "answerFunction"
  )?.value;
  return {
    variables: getAttributeValueAsMap(variables),
    answerFunction: getAttributeValueAsString(answerFunction),
  };
};

export const getQuestionsFromMdx = (
  mdxFile: string,
  contentId: string
): Record<QuestionId, QuestionMetadata> => {
  const questions: Record<QuestionId, QuestionMetadata> = {};

  const remarkGetQuestions = () => (tree: Tree) => {
    tree.children.forEach((leaf) => {
      if (leaf.name === "Question") {
        const { questionTextNodes, optionNodes, variablesNode } =
          getQuestionData(leaf);
        const attributes = getQuestionAttributes(leaf);
        const texts = questionTextNodes.map((n) => getQuestionText(n, mdxFile));
        const options = optionNodes.map((n) => getOptionData(n, mdxFile));
        const { variables, answerFunction } = getVariablesData(variablesNode);
        const question = {
          ...attributes,
          texts,
          options,
          contentId,
          variables,
          answerFunction,
        };

        try {
          questions[attributes.id] = questionValidator.parse(question);
        } catch (e) {
          console.error("error parsing question, question: ", question);
          throw e;
        }
      }
    });
  };

  remark().use(remarkMdx).use(remarkGetQuestions).processSync(mdxFile);

  return questions;
};
