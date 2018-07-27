// @flow

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { bindSelectCreators } from 'reselect-computed';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { Props } from './types';
import * as actions from './actions';
import * as selectors from './selectors';

const styles = theme => ({
  root: {
    width: '100%',
    'margin-top': theme.spacing.unit * 3,
  },
  table: {},
  tableWrapper: {
    'overflow-x': 'auto',
  },
});

export const Basic = ({ classes, b$, actions, selectors }: Props): React$Element<*> => (
  <div id="basic">
    <Typography>CRUD Operations - Basic</Typography>

    <TextField
      label="Primary"
      value={b$.primary}
      onChange={event => (
        actions.setData({
          addData: { ...b$.addData, primary: event.target.value },
        })
      )}
    />
    <TextField
      label="Accent"
      value={b$.accent}
      onChange={event => (
        actions.setData({
          addData: { ...b$.addData, accent: event.target.value },
        })
      )}
    />
    <Button
      variant="contained"
      onClick={async () => {
        if (b$.addData.primary && b$.addData.accent) {
          await actions.addItem(b$.addData);
          await actions.setData({ addData: { primary: '', accent: '' } });
        }
      }}
    >
      Add
    </Button>

    <Paper>
      {
        selectors.numSelected !== 0
          ? (
            <Toolbar>
              <Typography>{selectors.numSelected} selected</Typography>
            </Toolbar>
          )
          : (
            <Toolbar>
              <Typography>Board</Typography>
              <TextField
                label="Search"
                value={b$.searchData}
                onChange={event => (
                  actions.setData({ searchData: event.target.value })
                )}
              />
            </Toolbar>
          )
      }

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={b$.selected.length > 0 && b$.selected.length < b$.dataset.length}
                checked={b$.selected.length === b$.dataset.length}
                onChange={(event, checked) => {
                  if (checked) {
                    actions.setData(({ selected: b$.dataset.map(item => item) }));
                    return;
                  }

                  actions.setData({ selected: [] });
                }}
              />
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Primary</TableCell>
            <TableCell>Accent</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            b$.dataset
              .filter(item => (
                item.primary.toLowerCase().indexOf(b$.searchData.toLowerCase()) > -1
                || item.accent.toLowerCase().indexOf(b$.searchData.toLowerCase()) !== -1
              ))
              .map((item: any) => (
                <TableRow hover role="checkbox" key={item.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={b$.selected.indexOf(item) !== -1}
                      onChange={() => {
                        let res = [];

                        const index = b$.selected.indexOf(item);
                        if (index === -1) res = res.concat(b$.selected, item);
                        if (index === 0) res = res.concat(b$.selected.slice(1));
                        if (index === b$.selected.length - 1) res = res.concat(b$.selected.slice(0, -1));
                        if (index > 0) res = res.concat(b$.selected.slice(0, index), b$.selected.slice(index + 1));

                        actions.setData({ selected: res });
                      }}
                    />
                  </TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.primary}</TableCell>
                  <TableCell>{item.accent}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => (
                        actions.setData({
                          editData: { ...b$.editData, id: item.id, primary: item.primary, accent: item.accent },
                          dialogs: { ...b$.dialogs, edit: true },
                        })
                      )}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => (
                        actions.setData({
                          deleteData: { ...b$.deleteData, id: item.id },
                          dialogs: { ...b$.dialogs, delete: true },
                        })
                      )}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </Paper>

    <Dialog open={b$.dialogs.edit} onClose={() => actions.setData({ dialogs: { ...b$.dialogs, edit: false } })}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            label="Primary"
            value={b$.editData.primary}
            onChange={event => (
              actions.setData({
                editData: { ...b$.editData, primary: event.target.value },
              })
            )}
          />
          <TextField
            label="Accent"
            value={b$.editData.accent}
            onChange={event => (
              actions.setData({
                editData: { ...b$.editData, accent: event.target.value },
              })
            )}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => actions.setData({ dialogs: { ...b$.dialogs, edit: false } })}>Cancel</Button>
        <Button
          onClick={async () => {
            await actions.editItem(b$.editData);
            await actions.setData({ dialogs: { ...b$.dialogs, edit: false } });
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>

    <Dialog open={b$.dialogs.delete} onClose={() => actions.setData({ dialogs: { ...b$.dialogs, delete: false } })}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete it?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => actions.setData({ dialogs: { ...b$.dialogs, delete: false } })}>Cancel</Button>
        <Button
          onClick={async () => {
            await actions.deleteItem(b$.deleteData.id);
            await actions.setData({ dialogs: { ...b$.dialogs, delete: false } });
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

export default compose(
  withStyles(styles),
  connect(
    ({ crudOperations: { basic } }) => ({
      b$: basic,
      selectors: bindSelectCreators(selectors, basic),
    }),
    (dispatch: any) => ({ actions: bindActionCreators(actions, dispatch) }),
  ),
)(Basic);
