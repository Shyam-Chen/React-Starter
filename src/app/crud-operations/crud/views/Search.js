import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';

import Button from '~/shared/Button';

import * as actions from '../actions';

export const Search = ({ crud: { searchData }, actions }) => {
  const { primary, accent } = searchData;

  return (
    <div className="container">
      <TextField
        value={primary}
        onChange={event =>
          actions.setData({
            searchData: { ...searchData, primary: event.target.value },
          })
        }
      />
      {' - '}
      <TextField
        value={accent}
        onChange={event =>
          actions.setData({
            searchData: { ...searchData, accent: event.target.value },
          })
        }
      />
      {' '}
      <Button
        raised
        color="blue"
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

export const mapStateToProps = ({ crud }) => ({
  crud,
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
