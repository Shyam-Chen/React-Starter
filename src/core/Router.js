import React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';

import Home from '~/home/Home';
import NotFound from '~/not-found/NotFound';

const Loading = () => <div>Loading...</div>;

const lazyload = (getComponent) => {
  const RouteComponent = Loadable({
    loader: () => getComponent(),
    loading: Loading,
    render(loaded, props) {
      const Component = loaded.default;
      return <Component {...props} />;
    },
  });

  const LoadableRoute = routeProps => <RouteComponent {...routeProps} />;
  return LoadableRoute;
};

const Router = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/hello-world" component={lazyload(() => import('~/shell/hello-world/HelloWorld'))} />
      <Route path="/sort-filter-list" component={lazyload(() => import('~/shell/SortFilterList'))} />
      <Route path="/crud-operations/basic" component={lazyload(() => import('~/shell/crud-operations/basic/Basic'))} />

      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default Router;
