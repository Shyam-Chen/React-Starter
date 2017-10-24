import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, Toolbar, IconButton, Icon, Table, Checkbox } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination } from 'material-ui/Table';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';

const DataTable = ({ dataTable: { foodNutrients, rowsPerPage, page } }) => {

  return (
    <div className="container">
      <Navigation />

      <div>Work in Progress</div>

      <Paper style={{ maxWidth: '45rem' }}>
        <Toolbar>
          <div style={{ flex: '0 0 auto' }}>
            Personnel information
          </div>
          <div style={{ flex: '1 1 100%' }}></div>
          <div>
            <IconButton aria-label="Filter List">
              <Icon>filter_list</Icon>
            </IconButton>
          </div>
          <div>
            <IconButton aria-label="Filter List">
              <Icon>more_vert</Icon>
            </IconButton>
          </div>
        </Toolbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  // checked={numSelected === rowCount}
                  // onChange={onSelectAllClick}
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell numeric>Name</TableCell>
              <TableCell numeric>Symbol</TableCell>
              <TableCell numeric>Color</TableCell>
              <TableCell numeric>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              foodNutrients.map((item, index) => (
                <TableRow key={index} hover>
                  <TableCell padding="checkbox">
                    <Checkbox checked={false} />
                  </TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell numeric>{item.name}</TableCell>
                  <TableCell numeric>{item.symbol}</TableCell>
                  <TableCell numeric>{item.color}</TableCell>
                  <TableCell numeric>{item.progress}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
          <TableFooter>
            <TablePagination
              count={foodNutrients.length}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 20]}
              page={page}
              // onChangePage={handleChangePage}
              // onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </Paper>

      <style jsx>{`
        .container {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ dataTable }) => ({ dataTable }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(DataTable);
