/*
 * Title: Find the first consecutive number codewars problem
 * Description: https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
 * Author: Samin Yasar
 * Date: 15/June/2021
 */

function firstNonConsecutive(arr) {
  let numsArray = arr.map((el) => parseInt(el)).sort((a, b) => a - b);
  let result = 0;
  if (numsArray.length < 2) {
    result = 0;
  } else {
    numsArray.forEach((el, ind) => {
      if (ind + 1 !== numsArray.length && el + 1 !== numsArray[ind + 1]) {
        result = numsArray[ind + 1];
      }
    });
  }
  result = result === 0 ? null : result;
  return result;
}

console.log(firstNonConsecutive([-5, -4, -3, -2, -1, 0, 2, 4]));
