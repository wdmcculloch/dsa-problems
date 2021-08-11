let repeatStr = (n, s) => {
  let str = '';
  let cur = 0;
  while (cur < n) {
    str += s;
    cur++
  }
  return str;
}

module.exports = repeatStr;