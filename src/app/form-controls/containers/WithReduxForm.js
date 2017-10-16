import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Paper, Typography } from 'material-ui';
import { TextField } from 'material-ui';

const renderTextField = ({
  input,
  label,
  meta,
  ...custom
}) => (
  <TextField
    {...input}
    {...label}
    {...meta}
    {...custom}
  />
)

let WithReduxForm = ({ handleSubmit }) => {

  return (
    <div className="container">
      <Paper>
        <Typography type="title" gutterBottom style={{ padding: '1rem 1rem 0' }}>
          With Redux Form
        </Typography>
        <form className="form" onSubmit={ handleSubmit }>
          <Field name="Text" component={renderTextField} type="text" />
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
  )
}

WithReduxForm = reduxForm({
  form: 'contact'
})(WithReduxForm)

export default connect(
  // ({ form }) => ({ form }),
  // dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(WithReduxForm);
