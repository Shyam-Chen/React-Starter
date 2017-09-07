import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dialog, TextField, Button } from 'material-ui';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import * as actions from '../actions';

const Edit = ({ crud: { editData }, actions }) => {
  const { id, primary, accent, dialog } = editData;

  const onModalClose = () => {
    actions.onSetData({
      editData: { ...editData, dialog: false }
    });
  };

  return (
    <Dialog open={dialog} onRequestClose={onModalClose}>
      <DialogTitle>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            value={primary}
            onChange={event => {
              actions.onSetData({
                editData: { ...editData, primary: event.target.value }
              })
            }}
          />
          { ' - ' }
          <TextField
            value={accent}
            onChange={event => {
              actions.onSetData({
                editData: { ...editData, accent: event.target.value }
              })
            }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="accent" onClick={onModalClose}>Cancel</Button>
        <Button
          color="primary"
          onClick={async () => {
            if (primary && accent) {
              await actions.onEditItem(id, primary, accent);
              await onModalClose();
            }
          }}
        >
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
