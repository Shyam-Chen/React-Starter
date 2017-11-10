import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Paper, Typography, TextField, Select, Input, Radio, Switch } from 'material-ui';
import { InputLabel } from 'material-ui/Input';
import { FormControl, FormGroup, FormControlLabel, FormLabel, FormHelperText } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import { RadioGroup } from 'material-ui/Radio';

import { INITIAL } from '../constants';

/**
 * @name render - rendering component
 */

const renderInput = ({ input, ...other }) => (
  <TextField {...input} {...other} />
);

const renderInputValidation = ({ input, meta: { touched, error }, ...other }) => (
  <div>
    <TextField
      required
      error={!!(touched && error)}
      {...input}
      {...other}
    />
    {
      touched && error &&
      <FormHelperText error={!!(touched && error)}>{error}</FormHelperText>
    }
  </div>
);

const renderSelect = ({ input, label, list, ...other }) => (
  <div>
    <InputLabel htmlFor={label}>{label}</InputLabel>
    <Select
      {...input}
      {...other}
      input={<Input id={label} style={{ width: '7rem' }} />}
    >
      <MenuItem value=""><em>None</em></MenuItem>
      {
        list.map(({ value, label }, index) => (
          <MenuItem key={index} value={value}>{label}</MenuItem>
        ))
      }
    </Select>
  </div>
);

const renderMultipleSelect = ({ input, label, list, ...other }) => (
  <div>
    <InputLabel htmlFor={label}>{label}</InputLabel>
    <Select
      {...input}
      {...other}
      multiple
      value={input.value || []}
      input={<Input id={label} style={{ width: '15rem' }} />}
    >
      {
        list.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
    </Select>
  </div>
);

const renderRadioButtons = ({ input, ...other }) => (
  <div>
    <FormLabel component="legend">Gender</FormLabel>
    <RadioGroup
      {...input}
      {...other}
      style={{ display: 'flex', flexDirection: 'row' }}
      aria-label="gender"
      name="gender"
    >
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </div>
);

const renderSwitch = ({ input, ...other }) => (
  <FormGroup row>
    <FormLabel component="legend" style={{ alignSelf: 'center' }}>Autoplay</FormLabel>
    <Switch {...input} {...other} />
  </FormGroup>
);

/**
 * @name validate - form validation
 */

const validate = ({ name }) => {
  const errors = {};

  // input
  if (!name) {
    errors.name = 'Required';
  } else if (name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  return errors;
};

/**
 * @name Component
 */

let WithReduxForm = ({ selector }) => {

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
              <Field name="gender" component={renderRadioButtons} />
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

WithReduxForm = reduxForm({ form: 'example', validate })(WithReduxForm);

export default connect(
  state => ({ selector: field => formValueSelector('example')(state, field) })
)(WithReduxForm);
