import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, Typography } from 'material-ui';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';
import { Static } from './static';

const DataTable = () => {

  return (
    <div className="container">
      <Navigation />

      <div className="block">
        <Typography type="title">
          Static
        </Typography>

        <Paper>
          <Static />
        </Paper>
      </div>

      <div className="block">
        <Typography type="title">
          REST
        </Typography>

        <Paper>
          TODO
        </Paper>
      </div>

      <div className="block">
        <Typography type="title">
          GraphQL
        </Typography>

        <Paper>
          TODO
        </Paper>
      </div>

      <style jsx>{`
        .container {
          padding: 0 1rem;
        }

        .block {
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ dataTable }) => ({ dataTable }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(DataTable);
