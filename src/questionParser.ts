import { remark } from "remark";
import remarkMdx from "remark-mdx";
import { Node, NodeAttribute } from "./typesParser";
import { QuestionId, QuestionMetadata, QuestionVariant } from "./types";
import { Tree } from "./typesParser";
import { questionValidator } from "./questionValidator";
import { default as dedent } from "dedent-js";

const getRelevantNodes = (node: Node, depth = 1): Node[] => {
  const relevantNodes: Node[] = [];
  (node.children ?? []).forEach((node) => {
    if (["Text", "Option", "Variables", "Explanation"].includes(node.name)) {
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
  const textNodes = relevantNodes.filter((node) => node.name === "Text");
  const optionNodes = relevantNodes.filter((node) => node.name === "Option");
  const variablesNode = relevantNodes.find((node) => node.name === "Variables");
  const explanationNode = relevantNodes.find(
    (node) => node.name === "Explanation"
  );
  const explanationRef = node.attributes.find(
    (attr) => attr.name === "explanation"
  )?.value;

  return {
    textNodes,
    optionNodes,
    variablesNode,
    explanationNode,
    explanationRef,
  };
};

const getNodeInnerText = (node: Node, mdxFile: string): string => {
  const start = node.children[0].position.start.offset;
  const end = node.children[node.children.length - 1].position.end.offset;
  return mdxFile
    .slice(start, end)
    .split("\n")
    .map((l) => l.trim())
    .join("\n");
};

const getQuestionAttributes = (node: Node) => ({
  id: node.attributes.find((n) => n.name === "id")?.value ?? "",
  variant: node.attributes.find((n) => n.name === "variant")?.value ?? "",
  lo: getAttributeValueAsArray(
    node.attributes.find((n) => n.name === "lo")?.value
  ),
  explanation: node.attributes.find((n) => n.name === "explanation"),
});

const getTextAttributes = (node: Node, mdxFile: string) => {
  const selectNode = node.attributes.find((n) => n.name === "select")?.value;
  const selectAsString = getAttributeValueAsString(selectNode);
  return {
    variant: node.attributes.find((n) => n.name === "variant")?.value ?? "",
    select: selectAsString ? Number(selectAsString) : undefined,
    text: getNodeInnerText(node, mdxFile),
  };
};

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
    let response;
    eval(`response = ${assumeNodeAttribute.value}`);
    return Array.isArray(response) ? response : [assumeNodeAttribute.value];
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
  correct: !!node.attributes.find((n) => n.name === "correct"),
  innerText: getNodeInnerText(node, mdxFile),
  subject: getAttributeValueAsArray(
    node.attributes.find((n) => n.name === "subject")?.value
  ),
  why: getAttributeValueAsString(
    node.attributes.find((n) => n.name === "why")?.value
  ),
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

const getExplanationTag = (explanationRef: string, mdxFile: string) => {
  try {
    const level = Math.max(explanationRef.match(/#/g)?.length ?? 0, 2);
    const matchAfter = mdxFile.split(explanationRef);
    const matchBefore = matchAfter[1].split(
      new RegExp(`^#{1,${level - 1}} `, "gm")
    );
    return matchBefore[0];
  } catch (e) {
    console.error(e);
    throw new Error(`Error retrieving explanation with tag: ${explanationRef}`);
  }
};

export const getQuestionsFromMdx = (
  mdxFile: string,
  contentId: string
): Record<QuestionId, QuestionMetadata> => {
  const questions: Record<QuestionId, QuestionMetadata> = {};
  const questionsMdx = mdxFile.split("# Questions").pop() ?? "";

  const remarkGetQuestions = () => (tree: Tree) => {
    tree.children.forEach((leaf) => {
      if (leaf.name === "Question") {
        const {
          textNodes,
          optionNodes,
          variablesNode,
          explanationNode,
          explanationRef,
        } = getQuestionData(leaf);
        const attributes = getQuestionAttributes(leaf);
        const texts = textNodes.map((n) => getTextAttributes(n, questionsMdx));
        const options = optionNodes.map((n) => getOptionData(n, questionsMdx));
        const { variables, answerFunction } = getVariablesData(variablesNode);
        const explanation =
          (explanationNode &&
            getNodeInnerText(explanationNode, questionsMdx)) ??
          (explanationRef && getExplanationTag(explanationRef, questionsMdx)) ??
          "";
        const related: string[] = []; // TODO parse related question Ids and add them here
        const annexes: string[] = []; // TODO parse annex references and add them here
        const question = {
          ...attributes,
          texts,
          options,
          contentId,
          variables,
          answerFunction,
          explanation,
          annexes,
          related,
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

  remark().use(remarkMdx).use(remarkGetQuestions).processSync(questionsMdx);

  return questions;
};
