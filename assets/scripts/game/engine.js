'use strict';

const states = require('./states');
const ui = require('../app/ui');
const api = require('../game-api/api');

// TODO newGame() should return an object containing winner and loser
// TODO create makeMove() to handle moves

function Game (board, id/*, player_x, player_o*/) {
  this.board = board;
  this.currentPlayer = 'x';
  this.id = id;
}

Game.prototype.changeTurn = function (activePlayer) {
  if (activePlayer === 'x') {
    this.currentPlayer = 'o';
  } else {
    this.currentPlayer = 'x';
  }
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
  this.currentPlayer = 'x';

  $('#gameBoard').off('click');
  $('#mainMenu').show();
};

Game.prototype.updateRemote = function (i, player, gameOver) {
  let data = {
    index: i,
    value: player,
    over: gameOver,
  };

  api.update(this.id, data)
    .then(ui.onSuccess)
    .catch(ui.onError);
};

Game.prototype.makeMove = function (event) {

  let index = event.target.id;

  //check for valid move
  if (this.board[index] === '') {
    this.board[index] = this.currentPlayer;
    $(event.target).append(this.currentPlayer);

    // display move in chat log
    ui.displayAction('play', this.currentPlayer, index);
    // console.log(index);

    // after every valid move, check for win or tie
    let win = this.checkWinState(this.board, this.currentPlayer);
    if (win) {
      // console.log(`${this.currentPlayer} wins!`);
      ui.displayAction('win', this.currentPlayer);
      this.updateRemote(index, this.currentPlayer, true, this.id);
      this.endGame();
    } else if (this.checkTieState(this.board)) {
      // console.log('Cat\'s Game!');
      ui.displayAction('tie');
      this.updateRemote(index, this.currentPlayer, true, this.id);
      this.endGame();
    } else { //if game is still going, change turn
      this.updateRemote(index, this.currentPlayer, false, this.id);
      this.changeTurn(this.currentPlayer);
    }
  } else {
    // console.log('Invalid move!');
    ui.displayAction('invalid');
  }
};

module.exports = {
  Game,
};
