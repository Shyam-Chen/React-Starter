import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Counter } from '~/counter';
import { CRUD } from '~/crud';
import { REST } from '~/rest';
import { GraphQL } from '~/graphql';
import { FormControls } from '~/form-controls';
import { DataTable } from '~/data-table';
import { NotFound } from '~/not-found';

import App from './App';

const Router = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/counter" component={Counter} />
        <Route path="/crud" component={CRUD} />
        <Route path="/rest" component={REST} />
        <Route path="/graphql" component={GraphQL} />
        <Route path="/form-controls" component={FormControls} />
        <Route path="/data-table" component={DataTable} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default connect()(Router);
