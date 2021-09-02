const findMedianSortedArrays = require('./findMedianSortedArrays.js');
console.log(findMedianSortedArrays);

describe('find length of longest substring', () => {
  test('handles input arrays of different length', () => {
    expect(findMedianSortedArrays([1,3], [2])).toBe(2);
  });
  test('handles array of same size with even length', () => {
    expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5);
  });
  test('handles arrays of only zero', () => {
    expect(findMedianSortedArrays([0,0], [0,0])).toBe(0);
  });
  test('handles empty arrays', () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
    expect(findMedianSortedArrays([2], [])).toBe(2);
  });
})

