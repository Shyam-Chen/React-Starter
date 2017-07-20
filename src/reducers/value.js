import { FOO_VALUE, BAR_VALUE } from '../constants';

const init = {
  foo: '',
  bar: ''
};

export default (state = init, action) => {
  const { type, foo, bar } = action;

  switch (type) {
    case FOO_VALUE:
      return { ...state, foo: foo };
    case BAR_VALUE:
      return { ...state, bar: bar };
    default:
      return state;
  }
}
