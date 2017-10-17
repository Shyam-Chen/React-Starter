import * as actions from '../actions';

describe('Counter', () => {
  describe('actions', () => {
    it('should create an action to handle the value', () => {
      expect(actions.increment()).toMatchSnapshot();
      expect(actions.decrement()).toMatchSnapshot();
      expect(actions.reset()).toMatchSnapshot();
    });
  });
});
