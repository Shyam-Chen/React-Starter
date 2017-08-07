import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import About from '../components/About';

import { Counter } from '../counter';
import { CRUD } from '../crud';
import { REST } from '../REST';

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
