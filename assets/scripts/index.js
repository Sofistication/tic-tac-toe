'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const events = require('./app/events');
const authEvents = require('./auth/events');
const gameEvents = require('./game-api/events');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(() => {
  $('#newGame').on('click', events.newGame);
  authEvents.addHandlers();
  $('#game-search').on('submit', gameEvents.onGetGames);
});
