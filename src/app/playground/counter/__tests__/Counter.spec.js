import React from 'react';
import { shallow } from 'enzyme';

import { Counter, mapStateToProps, mapDispatchToProps } from '../Counter';
import { INITIAL } from '../constants';
import * as actions from '../actions';
import * as selectors from '../selectors';

describe('Counter', () => {
  it('should render initial component', () => {
    const component = shallow(
      <Counter counter={INITIAL} actions={actions} selectors={selectors} />,
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
