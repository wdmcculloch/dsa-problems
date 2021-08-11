const repeatStr = require('./stringRepeat.js');

describe("Reapeat String Tests", function() {
  it ("Basic tests", function() {
    expect(repeatStr(3, "*")).toBe("***");
    expect(repeatStr(5, "#")).toBe("#####");
    expect(repeatStr(2, "ha ")).toBe("ha ha ");
  });
});
