import {
  FOO_ADD_VALUE, BAR_ADD_VALUE,
  FOO_SEARCH_VALUE, BAR_SEARCH_VALUE
} from '../constants';

const init = {
  addValue: { foo: '', bar: '' },
  searchValue: { foo: '', bar: '' }
};

export default (state = init, action) => {
  const { type, foo, bar } = action;

  switch (type) {
    case FOO_ADD_VALUE:
      return { ...state, addValue: { ...state.addValue, foo } };
    case BAR_ADD_VALUE:
      return { ...state, addValue: { ...state.addValue, bar } };
    case FOO_SEARCH_VALUE:
      return { ...state, searchValue: { ...state.searchValue, foo } };
    case BAR_SEARCH_VALUE:
      return { ...state, searchValue: { ...state.searchValue, bar } };
    default:
      return state;
  }
}
