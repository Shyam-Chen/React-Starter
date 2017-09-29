import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Typography, Button } from 'material-ui';

import Navigation from '~/shared/Navigation';
import VariantButton from '~/shared/VariantButton';

import * as actions from './actions';
import { evenOrOdd } from './selectors';

const Counter = ({ counter, actions, evenOrOdd }) => (
  <div className="container">
    <Navigation />

    <div className="typography">
      <Typography type="headline" component="h3">
        Clicked: {counter.value} times, value is {evenOrOdd}.
      </Typography>
    </div>

    <div className="typography">
      <Typography type="body1" component="p">
        <Button raised color="primary" onClick={actions.increment}>Increment</Button> {' '}
        <Button raised color="primary" onClick={actions.decrement}>Decrement</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography type="body1" component="p">
        <Button raised color="accent" onClick={actions.incrementAsync}>Increment (Async)</Button> {' '}
        <Button raised color="accent" onClick={actions.decrementAsync}>Decrement (Async)</Button>
      </Typography>
    </div>

    <div className="typography">
      <Typography type="body1" component="p">
        <VariantButton raised variant="deepPurple" text="Increment (If Odd)" onClick={actions.incrementIfOdd} /> {' '}
        <VariantButton raised variant="deepPurple" text="Increment (If Even)" onClick={actions.incrementIfEven} />
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
  ({ counter }) => ({ counter, evenOrOdd: evenOrOdd(counter) }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Counter);
