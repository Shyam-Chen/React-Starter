import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'semantic-ui-react';

import * as actions from '../actions/rest';

import Search from '../containers/rest/Search';
import Add from '../containers/rest/Add';
import Delete from '../containers/rest/Delete';
import Edit from '../containers/rest/Edit';

export const REST = ({ rest, actions }) => (
  <div>
    <Search />
    <Add />

    <ul>
      {
        rest.dataset.map((item, index) => (
          <li key={ item._id } style={{ margin: '4px 0' }}>
            ({ index + 1 }) { item.text } { ' ' }
            <Button basic color="red" onClick={ () => {
              actions.onDeleteModal(true)
              actions.onSetDelete(item._id)
              } }>Delete</Button>
            <Button basic color="blue" onClick={ () => {
              actions.onEditModal(true)
              actions.onSetEdit(item._id, item.text)
            } }>Edit</Button>
          </li>
        ))
      }
    </ul>

    <aside>
      <Delete />
      <Edit />
    </aside>
  </div>
);


export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(REST);
