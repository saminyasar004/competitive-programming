/*
 * Title: Credit card mask problem by codewars
 * Description: https://www.codewars.com/kata/5412509bd436bd33920011bc
 * Author: Samin Yasar
 * Date: 15/June/2021
 */

function maskify(str) {
  str = str.toString();
  let secureStr = str.split("");
  secureStr = secureStr.fill("#", 0, secureStr.length - 4).join("");
  return secureStr;
}

console.log(maskify("4556364607935616"));
