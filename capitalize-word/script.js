/*
 * Title: Capitalize word
 * Description: https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript
 * Author: Samin Yasar
 * Date: 17/June/2021
 */

String.prototype.toCapitalize = function () {
  const splittedStr = this.split(" ");
  let capitalizedStr = [];
  splittedStr.forEach((el) => {
    capitalizedStr.push(el[0].toUpperCase() + el.slice(1));
  });
  return capitalizedStr.join(" ");
};

const str = "my name is samin yasar";

console.log(str.toCapitalize());

// status Completed
