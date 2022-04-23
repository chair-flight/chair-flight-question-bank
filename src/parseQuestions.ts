import { remark } from "remark";
import remarkMdx from "remark-mdx";
import { Node } from "./typesParser";
import { QuestionId, Question } from "./types";
import { Tree } from "./typesParser";
import { questionSchema } from "./questionValidator";
import {
  getAttributeValueAsArray,
  getAttributeValueAsBoolean,
  getAttributeValueAsString,
  getAttributeValueAsNumber,
  getNodeInnerText,
  getAttributeValueAs2dArray,
} from "./parseNodes";

const getQuestionData = (node: Node) => {
  const getRelevantNodes = (node: Node, depth = 1) =>
    (node.children ?? []).reduce<Node[]>((sum, node) => {
      if (["Text", "Option", "Explanation"].includes(node.name)) {
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
  contentRef: getAttributeValueAsString(node, "contentRef"),
});

const getTextAttributes = (node: Node, mdxFile: string) => ({
  text: getNodeInnerText(node, mdxFile),
  variant: getAttributeValueAsString(node, "variant"),
  select: getAttributeValueAsNumber(node, "select"),
  subject: getAttributeValueAs2dArray(node, "subject"),
});

const getOptionAttributes = (node: Node, mdxFile: string) => ({
  key: getAttributeValueAsNumber(node, "key"),
  text: getNodeInnerText(node, mdxFile),
  alwaysCorrect: getAttributeValueAsBoolean(node, "alwaysCorrect"),
  subject: getAttributeValueAsBoolean(node, "alwaysCorrect")
    ? []
    : getAttributeValueAs2dArray(node, "subject"),
  why: getAttributeValueAsString(node, "why"),
});

const getExplanationAttributes = (node: Node | undefined, mdxFile: string) =>
  node ? getNodeInnerText(node, mdxFile) : "";

export const getQuestionsFromMdx = (
  mdxFile: string,
  contentId: string
): Record<QuestionId, Question> => {
  const questions: Record<QuestionId, Question> = {};
  const questionsMdx = mdxFile.split("# Questions").pop() ?? "";

  const remarkGetQuestions = () => (tree: Tree) => {
    tree.children.forEach((leaf) => {
      if (leaf.name === "Question") {
        try {
          const { textNodes, optionNodes, explanationNode } =
            getQuestionData(leaf);
          const attributes = getQuestionAttributes(leaf);
          const texts = textNodes.map((n) =>
            getTextAttributes(n, questionsMdx)
          );
          const options = optionNodes.map((n) =>
            getOptionAttributes(n, questionsMdx)
          );
          const explanation = getExplanationAttributes(
            explanationNode,
            mdxFile
          );
          const annexes: string[] = []; // TODO parse annex references and add them here

          const subjects = [...texts, ...options]
            .flatMap((e) => e.subject)
            .filter<string[]>((e): e is string[] => !!e);

          const question = questionSchema.parse({
            ...attributes,
            texts,
            options,
            contentId,
            explanation,
            subjects,
            annexes,
          });

          questions[question.id!] = question;
        } catch (e) {
          console.error("error parsing question, question: ", "TODO");
          throw e;
        }
      }
    });
  };

  remark().use(remarkMdx).use(remarkGetQuestions).processSync(questionsMdx);

  return questions;
};
