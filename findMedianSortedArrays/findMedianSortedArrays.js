/**
 * @param {number[]} nums1 (array)
 * @param {number[]} nums2 (array)
 * @return {number} median (int) of the merged input arrays
 * @timecomplexity - O(log (m+n))
 */
var findMedianSortedArrays = function (nums1, nums2) {
  //merge and sort inputs
  let output = [...nums1, ...nums2].sort((a, b) => a - b);

  // get median
  let median;
  let mid = Math.floor(output.length / 2);
  if (output.length % 2 === 0) {
    return (median = (output[mid] + output[mid - 1]) / 2);
  } else {
    return (median = output[mid]);
  }
};

module.exports = findMedianSortedArrays;