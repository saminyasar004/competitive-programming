/*
 * Title: Find numbers which are divisible by given number
 * Description: https://www.codewars.com/kata/55edaba99da3a9c84000003b
 * Author: Samin Yasar
 * Date: 16/June/2021
 */

function divisibleBy(array, divisor) {
  let numsArray = [...array];
  let getDivisibleNum = numsArray.filter((el) => {
    return el % divisor === 0;
  });
  return getDivisibleNum;
}

console.log(divisibleBy([0, 4], 2));
