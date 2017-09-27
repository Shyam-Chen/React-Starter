import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
// import { AppContainer } from 'react-hot-loader';

import configureStore from './app/store';
import Routes from './app/Routes';

let render;
// if (process.env.NODE_ENV === 'production') {
//   render = require('react-snapshot').render;
// } else {
  render = require('react-dom').render;
// }

render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={createBrowserHistory()}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
