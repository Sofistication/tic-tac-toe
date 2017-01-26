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

module.exports = {
  displayAction,
};
