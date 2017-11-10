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

        <form className="container">
          <div className="row">
            ...
          </div>
        </form>
      </Paper>

      <style jsx>{`
        .container {
          padding: .5rem 1rem;
        }

        .row {
          padding: .66rem;
          display: flex;
          flex-direction: row;
        }

        .outputs {
          align-self: flex-end;
          margin: 0 0 .5rem .5rem;
          color: #3F51B5;
        }
      `}</style>
    </div>
  );
};

export default connect()(ReactiveForms);
