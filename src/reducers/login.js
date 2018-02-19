import { createReducer } from './createReducer';
import {
  LOGIN_USERNAME_REQUEST,
  LOGIN_USERNAME_SUCCESS,
  LOGIN_USERNAME_FAILURE,
  SIGNUP_USERNAME_REQUEST,
  SIGNUP_USERNAME_SUCCESS,
  SIGNUP_USERNAME_FAILURE,
} from '../actions/constants';

const initialState = {
  username: '',
  loggedIn: false,
  loading: false,
};

export default createReducer(initialState, {
  [LOGIN_USERNAME_REQUEST]: state => ({
    ...state,
    loading: true,
  }),
  [LOGIN_USERNAME_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    loggedIn: true,
    logger: console.log('reducer payload', payload),
    username: payload,
  }),
  [LOGIN_USERNAME_FAILURE]: (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }),
  [SIGNUP_USERNAME_REQUEST]: state => ({
    ...state,
    loading: true,
  }),
  [SIGNUP_USERNAME_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    loggedIn: true,
    username: payload,
  }),
  [SIGNUP_USERNAME_FAILURE]: (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }),
});
