'use strict';

// const handlers = require('../game/handlers');
const ui = require('./ui');
const gameEvents = require('../game-api/events');
// const engine = require('../game/engine');
// const store = require('../store');

const newGame = function (event) {
  gameEvents.onCreateGame(event);

  // const game = new engine.Game(store.game.cells, store.game.id);
  // console.log(event);
  // event.preventDefault();
  ui.displayAction('new');
  // handlers.drawBoard(game);
};

module.exports = {
  newGame,
};
