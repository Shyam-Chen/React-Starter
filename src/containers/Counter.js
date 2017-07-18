import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterActions from '../actions/counter';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
  }

  incrementIfOdd() {
    if (this.props.counter.value % 2 === 1) {
      this.props.actions.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.actions.onIncrement, 1000);
  }

  render() {
    const { counter, actions } = this.props;

    return (
      <p>
        Clicked: { counter.value } times
        <button onClick={ actions.onIncrement }>+</button>
        <button onClick={ actions.onDecrement }>-</button>
        <button onClick={ this.incrementAsync }>+ (Async)</button>
        <button onClick={ this.incrementIfOdd }>+ (If Odd)</button>
      </p>
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  counter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(counterActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
