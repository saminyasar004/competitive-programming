/*
 * Title: Vowel count
 * Description: https://www.codewars.com/kata/54ff3102c1bad923760001f3
 * Author: Samin Yasar
 * Date: 17/June/2021
 */

function getCount(str) {
  var vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  str.split("").forEach((el) => {
    if (vowels.includes(el)) {
      vowelsCount++;
    }
  });
  return vowelsCount;
}

console.log(getCount("I am a boy!"));

// status Completed
