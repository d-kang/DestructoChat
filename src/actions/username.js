import socket from '../socketConnection';
import {
  LOGIN_USERNAME_REQUEST,
  LOGIN_USERNAME_SUCCESS,
  LOGIN_USERNAME_FAILURE,
  SIGNUP_USERNAME_REQUEST,
  SIGNUP_USERNAME_SUCCESS,
  SIGNUP_USERNAME_FAILURE,
} from './constants';

const loginUserRequest = payload => dispatch => {
  socket.emit('login', payload);
  dispatch({ type: LOGIN_USERNAME_REQUEST });
  socket.on('login', data => {
    console.log('on login >> loginUserRequest', data);
    if (data.username !== null) {
      dispatch({ type: LOGIN_USERNAME_SUCCESS, payload: data.username });
    } else {
      dispatch({ type: LOGIN_USERNAME_FAILURE, error: data.error });
    }
  });
};

const signupUserRequest = payload => dispatch => {
  socket.emit('signup', payload);
  dispatch({ type: SIGNUP_USERNAME_REQUEST });
  socket.on('signup', data => {
    console.log('on login >> loginUserRequest', data);
    if (data.username !== null) {
      dispatch({ type: SIGNUP_USERNAME_SUCCESS, payload: data.username });
    } else {
      dispatch({ type: SIGNUP_USERNAME_FAILURE, error: data.error });
    }
  });
};

export { loginUserRequest, signupUserRequest };
