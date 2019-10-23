import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { dynamic } from 'redux-dynamic-manager';
import styled from '@emotion/styled';

import reducer from './reducer';

const Title = styled('h1')`
  color: #222;
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
