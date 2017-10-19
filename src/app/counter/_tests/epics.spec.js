import { ActionsObservable } from 'redux-observable';

import * as actions from '../actions';
import counterEpic, { decrementAsyncEpic, decrementIfEvenEpic } from '../epics';

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
  });
});
