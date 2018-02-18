import { createReducer } from './createReducer';
import { SET_USERNAME } from '../actions/constants';

const initialState = {
  username: '',
  isLoggedIn: false,
};

export default createReducer(initialState, {
  [SET_USERNAME]: (state, payload) => ({
    ...state,
    isLoggedIn: true,
    username: payload,
  }),
});
