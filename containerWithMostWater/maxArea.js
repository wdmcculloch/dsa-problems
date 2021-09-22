/**
 * @param {number[]} height
 * @return {number}
 * sliding windown problem
 */
 var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  let h , d, current;
  while(left < right) {
      h = Math.min(height[left], height[right]);
      d = right - left;
      current = h * d;
      max = Math.max(max, current);
      if(height[right] > height[left]) {
          left++;
      } else {
          right--;
      }
  }
  return max;
};

module.exports = maxArea;