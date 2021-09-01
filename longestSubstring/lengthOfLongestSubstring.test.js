const lengthOfLongestSubstring = require('./lengthOfLongestSubstring.js');

describe('find length of longest substring', () => {
  test('returns correct length', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  });
  test('handles empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
  test('handles string of just a space', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1);
  });
})
