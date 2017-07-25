import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'semantic-ui-react';

import * as actions from '../actions/rest';

import { Search } from '../components/rest/Search';
import { Add } from '../components/rest/Add';
import Delete from '../containers/rest/Delete';
import { Edit } from '../components/rest/Edit';

export const REST = ({ rest, actions }) => (
  <div>
    <Search actions={ actions } />
    <Add actions={ actions } />

    <ul>
      {
        rest.dataset.map((item, index) => (
          <li key={ item._id } style={{ margin: '4px 0' }}>
            ({ index + 1 }) { item.text } { ' ' }
            <Button basic color="red" onClick={ () => {
              actions.onDeleteModal(true)
              actions.onSetDelete(item._id)
              } }>Delete</Button>
            <Edit id={ item._id } text={ item.text } actions={ actions } />
          </li>
        ))
      }
    </ul>

    <aside>
      <Delete />
    </aside>
  </div>
);


export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(REST);
