import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField, Paper, Button } from 'material-ui';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';

const GraphQL = ({ graphql: { dataset, searchData }, actions }) => {
  const { text } = searchData;

  return (
    <div className="container">
      <Navigation />

      <p>WIP</p>

      <TextField
        value={text}
        onChange={event =>
          actions.setData({
            searchData: { ...searchData, text: event.target.value }
          })
        }
      />
      { ' ' }
      <Button
        raised
        onClick={() => {
          actions.searchItem(text);
          actions.setData({ searchData: { text: '' } });
        }}
      >
        Search
      </Button>

      <Paper>
        <ul>
          {
            dataset.map(item => (
              <li key={item._id}>
                {item.text}
                <Button
                  color="accent"
                  onClick={() => {
                    console.log('Delete');
                  }}
                >
                  Delete
                </Button>
                <Button color="primary">Edit</Button>
              </li>
            ))
          }
        </ul>
      </Paper>

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
