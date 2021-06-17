/*
 * Title: Vowel count
 * Description: https://www.codewars.com/kata/54ff3102c1bad923760001f3
 * Author: Samin Yasar
 * Date: 17/June/2021
 */

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const count = str.split("").reduce((acc, el) => {
    if (vowels.includes(el)) {
      acc++;
    }
    return acc;
  }, 0);
  return count;
}

console.log(getCount("I am a boy!"));

// status Completed
