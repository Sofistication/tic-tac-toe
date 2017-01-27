'use strict';

const utils = require('../utils');

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
  console.log('Book was successfully patched!');
  utils.clearInput('#edit-game');
};

const onCreateSuccess = function (data) {
  console.log(data.game);
  utils.clearInput('#create-game');
};

module.exports = {
  onSuccess,
  onError,
  onPatchSuccess,
  onCreateSuccess,
};
