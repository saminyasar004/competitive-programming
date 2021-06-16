/*
 * Title: Remove duplicate words
 * Description: https://www.codewars.com/kata/5b39e3772ae7545f650000fc
 * Author: Samin Yasar
 * Date: 16/June/2021
 */

function removeDuplicateWords(str) {
  let splittedArray = str.split(" ");
  let filteredArray = splittedArray.reduce((acc, el) => {
    if (!acc.includes(el)) {
      acc.push(el);
    }
    return acc;
  }, []);
  let result = filteredArray.join(" ");
  return result;
}

console.log(
  removeDuplicateWords("alpha beta alpha beta gamma gamma delta delta")
);

// status Completed
