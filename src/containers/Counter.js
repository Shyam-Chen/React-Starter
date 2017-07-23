import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'semantic-ui-react';

import * as actions from '../actions/counter';

const Counter = ({ counter, actions }) => (
  <div>
    Clicked: { counter.value } times { ' ' }
    <Button onClick={ actions.onIncrement }>+</Button>
    <Button onClick={ actions.onDecrement }>-</Button>
    <Button onClick={ actions.onIncrementAsync }>+ (Async)</Button>
    <Button onClick={ actions.onIncrementIfOdd }>+ (If Odd)</Button>
  </div>
);

export default connect(
  // map state to props
  ({ counter }) => ({ counter }),

  // map dispatch to props
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Counter);
