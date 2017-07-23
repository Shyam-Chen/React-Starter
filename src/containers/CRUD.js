import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/crud';

import { Add } from '../components/crud/Add';
import { Delete } from '../components/crud/Delete';
import { Edit } from '../components/crud/Edit';
import { Search } from '../components/crud/Search';

const CRUD = ({ crud, actions }) => (
  <div>
    <Search actions={ actions } />
    <Add actions={ actions } />

    <ul>
      {
        crud.map((item) => (
          <li key={ item.id }>
            { item.primary } - { item.accent } { ' ' }
            <Delete id={ item.id } actions={ actions } />
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
