'use strict';

const checkHorizontalStates = function (gameBoard, player) {
  // check for horizontal win states
  // horizontal win states are {0,1,2}, {3,4,5}, and {6,7,8}

  //create array for each row and check for win
  let firstRow = gameBoard.slice(0, 3).every((e) => e === player.piece);
  let secondRow = gameBoard.slice(3, 6).every((e) => e === player.piece);
  let thirdRow = gameBoard.slice(6).every((e) => e === player.piece);

  // return true if any row is a win
  return (firstRow || secondRow || thirdRow);
};

const checkVerticalStates = function (gameBoard/*, player */) {
  // check for vertical win states
  // vertical win states are {0,3,6}, {1,4,7}, and {2,5,8}

  let firstColumn = [];
  let secondColumn = [];
  let thirdColumn = [];

  for (let i = 0; i < gameBoard.length; i++) {
    if ((gameBoard[i] % 3) === 0) {
      firstColumn.push(gameBoard[i]);
    } else if ((gameBoard[i] % 3) === 1) {
      secondColumn.push(gameBoard[i]);
    } else {
      thirdColumn.push(gameBoard[i]);
    }
  }
};

const checkDiagonalStates = function (/* gameBoard, player */) {
  // check for diagonal win states
  // diagonal win states are {0,4,8} and {2,4,6}
};

module.exports = {
  checkHorizontalStates,
  checkVerticalStates,
  checkDiagonalStates,
};
