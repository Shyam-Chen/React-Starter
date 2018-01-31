import { ActionsObservable } from 'redux-observable';

import * as actions from '../actions';
import counterEpic, { decrementAsyncEpic, decrementIfEvenEpic, decrementIfOddEpic, startCountEpic, cancelCountEpic } from '../epics';

describe('Counter', () => {
  describe('epics', () => {
    it('should call get counterEpic', () => {
      expect(counterEpic).toBeDefined();
    });

    it('should call get decrementAsyncEpic', () => {
      const observable = new ActionsObservable(actions);
      expect(decrementAsyncEpic(observable)).toBeDefined();
    });

    it('should call get decrementIfEvenEpic', () => {
      const observable = new ActionsObservable(actions);
      expect(decrementIfEvenEpic(observable)).toBeDefined();
    });

    it('should call get decrementIfOddEpic', () => {
      const observable = new ActionsObservable(actions);
      expect(decrementIfOddEpic(observable)).toBeDefined();
    });

    it('should call get startCountEpic', () => {
      const observable = new ActionsObservable(actions);
      expect(startCountEpic(observable)).toBeDefined();
    });

    it('should call get cancelCountEpic', () => {
      const observable = new ActionsObservable(actions);
      expect(cancelCountEpic(observable)).toBeDefined();
    });
  });
});
