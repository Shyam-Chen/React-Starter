import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'semantic-ui-react';

import * as actions from '../actions/rest';

export const REST = ({ rest, actions }) => (
  <div>
    <Button basic color="black" onClick={ actions.onSearch }>Search</Button>

    <ul>
      {
        rest.map((item) => (
          <li key={ item._id }>
            { item.text }

          </li>
        ))
      }
    </ul>
  </div>
);


export default connect(
  // map state to props
  ({ rest }) => ({ rest }),

  // map dispatch to props
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(REST);
