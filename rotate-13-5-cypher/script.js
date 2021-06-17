/*
 * Title: Rotate 13,5 cypher
 * Description: https://www.codewars.com/kata/5894986e2ddc8f6805000036/javascript
 * Author: Samin Yasar
 * Date: 17/June/2021
 */

function ROT135(input) {
  //Provide your magic here please ;)
  const mapedCharacter = {
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
    0: "5",
    1: "6",
    2: "7",
    3: "8",
    4: "9",
    5: "0",
    6: "1",
    7: "2",
    8: "3",
    9: "4",
  };
  const splittedInput = input.split("");
  let resultArray = [];
  splittedInput.forEach((el) => {
    if (mapedCharacter[el]) {
      resultArray.push(mapedCharacter[el]);
    } else {
      resultArray.push(el);
    }
  });
  return resultArray.join("");
}

console.log(ROT135("gur dhvpx oebja sbk whzcf bire gur 7 ynml qbtf"));
