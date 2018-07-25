// @flow

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';

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

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { Props } from './types';
import * as actions from './actions';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {

  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

export const Basic = ({ classes, b$ }: Props): React$Element<*> => {
  console.log('***', b$);

  return (
    <div id="basic">
      <Typography>CRUD Operations - Basic</Typography>

      <TextField label="Primary" />
      <TextField label="Accent" />
      <Button variant="contained">Add</Button>

      <Paper>
        <Toolbar>
          <Typography>Board</Typography>
          <TextField label="Search" />
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"><Checkbox /></TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Primary</TableCell>
              <TableCell>Accent</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              b$.dataset.map((item: any) => (
                <TableRow hover role="checkbox" key={item.id}>
                  <TableCell padding="checkbox"><Checkbox /></TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.primary}</TableCell>
                  <TableCell>{item.accent}</TableCell>
                  <TableCell>
                    <IconButton><EditIcon /></IconButton>
                    <IconButton><DeleteIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default compose(
  withStyles(styles),
  connect(
    ({ crudOperations: { basic } }) => ({ b$: basic }),
    (dispatch: any) => ({ actions: bindActionCreators(actions, dispatch) }),
  ),
)(Basic);
