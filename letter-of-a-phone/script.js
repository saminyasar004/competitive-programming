/*
 * Title: Letter of a phone
 * Description: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Author: Samin Yasar
 * Date: 11/April/2021
 * Variable name type: variableName
 */

const keyMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterOfAPhone(digits) {
  digits = digits.toString();
  let letterArray = [];
  for (let i = 0; i < digits.length; i++) {
    letterArray.push(keyMap[digits[i]]);
  }
  // console.log(letterArray);
  for (let i = 0; i < letterArray[0].length; i++) {
    for (let j = 0; j < letterArray[1].length; j++) {
      console.log(letterArray[0][i] + letterArray[1][j]);
    }
  }
}

letterOfAPhone(23);
