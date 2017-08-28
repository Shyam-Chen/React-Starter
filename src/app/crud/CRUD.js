import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, Table, Button } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import GoBack from '~/shared/GoBack';

import * as actions from './actions';
import { Add, Search, Edit, Delete } from './containers';

const CRUD = ({ crud, actions }) => (
  <div className="container">
    <Search />
    <Add />

    <div className="table">
      <Paper elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              crud.dataset.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.primary} - {item.accent}</TableCell>
                  <TableCell>
                    <Button color="accent" onClick={() => {
                      actions.onDeleteModal(true);
                      actions.onSetDelete(item.id);
                    }}>
                      Delete
                    </Button>
                    <Button color="primary" onClick={() => {
                      actions.onEditModal(true);
                      actions.onSetEdit(item.id, item.primary, item.accent);
                    }}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    </div>

    <aside>
      <Delete />
      <Edit />
    </aside>

    <GoBack />

    <style jsx>{`
      .container {
        padding: 1rem;
      }

      .table {
        max-width: 30rem;
        margin: .5rem 0;
      }
    `}</style>
  </div>
);

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(CRUD);
