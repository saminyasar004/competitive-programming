/*
 * Title: Validate credit card number
 * Description: https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2
 * Author: Samin Yasar
 * Date: 16/June/2021
 */

/*
 * split the every second element is goes to double & put it in an array [doubledArray]
 * if any number is greatere than 9 then I will substract 9 from that number & put it in an array [doubledArray]
 * then add al elements each other in [doubledArray] & put it in a variable doubledArraySum
 * then devide doubledArraySum to 10
 *  - if result is === 0 -> the given original number is valid
 *  - if result is !== 0 -> the given original number is invalid
 * return true if credit card is valid otherwise false
 */

function validate(n) {
  let result = false;
  let numsArray = n
    .toString()
    .split("")
    .map((el) => parseInt(el));
  let doubledArray = numsArray.map((el, ind) => {
    if (numsArray.length % 2 === 0) {
      // length is even
      if ((ind + 1) % 2 !== 0) {
        // current index is odd
        return el * 2;
      } else {
        return el;
      }
    } else {
      // length is odd
      if ((ind + 1) % 2 === 0) {
        // current index is even
        return el * 2;
      } else {
        return el;
      }
    }
  });
  let substractArray = doubledArray.map((el) => {
    if (el > 9) {
      return el - 9;
    } else {
      return el;
    }
  });
  let doubledArraySum = substractArray.reduce((acc, el) => {
    return acc + el;
  });
  if (doubledArraySum % 10 === 0) {
    result = true;
  }
  return result;
}

console.log(validate(562));

// status Completed
