import React from 'react';
import { Route, Switch } from 'react-router';
import loadable from 'react-loadable';

import Home from '~/home/Home';
import NotFound from '~/not-found/NotFound';

const AsyncShell = module => (
  loadable({
    loader: () => import(`~/shell${module}`),
    loading: () => <div>Loading...</div>,
  })
);

const Router = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/hello-world" component={AsyncShell('/hello-world/HelloWorld')} />

      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default Router;
