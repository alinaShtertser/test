import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import workers from './workers';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  workers,
});
