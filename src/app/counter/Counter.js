import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Typography, Button } from 'material-ui';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';

const Counter = ({ counter, actions }) => (
  <div className="container">
    <Navigation />

    <Typography type="headline" component="h3">
      Clicked: {counter.value} times
    </Typography>
    <Typography type="body1" component="p">
      <Button raised color="primary" onClick={actions.increment}>Increment</Button> {' '}
      <Button raised color="primary" onClick={actions.decrement}>Decrement</Button> {' '}
      <Button raised color="accent" onClick={actions.incrementAsync}>Increment (Async)</Button> {' '}
      <Button raised color="accent" onClick={actions.incrementIfOdd}>Increment (If Odd)</Button> {' '}
      <Button raised color="accent" onClick={actions.incrementIfEven}>Increment (If Even)</Button> {' '}
    </Typography>

    <style jsx>{`
      .container {
        padding: 1rem;
      }
    `}</style>
  </div>
);

export default connect(
  ({ counter }) => ({ counter }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Counter);
