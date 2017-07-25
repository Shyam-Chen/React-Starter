import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'semantic-ui-react';

import * as actions from '../actions/crud';

import { Add } from '../components/crud/Add';
import Delete from '../components/Delete';
import { Edit } from '../components/crud/Edit';
import { Search } from '../components/crud/Search';

const CRUD = ({ crud, actions }) => (
  <div>
    <Search actions={ actions } />
    <Add actions={ actions } />
    <Delete />

    <ul>
      {
        crud.dataset.map((item, index) => (
          <li key={ item.id }>
            ({ index + 1 }) { item.primary } - { item.accent } { ' ' }
            <Button basic color="red"
              onClick={ () => {
                actions.onDeleteModal(true)
                actions.onSetDelete(item.id)
              } }
            >Delete</Button>

            <Edit id={ item.id } primary={ item.primary } accent={ item.accent } actions={ actions } />
          </li>
        ))
      }
    </ul>
  </div>
);

export default connect(
  // map state to props
  ({ crud }) => ({ crud }),

  // map dispatch to props
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(CRUD);
