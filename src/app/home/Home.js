// @flow

import React from 'react';
import { compose } from 'recompose';

import SoftFilerList from './SoftFilerList';

export const Home = (): React$Element<*> => (
  <div className="home">
    <h1>Oh My React</h1>

    <SoftFilerList />

    <style jsx>{`
      .home {}
    `}</style>
  </div>
);

export default compose()(Home);
