import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';

import Button from '~/shared/Button';

import * as actions from '../actions';

const Search = ({ rest: { searchData }, actions }) => {
  const { text } = searchData;

  return (
    <div className="container">
      <TextField
        value={text}
        onChange={event =>
          actions.setData({
            searchData: { ...searchData, text: event.target.value }
          })
        }
      />
      {' '}
      <Button
        raised
        color="blue"
        onClick={async () => {
          await actions.setData({ loading: true });
          await actions.searchItem(text);
          await actions.setData({ searchData: { text: '' } });
        }}
      >
        Search
      </Button>

      <style jsx>{`
        .container {
          padding: .5rem 0;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Search);
