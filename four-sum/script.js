/*
 * Title: Four sum
 * Description: https://leetcode.com/problems/4sum/
 * Author: Samin Yasar
 * Date: 07/April/2021
 */

function fourSum(nums = [], target) {
  let result = [];
  nums.forEach((element1, index1) => {
    nums.forEach((element2, index2) => {
      if (element1 + element2 === target) {
        result = [element2, element1];
      }
    });
  });
  result.length === 0 ? [] : result;
  return result;
}

console.log(fourSum([1, -1, 3, 4, 5], 0));
