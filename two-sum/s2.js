/*
 * Title: self trying
 * Description: leetcode two sum problem solving
 * Author: Samin Yasar
 * Date: 13/December/2020
 */

/* solution 1: (by self) status: correct

const twoSum = (nums, trgt) => {
  const numbers = nums;
  const target = trgt;
  let result = [];
  numbers.forEach((number, index) => {
    if (numbers.includes(target - number)) {
      if (target - number === target / 2) {
        if (target / 2 === number) {
          function countElement(array, value) {
            var n = 0;
            for (i = 0; i < array.length; i++) {
              if (array[i] == value) {
                n++;
              }
            }
            return n;
          }
          if (countElement(nums, target / 2) % 2 === 0) {
            result.push(index);
          } else {
            return false;
          }
        } else {
          result.push(index);
        }
      } else {
        result.push(index);
      }
    } else {
      return false;
    }
  });
  console.log(result);
};

console.log(twoSum([4, 2, 5, 8], 6));

*/

/* solution 2: (by self) status: correct

function twoSum(nums = [], target) {
  let result = [];
  nums.forEach((element1, index1) => {
    nums.forEach((element2, index2) => {
      if (index1 !== index2 && element1 + element2 === target) {
        result = [index2, index1];
        console.log(
          `result: ${result}, index1: ${index1}, index2: ${index2}, element1: ${element1}, element2: ${element2}, target: ${target}`
        );
      }
    });
  });
  result = result.length === 0 ? [] : result;
  return result;
}

console.log(twoSum([4, 2, 5, 8], 6));

*/

// status: Completed
