import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';

import Navigation from '~/shared/Navigation';
import Routes from '~/core/Router';

import * as actions from './actions';

const App = ({ history }) => (
  <div>
    <ConnectedRouter history={history}>
      <div>
        <Navigation />

        <Routes />
      </div>
    </ConnectedRouter>

    <style jsx>{``}</style>
  </div>
);

export default connect(
  ({ app }) => ({ app }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(App);
