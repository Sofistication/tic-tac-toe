'use strict';

const states = require('./states');

// TODO newGame() should return an object containing winner and loser
// TODO create makeMove() to handle moves

const makeMove = function (gameBoard, moveSpot, piece) {
  if (gameBoard[moveSpot] === '') {
    gameBoard[moveSpot] = piece;
    return true;
  } else {
    console.log('Invalid move!');
    return false;
  }
 };

const newGame = function (playerOne, playerTwo) {

  // define game board, starting player and variable for game loop
  let gameBoard = new Array(9);
  let playerOneTurn = true;
  let gameOver = false;
  let currentPlayer = {};

  //enter game loop
  while (!gameOver) {
    // play game

    // set current player based on whose turn it is
    if (playerOneTurn) {
      currentPlayer = playerOne;
    } else {
      currentPlayer = playerTwo;
    }

    console.log(gameBoard);
    console.log(`${currentPlayer.name}, it is your turn! Pick a square to play.`);

    // move loop, create tile handlers here

    //check for winner
    if (states.winStateCheck(gameBoard, currentPlayer)) {
      console.log(`${currentPlayer.name} wins!`);
      gameOver = true;
    } else if (states.tieStateCheck(gameBoard, currentPlayer)) {
      console.log('Cat\'s game!');
      gameOver = true;
    } else {
      playerOneTurn = !playerOneTurn;
    }
  }
};

module.exports = {
  newGame,
};
