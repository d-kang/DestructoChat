import {
  LOAD_MESSAGES_REQUEST,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
} from './constants';

import mockMessages from '../data/mockMessages';

const promisify = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(mockMessages), 1000);
  });

const loadMessagesRequest = chatroom => ({
  type: LOAD_MESSAGES_REQUEST,
  chatroom,
});
const loadMessagesSuccess = payload => ({
  type: LOAD_MESSAGES_SUCCESS,
  payload,
});
const loadMessagesFailure = error => ({
  type: LOAD_MESSAGES_FAILURE,
  payload: error,
});

const loadUsersMessages = (chatroom = 'lobby') => (dispatch, getState) => {
  dispatch(loadMessagesRequest(chatroom));
  return promisify(chatroom)
    .then(data => dispatch(loadMessagesSuccess(data)))
    .catch(error => dispatch(loadMessagesFailure(error)));
};

export {
  loadUsersMessages,
  loadMessagesRequest,
  loadMessagesSuccess,
  loadMessagesFailure,
};
