import { INITIAL } from '../constants';
import { total } from '../selectors';

describe('REST', () => {
  describe('selectors', () => {
    it('should be able to use total to get the value', () => {
      expect(total(INITIAL)).toEqual(0);
    });
  });
});
