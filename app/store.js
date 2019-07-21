import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-loading-promise-middleware';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  promiseMiddleware,
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
