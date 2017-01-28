'use strict';

const utils = require('../utils.js');

const signInSuccess = (data) => {
  $('#signInModal').modal('hide');
  console.log(data);
  utils.clearModalInput('#sign-in');
};

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide');
  console.log(data);
  utils.clearModalInput('#sign-up');

};

const signOutSuccess = (data) => {
  $('#signOutModal').modal('hide');
  console.log(data);
  utils.clearModalInput('#sign-out');

};

const changePassSuccess = (data) => {
  $('#changePassModal').modal('hide');
  console.log(data);
  utils.clearModalInput('#change-password');
};

const failure = (error) => {
  console.error(error.status);
};

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePassSuccess,
};
