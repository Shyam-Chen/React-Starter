import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import About from '../components/About';

import Counter from '../containers/Counter';
import REST from '../containers/REST';
import CRUD from '../containers/CRUD';

const App = () => (
  <div>
    <Home />
    <About />

    <hr />

    <Counter />

    <hr />

    <REST />

    <hr />

    <CRUD />
  </div>
);

export default connect()(App);
