const reverse = require('./reverseInteger.js');

test('correctly reverses give number', () => {
  expect(reverse(123)).toBe(321);
  expect(reverse(120)).toBe(21);
  expect(reverse(12345)).toBe(54321);

});
test('handles negative', () => {
  expect(reverse(-123)).toBe(-321);
});
test('handles zero correctly', () => {
  expect(reverse(0)).toBe(0);
});