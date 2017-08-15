import React from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react'

import Navigation from './shared/Navigation';

const App = () => (
  <div>
    <Container>
      <div className="header">
        <Header size="large">React by Example</Header>
      </div>

      <Navigation />
    </Container>

    <style jsx>{`
      .header {
        margin: 1rem auto;
      }
    `}</style>
  </div>
);

export default connect()(App);
