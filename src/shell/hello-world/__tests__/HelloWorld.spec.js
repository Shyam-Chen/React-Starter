import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import HelloWorld from '../HelloWorld';

import { INITIAL } from '../constants';
import reducer from '../reducer';

describe('HelloWorld', () => {
  it('should render an initial component', () => {
    const store = createStore(reducer, { helloWorld: { ...INITIAL } });
    const { container } = render(<Provider store={store}><HelloWorld /></Provider>);
    expect(container).toMatchSnapshot();
  });
});
