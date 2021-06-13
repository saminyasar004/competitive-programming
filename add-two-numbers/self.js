/*
 * Title: self trying
 * Description: leetcode add two numbers problem solving
 * Author: Samin Yasar
 * Date: 13/December/2020
 */

const addTwoNumbers = (l1, l2) => {
  let len1 = l1.length;
  let len2 = l2.length;
  let result1 = [];
  let result2 = [];
  for (let i = len1 - 1; i >= 0; i--) {
    result1 += l1[i];
  }
  for (let i = len2 - 1; i >= 0; i--) {
    result2 += l2[i];
  }
  let total = parseInt(result1) + parseInt(result2);
  console.log(`${result1} + ${result2} = ${total}`);
  let totalString = total.toString();
  let test = [];
  for (let i = totalString.length - 1; i >= 0; i--) {
    test.push(totalString[i]);
  }
  let finalResult = [];
  test.forEach((element) => {
    element = parseInt(element);
    finalResult.push(element);
  });
  return finalResult;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// submitted on leetcode

// var addTwoNumbers = function (l1, l2) {
//   let len1 = l1.length;
//   let len2 = l2.length;
//   let result1 = [];
//   let result2 = [];
//   for (let i = len1 - 1; i >= 0; i--) {
//     result1 += l1[i];
//   }
//   for (let i = len2 - 1; i >= 0; i--) {
//     result2 += l2[i];
//   }
//   let total = parseInt(result1) + parseInt(result2);
//   let totalString = total.toString();
//   let test = [];
//   for (let i = totalString.length - 1; i >= 0; i--) {
//     test.push(totalString[i]);
//   }
//   let finalResult = [];
//   test.forEach((element) => {
//     element = parseInt(element);
//     finalResult.push(element);
//   });
//   return finalResult;
// };

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// status: Pending
