import socket from '../socketConnection';
import {
  LOGIN_USERNAME_REQUEST,
  LOGIN_USERNAME_SUCCESS,
  LOGIN_USERNAME_FAILURE,
  SIGNUP_USERNAME_REQUEST,
  SIGNUP_USERNAME_SUCCESS,
  SIGNUP_USERNAME_FAILURE,
} from './constants';

import { loadUsersMessages } from './messages';

const loginUserRequest = () => ({ type: LOGIN_USERNAME_REQUEST });
const loginUserSuccess = payload => ({
  type: LOGIN_USERNAME_SUCCESS,
  payload,
  logger: console.log('signup user success ran'),
});
const loginUserFailure = error => ({ type: LOGIN_USERNAME_FAILURE, error });

const signupUserRequest = () => ({ type: SIGNUP_USERNAME_REQUEST });
const signupUserSuccess = payload => ({
  type: SIGNUP_USERNAME_SUCCESS,
  logger: console.log('signup user success ran'),
  payload,
});
const signupUserFailure = error => ({
  type: SIGNUP_USERNAME_FAILURE,
  error,
});

const loginUser = payload => dispatch => {
  socket.emit('login', payload);
  dispatch(loginUserRequest());
  socket.on('login', data => {
    if (data.username !== null) {
      window.localStorage.setItem('username', data.username);
      dispatch(loginUserSuccess(data.username));
      dispatch(loadUsersMessages('lobby'));
    } else {
      dispatch(loginUserFailure(data.error));
    }
  });
};

const signupUser = payload => dispatch => {
  socket.emit('signup', payload);
  dispatch(signupUserRequest());
  socket.on('signup', data => {
    if (data.username !== null) {
      window.localStorage.setItem('username', data.username);
      dispatch(signupUserSuccess(data.username));
      dispatch(loadUsersMessages('lobby'));
    } else {
      dispatch(signupUserFailure(data.error));
    }
  });
};

export { loginUser, signupUser, loginUserSuccess };
