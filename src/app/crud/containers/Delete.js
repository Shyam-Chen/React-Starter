import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog, Button } from 'material-ui';
import { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog';

import * as actions from '../actions';

const Delete = ({ crud: { deleteData }, actions }) => {
  const { id, dialog } = deleteData;

  const onDialogClose = () =>
    actions.onSetData({
      deleteData: { ...deleteData, dialog: false }
    });

  return (
    <Dialog open={dialog} onRequestClose={onDialogClose}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete it?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="accent" onClick={onDialogClose}>Cancel</Button>
        <Button
          color="primary"
          onClick={async () => {
            await actions.onDeleteItem(id);
            await onDialogClose();
          }}
        >
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
