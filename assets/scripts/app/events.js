'use strict';

const handlers = require('../game/handlers');
const ui = require('./ui');

const newGame = function () {
  // console.log(event);
  // event.preventDefault();
  ui.displayAction('new');
  handlers.drawBoard();
};

module.exports = {
  newGame,
};
