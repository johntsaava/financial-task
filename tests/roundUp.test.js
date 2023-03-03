const roundUp = require("../helpers/roundUp");

describe("roundUp module", () => {
  test("round 0.023 to equal 0.03", () => {
    expect(roundUp(0.023)).toBe(0.03);
  });
});
