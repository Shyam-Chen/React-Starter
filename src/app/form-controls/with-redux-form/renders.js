import React from 'react';
import { TextField, Select, Input, Radio, Switch } from 'material-ui';
import { InputLabel } from 'material-ui/Input';
import { FormGroup, FormControlLabel, FormLabel, FormHelperText } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import { RadioGroup } from 'material-ui/Radio';

export const renderInput = ({ input, ...other }) => (
  <TextField {...input} {...other} />
);

export const renderInputValidation = ({ input, meta: { touched, error }, ...other }) => (
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

export const renderSelect = ({ input, label, list, ...other }) => (
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

export const renderMultipleSelect = ({ input, label, list, ...other }) => (
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

export const renderRadioButtons = ({ input, ...other }) => (
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

export const renderSwitch = ({ input, ...other }) => (
  <FormGroup row>
    <FormLabel component="legend" style={{ alignSelf: 'center' }}>Autoplay</FormLabel>
    <Switch {...input} {...other} />
  </FormGroup>
);
