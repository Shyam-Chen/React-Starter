import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Input } from 'semantic-ui-react';

import * as actions from '../actions';

const Add = ({ rest, actions }) => {
  const { text } = rest.addData;

  const onAdd = () => {
    if (text) {
      actions.onAdd(text);
      actions.onSetAdd('');
    }
  };

  return (
    <div>
      <div>
        <Input value={ text } onChange={ event => {
          actions.onSetAdd(event.target.value)
        } } />
        { ' ' }
        <Button basic color="black" onClick={ onAdd }>Add</Button>
      </div>
    </div>
  );
}

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Add);
