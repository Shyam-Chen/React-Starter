import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CRUD } from '~/crud';
import { REST } from '~/rest';
import { GraphQL } from '~/graphql';
import { FormControls } from '~/form-controls';
import { DataTable } from '~/data-table';
import { Authorization } from '~/authorization';
import { Counter } from '~/playground/counter';

import NotFound from '~/shared/NotFound';

import App from './App';

const Router = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />

        <Route path="/crud" component={CRUD} />
        <Route path="/rest" component={REST} />
        <Route path="/graphql" component={GraphQL} />

        <Route path="/form-controls" component={FormControls} />

        <Route path="/data-table" component={DataTable} />

        <Route path="/authorization" component={Authorization} />

        <Route path="/counter" component={Counter} />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
