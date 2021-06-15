/*
 * Title: Alternating case problem by codewars
 * Description: https://www.codewars.com/kata/56efc695740d30f963000557
 * Author: Samin Yasar
 * Date: 15/June/2021
 */

String.prototype.toAlternatingCase = function () {
  let splittedArray = this.split("");
  let alternatedArray = splittedArray.map((el) => {
    if (el === el.toUpperCase()) {
      // current element is in uppercase
      return (el = el.toLowerCase());
    } else {
      // current element is in lowercase
      return (el = el.toUpperCase());
    }
  });
  alternatedArray = alternatedArray.join("");
  return alternatedArray;
};

const str = "hElLo WoRlD";
console.log(str.toAlternatingCase());
