/**
 * @param {string} s
 * @return {string}
 * @edgeCase if multiple palindromes of the same length return first
 * @edgeCase if length === 1 return entire string
 * @constraints 1 <= s.length <= 1000
 * @constraints s consists of only english letters
 */
var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s;
  }
  let longestPalindrome = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let current = s.slice(i, j + 1);
      if (isPalindrome(current) && current.length > longestPalindrome.length) {
        longestPalindrome = current;
      }
    }
  }
  return longestPalindrome;
};

var reverseString = (s) => {
  let newStr = "";
  for (let i = s.length - 1; i >= 0; i--) {
    newStr += s[i];
  }
  return newStr;
};

var isPalindrome = (s) => {
  return s === reverseString(s);
};

module.exports = longestPalindrome;
