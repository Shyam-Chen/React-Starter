import { resetAsync } from '../sagas';

describe('Counter', () => {
  describe('sagas', () => {
    it('should call get reset', () => {
      const generator = resetAsync();
      generator.next();
      const putResult = generator.next();
      expect(putResult).toMatchSnapshot();
    });
  });
});
