import React from 'react';
import { Route, Switch } from 'react-router';
import loadable from 'react-loadable';

import Home from '~/home/Home';
import { CRUD } from '~/crud-operations/crud';
import { REST } from '~/crud-operations/rest';
import { GraphQL } from '~/crud-operations/graphql';
import { FormControls } from '~/form-controls';
import { DataTable } from '~/data-table';
import { Authorization } from '~/authorization';
import NotFound from '~/shared/NotFound';

const Loading = () => <div>Loading...</div>;

const Counter = loadable({
  loader: () => import('~/playground/counter/Counter'),
  loading: Loading,
});

const Router = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/crud" component={CRUD} />
      <Route path="/rest" component={REST} />
      <Route path="/graphql" component={GraphQL} />

      <Route path="/form-controls" component={FormControls} />

      <Route path="/data-table" component={DataTable} />

      <Route path="/authorization" component={Authorization} />

      <Route path="/counter" component={Counter} />

      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default Router;
