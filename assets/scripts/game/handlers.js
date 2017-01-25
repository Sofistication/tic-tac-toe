'use strict';

const engine = require('../game/engine');
const gameBoard = ['', '', '', '', '', '', '', '', ''];
const game = new engine.Game(gameBoard);

const drawBoard = function () {

  $('#board-container').html('');

  $('#board-container').prepend('<div class="game-board" id="gameBoard"></div>');
  const board = $('#gameBoard');

  for (let i = 0; i < game.board.length; i++) {
    board.append('<div class="game-tile" id="' + i + '"></div>');
  }

  $('#newGame').hide();
  engine.initGame();
};

module.exports = {
  drawBoard,
};
