import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import About from '../components/About';

import Counter from '../containers/Counter';
import CRUD from '../containers/CRUD';
import REST from '../containers/REST';

const App = () => (
  <div>
    <Home />
    <About />

    <hr />

    <Counter />

    <hr />

    <CRUD />

    <hr />

    <REST />
  </div>
);

export default connect()(App);
