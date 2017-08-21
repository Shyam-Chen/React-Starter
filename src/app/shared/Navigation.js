import React from 'react';
import { push } from 'react-router-redux';
import { Button } from 'material-ui';

import configureStore from '../root';

const store = configureStore();

const Navigation = () => (
  <div>
    <Button raised href="/counter" onClick={() => store.dispatch(push('/counter'))}>Counter</Button>
    <Button raised href="/crud" onClick={() => store.dispatch(push('/crud'))}>CRUD</Button>
    <Button raised href="/rest" onClick={() => store.dispatch(push('/rest'))}>REST</Button>
  </div>
);

export default Navigation;
