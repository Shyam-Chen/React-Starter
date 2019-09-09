import React, { useState } from 'react';

import { dynamic } from '~/core/store';

// import * as actions from './actions';
// import * as selectors from './selectors';
import reducer from './reducer';

const HelloWorld = () => {
  const [word] = useState('World');

  return (
    <div id="hello-world">
      <h1>Hello, {word}!</h1>
    </div>
  );
};

export default dynamic('helloWorld', reducer)(HelloWorld);
