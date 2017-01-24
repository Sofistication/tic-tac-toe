'use strict';

const states = require('./states');

// create empty array to serve as game board
let gameBoard = new Array(9);

// check array for the possible win states
const checkWinStates = function (gameBoard, player) {
  // 8 potential win states, each one of three types
  // each class of win probably needs a separate check
  // each class of win probably has a pattern
  states.checkHorizontalStates(gameBoard, player);
  states.checkVerticalStates(gameBoard, player);
  states.checkDiagonalStates(gameBoard, player);
}
