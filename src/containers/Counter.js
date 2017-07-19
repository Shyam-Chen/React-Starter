import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterActions from '../actions/counter';

const Counter = ({ counter, actions }) => {
  const incrementIfOdd = () => {
    if (counter.value % 2 === 1) {
      actions.onIncrement();
    }
  };

  const incrementAsync = () => {
    setTimeout(actions.onIncrement, 1000);
  };

  return (
    <div>
      Clicked: { counter.value } times
      <button onClick={ actions.onIncrement }>+</button>
      <button onClick={ actions.onDecrement }>-</button>
      <button onClick={ incrementAsync }>+ (Async)</button>
      <button onClick={ incrementIfOdd }>+ (If Odd)</button>
    </div>
  );
};

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
