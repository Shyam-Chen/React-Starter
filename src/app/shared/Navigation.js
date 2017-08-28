import React from 'react';
import { push } from 'react-router-redux';
import { Button } from 'material-ui';

import configureStore from '~/root';

const store = configureStore();

const Navigation = () => (
  <div>
    <Button raised color="primary" href="/counter" onClick={() => store.dispatch(push('/counter'))}>Counter</Button> {' '}
    <Button raised color="primary" href="/crud" onClick={() => store.dispatch(push('/crud'))}>CRUD</Button> {' '}
    <Button raised color="primary" href="/rest" onClick={() => store.dispatch(push('/rest'))}>REST</Button> {' '}
    <Button raised color="primary" href="/graphql" onClick={() => store.dispatch(push('/graphql'))}>GraphQL</Button> {' '}
  </div>
);

export default Navigation;
