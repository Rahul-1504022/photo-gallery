import { legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Reducer } from './reducer';

//Store Create
const myStore = legacy_createStore(Reducer, applyMiddleware(logger, thunk));
export default myStore;

