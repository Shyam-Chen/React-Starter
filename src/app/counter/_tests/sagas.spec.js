import { put } from 'redux-saga/effects';

import { RESET } from '../constants';
import watchCounter, { resetAsync, watchResetIfOdd, resetIfEven, watchResetIfEven } from '../sagas';

describe('Counter', () => {
  describe('sagas', () => {
    it('should call resetAsync to get reset', () => {
      const generator = resetAsync();
      generator.next();
      const result = generator.next();
      expect(result.value).toEqual(put({ type: RESET }));

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
