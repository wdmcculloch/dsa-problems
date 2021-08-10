/*
You get an array of numbers, return the sum of all of the positive nums

i: array of integers
o: sum of positive integers
c: none
e: empty array, no integers in array

*/
let positiveSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

module.exports = positiveSum;