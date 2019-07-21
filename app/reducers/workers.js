import { handleActions } from 'redux-actions';
import * as R from 'ramda';

export const SET_WORKERS = 'SET_WORKERS';
export const SET_WORKER = 'SET_WORKER';
export const SET_SELECTED_WORKER = 'SET_SELECTED_WORKER';
export const SET_INIT_TOGGLE = 'SET_INIT_TOGGLE';

const INITIAL_STATE = {
  message: '',
  isInit: false,
  items: [],
  item: {},
};

const ACTION_HANDLERS = {
  [SET_WORKERS]: (state, { payload }) => {
    return {
      ...state,
      items: [ ...state.items, ...payload ],
    };
  },
  [SET_WORKER]: (state, { payload: { id, ...props } }) => {
    const { items } = state;
    const index = R.findIndex(R.propEq('id', id))(items);
    items[index] = { ...items[index], ...props };
    return {
      ...state,
      items: [ ...items ] ,
    };
  },
  [SET_SELECTED_WORKER]: (state, { payload }) => {
    return {
      ...state,
      item: payload,
    };
  },
  [SET_INIT_TOGGLE]: (state, { payload }) => {
    return {
      ...state,
      isInit: payload,
    };
  },
};

export default handleActions(ACTION_HANDLERS, INITIAL_STATE);
