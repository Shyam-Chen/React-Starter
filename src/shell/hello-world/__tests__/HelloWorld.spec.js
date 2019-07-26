import React from 'react';
import { render } from '@testing-library/react';

import HelloWorld from '../HelloWorld';

describe('HelloWorld', () => {
  it('should render an initial component', () => {
    const { container } = render(<HelloWorld />);
    expect(container).toMatchSnapshot();
  });
});
