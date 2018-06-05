import { INITIAL, SUCCESS, FAILURE, SET_DATA } from '../constants';
import reducer from '../reducer';

describe('REST', () => {
  describe('reducer', () => {
    it('should handle SUCCESS', () => {
      const data = ['foo', 'bar', 'baz'];
      const next = reducer(INITIAL, { type: SUCCESS, payload: { data } });
      expect(next.dataset).toEqual(['baz', 'bar', 'foo']);
    });

    it('should handle FAILURE', () => {
      const next = reducer(INITIAL, { type: FAILURE, error: 'Error!' });
      expect(next.error).toEqual('Error!');
    });

    it('should handle SET_DATA', () => {
      const next = reducer(INITIAL, { type: SET_DATA, data: { loading: true } });
      expect(next.loading).toEqual(true);
    });
  });
});
