import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/rest';

import { Search } from '../components/rest/Search';

export const REST = ({ rest, actions }) => (
  <div>
    <Search actions={ actions } />

    <ul>
      {
        rest.map((item, index) => (
          <li key={ item._id }>
            ({ index + 1 }) { item.text }

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
