import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Navigation, mapStateToProps, mapDispatchToProps } from '../Navigation';

configure({ adapter: new Adapter() });

describe('Navigation', () => {
  it('should render initial component', () => {
    const component = shallow(
      <Navigation />
    );

    expect(component).toMatchSnapshot();
  });

  it('should handle mapStateToProps', () => {
    const state = { router: jest.fn() };
    expect(mapStateToProps(state)).toMatchSnapshot();
  });

  it('should handle mapDispatchToProps', () => {
    expect(mapDispatchToProps(jest.fn())).toMatchSnapshot();
  });
});
