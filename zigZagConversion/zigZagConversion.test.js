const convert = require('./zigZagConversion.js');

describe('zig zag conversion', () => {
  test('returns the correct string', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  })
  test('returns correct string for row length of 1', () => {
    expect(convert('A', 1)).toBe('A');
    expect(convert('AB', 1)).toBe('AB');
  })
})