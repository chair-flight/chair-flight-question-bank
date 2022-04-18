export const getTextFromMdx = (mdx: string): string => {
  return mdx?.split("## Summary")[1]?.split("## Questions")[0];
};
