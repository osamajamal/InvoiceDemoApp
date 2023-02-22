/* eslint-disable prettier/prettier */
//import loading from './loading';
//import error from './error';
//import auth from './auth';
//import config from './config';
//import popup from './popup';
//import cart from './cart';

import {combineReducers} from 'redux';

import Filter from './FilterReducer';

export const rootReducer = combineReducers({
  propertyFilter: Filter,
});

export default rootReducer;
