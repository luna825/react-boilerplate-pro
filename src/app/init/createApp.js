import React from 'react';
import { Provider } from 'react-redux';
import Router from './router';

const createApp = (store) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default createApp;
