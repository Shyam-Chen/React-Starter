import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paper, Select, Input, Radio, Checkbox, Switch } from 'material-ui';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormGroup, FormControlLabel, FormLabel } from 'material-ui/Form';
import { RadioGroup } from 'material-ui/Radio';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';

const FormControls = ({ formControls, actions }) => {
  const {
    age,
    countries, listOfCountries,
    frameworks,
    gender,
    iPhoneX
  } = formControls;

  return (
    <div className="container">
      <Navigation />

      <p>TODO: RESTful API</p>

      <Paper>
        <form className="container">
          <div className="row">
            {/* select */}
            <FormControl>
              <InputLabel htmlFor="age">Age</InputLabel>
              <Select
                value={age}
                onChange={event => actions.onSetData({ age: event.target.value })}
                input={<Input id="age" style={{ width: '7rem' }} />}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="row">
            {/* multiple select */}
            <FormControl>
              <InputLabel htmlFor="countries">Countries</InputLabel>
              <Select
                multiple
                value={countries}
                onChange={event => actions.onSetData({ countries: event.target.value })}
                input={<Input id="countries" style={{ width: '15rem' }} />}
              >
                {
                  listOfCountries.map((item, index) => (
                    <MenuItem key={index} value={item}>{item}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>

          <div className="row">
            {/* checkboxes */}
            <FormControl component="fieldset">
              <FormLabel component="legend">Frameworks</FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={frameworks.angular}
                      onChange={(event, checked) => actions.onSetData({ frameworks: { ...frameworks, angular: checked } })}
                      value="angular"
                    />
                  }
                  label="Angular"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={frameworks.react}
                      onChange={(event, checked) => actions.onSetData({ frameworks: { ...frameworks, react: checked } })}
                      value="react"
                    />
                  }
                  label="React"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={frameworks.vue}
                      onChange={(event, checked) => actions.onSetData({ frameworks: { ...frameworks, vue: checked } })}
                      value="vue"
                    />
                  }
                  label="Vue"
                />
              </FormGroup>
            </FormControl>
          </div>

          <div className="row">
            {/* radio buttons */}
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                style={{ display: 'flex', flexDirection: 'row' }}
                aria-label="gender"
                name="gender"
                value={gender}
                onChange={(event, value) => actions.onSetData({ gender: value })}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="row">
            {/* switch */}
            <FormControl component="fieldset">
              <FormLabel component="legend">iPhoneX</FormLabel>
              <Switch
                checked={iPhoneX}
                onChange={(event, checked) => actions.onSetData({ iPhoneX: checked })}
                aria-label="iPhoneX"
              />
            </FormControl>
          </div>
        </form>
      </Paper>

      <style jsx>{`
        .container {
          padding: .5rem 1rem;
        }

        .row {
          padding: .5rem;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ formControls }) => ({ formControls }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(FormControls);
