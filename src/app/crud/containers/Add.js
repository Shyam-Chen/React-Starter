import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, Button } from 'material-ui';

import * as actions from '../actions';

const Add = ({ crud: { addData }, actions }) => {
  const { primary, accent } = addData;

  return (
    <div className="container">
      <TextField
        value={primary}
        onChange={event => actions.onSetData({
          addData: { ...addData, primary: event.target.value }
        })}
      />
      {' - '}
      <TextField
        value={accent}
        onChange={event => actions.onSetData({
          addData: { ...addData, accent: event.target.value }
        })}
      />
      {' '}
      <Button
        raised
        color="primary"
        onClick={() => {
          if (primary && accent) {
            actions.onAddItem(primary, accent);
            actions.onSetData({ addData: { primary: '', accent: '' } });
          }
        }}
      >
        Add
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
)(Add);
