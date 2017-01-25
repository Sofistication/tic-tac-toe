'use strict';

const states = require('./states');
// TODO create newGame(), which should accept two players
// TODO newGame() should return an object containing winner and loser

const newGame = function (/*playerOne, playerTwo*/) {
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

    console.log(`${currentPlayer.name}, it is your turn! Pick a square to play.`)


    //check for winner
    if (states.winStateCheck(gameBoard, currentPlayer) || states.tieStateCheck(gameBoard, currentPlayer)) {
      gameOver = true;
    } else {
      playerOneTurn = !playerOneTurn;
    }
  }
};

module.exports = {
  newGame,
};
