/*
 * Title: Ranking Position
 * Description: https://www.codewars.com/kata/5c784110bfe2ef660cb90369
 * Author: Samin Yasar
 * Date: 23/June/2021
 */

function ranking(people) {
  people.sort((a, b) => {
    if (a.points === b.points) {
      return a.name.localeCompare(b.name);
    }
    return b.points - a.points;
  });
  let currentPosition = 1;
  let positionArray = people.reduce((acc, el) => {
    if (!acc[el.points]) {
      acc[el.points] = currentPosition;
      currentPosition++;
    } else {
      currentPosition++;
    }
    return acc;
  }, {});
  people.forEach((el) => {
    el.position = positionArray[el.points];
  });
  return people;
}

const people = [
  { name: "John", points: 100 },
  { name: "Bob", points: 130 },
  { name: "Mary", points: 120 },
  { name: "Kate", points: 120 },
];

console.log(ranking(people));

// status Completed
