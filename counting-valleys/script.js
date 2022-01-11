/*
 * Title: Count steps
 * Description: https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * Author: Samin Yasar
 * Date: 12/April/2021
 * Variable name type: variableName
 */

function countSteps(steps = 0, paths = "") {
  steps = parseFloat(steps); // convert the given steps number into integer
  paths = paths.toString(); // convert the paths into string
  if (paths.length !== steps) return false; // if the steps numeber and the path length is not equal I will return false
  let totalMovement = 1; // set the initial value of total movement of the user
  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === "U") totalMovement++;
    else if (paths[i] === "D") totalMovement--;
    else return;
  }
  return totalMovement;
}

console.log(countSteps(12, "DDUUDDUDUUUD"));
