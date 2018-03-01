import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  INCREMENT, DECREMENT, RESET,
  DECREMENT_ASYNC, DECREMENT_IF_EVEN, DECREMENT_IF_ODD,
  RESET_ASYNC, RESET_IF_EVEN, RESET_IF_ODD,
} from '../constants';
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
      expect(actions.decrementIfOdd()).toEqual({ type: DECREMENT_IF_ODD });

      expect(actions.resetAsync()).toEqual({ type: RESET_ASYNC });
      expect(actions.resetIfEven()).toEqual({ type: RESET_IF_EVEN });
      expect(actions.resetIfOdd()).toEqual({ type: RESET_IF_ODD });
    });

    it('should create an action to handle the value', async () => {
      const store = await mockStore({ counter: { value: 0 } });
      const value = await store.dispatch(actions.incrementAsync());
      expect(value).toBeGreaterThan(0);
    });

    it('should create an action to handle the value', async () => {
      const store = await mockStore({ counter: { value: 0 } });
      const value = await store.dispatch(actions.incrementIfEven());
      expect(value).toEqual({ type: INCREMENT });
    });

    it('should create an action to handle the value', async () => {
      const store = await mockStore({ counter: { value: 1 } });
      const value = await store.dispatch(actions.incrementIfEven());
      expect(value).toBe(false);
    });

    it('should create an action to handle the value', async () => {
      const store = await mockStore({ counter: { value: 0 } });
      const value = await store.dispatch(actions.incrementIfOdd());
      expect(value).toBe(false);
    });

    it('should create an action to handle the value', async () => {
      const store = await mockStore({ counter: { value: 1 } });
      const value = await store.dispatch(actions.incrementIfOdd());
      expect(value).toEqual({ type: INCREMENT });
    });
  });
});
