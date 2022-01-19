import { Node } from './types';

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

const getQuestionTextNode = (nodes: Node[]) => {
  return nodes.find(node => node.name === 'Text');
};

const getOptionNodes = (nodes: Node[]) => {
  return nodes.filter(node => node.name === 'Option');
};

export const getNodeInnerText = (node: Node, mdxFile: string): string => {
  const start = node.children[0].position.start.offset;
  const end = node.children[node.children.length - 1].position.end.offset;
  return mdxFile.slice(start, end);
};

export const getNodeAttributes = (node: Node): Record<string, string> =>
  node.attributes.reduce(
    (sum, attribute) => ({
      ...sum,
      [attribute.name]: attribute.value,
    }),
    {}
  );

export const getNodeId = (node: Node): string | undefined => {
  return node.attributes.find(attribute => attribute.name === 'id')?.value;
};

export const getQuestionData = (node: Node) => {
  const relevantNodes = getRelevantNodes(node);
  const questionId = getNodeId(node);
  const questionTextNode = getQuestionTextNode(relevantNodes);
  const optionNodes = getOptionNodes(relevantNodes);

  if (!questionId) {
    throw new Error('Question has no Id\n' + JSON.stringify(node, null, 2));
  }

  if (!questionTextNode) {
    throw new Error(`Question ${questionId} has no <Text>`);
  }

  return {
    questionId,
    questionTextNode,
    optionNodes,
  };
};
