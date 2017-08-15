import React from 'react';
import { push } from 'react-router-redux';

import configureStore from '../root';

const store = configureStore();

const Navigation = () => (
  <div>
    <a href="/counter" className="ui button" onClick={() => store.dispatch(push('/counter'))}>Counter</a>
    <a href="/crud" className="ui button" onClick={() => store.dispatch(push('/crud'))}>CRUD</a>
    <a href="/rest" className="ui button" onClick={() => store.dispatch(push('/rest'))}>REST</a>
  </div>
);

export default Navigation;
