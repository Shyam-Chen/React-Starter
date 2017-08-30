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
      <Button raised color="primary" onClick={actions.onIncrement}>Increment</Button> {' '}
      <Button raised color="primary" onClick={actions.onDecrement}>Decrement</Button> {' '}
      <Button raised color="accent" onClick={actions.onIncrementAsync}>Increment (Async)</Button> {' '}
      <Button raised color="accent" onClick={actions.onIncrementIfOdd}>Increment (If Odd)</Button> {' '}
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
