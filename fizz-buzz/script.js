/*
 * Title: FizzBuzz
 * Description: https://www.hackerrank.com/challenges/fizzbuzz/problem
 * Author: Samin Yasar
 * Date: 04/April/2021
 */

function fizzBuzz(n) {
  // Write your code here
  const receivedNumber = parseFloat(n);
  let i = 1;
  const result = [];
  for (i; i <= receivedNumber; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      // first condition passed
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      // second condition passed
      result.push("Fizz");
    } else if (i % 5 === 0) {
      // third condition passed
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  for (let j = 0; j < result.length; j += 1) {
    console.log(result[j]);
  }
}

fizzBuzz(100);

// console.log(fizzBuzz(15));

// status: Completed
