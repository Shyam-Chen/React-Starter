import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField, Button } from 'material-ui';

import * as actions from '../actions';

const Search = ({ crud: { searchData }, actions }) => {
  const { primary, accent } = searchData;

  return (
    <div className="container">
      <TextField
        value={primary}
        onChange={event => actions.setData({
          searchData: { ...searchData, primary: event.target.value }
        })}
      />
      {' - '}
      <TextField
        value={accent}
        onChange={event => actions.setData({
          searchData: { ...searchData, accent: event.target.value }
        })}
      />
      {' '}
      <Button
        raised
        onClick={async () => {
          await actions.searchItem(primary, accent);
          await actions.setData({ searchData: { primary: '', accent: '' } });
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
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Search);
