'use strict';

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

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

const onUpdateGame = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.update(data.game.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onCreateGame = function (event) {
  event.preventDefault();

  api.create()
    .then((response) => {
      store.game = response.game;
      console.log('here');
      debugger;
      return store.game;
    })
    .then(ui.onCreateSuccess)
    .catch(ui.onError);
};

module.exports = {
  onGetGames,
  onUpdateGame,
  onCreateGame,
};
