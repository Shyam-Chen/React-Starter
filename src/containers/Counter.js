import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/counter';

const Counter = ({ counter, actions }) => (
  <div>
    Clicked: { counter.value } times
    <button onClick={ actions.onIncrement }>+</button>
    <button onClick={ actions.onDecrement }>-</button>
    <button onClick={ actions.onIncrementAsync }>+ (Async)</button>
    <button onClick={ actions.onIncrementIfOdd }>+ (If Odd)</button>
  </div>
);

export default connect(
  // map state to props
  ({ counter }) => ({ counter }),

  // map dispatch to props
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Counter);
