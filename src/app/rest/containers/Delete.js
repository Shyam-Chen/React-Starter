import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog, Button } from 'material-ui';
import { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog';

import * as actions from '../actions';

const Delete = ({ rest: { deleteData }, actions }) => {
  const { _id, dialog } = deleteData;

  const onDialogClose = () =>
    actions.setData({
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
            await onDialogClose();
            await actions.setData({ loading: true });
            await actions.deleteItem(_id);
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Delete);
