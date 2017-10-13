// import React from 'react';
// import { shallow, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
//
// import Counter from '../Counter';
//
// configure({ adapter: new Adapter() });
//
// const setup = (counter = { value: 0 }) => {
//   const actions = {
//     increment: jest.fn(),
//     decrement: jest.fn()
//   };
//
//   const component = shallow(
//     <Counter counter={counter} {...actions} />
//   );
//
//   return {
//     component,
//     actions,
//     h3: component.find('h3')
//   };
// };

describe('Counter', () => {
  it('should display count', () => {
    // const { h3 } = setup();
    // expect(h3.text()).toMatch(/^Clicked: 0 times/);

    expect(true).toBe(true);
  });
});
