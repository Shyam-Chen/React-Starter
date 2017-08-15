import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import configureStore from './app/root';
import App from './app/App';

import { Counter } from './app/counter';
import { CRUD } from './app/crud';
import { REST } from './app/REST';

const store = configureStore();
const history = createHistory()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/counter" component={Counter} />
        <Route path="/crud" component={CRUD} />
        <Route path="/rest" component={REST} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
