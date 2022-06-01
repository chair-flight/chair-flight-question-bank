import { learningObjectives } from "../src/";

const statistics = Object.entries(learningObjectives).reduce<
  Record<string, [number, number]>
>((sum, [lo, { questions }]) => {
  const index = lo.split(".")[0] ?? "";
  return {
    ...sum,
    [index]: [
      (sum[index]?.[0] ?? 0) + Number(questions.length > 0),
      (sum[index]?.[1] ?? 0) + 1,
    ],
  };
}, {});

const entries = Object.entries(statistics)
  .map(
    ([module, [covered, total]]) =>
      `  <img src="https://img.shields.io/badge/coverage%20${module}-${covered}%2F${total}%20${(
        (covered / total) *
        100
      ).toFixed()}%25-red" />`
  )
  .join("\n");

console.log(`<p align="center">\n${entries}\n</p>`);
