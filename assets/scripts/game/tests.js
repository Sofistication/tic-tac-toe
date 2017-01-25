'use strict';

const states = require('./states');

// create empty array to serve as game board
// let gameBoard = new Array(9);

// test boards
// no entries
let board1 = ['', '', '', '', '', '', '', '', ''];
// cat's game
let board2 = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O'];
// X wins
let board3 = ['X', 'O', '', '', 'X', 'O', '', '', 'X'];
// O wins
let board4 = ['O', 'X', '', 'O', 'X', '', 'O', '', 'X'];
// X wins
let board5 = ['', '', 'X', 'O', '', 'X', '', 'O', 'X'];

// module.exports = {
//   gameBoard,
// };

let Xplayer = {
  piece: 'X',
};

let Oplayer = {
  piece: 'O',
};

console.log('Board 1, player X');
console.log(states.winStateCheck(board1, Xplayer));
console.log(states.tieStateCheck(board1));

console.log('Board 1, player O');
console.log(states.winStateCheck(board1, Oplayer));

console.log('Board 2, player X');
console.log(states.winStateCheck(board2, Xplayer));
console.log(states.tieStateCheck(board2));

console.log('Board 2, player O');
console.log(states.winStateCheck(board2, Oplayer));

console.log('Board 3, player X');
console.log(states.winStateCheck(board3, Xplayer));
console.log(states.tieStateCheck(board3));

console.log('Board 3, player O');
console.log(states.winStateCheck(board1, Oplayer));

console.log('Board 4, player X');
console.log(states.winStateCheck(board4, Xplayer));
console.log(states.tieStateCheck(board4));

console.log('Board 4, player O');
console.log(states.winStateCheck(board4, Oplayer));

console.log('Board 5, player X');
console.log(states.winStateCheck(board5, Xplayer));
console.log(states.tieStateCheck(board5));

console.log('Board 5, player O');
console.log(states.winStateCheck(board5, Oplayer));
