/*
 * Title: Removing elements
 * Description: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
 * Author: Samin Yasar
 * Date: 15/June/2021
 */

function removeEveryOther(arr) {
  let resultArray = [];
  arr.forEach((el, ind) => {
    if (ind % 2 === 0) {
      resultArray.push(el);
    }
  });
  return resultArray;
}

console.log(
  removeEveryOther([
    "1Keep",
    "1Remove",
    "2Keep",
    "2Remove",
    "3Keep",
    "3Remove",
    "4Keep",
    "4Remove",
  ])
);

// status: Completed
