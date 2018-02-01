import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { _Navigation } from '../Navigation';

configure({ adapter: new Adapter() });

describe('Navigation', () => {
  it('should render initial component', () => {
    const component = shallow(
      <_Navigation />
    );

    expect(component).toMatchSnapshot();
  });
});
