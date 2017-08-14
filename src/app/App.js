import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import Home from './shared/Home';
import About from './shared/About';

import configureStore from './root';

import { Counter } from './counter';
import { CRUD } from './crud';
import { REST } from './REST';

const store = configureStore();

const App = () => (
  <div>
    <Home />
    <About />

    <a href="/home" className="ui button" onClick={() => store.dispatch(push('/home'))}>Home</a>
    <a href="/about" className="ui button" onClick={() => store.dispatch(push('/about'))}>About</a>

    <hr />

    <Counter />

    <hr />

    <CRUD />

    <hr />

    <REST />
  </div>
);

export default connect()(App);
