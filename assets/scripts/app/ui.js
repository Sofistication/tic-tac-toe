'use strict';

const drawBoard = function () {
  let gameTiles = new Array(9);

  $('#board-container').html('');

  $('#board-container').prepend('<div class="game-board" id="gameBoard"></div>');
  const board = $('#gameBoard');

  for (let i = 0; i < gameTiles.length; i++) {
    board.append('<div class="game-tile" id="' + i + '"></div>');
  }

  // $('#newGame').hide();
};

module.exports = {
  drawBoard,
};
