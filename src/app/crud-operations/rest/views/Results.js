import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, Toolbar, Table } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Button from '~/shared/Button';

import * as actions from '../actions';
import { total } from '../selectors';

const Results = ({ rest, total, actions }) => {
  const { dataset, deleteData, editData } = rest;

  return (
    <div>
      <div className="table">
        <Paper elevation={2}>
          <Toolbar>
            <div style={{ flex: '0 0 auto' }}>
              Total: {total}
            </div>
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Text</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                dataset.length
                  ? (
                    dataset.map(({ _id, text }) => (
                      <TableRow key={_id} hover>
                        <TableCell>{text}</TableCell>
                        <TableCell>
                          <Button
                            color="red"
                            onClick={() =>
                              actions.setData({
                                deleteData: { ...deleteData, _id, dialog: true }
                              })
                            }
                          >
                            Delete
                          </Button>
                          <Button
                            color="indigo"
                            onClick={() => {
                              actions.setData({
                                editData: { ...editData, _id, text, dialog: true }
                              });
                            }}
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )
                  : (
                    <TableRow>
                      <TableCell colSpan="2">No data available</TableCell>
                    </TableRow>
                  )
              }
            </TableBody>
          </Table>
        </Paper>
      </div>

      <style jsx>{`
        .table {
          max-width: 35rem;
          margin: .5rem 0;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ rest }) => ({ rest, total: total(rest) }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Results);
