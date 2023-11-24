/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1,nums2) {
    let nums = nums1.concat(nums2)  // concat() 数组合并
    // nums.sort(function(a, b){return a-b}) // 升序排列
     nums.sort((a, b) => a-b)  
    let mid = Math.floor(nums.length / 2)  // Math.floor(1.6) 返回小于等于1.6的最大整数 1
    if ( nums.length % 2 != 0) {
        return nums[mid]
  
    } else {
        return (nums[mid] + nums[mid - 1])/2

    }

};