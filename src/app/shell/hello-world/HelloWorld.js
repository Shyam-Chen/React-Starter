// @flow

import React from 'react';
import { compose } from 'recompose';

export const HelloWorld = (): React$Element<*> => (
  <div id="hello-world">
    <h1>Hello, World!</h1>
  </div>
);

export default compose()(HelloWorld);
