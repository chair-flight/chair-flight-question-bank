import * as questions from "../questions";

describe("smokeTestQuestions", () => {
  test.each(Object.entries(questions))("Smoke test (%s)", (key, question) => {
    for (let i = 0; i < 100; i++) {
      const q = question.generate(i.toString());
      const q2 = question.generate(i.toString());
      expect(q.options).toHaveLength(4);
      expect(q.options.find((o) => o.id === q.correct)).toBeDefined();
      expect(q).toEqual(q2);
    }
  });
});
