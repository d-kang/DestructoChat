import { UPDATE_TIMESTAMP } from './constants';

const updateTimestamp = payload => ({
  type: UPDATE_TIMESTAMP,
  payload,
  logger: console.log('updateTimeStamp Ran'),
});

const loadTimestamp = socket => dispatch => {
  console.log('dispatch', dispatch);
  socket.on('timer', data => {
    dispatch(updateTimestamp(data));
  });
};

export { loadTimestamp };
