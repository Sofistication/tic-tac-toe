'use strict'

const ui = require('./ui');

const newGame = function () {
  // event.preventDefault();

  ui.drawBoard();
};

module.exports = {
  newGame,
};
