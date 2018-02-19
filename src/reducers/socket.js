import { createReducer } from './createReducer';
import { UPDATE_TIMESTAMP } from '../actions/constants';

const initialState = {
  timestamp: '',
};

export default createReducer(initialState, {
  [UPDATE_TIMESTAMP]: (state, action) => ({
    ...state,
    timestamp: action.payload,
  }),
});
