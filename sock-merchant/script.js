/*
 * Title: Sock Pair Match
 * Description: https://www.hackerrank.com/challenges/sock-merchant/problem
 * Author: Samin Yasar
 * Date: 08/April/2021
 * Variable name type: variableName
 */

function sockPair(num, arr) {
  num = parseInt(num);
  if (arr.length !== num) return;
  let totalPair = 0;
  const mappedData = arr.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  for (i in mappedData) {
    totalPair += Math.floor(mappedData[i] / 2);
  }
  return totalPair;
}

console.log(sockPair(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// Complete
