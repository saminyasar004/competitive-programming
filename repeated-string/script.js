/*
 * Title: Repeted String
 * Description: https://www.hackerrank.com/challenges/repeated-string/problem
 * Author: Samin Yasar
 * Date: 18/April/2021
 * Variable name type: variableName
 */

function repeatedStr(str, n) {
  str = str.toString();
  n = parseInt(n);
  let strLen = str.length;
  let timesToRepeat = Math.ceil(n / strLen);
  let repeatedStr = str.repeat(timesToRepeat).slice(0, n);
  let countLetter = repeatedStr.match(/a/gi).length;
  if (strLen === 0) return;
  return countLetter;
}

console.log(repeatedStr("abcac", 10));

// Completed
