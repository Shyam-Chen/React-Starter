import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/rest';

import { Search } from '../components/rest/Search';
import { Add } from '../components/rest/Add';
import { Delete } from '../components/Delete';
import { Edit } from '../components/rest/Edit';

export const REST = ({ rest, actions }) => (
  <div>
    <Search actions={ actions } />
    <Add actions={ actions } />

    <ul>
      {
        rest.map((item, index) => (
          <li key={ item._id }>
            ({ index + 1 }) { item.text } { ' ' }
            <Delete onDelete={ () => actions.onRemove(item._id) } />
            <Edit id={ item._id } text={ item.text } actions={ actions } />
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
