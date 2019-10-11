import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dynamic } from 'redux-dynamic-manager';
import { makeStyles } from '@material-ui/core/styles';
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

import * as actions from './actions';
import * as selectors from './selectors';
import reducer from './reducer';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    'margin-top': theme.spacing(3),
  },
  'o-toolbar-selected': {
    color: '#ff5252',
  },
  'o-spacer': {
    flex: '1 0 auto',
  },
  table: {},
  tableWrapper: {
    'overflow-x': 'auto',
  },
}));

export const Basic = () => {
  const classes = useStyles();
  const b$ = useSelector(state => state.crudOperations.basic);
  const numSelected = useSelector(selectors.numSelected);
  const dispatch = useDispatch();

  return (
    <div id="basic">
      <Typography>CRUD Operations - Basic</Typography>

      <TextField
        label="Primary"
        value={b$.addData.primary}
        onChange={event =>
          dispatch(
            actions.setData({
              addData: { ...b$.addData, primary: event.target.value },
            }),
          )
        }
      />
      <TextField
        label="Accent"
        value={b$.addData.accent}
        onChange={event =>
          dispatch(
            actions.setData({
              addData: { ...b$.addData, accent: event.target.value },
            }),
          )
        }
      />
      <Button
        variant="contained"
        onClick={async () => {
          if (b$.addData.primary && b$.addData.accent) {
            await dispatch(actions.addItem(b$.addData));
            await dispatch(
              actions.setData({ addData: { primary: '', accent: '' } }),
            );
          }
        }}
      >
        Add
      </Button>

      <Paper>
        {numSelected !== 0 ? (
          <Toolbar>
            <Typography className={classes['o-toolbar-selected']}>
              {numSelected} selected
            </Typography>
            <div className={classes['o-spacer']} />
            <IconButton
              onClick={async () => {
                await b$.selected.forEach(({ id }) =>
                  dispatch(actions.deleteItem(id)),
                );
                await dispatch(actions.setData({ selected: [] }));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Toolbar>
        ) : (
          <Toolbar>
            <Typography>Board</Typography>
            <TextField
              label="Search"
              value={b$.searchData}
              onChange={event =>
                dispatch(actions.setData({ searchData: event.target.value }))
              }
            />
          </Toolbar>
        )}

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    b$.selected.length > 0 &&
                    b$.selected.length < b$.dataset.length
                  }
                  checked={
                    b$.selected.length === b$.dataset.length &&
                    b$.dataset.length !== 0
                  }
                  onChange={(event, checked) =>
                    dispatch(
                      actions.setData({
                        selected: checked ? b$.dataset.map(item => item) : [],
                      }),
                    )
                  }
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Primary</TableCell>
              <TableCell>Accent</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {b$.dataset
              .filter(
                item =>
                  item.primary
                    .toLowerCase()
                    .indexOf(b$.searchData.toLowerCase()) > -1 ||
                  item.accent
                    .toLowerCase()
                    .indexOf(b$.searchData.toLowerCase()) !== -1,
              )
              .map(item => (
                <TableRow hover role="checkbox" key={item.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={b$.selected.indexOf(item) !== -1}
                      onChange={() => {
                        // FIXME: When editing is complete, it should not be unchecked.
                        let res = [];

                        const index = b$.selected.indexOf(item);
                        if (index === -1) res = res.concat(b$.selected, item);
                        if (index === 0) res = res.concat(b$.selected.slice(1));
                        if (index === b$.selected.length - 1)
                          res = res.concat(b$.selected.slice(0, -1));
                        if (index > 0)
                          res = res.concat(
                            b$.selected.slice(0, index),
                            b$.selected.slice(index + 1),
                          );

                        dispatch(actions.setData({ selected: res }));
                      }}
                    />
                  </TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.primary}</TableCell>
                  <TableCell>{item.accent}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() =>
                        dispatch(
                          actions.setData({
                            editData: {
                              ...b$.editData,
                              id: item.id,
                              primary: item.primary,
                              accent: item.accent,
                            },
                            dialogs: { ...b$.dialogs, edit: true },
                          }),
                        )
                      }
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        dispatch(
                          actions.setData({
                            deleteData: { ...b$.deleteData, id: item.id },
                            dialogs: { ...b$.dialogs, delete: true },
                          }),
                        )
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>

      <Dialog
        open={b$.dialogs.edit}
        onClose={() =>
          dispatch(actions.setData({ dialogs: { ...b$.dialogs, edit: false } }))
        }
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              label="Primary"
              value={b$.editData.primary}
              onChange={event =>
                dispatch(
                  actions.setData({
                    editData: { ...b$.editData, primary: event.target.value },
                  }),
                )
              }
            />
            <TextField
              label="Accent"
              value={b$.editData.accent}
              onChange={event =>
                dispatch(
                  actions.setData({
                    editData: { ...b$.editData, accent: event.target.value },
                  }),
                )
              }
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              dispatch(
                actions.setData({ dialogs: { ...b$.dialogs, edit: false } }),
              )
            }
          >
            Cancel
          </Button>
          <Button
            onClick={async () => {
              await dispatch(actions.editItem(b$.editData));
              await dispatch(
                actions.setData({
                  dialogs: { ...b$.dialogs, edit: false },
                }),
              );
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={b$.dialogs.delete}
        onClose={() =>
          dispatch(
            actions.setData({ dialogs: { ...b$.dialogs, delete: false } }),
          )
        }
      >
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              dispatch(
                actions.setData({ dialogs: { ...b$.dialogs, delete: false } }),
              )
            }
          >
            Cancel
          </Button>
          <Button
            onClick={async () => {
              await dispatch(actions.deleteItem(b$.deleteData.id));
              await dispatch(
                actions.setData({
                  dialogs: { ...b$.dialogs, delete: false },
                }),
              );
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default dynamic(['crudOperations', 'basic'], reducer)(Basic);
