'use strict';

// const utils = require('../utils.js');

const signInSuccess = (data) => {
  $('#signInModal').modal('hide');
  console.log(data);
};

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide');
  console.log(data);
};

const signOutSuccess = (data) => {
  $('#signOutModal').modal('hide');
  console.log(data);
};

const changePassSuccess = (data) => {
  $('#changePassModal').modal('hide');
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePassSuccess,
};
