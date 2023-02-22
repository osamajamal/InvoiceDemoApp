/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Store} from '../NowBuySell/src/redux/Store/ConfigureStore';

import {Provider} from 'react-redux';

const RNRedux = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
