# **Username Validation**

Have the function `usernameValidation(str)` take the `str` parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It cannot end with an underscore character.
4. It can only contain letters, numbers, and the underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.

## **Examples:**

```javascript
Input: "aa_";
Output: false;
```

```javascript
Input: "_happyCoding";
Output: false;
```

```javascript
Input: "u__hello_world123";
Output: true;
```

```javascript
Input: "usernamehello123";
Output: true;
```

```javascript
Input: "john_doe";
Output: true;
```

- [By CoderByte]("https://coderbyte.com/editor/codeland%20username%20validation:javascript" "CoderByte")
