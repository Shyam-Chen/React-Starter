import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dialog, TextField, Button } from 'material-ui';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import * as actions from '../actions';

const Edit = ({ crud, actions }) => {
  const { id, primary, accent } = crud.editData;

  const onModalClose = () => actions.onEditModal(false);

  const onEdit = () => {
    if (primary && accent) {
      actions.onEditItem(id, primary, accent);
      onModalClose();
    }
  };

  return (
    <Dialog open={crud.editModalOpen} onRequestClose={onModalClose}>
      <DialogTitle>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            value={primary}
            onChange={event => actions.onSetEdit(id, event.target.value, accent)}
          />
          { ' - ' }
          <TextField
            value={accent}
            onChange={event => actions.onSetEdit(id, primary, event.target.value)}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onModalClose} color="accent">
          Cancel
        </Button>
        <Button onClick={onEdit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Edit);
