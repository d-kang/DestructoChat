import { combineReducers } from 'redux';
import login from './login';
import messages from './messages';

export default combineReducers({
  login,
  messages,
});
