import { createAction } from 'redux-actions';

import {
  SET_WORKERS,
  SET_WORKER,
  SET_SELECTED_WORKER,
  SET_INIT_TOGGLE,
} from '../reducers/workers';

const setWorkers = createAction(SET_WORKERS);
const setWorker = createAction(SET_WORKER);
const setSelectedWorker = createAction(SET_SELECTED_WORKER);
const setInitToggle = createAction(SET_INIT_TOGGLE);

export const addWorkers = props => dispatch => dispatch(setWorkers(props));
export const updateWorker = props => dispatch => dispatch(setWorker(props));
export const selectWorker = props => dispatch => dispatch(setSelectedWorker(props));
export const initToggle = props => dispatch => {
  console.log('hi');
  dispatch(setInitToggle(props))
};
