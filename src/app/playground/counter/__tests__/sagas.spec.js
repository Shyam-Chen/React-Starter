import { put } from 'redux-saga/effects';

import watchCounter, { resetAsync, watchResetAsync, resetIfEven, watchResetIfEven, resetIfOdd, watchResetIfOdd } from '../sagas';
import { reset } from '../actions';

describe('Counter', () => {
  describe('sagas', () => {
    it('should call resetAsync to get reset', () => {
      const generator = resetAsync();
      generator.next();
      const result = generator.next();
      expect(result.value).toEqual(put(reset()));

      const watchGenerator = watchResetAsync();
      expect(watchGenerator.next()).toBeDefined();
    });

    it('ok', () => {
      const watchCounterGen = watchCounter();
      expect(watchCounterGen.next()).toBeDefined();

      const resetIfEvenGen = resetIfEven();
      expect(resetIfEvenGen.next()).toBeDefined();

      const watchResetIfEvenGen = watchResetIfEven();
      expect(watchResetIfEvenGen.next()).toBeDefined();

      const resetIfOddGen = resetIfOdd();
      expect(resetIfOddGen.next()).toBeDefined();

      const watchResetIfOddGen = watchResetIfOdd();
      expect(watchResetIfOddGen.next()).toBeDefined();
    });
  });
});
