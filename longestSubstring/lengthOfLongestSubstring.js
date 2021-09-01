/**
 * @param {string} s
 * @return {number} length of the longest substring without repeating character
 */
const lengthOfLongestSubstring = (s) => {
  let i = 0;
  let j = 0;
  let max = 0;

  let largest = new Set();
  while (j < s.length) {
    if (!largest.has(s[j])) {
      largest.add(s[j]);
      j++;
      max = Math.max(largest.size, max);
    } else {
      largest.delete(s[i]);
      i++;
    }
  }
  return max;
};

module.exports = lengthOfLongestSubstring;
