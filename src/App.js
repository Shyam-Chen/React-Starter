// @flow

import React from 'react';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

import Layout from '~/shared/Layout';
import Routes from '~/core/Router';

import * as actions from './actions';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: pink[500] },
    type: 'light',
  },
});

const App = ({ history }): React$Element<*> => (
  <div>
    <React.Fragment>
      <CssBaseline />

      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Layout>
            <Routes />
          </Layout>
        </ConnectedRouter>
      </MuiThemeProvider>
    </React.Fragment>
  </div>
);

export default compose(
  connect(
    ({ app }) => ({ app }),
    (dispatch: any) => ({ actions: bindActionCreators(actions, dispatch) }),
  ),
)(App);
