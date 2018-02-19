import { combineReducers } from 'redux';
import login from './login';
import messages from './messages';
import socket from './socket';

export default combineReducers({
  login,
  messages,
  socket,
});
