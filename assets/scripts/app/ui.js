'use strict';

// function that can display a record of actions to the console
// valid actions are: win, tie, play, invalid
const displayAction = function (action, player, tile) {
  console.log('called display function');
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
    default:
  }

  html += '</p>';

  $('#chat').append(html);
  console.log('Should have displayed');
};

module.exports = {
  displayAction,
};
