import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
// import { render } from 'react-snapshot';

import configureStore from './app/root';
import Routes from './app/Routes';

const store = configureStore();
const history = createHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
