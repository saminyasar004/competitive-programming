/*
 * Title: Array diff
 * Description: https://www.codewars.com/kata/523f5d21c841566fde000009/javascript
 * Author: Samin Yasar
 * Date: 16/June/2021
 */

function arrayDiff(a, b) {
  let resultArray = [];
  a.forEach((el) => {
    if (!b.includes(el)) {
      resultArray.push(el);
    }
  });
  return resultArray;
}

console.log(arrayDiff([1, 2, 3, 2, 4, 1], [1, 2]));

// status Completed
