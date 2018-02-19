import { UPDATE_TIMESTAMP } from './constants';
import socket from '../socketConnection';

const updateTimestamp = payload => ({
  type: UPDATE_TIMESTAMP,
  payload,
});

// socket.emit('subscribeToTimer', 1000);

const loadTimestamp = () => dispatch => {
  socket.on('timer', data => {
    dispatch(updateTimestamp(data));
  });
};

export { loadTimestamp };
