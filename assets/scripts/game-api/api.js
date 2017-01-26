'use strict';

const config = require('../config.js');

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
  });
};

const patch = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'PATCH',
    data: data,
  });
};

const post = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    data: data,
  });
};

module.exports = {
  index,
  show,
  patch,
  post,
};
