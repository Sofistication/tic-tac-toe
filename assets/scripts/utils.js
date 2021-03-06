'use strict';

const clearInput = function (element) {
  $(element + ' > div > input').val('');
};

const clearModalInput = function (element) {
  $(element + ' > fieldset > label > input').val('');
};

const addErrorMessage = function (element, status) {
  let html = '<p class="modal-error">';
  switch (status) {
    case 401:
      html += 'Wrong Password!';
      break;
    default:
      html += 'Unexpected Error!';
  }
  html += '</p>';
  $(element).append(html);
};

const insertImg = function (target, piece) {
  let html = '<img src="';
  if (piece === 'x') {
    html += 'http://i.imgur.com/nQatzBf.png';
  } else if (piece === 'o') {
    html += 'http://i.imgur.com/T4NrURT.jpg';
  }
  html += '">';

  $(target).append(html);
};

module.exports = {
  clearInput,
  clearModalInput,
  addErrorMessage,
  insertImg,
};
