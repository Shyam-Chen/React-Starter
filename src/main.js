import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
// import { AppContainer } from 'react-hot-loader';

import configureStore from './app/store';
import Routes from './app/Routes';

let render;
if (process.env.NODE_ENV === 'production') {
  render = require('react-snapshot').render;
} else {
  render = require('react-dom').render;
}

render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={createHistory()}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
