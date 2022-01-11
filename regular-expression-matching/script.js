/*
 * Title: Regular Expression Matching
 * Description: https://leetcode.com/problems/regular-expression-matching/
 * Author: Samin Yasar
 * Date: 10/February/2021
 * Variable name type: variableName
 */

function regularExpression(s, p) {
  const text = s;
  const pattern = p;
  const expression = new RegExp(pattern, "");
  const testing = expression.test(text);
  const matched = text.match(expression);
  const replace = text.replace(expression, "CHANGED");
  console.log(testing, matched, replace);
  if (replace === "CHANGED") return true;
  return false;
}

console.log(regularExpression("aab", "c*a*b"));
// regularExpression("aa", "aa");

// Completed
