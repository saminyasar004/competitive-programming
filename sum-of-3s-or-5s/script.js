/*
 * Title: Sum of all the muliples of 3 or 5
 * Description: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
 * Author: Samin Yasar
 * Date: 16/June/2021
 */

function findSum(n) {
  if (n > 0) {
    let resultSum = 0;
    let resultArray = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        resultArray.push(i);
      }
    }
    resultArray.forEach((el) => {
      resultSum += el;
    });
    return resultSum;
  }
  return 0;
}

console.log(findSum(10));

// status Completed
