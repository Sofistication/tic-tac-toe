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

const signInFailure = (error) => {
  utils.addErrorMessage('#sign-in', error.status);
  console.error(error.status);
};

const signUpFailure = (error) => {
  utils.addErrorMessage('#sign-up', error.status);
  console.error(error.status);
};

const signOutFailure = (error) => {
  utils.addErrorMessage('#sign-out', error.status);
  console.error(error.status);
};

const changePassFailure = (error) => {
  utils.addErrorMessage('#change-password', error.status);
  console.error(error.status);
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
