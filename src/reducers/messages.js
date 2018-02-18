import { createReducer } from './createReducer';
import data from '../data/mockMessages';

import {
  LOAD_MESSAGES_REQUEST,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
} from '../actions/constants';

const initialState = {
  messages: [],
  isLoading: false,
  chatroom: 'lobby',
};

export default createReducer(initialState, {
  [LOAD_MESSAGES_REQUEST]: (state, { chatroom }) => ({
    ...state,
    isLoading: true,
    chatroom,
  }),
  [LOAD_MESSAGES_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    messages: payload,
  }),
  [LOAD_MESSAGES_FAILURE]: (state, payload) => ({
    ...state,
    isLoading: false,
  }),
});
