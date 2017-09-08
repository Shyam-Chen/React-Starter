import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Input } from 'semantic-ui-react';

import * as actions from '../actions';

const Add = ({ rest: { addData }, actions }) => {
  const { text } = addData;

  return (
    <div>
      <div>
        <Input value={ text } onChange={ event => {
          // actions
          actions.onSetAdd(event.target.value)
        } } />
        { ' ' }
        <Button
          basic
          color="black"
          onClick={() => {
            if (text) {
              actions.onAdd(text);
              actions.onSetAdd('');
            }
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Add);
