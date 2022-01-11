/**
 * Title: Validate Sudoku
 * Description: https://leetcode.com/problems/valid-sudoku/
 * Author: Samin Yasar
 * Date: 19/July/2021
 */

/**
 *
 * @param {character[][]} board - The whole data of a sudoku board
 * @return {boolean} - Whether given board data is valid or not
 * each column must contain the digits 1-9 number without repeatation
 * each row must contain the digits 1-9 number without repeatation
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Only the filled cells need to be validated according to the mentioned rules.
 * blanked cells --> "."
 */
function isValidSudoku(board) {
  let uniqueSet = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const CURRENT_CELL = board[i][j];
      if (CURRENT_CELL !== ".") {
        if (
          !uniqueSet.add(`${CURRENT_CELL} row ${i + 1}`) ||
          !uniqueSet.add(`${CURRENT_CELL} column ${j + 1}`) ||
          !uniqueSet.add(
            `${CURRENT_CELL} subbox ${Math.floor(i / 3 + 1)} - ${Math.floor(
              j / 3 + 1
            )}`
          )
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
