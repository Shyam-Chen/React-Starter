// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from '~/shared/Layout';
import Routes from '~/core/Router';

import * as actions from './actions';

const App = ({ history }): React$Element<*> => (
  <div>
    <React.Fragment>
      <CssBaseline />

      <ConnectedRouter history={history}>
        <Layout>
          <Routes />
        </Layout>
      </ConnectedRouter>
    </React.Fragment>
  </div>
);

export default connect(
  ({ app }) => ({ app }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(App);
