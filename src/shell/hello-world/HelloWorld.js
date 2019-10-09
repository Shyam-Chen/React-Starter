import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { dynamic } from '~/core/store';

// import * as actions from './actions';
// import * as selectors from './selectors';
import reducer from './reducer';

const Title = styled('h1')`
  color: #222222;
`;

const HelloWorld = () => {
  const [world] = useState('World');
  const { hello } = useSelector(state => state.helloWorld);

  return (
    <div id="hello-world">
      <Title>{hello}, {world}!</Title>
    </div>
  );
};

export default dynamic('helloWorld', reducer)(HelloWorld);
