import { put } from 'redux-saga/effects';

import { RESET } from '../constants';
import { resetAsync } from '../sagas';

describe('Counter', () => {
  describe('sagas', () => {
    it('should call resetAsync to get reset', () => {
      const generator = resetAsync();
      generator.next();
      const result = generator.next();
      expect(result.value).toEqual(put({ type: RESET }));
    });
  });
});
