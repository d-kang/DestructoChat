import {
  LOAD_MESSAGES_REQUEST,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
} from './constants';
import socket from '../socketConnection';

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
  socket.emit('load messages', chatroom);
  socket.on('load messages', data => {
    if (data.error) {
      dispatch(loadMessagesFailure(data.error.errorMessage));
    } else {
      dispatch(loadMessagesSuccess(data));
    }
  });
};

export {
  loadUsersMessages,
  loadMessagesRequest,
  loadMessagesSuccess,
  loadMessagesFailure,
};
