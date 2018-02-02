import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Paper, Typography } from 'material-ui';
import { FormControl } from 'material-ui/Form';

import { INITIAL } from '../constants';

import {
  renderInput, renderInputValidation,
  renderSelect, renderMultipleSelect,
  renderRadioButtons,
  renderSwitch
} from './renders';
import { validate } from './validate';

const WithReduxForm = ({ selector }) => {
  // ...

  return (
    <div className="container">
      <Paper>
        <Typography type="title" gutterBottom style={{ padding: '1rem 1rem 0' }}>
          With Redux Form
        </Typography>

        <form className="form">
          <div className="row">
            {/* input */}
            <FormControl>
              <Field name="nickname" component={renderInput} label="Nickname" />
            </FormControl>
            <div className="outputs">{selector('nickname')}</div>
          </div>

          <div className="row">
            {/* input validation */}
            <FormControl>
              <Field name="name" component={renderInputValidation} label="Name" />
            </FormControl>
            <div className="outputs">{selector('name')}</div>
          </div>

          <div className="row">
            {/* select */}
            <FormControl>
              <Field name="age" component={renderSelect} label="Age" list={INITIAL.listOfage} />
            </FormControl>
            <div className="outputs">{selector('age')}</div>
          </div>

          <div className="row">
            {/* multiple select */}
            <FormControl>
              <Field name="countries" component={renderMultipleSelect} label="Countries" list={INITIAL.listOfCountries} />
            </FormControl>
            <div className="outputs">{selector('countries') ? selector('countries').join(', ') : selector('countries')}</div>
          </div>

          <div className="row">
            {/* radio buttons */}
            <FormControl component="fieldset">
              <Field name="gender" component={renderRadioButtons} label="Gender"
                list={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' }
                ]}
              />
            </FormControl>
            <div className="outputs" style={{ padding: '0 0 .5rem' }}>
              {selector('gender') ? `${selector('gender')}`.charAt(0).toUpperCase() + `${selector('gender')}`.slice(1) : ''}
            </div>
          </div>

          <div className="row">
            {/* switch */}
            <FormControl component="fieldset">
              <Field name="autoplay" component={renderSwitch} label="Autoplay" />
            </FormControl>
            <div className="outputs" style={{ padding: '0 0 .5rem' }}>
              {selector('autoplay') ? `${selector('autoplay')}`.charAt(0).toUpperCase() + `${selector('autoplay')}`.slice(1) : ''}
            </div>
          </div>

          <div className="row">
            ...
          </div>
        </form>
      </Paper>

      <style jsx>{`
        .container {
          margin: 1rem 0;
        }

        .form {
          padding: .5rem 1rem;

          & .row {
            padding: .66rem;
            display: flex;
            flex-direction: row;
          }

          & .outputs {
            align-self: flex-end;
            margin: 0 0 .5rem .5rem;
            color: #3F51B5;
          }
        }
      `}</style>
    </div>
  );
};

export default compose(
  connect(
    state => ({ selector: field => formValueSelector('example')(state, field) })
  ),
  reduxForm({ form: 'example', validate })
)(WithReduxForm);
