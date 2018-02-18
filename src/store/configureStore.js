import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  const middlewares = [thunk, logger];
  const enhancer = applyMiddleware(...middlewares);
  return createStore(rootReducer, initialState, enhancer);
}
