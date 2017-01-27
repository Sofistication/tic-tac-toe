'use strict';

const utils = require('../utils');
const handlers = require('../game/handlers');
const engine = require('../game/engine');
const store = require('../store');
const output = require('../app/ui');

const onSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
    output.displayResult(data);
  } else {
    console.table(data.games);
    output.displayResults(data);
  }

  utils.clearInput('#game-search');
};

const onStatSuccess = function (data) {
  console.table(data.games);
  output.displayStats(data);
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
  onStatSuccess,
  onError,
  onPatchSuccess,
  onCreateSuccess,
};
