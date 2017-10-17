import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Paper, Typography, TextField } from 'material-ui';

const renderTextField = ({ input, meta, ...other }) => (
  <TextField
    {...input}
    helperText={meta.touched && meta.error}
    {...other}
  />
);

let WithReduxForm = ({ name }) => {

  return (
    <div className="container">
      <Paper>
        <Typography type="title" gutterBottom style={{ padding: '1rem 1rem 0' }}>
          With Redux Form
        </Typography>

        <form className="form">
          <div className="row">
            {/* input */}
            <Field name="name" component={renderTextField} type="text" label="Name" />
            <span className="outputs">{name}</span>
          </div>

          <div className="row">
            ...
          </div>
        </form>
      </Paper>

      <style jsx>{`
        .container {
          margin: 2rem 0;
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

WithReduxForm = reduxForm({ form: 'example' })(WithReduxForm);

const selector = formValueSelector('example');

export default connect(
  state => ({
    name: selector(state, 'name')
  }),
  // dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(WithReduxForm);
