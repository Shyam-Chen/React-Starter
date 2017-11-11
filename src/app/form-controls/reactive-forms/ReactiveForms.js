import React from 'react';
import { connect } from 'react-redux';
import { Paper, Typography } from 'material-ui';

const ReactiveForms = () => {
  return (
    <div className="container">
      <Paper>
        <Typography type="title" gutterBottom style={{ padding: '1rem 1rem 0' }}>
          Reactive Forms
        </Typography>

        <form className="form">
          <div className="row">
            ...
          </div>
        </form>
      </Paper>

      <style jsx>{`
        .container{
          margin: 1rem 0;
        }

        .form {
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
