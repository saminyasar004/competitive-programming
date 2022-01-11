/*
 * Title: String to integer atoi
 * Description: https://leetcode.com/problems/string-to-integer-atoi/
 * Author: Samin Yasar
 * Date: 10/January/2021
 */

// self trying

const myAtoi = (s) => {
  let getValue = parseInt(s);
  let result;
  if (isNaN(getValue)) {
    return 0;
  } else if (getValue > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (getValue < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  } else {
    result = getValue;
  }
  return result;
};

console.log(myAtoi(" -91283472332"));
console.log(myAtoi(" 42"));

console.log(Math.pow(2, 31)); // 2147483648
