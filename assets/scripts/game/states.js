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

const checkVerticalStates = function (gameBoard, player) {
  // check for vertical win states
  // vertical win states are {0,3,6}, {1,4,7}, and {2,5,8}

  // cannot simply slice game board this time
  // declare empty arrays for columns
  let firstColumn = [];
  let secondColumn = [];
  let thirdColumn = [];

  // iterate over game board and fill column arrays
  for (let i = 0; i < gameBoard.length; i++) {
    if ((i % 3) === 0) {
      firstColumn.push(gameBoard[i]);
    } else if ((i % 3) === 1) {
      secondColumn.push(gameBoard[i]);
    } else {
      thirdColumn.push(gameBoard[i]);
    }
  }

  // check for wins in each column
  // this could all be done in the return but this reads easier
  let first = firstColumn.every((e) => e === player.piece);
  let second = secondColumn.every((e) => e === player.piece);
  let third = thirdColumn.every((e) => e === player.piece);

  // return true if any column is a win
  return (first || second || third);
};

const checkDiagonalStates = function (gameBoard, player) {
  // check for diagonal win states
  // diagonal win states are {0,4,8} and {2,4,6}

  // cannot simply slice game board this time
  // declare empty arrays for columns
  let firstDiagonal = [];
  let secondDiagonal = [];

  // iterate over game board and fill column arrays
  // TODO this is hardcoded and bad and there's probably a better way
  for (let i = 0; i < gameBoard.length; i++) {
    if (i === 0 || i === 4 || i === 8) {
      firstDiagonal.push(gameBoard[i]);

    } else if (i === 2 || i === 4 || i === 6) {
      secondDiagonal.push(gameBoard[i]);
    }
  }

  // check for wins in each diagonal
  // this could all be done in the return but this reads easier
  let first = firstDiagonal.every((e) => e === player.piece);
  let second = secondDiagonal.every((e) => e === player.piece);

  // return true if any column is a win
  return (first || second);
};

// single function that can be called to check all win states
const winStateCheck = function (gameBoard, player) {
  // this could all be done in the return but this reads easier
  let horizontal = checkHorizontalStates(gameBoard, player);
  let vertical = checkVerticalStates(gameBoard, player);
  let diagonal = checkDiagonalStates(gameBoard, player);

  // return true if any state is a win
  return (horizontal || vertical || diagonal);
};

module.exports = {
  winStateCheck,
};
