import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import App from './App';
import { Counter } from './counter';
import { CRUD } from './crud';
import { REST } from './REST';
import { GraphQL } from './GraphQL';

const Routes = () => (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/counter" component={Counter} />
    <Route path="/crud" component={CRUD} />
    <Route path="/rest" component={REST} />
    <Route path="/graphql" component={GraphQL} />
  </div>
);

export default connect()(Routes);
