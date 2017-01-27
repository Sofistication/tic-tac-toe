'use strict';

const utils = require('../utils');
const handlers = require('../game/handlers');
const engine = require('../game/engine');
const store = require('../store');

const onSuccess = function (data) {
  console.log(data);
  // debugger;
  if (data.game) {
    console.log(data.game);
  } else {
    console.table(data.games);
  }

  utils.clearInput('#game-search');
};

const onError = function (response) {
  console.error(response);
};

const onPatchSuccess = function () {
  console.log('Game was successfully patched!');
  utils.clearInput('#edit-game');
};

const onCreateSuccess = function (data) {
  console.log(data.game);
  const game = new engine.Game(store.game.cells, store.game.id);
  handlers.drawBoard(game);
};

module.exports = {
  onSuccess,
  onError,
  onPatchSuccess,
  onCreateSuccess,
};
