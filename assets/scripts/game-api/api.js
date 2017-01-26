'use strict';

const config = require('../config.js');
const store = require('../store');

const index = function (over) {
  if (over) {
    return $.ajax({
      url: config.apiOrigin + '/games?=over',
      method: 'GET',
      headers: {
        Authorization: `Token token=${store.user.token}`
      },
    });
  } else {
    return $.ajax({
      url: config.apiOrigin + '/games',
      method: 'GET',
      headers: {
        Authorization: `Token token=${store.user.token}`
      },
    });
  }
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const patch = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: data,
  });
};

const post = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: data,
  });
};

module.exports = {
  index,
  show,
  patch,
  post,
};
