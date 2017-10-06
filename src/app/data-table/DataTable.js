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

      <Paper>
        <Toolbar>
          <div style={{ flex: '0 0 auto' }}>
            Nutrition
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
              <TableCell>Dessert</TableCell>
              <TableCell numeric>Measure</TableCell>
              <TableCell numeric>Grams</TableCell>
              <TableCell numeric>Calories</TableCell>
              <TableCell numeric>Protein</TableCell>
              <TableCell numeric>Carb.</TableCell>
              <TableCell numeric>Fiber</TableCell>
              <TableCell numeric>Fat</TableCell>
              <TableCell numeric>Sat. fat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              foodNutrients.map((item, index) => (
                <TableRow key={index} hover>
                  <TableCell padding="checkbox">
                    <Checkbox checked={false} />
                  </TableCell>
                  <TableCell>{item.dessert}</TableCell>
                  <TableCell numeric>{item.measure}</TableCell>
                  <TableCell numeric>{item.grams}</TableCell>
                  <TableCell numeric>{item.calories}</TableCell>
                  <TableCell numeric>{item.protein}</TableCell>
                  <TableCell numeric>{item.carb}</TableCell>
                  <TableCell numeric>{item.fiber}</TableCell>
                  <TableCell numeric>{item.fat}</TableCell>
                  <TableCell numeric>{item.satFat}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
          <TableFooter>
            <TablePagination
              count={foodNutrients.length}
              rowsPerPage={rowsPerPage}
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
