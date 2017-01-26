'use strict';

const states = require('./states');
const ui = require('../app/ui');

// TODO newGame() should return an object containing winner and loser
// TODO create makeMove() to handle moves

function Game (board) {
  this.board = board;
  this.currentPlayer = 'X';
}

Game.prototype.changeTurn = function (activePlayer) {
  // console.log('before ', this.currentPlayer);
  if (activePlayer === 'X') {
    this.currentPlayer = 'O';
  } else {
    this.currentPlayer = 'X';
  }
  // console.log('after ', this.currentPlayer);
};

Game.prototype.checkWinState = function (board, piece) {
  // this could all be done in the return but this reads easier
  let horizontal = states.checkHorizontalStates(board, piece);
  let vertical = states.checkVerticalStates(board, piece);
  let diagonal = states.checkDiagonalStates(board, piece);

  // return true if any state is a win
  return (horizontal || vertical || diagonal);
};

Game.prototype.checkTieState = function (board) {
  return board.every((e) => e !== '');
};

Game.prototype.endGame = function () {
  this.board = ['', '', '', '', '', '', '', '', ''];
  this.currentPlayer = 'X';

  $('#gameBoard').off('click');
  $('#mainMenu').show();
};

Game.prototype.makeMove = function (event) {

  let index = event.target.id;

  //check for valid move
  if (this.board[index] === '') {
    this.board[index] = this.currentPlayer;
    $(event.target).append(this.currentPlayer);

    // display move in chat log
    ui.displayAction('play', this.currentPlayer, index);
    console.log(index);

    // after every valid move, check for win or tie
    let win = this.checkWinState(this.board, this.currentPlayer);
    if (win) {
      console.log(`${this.currentPlayer} wins!`);
      ui.displayAction('win', this.currentPlayer)
      this.endGame();
    } else if (this.checkTieState(this.board)) {
      console.log('Cat\'s Game!');
      ui.displayAction('tie')
      this.endGame();
    } else { //if game is still going, change turn
      this.changeTurn(this.currentPlayer);
      // console.log(this.currentPlayer);
    }
  } else {
    console.log('Invalid move!');
    ui.displayAction('invalid');
  }
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
};
