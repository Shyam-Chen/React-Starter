import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { INITIAL } from '../constants';
import * as actions from '../actions';
import { Counter } from '../Counter';

configure({ adapter: new Adapter() });

describe('Counter', () => {
  it('should render initial component', () => {
    const component = shallow(
      <Counter counter={INITIAL} actions={actions} />
    );

    expect(component).toBeDefined();
  });
});
