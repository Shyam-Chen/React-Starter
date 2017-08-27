import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, Button } from 'material-ui';

import * as actions from '../actions';

const Search = ({ crud: { searchData: { primary, accent } }, actions }) => (
  <div>
    <TextField
      value={primary}
      onChange={event => actions.onSetSearch(event.target.value, accent)}
    />
    {' - '}
    <TextField
      value={accent}
      onChange={event => actions.onSetSearch(primary, event.target.value)}
    />
    {' '}
    <Button
      raised
      color="primary"
      onClick={() => {
        actions.onSearchItem(primary, accent);
        actions.onSetSearch('', '');
      }}
    >
      Search
    </Button>
  </div>
);

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Search);
