import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dialog, Button } from 'material-ui';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import * as actions from '../actions';

const Delete = ({ crud, actions }) => {
  const onModalClose = () => actions.onDeleteModal(false);

  const onConfirm = () => {
    actions.onDeleteItem(crud.deleteData);
    onModalClose();
  };

  return (
    <Dialog open={crud.deleteModalOpen} onRequestClose={onModalClose}>
      <DialogTitle>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete it?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onModalClose} color="accent">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Delete);
