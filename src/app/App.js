import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';

const App = () => (
  <div>
    <div className="container">
      <Navigation />
    </div>

    <style jsx global>{`
      .container {
        margin: 0;
        padding: 1rem;
      }
    `}</style>
  </div>
);

export default connect(
  ({ app }) => ({ app }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(App);
