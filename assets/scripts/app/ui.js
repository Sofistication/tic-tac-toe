'use strict';

// function that can display a record of actions to the console
// valid actions are: win, tie, play, invalid, new
const displayAction = function (action, player, tile) {

  let html = '<p class="game-message">';
  switch (action) {
    case 'win':
      html += `${player} wins the game!`;
      break;
    case 'tie':
      html += 'Cat\'s Game!';
      break;
    case 'play':
      html += `${player} plays on space ${tile}`;
      break;
    case 'invalid':
      html += 'Invalid move!';
      break;
    case 'new':
      html += 'Starting new game!';
      break;
    default:
  }

  html += '</p>';

  $('#chat').append(html);
};

const displayResults = function (data) {
  let html = '<table class="result-table"><tr><th>Game ID</th><th>Finished?</th></tr>';
  for (let i = 0; i < data.games.length; i++) {
    html += '<tr><td>' + data.games[i].id + '</td><td>' + data.games[i].over + '</td></tr>';
  }
  html += '</table>';

  $('#chat').append(html);
};

const displayResult = function (data) {
  let html = '<p class="search-result">Game with ID ' + data.game.id + 'was ';
  if (data.game.over) {
    html += 'completed! The final board was ' + data.game.cells;
  } else {
    html += 'not completed! It\'s board state is ' + data.game.cells;
  }

  html += '</p>';

  $('#chat').append(html);
};

const displayStats = function (data) {
  let html = '<p class="search-result">Stats: You have played ' + data.games.length + ' games, of which ';
  let count = 0;
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over) {
      count++;
    }
  }
  html += count + ' were finished.';

  $('#chat').append(html);
};

module.exports = {
  displayAction,
  displayResults,
  displayResult,
  displayStats,
};
