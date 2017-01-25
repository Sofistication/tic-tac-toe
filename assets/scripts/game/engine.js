'use strict';

const states = require('./states');

// TODO newGame() should return an object containing winner and loser
// TODO create makeMove() to handle moves

function Game (board) {
  this.board = board;
  this.currentPlayer = 'X';
}

Game.prototype.checkWinState = function (board, piece) {
  // this could all be done in the return but this reads easier
  let horizontal = states.checkHorizontalStates(gameBoard, player);
  let vertical = states.checkVerticalStates(gameBoard, player);
  let diagonal = states.checkDiagonalStates(gameBoard, player);

  // return true if any state is a win
  return (horizontal || vertical || diagonal);
};

Game.prototype.makeMove = function (event) {
  console.log(event.target.id);
  // console.log(event.target);
  // if (this.board[moveSpot] === '') {
  //   this.board[moveSpot] = this.piece;
  //   return true;
  // } else {
  //   console.log('Invalid move!');
  //   return false;
  // }
 };

 const initGame = function () {
   $('#gameBoard').on('click', game.makeMove);
 };

// const newGame = function (playerOne, playerTwo) {
//
//   // define game board, starting player and variable for game loop
//   let gameBoard = new Array(9);
//   let playerOneTurn = true;
//   let gameOver = false;
//   let currentPlayer = {};
//
//   //enter game loop
//   while (!gameOver) {
//     // play game
//
//     // set current player based on whose turn it is
//     if (playerOneTurn) {
//       currentPlayer = playerOne;
//     } else {
//       currentPlayer = playerTwo;
//     }
//
//     console.log(gameBoard);
//     console.log(`${currentPlayer.name}, it is your turn! Pick a square to play.`);
//
//     // move loop, create tile handlers here
//
//     //check for winner
//     if (states.winStateCheck(gameBoard, currentPlayer)) {
//       console.log(`${currentPlayer.name} wins!`);
//       gameOver = true;
//     } else if (states.tieStateCheck(gameBoard, currentPlayer)) {
//       console.log('Cat\'s game!');
//       gameOver = true;
//     } else {
//       playerOneTurn = !playerOneTurn;
//     }
//   }
// };

module.exports = {
  Game,
  initGame,
};
