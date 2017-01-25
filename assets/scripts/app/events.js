'use strict';

const handlers = require('../game/handlers');

const newGame = function () {
  // console.log(event);
  // event.preventDefault();

  handlers.drawBoard();
};

module.exports = {
  newGame,
};
