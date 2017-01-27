'use strict';

const clearInput = function (element) {
  $(element + ' > div > input').val('');
};

const clearModalInput = function (element) {
  $(element + ' > fieldset > label > input').val('');
};

module.exports = {
  clearInput,
  clearModalInput
};
