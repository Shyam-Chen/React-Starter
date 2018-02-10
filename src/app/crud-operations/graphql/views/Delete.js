import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';
import { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog';

import Button from '~/shared/Button';

import * as actions from '../actions';

const Delete = ({ graphql: { deleteData }, actions }) => {
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
        <Button color="green" onClick={onDialogClose}>Cancel</Button>
        <Button
          color="red"
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
  ({ graphql }) => ({ graphql }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Delete);
