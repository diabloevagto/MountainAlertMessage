import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';

import configureStore from './src/store/configureStore';

import AppContainer from './src/AppContainer';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('MountainAlertMessage', () => RNRedux);
