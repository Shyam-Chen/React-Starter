import React from 'react';
import { Button } from 'material-ui';

const GoBack = ({ history }) => (
  <div className="container">
    <Button raised href="/" onClick={() => history.push('/')}>Go Back</Button>

    <style jsx>{`
      .container {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
      }
    `}</style>
  </div>
);

export default GoBack;
