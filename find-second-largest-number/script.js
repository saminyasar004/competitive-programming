/*
 * Title: Find the second largest number from an array
 * Description: https://www.hackerrank.com/challenges/js10-arrays/problem
 * Author: Samin Yasar
 * Date: 12/June/2021
 */

function getSecondLargestNum(nums) {
  let result = 0;
  const largestNum = nums.reduce((acc, el) => {
    return Math.max(acc, el);
  });
  let arrWithoutLargestNum = nums.filter((el) => {
    if (el !== largestNum) {
      return el;
    }
  });
  result = Math.max(...arrWithoutLargestNum);
  return result;
}

console.log(getSecondLargestNum([2, 3, 4, 6, 5, 6]));

// Completed
