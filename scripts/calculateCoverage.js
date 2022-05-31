import { questions, learningObjectives } from "../lib/index.mjs";

console.log(Object.entries(questions));

//const heatMap = Object.values(questions).reduce(
//  (s, q) => {
//    q.learningObjectives.forEach(lo => {
//
//      s[lo]++;
//    });
//    return s;
//  },
//  Object.keys(learningObjectives).reduce((sum, k) => ({
//    ...sum,
//    [k]: 0,
//  }), {})
//);
//
//const perChapter = Object.entries(heatMap).reduce((sum, [k, v]) => {
//  const chapter = k.split(".")[0];
//  sum[chapter] = {
//    total: (sum[chapter]?.total ?? 0) +1,
//    covered: (sum[chapter]?.value ?? 0) + !!v,
//  }
//  return sum;
//}, {})

//console.log(heatMap);
