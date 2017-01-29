'use strict';

const utils = require('../utils');
const messages = require('../app/ui');

const signInSuccess = () => {
  $('#signInModal').modal('hide');
  utils.clearModalInput('#sign-in');
  messages.displayAction('login');
  messages.mainDisplay();
};

const signUpSuccess = () => {
  $('#signUpModal').modal('hide');
  utils.clearModalInput('#sign-up');
  messages.displayAction('user');
};

const signOutSuccess = () => {
  $('#signOutModal').modal('hide');
  utils.clearModalInput('#sign-out');
  messages.openingDisplay();
};

const changePassSuccess = () => {
  $('#changePassModal').modal('hide');
  utils.clearModalInput('#change-password');
};

const signInFailure = (error) => {
  utils.addErrorMessage('#sign-in', error.status);
  // console.error(error.status);
};

const signUpFailure = (error) => {
  utils.addErrorMessage('#sign-up', error.status);
  // console.error(error.status);
};

const signOutFailure = (error) => {
  utils.addErrorMessage('#sign-out', error.status);
  // console.error(error.status);
};

const changePassFailure = (error) => {
  utils.addErrorMessage('#change-password', error.status);
  // console.error(error.status);
};

module.exports = {
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePassSuccess,
  signInFailure,
  signUpFailure,
  signOutFailure,
  changePassFailure,
};
