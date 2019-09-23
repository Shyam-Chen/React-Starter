import React from 'react';
import { nest } from 'recompose';

export default (...componentPropPairs) => {
  return nest.apply(
    this,
    componentPropPairs.map(([ComponentClass, props]) => ({ children }) =>
      // eslint-disable-next-line react/no-children-prop
      React.createElement(ComponentClass, { ...props, children }),
    ),
  );
};
