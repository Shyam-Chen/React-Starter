import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import App from './App';
import { Counter } from './counter';
import { CRUD } from './crud';
import { REST } from './rest';
import { GraphQL } from './graphql';
import { DataTable } from './data-table';
import { FormControls } from './form-controls';
// import { NotFound } from './not-found';

const Routes = () => (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/counter" component={Counter} />
    <Route path="/crud" component={CRUD} />
    <Route path="/rest" component={REST} />
    <Route path="/graphql" component={GraphQL} />
    <Route path="/data-table" component={DataTable} />
    <Route path="/form-controls" component={FormControls} />
    {/* <Route path="*" component={NotFound} /> */}
  </div>
);

export default connect()(Routes);
