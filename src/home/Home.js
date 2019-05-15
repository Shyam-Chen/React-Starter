// @flow

import React from 'react';
import { compose } from 'recompose';

export const Home = (): React$Element<*> => (
  <div id="home">
    <h1>Oh My React</h1>
  </div>
);

export default compose()(Home);
