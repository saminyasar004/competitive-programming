/*
 * Title: Find the next perfect square
 * Description: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
 * Author: Samin Yasar
 * Date: 17/June/2021
 */

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

console.log(findNextSquare(144));

// status Completed
