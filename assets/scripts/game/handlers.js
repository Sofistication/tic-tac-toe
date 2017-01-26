'use strict';

const engine = require('../game/engine');
const gameBoard = ['', '', '', '', '', '', '', '', ''];
const game = new engine.Game(gameBoard);

// need to bind `this` for certain methods
const bindMakeMove = game.makeMove.bind(game);

const initGame = function () {
  $('#gameBoard').on('click', bindMakeMove);
};

const drawBoard = function () {
  // $('#board-container').html('');

  $('#board-container').prepend('<div class="game-board" id="gameBoard"></div>');
  const board = $('#gameBoard');

  for (let i = 0; i < game.board.length; i++) {
    board.append('<div class="game-tile" id="' + i + '"></div>');
  }

  $('#newGame').hide();
  initGame();
};

module.exports = {
  drawBoard,
};
