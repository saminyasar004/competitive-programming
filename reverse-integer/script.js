/*
 * Title: Reverse integer
 * Description: https://leetcode.com/problems/reverse-integer
 * Author: Samin Yasar
 * Date: 10/January/2021
 */

// self trying

const reverseInteger = (int) => {
  let result = "";
  const number = int.toString();
  const len = number.length;
  for (let i = len - 1; i >= 0; i--) {
    if (number[i] != "-") {
      result += number[i];
    }
  }
  result = parseInt(result);
  if (result > 0x7fffffff) {
    return 0;
  }
  return int < 0 ? -result : result;
};

console.log(reverseInteger(1563847412));

////

// Name argument n instead of x, as that latter is commonly used for decimal numbers
function reverse(n) {
  // Array#reverse method takes no argument.
  // You can use `Math.abs()` instead of changing the sign if negative.
  // Conversion of string to number can be done with unary plus operator.
  var reverseN = +String(Math.abs(n)).split("").reverse().join("");
  // Use a number constant instead of calculating the power
  if (reverseN > 0x7fffffff) {
    return 0;
  }
  // As we did not change the sign, you can do without the boolean isNegative.
  // Don't multiply with -1, just use the unary minus operator.
  // The ternary operator might interest you as well (you could even use it
  //    to combine the above return into one return statement)
  return n < 0 ? -reverseN : reverseN;
}

console.log(reverse(1563847412));

// submitted on leetcode

const reverseInt = (int) => {
  let result = +String(Math.abs(int)).split("").reverse().join("");
  if (result > 0x7fffffff) {
    // 2147483648 or 0x7ffffffff
    return 0;
  }
  return int < 0 ? -result : result;
};

console.log(reverseInt(1563847412));

console.log((2147483647).toString(16)); // 7fffffff
console.log(Math.pow(2, 31)); // 2147483648

// status: Complete
