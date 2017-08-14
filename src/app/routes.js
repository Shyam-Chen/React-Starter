import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import Home from './components/Home';
import About from './components/About';

const routes = (
  <Route path='/' component={App}>
    <IndexRedirect to='/homes' />
    <Route path='/home' component={Home} />
    <Route path='/about' component={About} />
  </Route>
);

export default routes;
