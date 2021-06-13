/*
 * Title: Roman to integer convert
 * Description: given a roman number I have to convert it to an integer;
 * Author: Samin Yasar
 * Date: 29/March/2021
 * Variable name type: variableName
 */

/* 
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
*/

// const data = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

const romanToInt = function (str) {
  str = str.toString();
  let result = 0;
  const data = {
    I: "1",
    V: "5",
    X: "10",
    L: "50",
    C: "100",
    D: "500",
    M: "1000",
  };
  const splittedStr = str.split("");
  const splittedNum = splittedStr.map((el) => {
    return el.replace(el, data[el]);
  });
  const splittedNumSum = splittedNum.map((el) => {
    return (result += parseInt(el));
  });
  // return splittedNum;
  return Math.max(...splittedNum);
};

console.log(romanToInt("IV"));
