/*
 * Title: from youtube
 * Description: leetcode two sum problem solving
 * Author: Samin Yasar
 * Date: 13/December/2020
 */

const twoSum = (nums, target) => {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};
twoSum([2, 7, 11, 15], 9);
