'use strict';

const utils = require('../utils');

const onSuccess = function (data) {
  // debugger;
  if (data.book) {
    console.log(data.book);
    utils.displayTable(data.book);
  } else {
    console.table(data.books);
    utils.displayTable(data.books);
  }

  utils.clearInput('#book-search');
};

const onError = function (response) {
  console.error(response);
};

const onPatchSuccess = function () {
  console.log('Book was successfully patched!');
  utils.clearInput('#edit-book');
};

const onCreateSuccess = function (data) {
  console.log(data.book);
  utils.clearInput('#create-book');
};

module.exports = {
  onSuccess,
  onError,
  onPatchSuccess,
  onCreateSuccess,
};
