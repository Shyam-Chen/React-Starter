import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import About from '../components/About';

import Counter from '../containers/Counter';
import REST from '../containers/REST';

const App = () => (
  <div>
    <Home />
    <About />

    <Counter />
    <REST />
  </div>
);

export default connect()(App);
