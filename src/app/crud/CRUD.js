import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, Table } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Navigation from '~/shared/Navigation';
import Button from '~/shared/Button';

import * as actions from './actions';
import { Add, Search, Edit, Delete } from './containers';

const CRUD = ({ crud, actions }) => {
  const { dataset, deleteData, editData } = crud;

  return (
    <div className="container">
      <Navigation />

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
                dataset.length
                  ? dataset.map(({ id, primary, accent }) => (
                      <TableRow key={id} hover>
                        <TableCell>{primary} - {accent}</TableCell>
                        <TableCell>
                          <Button
                            color="red"
                            onClick={() =>
                              actions.setData({
                                deleteData: { ...deleteData, id, dialog: true }
                              })
                            }
                          >
                            Delete
                          </Button>
                          <Button
                            color="indigo"
                            onClick={() => {
                              actions.setData({
                                editData: { ...editData, id, primary, accent, dialog: true }
                              });
                            }}
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : <TableRow>
                      <TableCell colSpan="2">No data available</TableCell>
                    </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
      </div>

      <aside>
        <Delete />
        <Edit />
      </aside>

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
};

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(CRUD);
