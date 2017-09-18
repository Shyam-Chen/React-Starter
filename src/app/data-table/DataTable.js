import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paper, Table } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';

const DataTable = () => {
  let id = 0;
  const createData = (name, calories, fat, carbs, protein) => {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  };

  const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="container">
      <Navigation />

      <p>TODO: API</p>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell numeric>Calories</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
              <TableCell numeric>Carbs (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map(item => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.name}</TableCell>
                  <TableCell numeric>{item.calories}</TableCell>
                  <TableCell numeric>{item.fat}</TableCell>
                  <TableCell numeric>{item.carbs}</TableCell>
                  <TableCell numeric>{item.protein}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
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
