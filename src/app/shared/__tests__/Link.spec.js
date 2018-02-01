import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Link from '../Link';

configure({ adapter: new Adapter() });

describe('Link', () => {
  it('should render initial component', () => {
    const component = shallow(
      <Link to="" />
    );

    expect(component).toMatchSnapshot();
  });
});
