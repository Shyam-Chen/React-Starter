import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Button } from 'semantic-ui-react';
import { CircularProgress } from 'material-ui/Progress';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';
import { Add, Search, Edit, Delete } from './containers';

const REST = ({ rest, actions }) => {


  return (
    <div className="container">
      <Navigation />

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

      <div className="progress" style={{ display: rest.loading ? '' : 'none' }}>
        <CircularProgress />
      </div>

      <aside>
        <Delete />
        <Edit />
      </aside>

      <style jsx>{`
        .container {
          padding: 1rem;
        }

        .table {
          max-width: 30rem;
          margin: .5rem 0;
        }

        .progress {
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(225, 225, 255, .7);
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(REST);
