/*
 * Title: Palindromic number
 * Description: https://leetcode.com/problems/palindrome-number/
 * Author: Samin Yasar
 * Date: 10/January/2021
 */

// self trying

const palindromicNumber = (int) => {
  const getValue = int;
  let result = +String(Math.abs(getValue)).split("").reverse().join("");
  console.log(getValue);
  console.log(result);
  if (result == getValue) return true;
  else return false;
};

console.log(palindromicNumber(-100));

// Completed
