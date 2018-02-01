import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NotFound from '../NotFound';

configure({ adapter: new Adapter() });

describe('NotFound', () => {
  it('should render initial component', () => {
    const component = shallow(
      <NotFound />
    );

    expect(component).toMatchSnapshot();
  });
});
