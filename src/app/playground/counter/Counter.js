import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Typography } from 'material-ui';

import Navigation from '~/shared/Navigation';
import Button from '~/shared/Button';
import { bindSelectCreators } from '~/utils/auto-bind';

import * as actions from './actions';
import * as selectors from './selectors';

export const Counter = ({ counter, actions, selectors }) => (
  <div className="container">
    <Navigation />

    <div className="typography">
      <Typography type="headline" component="h3">
        Clicked: {counter.value} times, value is {selectors.evenOrOdd}.
      </Typography>
    </div>

    <div className="typography">
      <Typography type="body1" component="p">
        <Button raised color="indigo" onClick={actions.increment}>Increment</Button> {' '}
        <Button raised color="pink" onClick={actions.decrement}>Decrement</Button> {' '}
        <Button raised color="deepPurple" onClick={actions.reset}>Reset</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography type="body1" component="p">
        <Button raised color="indigo" onClick={actions.incrementAsync}>Increment (Async)</Button> {' '}
        <Button raised color="pink" onClick={actions.decrementAsync}>Decrement (Async)</Button> {' '}
        <Button raised color="deepPurple" onClick={actions.resetAsync}>Reset (Async)</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography type="body1" component="p">
        <Button raised color="indigo" onClick={actions.incrementIfEven}>Increment (If Even)</Button> {' '}
        <Button raised color="pink" onClick={actions.decrementIfEven}>Decrement (If Even)</Button> {' '}
        <Button raised color="deepPurple" onClick={actions.resetIfEven}>Reset (If Even)</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography type="body1" component="p">
        <Button raised color="indigo" onClick={actions.incrementIfOdd}>Increment (If Odd)</Button> {' '}
        <Button raised color="pink" onClick={actions.decrementIfOdd}>Decrement (If Odd)</Button> {' '}
        <Button raised color="deepPurple" onClick={actions.resetIfOdd}>Reset (If Odd)</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography type="body1" component="p">
        <Button raised color="red" onClick={actions.startCount}>Start count</Button> {' '}
        <Button raised color="red" onClick={actions.cancelCount}>Cancel count</Button>
      </Typography>
    </div>

    <style jsx>{`
      .container {
        padding: 1rem;
      }

      .typography {
        padding: .25rem 0;
      }
    `}</style>
  </div>
);

export default connect(
  ({ counter }) => ({ counter, selectors: bindSelectCreators(selectors, counter) }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Counter);
