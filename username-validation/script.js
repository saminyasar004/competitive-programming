/*
 * Title: Username Validation
 * Description: https://coderbyte.com/results/saminyasar04:Codeland%20Username%20Validation:JavaScript
 * Author: Samin Yasar
 * Date: 04/April/2021
 * Variable name type: variableName
 */

function usernameValidation(str) {
  let result = false; // store the default value of the result
  let receivedUsername = str.toString(); // convert the received username to string
  let receivedUsernameLength = receivedUsername.length; // store the username length
  let receivedUsernameFirstCharacter = receivedUsername.charAt(0); // store the username first character
  let receivedUsernameLastCharacter = receivedUsername.charAt(
    receivedUsernameLength - 1
  ); // store the username first character
  if (receivedUsernameLength >= 4 && receivedUsernameLength <= 25) {
    result = true; // pass the first condition
    if (
      receivedUsernameFirstCharacter >= "a" &&
      receivedUsernameFirstCharacter <= "z"
    ) {
      result = true; // pass the second condition
      if (receivedUsernameLastCharacter !== "_") {
        result = true; // pass the third condition
        for (let i = 0; i < receivedUsernameLength; i++) {
          if (
            (receivedUsername[i] >= "a" && receivedUsername[i] <= "z") ||
            receivedUsername[i] >= 0 ||
            receivedUsername[i] === "_"
          ) {
            result = true; // pass the fourth condition
          } else {
            result = false;
          }
        }
      } else {
        result = false;
      }
    } else {
      result = false;
    }
  } else {
    result = false;
  }
  return result;
}

console.log(usernameValidation("samin_yasar"));

// status: Complete
