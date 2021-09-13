/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let matrix = [];
  //build matrix
  for (let i = 0; i < numRows; i++) {
    matrix.push("");
  }

  let row = 0;
  let upDown = -1;

  //iterate over string - fill rows
  for (let j = 0; j < s.length; j++) {
    let char = s[j];
    matrix[row] += char;
    if (row === 0 || row === numRows - 1) {
      upDown *= -1;
    }
    row += upDown;
  }

  let output = "";
  //build rows into new string
  for (let k = 0; k < matrix.length; k++) {
    output += matrix[k];
  }

  return output;
};

module.exports = convert;
