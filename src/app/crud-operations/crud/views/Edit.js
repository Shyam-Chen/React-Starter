import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog, TextField } from 'material-ui';
import { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog';

import Button from '~/shared/Button';

import * as actions from '../actions';

export const Edit = ({ crud: { editData }, actions }) => {
  const { id, primary, accent, dialog } = editData;

  const onDialogClose = () =>
    actions.setData({
      editData: { ...editData, dialog: false },
    });

  return (
    <Dialog open={dialog} onRequestClose={onDialogClose}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            value={primary}
            onChange={event =>
              actions.setData({
                editData: { ...editData, primary: event.target.value },
              })
            }
          />
          {' - '}
          <TextField
            value={accent}
            onChange={event =>
              actions.setData({
                editData: { ...editData, accent: event.target.value },
              })
            }
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="red" onClick={onDialogClose}>Cancel</Button>
        <Button
          color="green"
          onClick={async () => {
            if (primary && accent) {
              await onDialogClose();
              await actions.editItem(id, primary, accent);
            }
          }}
        >
          Save
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
