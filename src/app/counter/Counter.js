import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Typography, Button } from 'material-ui';

import * as actions from './actions';

const Counter = ({ counter, actions }) => (
  <div>
    <div className="container">
      <Typography type="headline" component="h3">
        Clicked: {counter.value} times
      </Typography>
      <Typography type="body1" component="p">
        <Button raised color="primary" onClick={actions.onIncrement}>Increment</Button> {' '}
        <Button raised color="primary" onClick={actions.onDecrement}>Decrement</Button> {' '}
        <Button raised color="accent" onClick={actions.onIncrementAsync}>Increment (Async)</Button> {' '}
        <Button raised color="accent" onClick={actions.onIncrementIfOdd}>Increment (If Odd)</Button> {' '}
      </Typography>
    </div>

    <div className="back">
      <Button raised href="javascript: history.back()">Go Back</Button>
    </div>

    <style jsx>{`
      .container {
        padding: 1rem;
      }

      .back {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
      }
    `}</style>
  </div>
);

export default connect(
  ({ counter }) => ({ counter }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Counter);
