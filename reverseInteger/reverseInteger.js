/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  //reverse int
  isNeg = x < 0;
  x = Math.abs(x).toString().split('');
  x = Number(x.reverse().join(''));
  if(x <= 2**31-1) {
      return isNeg ? x *-1 : x;
  } else {
      return 0;
  }

};

module.exports = reverse;