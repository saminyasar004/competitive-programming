/*
 * Title: Median of two sorted array
 * Description: https://leetcode.com/problems/median-of-two-sorted-arrays/
 * Author: Samin Yasar
 * Date: 10/January/2021
 */

function getMedian(nums1, nums2) {
  const numberArray1 = nums1;
  const numberArray2 = nums2;
  // let's concat the two array into one array
  const mergedArray = numberArray1.concat(numberArray2);
  // let's sort it by ascending order
  const sortedArray = mergedArray.sort((a, b) => a - b);
  // get the length of this sorted array
  const lenArray = sortedArray.length;
  // get the median of this length
  const medianArray = parseInt((lenArray - 1) / 2);
  // declare an empty array to put our elements
  let finalArray = [];
  // declare the final result
  let result = 0;
  if (lenArray % 2 == 0) {
    // array length is even
    finalArray.push(sortedArray[medianArray], sortedArray[medianArray + 1]);
    // let's put it on our final result
    result = (finalArray[0] + finalArray[1]) / 2;
  } else {
    // array length is odd
    finalArray.push(sortedArray[medianArray]);
    // let's put it on our final result
    result = finalArray[0];
  }
  // log to see the sorted array
  console.log(sortedArray);
  // return the final result
  return result;
}

console.log(getMedian([1, 3], [2]));

// submitted on leetcode
// Completed

// var findMedianSortedArrays = function (nums1, nums2) {
//   const numberArray1 = nums1;
//   const numberArray2 = nums2;
//   const mergedArray = numberArray1.concat(numberArray2);
//   const sortedArray = mergedArray.sort((a, b) => a - b);
//   const lenArray = sortedArray.length;
//   const medianArray = parseInt((lenArray - 1) / 2);
//   let finalArray = [];
//   let result = 0;
//   if (lenArray % 2 == 0) {
//     finalArray.push(sortedArray[medianArray], sortedArray[medianArray + 1]);
//     result = (finalArray[0] + finalArray[1]) / 2;
//   } else {
//     finalArray.push(sortedArray[medianArray]);
//     result = finalArray[0];
//   }
//   return result;
// };
