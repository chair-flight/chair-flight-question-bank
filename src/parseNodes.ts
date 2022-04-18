import { Node, NodeAttribute } from "./typesParser";

export const getAttributeValueAsArray = (
  node: Node,
  name: string
): undefined | string[] => {
  const value = node.attributes.find((n) => n.name === name)?.value;
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

export const getAttributeValueAs2dArray = (
  node: Node,
  name: string
): undefined | string[][] => {
  const value = node.attributes.find((n) => n.name === name)?.value;
  if (!value) {
    return undefined;
  }
  if (typeof value === "string") {
    return [[value]];
  }
  const assumeNodeAttribute = value as NodeAttribute;
  let response;
  eval(`response = ${assumeNodeAttribute.value}`);
  return response;
};

export const getAttributeValueAsBoolean = (
  node: Node,
  name: string
): boolean => {
  return !!node.attributes.find((n) => n.name === name);
};

export const getAttributeValueAsString = (
  node: Node,
  name: string
): undefined | string => {
  const value = node.attributes.find((n) => n.name === name)?.value;
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

export const getAttributeValueAsNumber = (
  node: Node,
  name: string
): undefined | number => {
  let value: any = node.attributes.find((n) => n.name === name)?.value;
  if (value?.type === "mdxJsxAttributeValueExpression") {
    value = value.value;
  }
  return isNaN(value as unknown as number) ? undefined : Number(value);
};

export const getNodeInnerText = (node: Node, mdxFile: string): string => {
  const start = node.children[0].position.start.offset;
  const end = node.children[node.children.length - 1].position.end.offset;
  return mdxFile
    .slice(start, end)
    .split("\n")
    .map((l) => l.trim())
    .join("\n");
};
