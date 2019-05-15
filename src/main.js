import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import configureStore from './core/store';
import App from './App';

const history = createBrowserHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.querySelector('#app'),
);

if (module.hot) {
  module.hot.accept();
}
