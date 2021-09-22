/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  //trim whitespace
  s = trimLeadingWhite(s);

  let i;
  //check positive or neg
  i = s[0] === "+" || s[0] === "-" ? (i = 1) : (i = 0);

  //set bounds of num
  while (s[i] < Infinity && i < s.length && s[i] !== " ") {
    i++;
  }

  s = Number(s.slice(0, i));

  if (isNaN(s)) {
    return 0;
  }

  if (s >= 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else if (s <= (-2) ** 31) {
    return (-2) ** 31;
  } else {
    return s;
  }
};

let trimLeadingWhite = (s) => {
  let i = 0;
  while (s[i] === " ") {
    i++;
  }
  return s.slice(i);
};

module.exports = myAtoi;