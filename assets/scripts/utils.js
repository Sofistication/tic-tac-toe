'use strict';

const clearInput = function (element) {
  $(element + ' > div > input').val('');
};

module.exports = {
  clearInput,
};
