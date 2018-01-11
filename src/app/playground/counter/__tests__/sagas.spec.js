import { put } from 'redux-saga/effects';

import watchCounter, { resetAsync, watchResetIfOdd, resetIfEven, watchResetIfEven } from '../sagas';
import { reset } from '../actions';

describe('Counter', () => {
  describe('sagas', () => {
    it('should call resetAsync to get reset', () => {
      const generator = resetAsync();
      generator.next();
      const result = generator.next();
      expect(result.value).toEqual(put(reset()));
    });

    it('ok', () => {
      const watchCounterGen = watchCounter();
      expect(watchCounterGen.next()).toBeDefined();

      const watchResetIfOddGen = watchResetIfOdd();
      expect(watchResetIfOddGen.next()).toBeDefined();

      const resetIfEvenGen = resetIfEven();
      expect(resetIfEvenGen.next()).toBeDefined();

      const watchResetIfEvenGen = watchResetIfEven();
      expect(watchResetIfEvenGen.next()).toBeDefined();
    });
  });
});
