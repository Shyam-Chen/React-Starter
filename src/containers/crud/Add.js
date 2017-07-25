import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Input } from 'semantic-ui-react';

import * as actions from '../../actions/crud';

const Add = ({ crud, actions }) => {
  const { primary, accent } = crud.addData;

  const onAdd = () => {
    if (primary && accent) {
      actions.onAddItem(primary, accent);
      actions.onSetAdd('', '');
    }
  };

  return (
    <div>
      <div>
        <Input value={ primary } onChange={ event => {
          actions.onSetAdd(event.target.value, accent)
        } } />
        { ' - ' }
        <Input value={ accent } onChange={ event => {
          actions.onSetAdd(primary, event.target.value)
        } } />
        { ' ' }
        <Button basic color="black" onClick={ onAdd }>Add</Button>
      </div>
    </div>
  );
}

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Add);
