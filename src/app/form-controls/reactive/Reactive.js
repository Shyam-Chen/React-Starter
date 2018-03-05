import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, Typography, TextField } from 'material-ui';
import { FormControl } from 'material-ui/Form';

import * as actions from './actions';

const Reactive = ({ reactive, actions }) => {
  const { creditCard } = reactive;

  return (
    <div className="container">
      <Paper>
        <Typography type="title" gutterBottom style={{ padding: '1rem 1rem 0' }}>
          Reactive
        </Typography>

        <form className="form">
          <div className="row">
            {/* input */}
            <FormControl>
              <TextField
                label="Credit Card"
                value={creditCard}
                onChange={event => actions.setData({ creditCard: event.target.value })}
              />
            </FormControl>
            <div className="outputs">{creditCard}</div>
          </div>

          <div className="row">
            ...
          </div>
        </form>
      </Paper>

      <style jsx>{`
        .container{
          margin: 1rem 0;
        }

        .form {
          padding: .5rem 1rem;
        }

        .row {
          padding: .66rem;
          display: flex;
          flex-direction: row;
        }

        .outputs {
          align-self: flex-end;
          margin: 0 0 .5rem .5rem;
          color: #3F51B5;
        }
      `}</style>
    </div>
  );
};

export const mapStateToProps = ({ formControls: { reactive } }) => ({
  reactive,
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reactive);
