import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, Toolbar, Table } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { CircularProgress } from 'material-ui/Progress';

import Navigation from '~/shared/Navigation';
import Button from '~/shared/Button';

import * as actions from './actions';
import { total } from './selectors';
import { Add, Search, Edit, Delete } from './containers';

const REST = ({ rest, total, actions }) => {
  const { dataset, deleteData, editData, loading, /* initial */ } = rest;

  // if (!initial) {
  //   actions.setData({ loading: true, initial: true });
  //   actions.searchItem();
  // }

  return (
    <div className="container">
      <Navigation />

      <Search />
      <Add />

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
                  ? dataset.map(({ _id, text }) => (
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

        <div className="progress" style={{ display: loading ? '' : 'none' }}>
          <CircularProgress />
        </div>
      </aside>

      <style jsx>{`
        .container {
          padding: 1rem;
        }

        .table {
          max-width: 30rem;
          margin: .5rem 0;
        }

        .progress {
          position: absolute;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(225, 225, 255, .7);
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1111;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ rest }) => ({ rest, total: total(rest) }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(REST);
