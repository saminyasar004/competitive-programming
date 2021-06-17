/*
 * Title: Cat, Dog years
 * Description: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
 * Author: Samin Yasar
 * Date: 17/June/2021
 */

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let catYears = 0;
  let dogYears = 0;
  for (let i = 1; i <= humanYears; i++) {
    switch (i) {
      case 1:
        catYears += 15;
        dogYears += 15;
        break;
      case 2:
        catYears += 9;
        dogYears += 9;
        break;
      default:
        catYears += 4;
        dogYears += 5;
        break;
    }
  }
  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(10));

// status Completed
