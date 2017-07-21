import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterActions from '../actions/counter';

const Counter = ({ counter, actions }) => (
  <div>
    Clicked: { counter.value } times
    <button onClick={ actions.onIncrement }>+</button>
    <button onClick={ actions.onDecrement }>-</button>
    <button onClick={ actions.onIncrementAsync }>+ (Async)</button>
    <button onClick={ actions.onIncrementIfOdd }>+ (If Odd)</button>
  </div>
);

const mapStateToProps = ({ counter }) => ({
  counter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(counterActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
