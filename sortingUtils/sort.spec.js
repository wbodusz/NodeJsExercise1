const sort = require("./sort");
const assert = require("assert");

describe("Sort", function() {
  it("should sort sample array", function() {
    assert.deepStrictEqual([1, 6, 32, "a", "asd"], sort([6, "a", 1, "asd", 32]));
  });
});
