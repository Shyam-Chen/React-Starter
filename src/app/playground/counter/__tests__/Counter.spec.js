import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Counter, mapStateToProps, mapDispatchToProps } from '../Counter';
import { INITIAL } from '../constants';
import * as actions from '../actions';
import * as selectors from '../selectors';

configure({ adapter: new Adapter() });

describe('Counter', () => {
  it('should render initial component', () => {
    const component = shallow(
      <Counter counter={INITIAL} actions={actions} selectors={selectors} />
    );

    expect(component).toMatchSnapshot();
  });

  it('should handle mapStateToProps', () => {
    const state = { counter: INITIAL };
    expect(mapStateToProps(state)).toMatchSnapshot();
  });

  it('should handle mapDispatchToProps', () => {
    expect(mapDispatchToProps(jest.fn())).toMatchSnapshot();
  });
});
