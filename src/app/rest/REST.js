import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List, Button } from 'semantic-ui-react';

import * as actions from './actions';

import { Add, Search, Edit, Delete } from './containers';

const REST = ({ rest, actions }) => (
  <div>
    <Search />
    <Add />

    <List>
      {
        rest.dataset.map((item, index) => (
          <List.Item key={ item._id }>
            ({ index + 1 }) { item.text } { ' ' }
            <Button basic color="red" onClick={ () => {
              actions.onDeleteModal(true);
              actions.onSetDelete(item._id);
              } }>Delete</Button>
            <Button basic color="blue" onClick={ () => {
              actions.onEditModal(true);
              actions.onSetEdit(item._id, item.text);
            } }>Edit</Button>
          </List.Item>
        ))
      }
    </List>

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
