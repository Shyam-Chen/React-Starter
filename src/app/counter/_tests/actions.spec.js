import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { INCREMENT, DECREMENT, RESET, DECREMENT_ASYNC, DECREMENT_IF_EVEN, RESET_ASYNC, RESET_IF_ODD, RESET_IF_EVEN } from '../constants';
import * as actions from '../actions';

const mockStore = configureMockStore([thunk]);

describe('Counter', () => {
  describe('actions', () => {
    it('should create an action to handle the value', () => {
      expect(actions.increment()).toEqual({ type: INCREMENT });
      expect(actions.decrement()).toEqual({ type: DECREMENT });
      expect(actions.reset()).toEqual({ type: RESET });

      expect(actions.decrementAsync()).toEqual({ type: DECREMENT_ASYNC });
      expect(actions.decrementIfEven()).toEqual({ type: DECREMENT_IF_EVEN });

      expect(actions.resetAsync()).toEqual({ type: RESET_ASYNC });
      expect(actions.resetIfOdd()).toEqual({ type: RESET_IF_ODD });
      expect(actions.resetIfEven()).toEqual({ type: RESET_IF_EVEN });
    });

    it('should create an action to handle the value', async () => {
      const store = await mockStore({ counter: { value: 0 } });
      const value = await store.dispatch(actions.incrementAsync());
      expect(value).toBeGreaterThan(0);
    });

    it('should create an action to handle the value', async () => {
      const store = await mockStore({ counter: { value: 0 } });
      const value = await store.dispatch(actions.incrementIfOdd());
      expect(value).toBeUndefined();
    });

    it('should create an action to handle the value', async () => {
      const store = await mockStore({ counter: { value: 1 } });
      await store.dispatch(actions.incrementIfOdd());
      const value = await store.getState().counter.value;
      expect(value).toBeDefined();
    });
  });
});
