import { INITIAL } from '../constants';
import { evenOrOdd } from '../selectors';

describe('Counter', () => {
  describe('selectors', () => {
    it('should be able to use evenOrOdd to determine the value', () => {
      expect(evenOrOdd(INITIAL)).toEqual('even');
      expect(evenOrOdd({ value: 1 })).toEqual('odd');
      expect(evenOrOdd({ value: 2 })).toEqual('even');
    });
  });
});
