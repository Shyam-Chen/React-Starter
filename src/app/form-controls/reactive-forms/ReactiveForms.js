import React from 'react';
import { connect } from 'react-redux';
import { Paper, Typography } from 'material-ui';

const ReactiveForms = () => {
  return (
    <div>
      <Paper>
        <Typography type="title" gutterBottom style={{ padding: '1rem 1rem 0' }}>
          Reactive Forms
        </Typography>

      </Paper>
    </div>
  );
};

export default connect()(ReactiveForms);
