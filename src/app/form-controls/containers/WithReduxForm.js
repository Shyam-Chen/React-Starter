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
          <Field name="name" component={renderTextField} type="text" label="Name" />
          <span style={{ marginLeft: '.5rem' }}>{name}</span>
        </form>
      </Paper>

      <style jsx>{`
        .container {
          margin: 2.5rem 0;
        }

        .form {
          padding: .5rem 1rem;
        }

        .row {
          padding: .66rem;
          display: flex;
          flex-direction: row;
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
