import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import configureStore from './app/root';
import App from './app/App';
import Home from './app/shared/Home'
import About from './app/shared/About'

const store = configureStore();
const history = createHistory()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
