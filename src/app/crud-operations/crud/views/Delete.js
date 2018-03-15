import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';
import { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog';

import Button from '~/shared/Button';

import * as actions from '../actions';

export const Delete = ({ crud: { deleteData }, actions }) => {
  const { id, dialog } = deleteData;

  const onDialogClose = () =>
    actions.setData({
      deleteData: { ...deleteData, dialog: false },
    });

  return (
    <Dialog open={dialog} onRequestClose={onDialogClose}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete it?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="green" onClick={onDialogClose}>Cancel</Button>
        <Button
          color="red"
          onClick={async () => {
            await onDialogClose();
            await actions.deleteItem(id);
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const mapStateToProps = ({ crud }) => ({
  crud,
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
