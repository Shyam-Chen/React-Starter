import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paper, Select, Input, Radio, Checkbox } from 'material-ui';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormGroup, FormControlLabel, FormLabel } from 'material-ui/Form';
import { RadioGroup } from 'material-ui/Radio';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';

const FormControls = ({ formControls, actions }) => {
  const {
    age,
    gender,
    frameworks
  } = formControls;

  return (
    <div className="container">
      <Navigation />

      <p>TODO: RESTful API</p>

      <Paper>
        <form className="container">

          <div className="row">
            <FormGroup row>
              <FormControl>
                <InputLabel htmlFor="age-simple">Age</InputLabel>
                <Select
                  value={age}
                  onChange={event => actions.onSetData({ age: event.target.value })}
                  input={<Input id="age-simple" style={{ width: '7rem' }} />}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </div>

          <div className="row">
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
          </div>

          <div className="row">
            <FormGroup row>
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
            </FormGroup>
          </div>

        </form>
      </Paper>

      <style jsx>{`
        .container {
          padding: 1rem;
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
