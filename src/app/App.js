import React from 'react';
import { connect } from 'react-redux';
import { Typography } from 'material-ui';

import Navigation from './shared/Navigation';

const App = () => (
  <div>
    <div className="container">
      <Typography type="headline" component="h3">
        React by Example
      </Typography>

      <Navigation />
    </div>

    <style jsx>{`
      .container {
        padding: 1rem;
      }
    `}</style>
  </div>
);

export default connect()(App);
