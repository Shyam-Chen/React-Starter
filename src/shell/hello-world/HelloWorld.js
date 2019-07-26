import React, { useState } from 'react';

const HelloWorld = () => {
  const [word] = useState('World');

  return (
    <div id="hello-world">
      <h1>Hello, {word}!</h1>
    </div>
  );
};

export default HelloWorld;
