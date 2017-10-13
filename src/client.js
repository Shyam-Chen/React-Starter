import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
// import { AppContainer } from 'react-hot-loader';

import configureStore from './app/store';
import Router from './app/Router';

const initialState = window.__INITIAL_STATE__;
const history = createBrowserHistory();
const store = configureStore(history, initialState);

// let render;
// if (process.env.NODE_ENV === 'production') {
//   render = require('react-snapshot').render;
// } else {
//   render = require('react-dom').render;
// }

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
