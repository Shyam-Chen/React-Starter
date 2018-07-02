// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navigation from '~/shared/Navigation';
import Routes from '~/core/Router';

import * as actions from './actions';

const App = ({ history }): React$Element<*> => (
  <div>
    <React.Fragment>
      <CssBaseline />

      <ConnectedRouter history={history}>
        <div>
          <Navigation />
          <Routes />
        </div>
      </ConnectedRouter>
    </React.Fragment>
  </div>
);

export default connect(
  ({ app }) => ({ app }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(App);
