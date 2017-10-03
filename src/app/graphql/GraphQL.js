import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, Button } from 'material-ui';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';
import { Add, Search, Edit, Delete } from './containers';

const GraphQL = ({ graphql, actions }) => {
  const { dataset, deleteData, editData/* , loading */ } = graphql;

  return (
    <div className="container">
      <Navigation />

      <p>[Bug]</p>

      <Search />
      <Add />

      <Paper>
        <ul>
          {
            dataset.map(({ _id, text }) => (
              <li key={_id}>
                {text}
                <Button
                  color="accent"
                  onClick={() =>
                    actions.setData({
                      deleteData: { ...deleteData, _id, dialog: true }
                    })
                  }
                >
                  Delete
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    actions.setData({
                      editData: { ...editData, _id, text, dialog: true }
                    });
                  }}
                >
                  Edit
                </Button>
              </li>
            ))
          }
        </ul>
      </Paper>

      <Edit />
      <Delete />

      <style jsx>{`
        .container {
          padding: 1rem;
        }

        .table {
          max-width: 30rem;
          margin: .5rem 0;
        }

        .progress {
          margin: .5rem 0;
        }
      `}</style>
    </div>
  );
}

export default connect(
  ({ graphql }) => ({ graphql }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(GraphQL);
