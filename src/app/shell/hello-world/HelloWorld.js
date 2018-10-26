// @flow

import React from 'react';
import { type HOC, compose } from 'recompose';

export const HelloWorld = (): React$Element<*> => (
  <div id="hello-world">
    <h1>Hello, World!</h1>
  </div>
);

export const enhance: HOC<*, {}> = compose();

export default enhance(HelloWorld);
