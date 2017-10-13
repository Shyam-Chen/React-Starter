import { incrementAsync2 } from '../sagas';

describe('Counter', () => {
  describe('sagas', () => {
    const generator = incrementAsync2();

    it('should call get increment', () => {
      generator.next();
      const putResult = generator.next();
      expect(putResult).toMatchSnapshot();
    });
  });
});
