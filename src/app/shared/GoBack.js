import React from 'react';
import { Button } from 'material-ui';

const GoBack = () => (
  <div className="container">
    <Button raised href="javascript: history.back()">Go Back</Button>

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
