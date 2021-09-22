const myAtoi = require('./myAtoi.js');

test('returns correct value', () => {
  expect(myAtoi('42')).toBe(42);
})
test('trims white space and maintains negative', () => {
  expect(myAtoi('  -42')).toBe(-42);
})
test('correctly trims trailing characters that are non number', () => {
  expect(myAtoi('4193 with words')).toBe(4193);
  expect(myAtoi('words and 987')).toBe(0);
  expect(myAtoi('-91283472332')).toBe(-2147483648);
})
test('returns 0 when no numbers are detected', () => {
  expect(myAtoi('words and 987')).toBe(0);
})
test('returns limit when result is out of range', () => {
  expect(myAtoi('-91283472332')).toBe(-2147483648);
})