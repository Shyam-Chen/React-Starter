import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterActions from '../actions/counter';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { counter, actions } = this.props;

    return (
      <p>
        Clicked: { counter.counter } times
        <button onClick={ actions.onIncrement }>+</button>
        <button onClick={ actions.onDecrement }>-</button>
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
  mapStateToProps, mapDispatchToProps
)(Counter)
