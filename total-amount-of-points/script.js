/*
 * Title: Total amount of points
 * Description: https://www.codewars.com/kata/5bb904724c47249b10000131
 * Author: Samin Yasar
 * Date: 16/June/2021
 */

function points(array) {
  return array.reduce((acc, el) => {
    let [x, y] = el.split(":").map((el) => parseInt(el));
    if (x > y) {
      acc += 3;
    } else if (x === y) {
      acc += 1;
    }
    return acc;
  }, 0);
}

console.log(points(["3:1", "2:2", "0:1"]));
