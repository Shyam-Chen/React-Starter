import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Typography, Button } from 'material-ui';

import Navigation from '~/shared/Navigation';
import RaisedButton from '~/shared/RaisedButton';

import * as actions from './actions';

const Counter = ({ counter, actions }) => (
  <div className="container">
    <Navigation />

    <Typography type="headline" component="h3">
      Clicked: {counter.value} times, value is {counter.value % 2 === 0 ? 'even' : 'odd'}.
    </Typography>
    <Typography type="body1" component="p">
      <Button raised color="primary" onClick={actions.increment}>Increment</Button> {' '}
      <Button raised color="primary" onClick={actions.decrement}>Decrement</Button> {' '}
      <Button raised color="accent" onClick={actions.incrementAsync}>Increment (Async)</Button> {' '}
      <Button raised color="accent" onClick={actions.decrementAsync}>Decrement (Async)</Button> {' '}
      <RaisedButton text="Increment (If Odd)" onClick={actions.incrementIfOdd} /> {' '}
      <RaisedButton text="Increment (If Even)" onClick={actions.incrementIfEven} /> {' '}
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
