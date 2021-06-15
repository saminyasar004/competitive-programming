/*
 * Title: Credit card mask
 * Description: https://www.codewars.com/kata/5412509bd436bd33920011bc
 * Author: Samin Yasar
 * Date: 15/June/2021
 */

function maskify(str) {
  if (str.length > 4) {
    str = str.toString();
    let secureStr = str.split("");
    secureStr = secureStr.fill("#", 0, secureStr.length - 4).join("");
    return secureStr;
  } else {
    return str;
  }
}

console.log(maskify("12345"));

// status: Completed
