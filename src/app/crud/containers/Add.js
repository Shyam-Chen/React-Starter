import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, Button } from 'material-ui';

import * as actions from '../actions';

const Add = ({ crud: { addData: { primary, accent } }, actions }) => (
  <div>
    <div>
      <TextField
        value={primary}
        onChange={event => actions.onSetAdd(event.target.value, accent)}
      />
      {' - '}
      <TextField
        value={accent}
        onChange={event => actions.onSetAdd(primary, event.target.value)}
      />
      {' '}
      <Button
        raised
        color="primary"
        onClick={() => {
          if (primary && accent) {
            actions.onAddItem(primary, accent);
            actions.onSetAdd('', '');
          }
        }}
      >
        Add
      </Button>
    </div>
  </div>
);

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Add);
