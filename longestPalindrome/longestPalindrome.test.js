const longestPalindrome = require("./longestPalindrome.js");

describe("longestPalindrome", () => {
  test("returns the first longestPalindrome", () => {
    expect(longestPalindrome("babad")).toBe("bab");
    expect(longestPalindrome("cbbd")).toBe("bb");
    expect(longestPalindrome("ac")).toBe("a");
  });

  test("handles string with length of one", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  test("handles empty string", () => {
    expect(longestPalindrome("")).toBe("");
  });
});
