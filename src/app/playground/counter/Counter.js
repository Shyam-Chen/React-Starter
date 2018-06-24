// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { bindSelectCreators } from 'reselect-computed';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Typography } from 'material-ui';

import Button from '~/shared/Button';

import { Props } from './types';
import * as actions from './actions';
import * as selectors from './selectors';

export const Counter = ({ counter, actions, selectors }: Props): React$Element<*> => (
  <div>
    <div className="typography">
      <Typography variant="headline" component="h3">
        Clicked: {counter.value} times, value is {selectors.evenOrOdd}.
      </Typography>
    </div>

    <div className="typography">
      <Typography variant="body1" component="p">
        <Button raised color="indigo" onClick={actions.increment}>Increment</Button> {' '}
        <Button raised color="pink" onClick={actions.decrement}>Decrement</Button> {' '}
        <Button raised color="deepPurple" onClick={actions.reset}>Reset</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography variant="body1" component="p">
        <Button raised color="indigo" onClick={actions.incrementAsync}>Increment (Async, Thunk)</Button> {' '}
        <Button raised color="pink" onClick={actions.decrementAsync}>Decrement (Async, Observable)</Button> {' '}
        <Button raised color="deepPurple" onClick={actions.resetAsync}>Reset (Async, Saga)</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography variant="body1" component="p">
        <Button raised color="indigo" onClick={actions.incrementIfEven}>Increment (If Even, Thunk)</Button> {' '}
        <Button raised color="pink" onClick={actions.decrementIfEven}>Decrement (If Even, Observable)</Button> {' '}
        <Button raised color="deepPurple" onClick={actions.resetIfEven}>Reset (If Even, Saga)</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography variant="body1" component="p">
        <Button raised color="indigo" onClick={actions.incrementIfOdd}>Increment (If Odd, Thunk)</Button> {' '}
        <Button raised color="pink" onClick={actions.decrementIfOdd}>Decrement (If Odd, Observable)</Button> {' '}
        <Button raised color="deepPurple" onClick={actions.resetIfOdd}>Reset (If Odd, Saga)</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography variant="body1" component="p">
        <Button raised color="red" onClick={actions.startCount}>Start count (Observable)</Button> {' '}
        <Button raised color="red" onClick={actions.cancelCount}>Cancel count (Observable)</Button>
      </Typography>
    </div>

    <style jsx>{`
      .typography {
        padding: 0.25rem 0;
      }
    `}</style>
  </div>
);

export const mapStateToProps = ({ counter }) => ({
  counter,
  selectors: bindSelectCreators(selectors, counter),
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      console.log('Counter is ready.');
    },
  }),
)(Counter);
