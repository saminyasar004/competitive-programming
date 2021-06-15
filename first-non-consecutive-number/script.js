/*
 * Title: Find the first consecutive number codewars problem
 * Description: https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
 * Author: Samin Yasar
 * Date: 15/June/2021
 */

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let currentEl = arr[i];
    let nextEl = arr[i + 1];
    if (currentEl + 1 !== nextEl) {
      return nextEl;
    }
  }
  return null;
}

console.log(firstNonConsecutive([-4, -3, -2, 0, 1, 4, 5]));

// status: Uncomplete
