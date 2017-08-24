import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'material-ui';

import * as actions from './actions';

const Counter = ({ counter, actions }) => (
  <div>
    Clicked: {counter.value} times {' '}
    <Button raised color="primary" onClick={actions.onIncrement}>Increment</Button> {' '}
    <Button raised color="primary" onClick={actions.onDecrement}>Decrement</Button> {' '}
    <Button raised color="accent" onClick={actions.onIncrementAsync}>Increment (Async)</Button> {' '}
    <Button raised color="accent" onClick={actions.onIncrementIfOdd}>Increment (If Odd)</Button> {' '}

    <div>
      <a href="javascript: history.back()" className="ui button teal">Go Back</a>
    </div>
  </div>
);

export default connect(
  ({ counter }) => ({ counter }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Counter);
