import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import Button from '../Button';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should render initial component', () => {
    const component = shallow(
      <Button />
    );

    expect(component).toMatchSnapshot();
  });
});
