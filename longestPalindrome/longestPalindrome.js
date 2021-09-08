/**
 * @param {string} s
 * @return {string}
 * @edgeCase if multiple palindromes of the same length return first
 * @edgeCase if length === 1 return entire string
 * @constraints 1 <= s.length <= 1000
 * @constraints s consists of only english letters
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  let longest = [0, 0];
  for (let i = 0; i < s.length; i++) {
    let odd = checkPalindrome(s, i);
    let even = checkPalindrome(s, i, i + 1);
    let check = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    longest = check[1] - check[0] > longest[1] - longest[0] ? check : longest;
  }
  return s.slice(longest[0], longest[1] + 1);
};

var checkPalindrome = (s, indexLeft, indexRight) => {
  let left = indexLeft;
  let right = indexRight === undefined ? indexLeft : indexRight;

  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      break;
    }
    left--;
    right++;
  }
  return [left + 1, right - 1];
};

module.exports = longestPalindrome;
