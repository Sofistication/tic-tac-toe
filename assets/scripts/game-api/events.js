'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

// attach getFormFields globally

// const getFormFields = require('expose?getFormFields!./lib/get-form-fields.js');
const getFormFields = require('../../../lib/get-form-fields.js');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /games
// button is clicked
const onGetGames = function (event) {
  event.preventDefault();
  console.log('here');

  let gameId = $('#game-id').val();
  if (gameId.length === 0) {
    api.index()
      .then(ui.onSuccess)
      .catch(ui.onError);
  } else {
    api.show(gameId)
      .then(ui.onSuccess)
      .catch(ui.onError);
  }

};

const onPatchGame = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.patch(data.game.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onCreateGame = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.post(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError);
};

module.exports = {
  onGetGames,
  onPatchGame,
  onCreateGame,
};
