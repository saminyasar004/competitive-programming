/*
 * Title: Valid paranthesis
 * Description: https://leetcode.com/problems/valid-parentheses/
 * Author: Samin Yasar
 * Date: 14/June/2021
 */

/*
 * First of all the given string must be a even number of length
 *
 */

function isValid(s) {
  let str = s.toString();
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const heap = [];
  for (let i = 0; i < str.length; i++) {
    if (brackets[str[i]]) {
      heap.unshift(brackets[str[i]]);
    } else {
      if (heap.shift() !== brackets[str[i]]) return false;
      else {
        return true;
      }
    }
  }
  return heap;
}

console.log(isValid("()"));
