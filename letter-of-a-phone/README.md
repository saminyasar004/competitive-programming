# Letter of a phone number

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in <b>any order</b>.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

## Key Map

```javascript
2 -> "abc"
3 -> "def"
4 -> "ghi"
5 -> "jkl"
6 -> "mno"
7 -> "pqrs"
8 -> "tuv"
9 -> "wxyz"
```

## Example 1:

```javascript
Input: digits = "23";
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
```

## Example 2:

```javascript
Input: digits = "";
Output: [];
```

## Example 3:

```javascript
Input: digits = "2";
Output: ["a", "b", "c"];
```
