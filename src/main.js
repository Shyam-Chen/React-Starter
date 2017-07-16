import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

// import { Router, Route, browserHistory  } from 'react-router'

import store from './root';
// import routes from './routes';

import App from './components/App';

render(
  <Provider store={ store }>
    <App />
    {/* <Router history={ history } routes={ routes } /> */}
  </Provider>,
  document.querySelector('#app')
);
