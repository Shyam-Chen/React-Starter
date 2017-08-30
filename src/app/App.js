import React from 'react';
import { connect } from 'react-redux';

import Navigation from '~/shared/Navigation';

const App = () => (
  <div>
    <div className="container">
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
