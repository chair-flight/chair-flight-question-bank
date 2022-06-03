import { questions } from "../../content/questions";

describe("smokeTestQuestions", () => {
  test.each(Object.entries(questions))("Smoke test (%s)", (key, question) => {
    expect(question.id).toBe(key);
    expect(question.learningObjectives.length).toBeGreaterThanOrEqual(1);
    for (let i = 0; i < 100; i++) {
      const q = question.generate(i.toString());
      const q2 = question.generate(i.toString());
      expect(q);
      expect(q.options).toHaveLength(4);
      expect(q.options.find((o) => o.id === q.correct)).toBeDefined();
      expect(new Set(q.options.map((o) => o.id)).size).toBe(q.options.length);
      expect(new Set(q.options.map((o) => o.text)).size).toBe(q.options.length);
      expect(q).toEqual(q2);
    }
  });
});
