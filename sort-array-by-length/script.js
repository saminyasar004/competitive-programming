/*
 * Title: Sort array by length
 * Description: https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
 * Author: Samin Yasar
 * Date: 15/June/2021
 */

function sortByLength(arr) {
  let sortedArray = arr.sort((a, b) => a.length - b.length);
  return sortedArray;
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
