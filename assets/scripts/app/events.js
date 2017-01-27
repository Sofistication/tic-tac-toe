'use strict';

const ui = require('./ui');
const gameEvents = require('../game-api/events');

const newGame = function (event) {
  gameEvents.onCreateGame(event);
  ui.displayAction('new');
};

module.exports = {
  newGame,
};
