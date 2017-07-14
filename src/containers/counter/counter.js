import React from 'react';

import PropTypes from 'prop-types';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { value, onIncrement, onDecrement, onReset, onIncrementIfOdd, onDecrementIfEven } = this.props;

    return (
      <div>
        <h3>Counter</h3>
        <button onClick={ onIncrement }>Increment</button>
        <button onClick={ onDecrement }>Decrement</button>
        <button onClick={ onReset }>Reset</button>
        <button onClick={ onIncrementIfOdd }>Increment (If Odd)</button>
        <button onClick={ onDecrementIfEven }>Decrement (If Even)</button>
        <p>Current Count: { value }</p>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired,
  onDecrementIfEven: PropTypes.func.isRequired,
};
