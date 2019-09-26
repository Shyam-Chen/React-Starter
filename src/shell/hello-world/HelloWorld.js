import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { dynamic } from '~/core/store';

// import * as actions from './actions';
// import * as selectors from './selectors';
import reducer from './reducer';

const HelloWorld = () => {
  const [world] = useState('World');
  const { hello } = useSelector(state => state.helloWorld);

  return (
    <div id="hello-world">
      <h1>{hello}, {world}!</h1>
    </div>
  );
};

export default dynamic('helloWorld', reducer)(HelloWorld);
