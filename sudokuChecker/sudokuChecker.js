/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: Array - period denoting empty spaces
Output: true if the board is valid, false if it isn't

ex.
input:

[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

Output: true

Input:

[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

Output: false

constraints:
- board.length == 9
- board[i].length == 9
- board[i][j] is a digit or '.'
*/

const sudokuChecker = (arr) => {
  let board = new Set();
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      let currentNum = arr[i][j];
      if (currentNum !== '.') {
        let rows = `row ${i} value ${currentNum}`;
        let cols = `column ${j} value ${currentNum}`;
        let grids = `grid ${Math.floor(i/3)}x${Math.floor(j/3)} value ${currentNum}`;
        if (board.has(rows) || board.has(cols) || board.has(grids)) {
          return false;
        } else {
          board.add(rows);
          board.add(cols);
          board.add(grids);
        }
      }
    }
  }
  return true;
}


module.exports = sudokuChecker;