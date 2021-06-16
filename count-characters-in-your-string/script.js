/*
 * Title: Count characters in your string
 * Description: https://www.codewars.com/kata/52efefcbcdf57161d4000091
 * Author: Samin Yasar
 * Date: 16/June/2021
 */

function count(str) {
  if (str.length > 0) {
    let strArray = str.split("");
    let result = strArray.reduce((acc, el) => {
      if (acc[el]) {
        acc[el]++;
      } else {
        acc[el] = 1;
      }
      return acc;
    }, {});
    return result;
  }
  return {};
}

console.log(count("aba"));

// status Completed
