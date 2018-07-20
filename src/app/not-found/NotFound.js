// @flow

import React from 'react';
import { compose } from 'recompose';

export const NotFound = (): React$Element<*> => (
  <div>
    <h1>404</h1>
  </div>
);

export default compose()(NotFound);
