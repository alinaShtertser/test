import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-loading-promise-middleware';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const initialState = {};
const middleware = [
  promiseMiddleware,
  thunk,
  routerMiddleware(history),
];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
