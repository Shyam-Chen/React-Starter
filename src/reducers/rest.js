import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SEARCH_ITEM } from '../constants';

const init = [
  { id: 1, foo: 'Angular', bar: 'Ngrx' },
  { id: 2, foo: 'React', bar: 'Redux' },
  { id: 3, foo: 'Vue', bar: 'Vuex' },
];

export default (state = init, action) => {
  const { type, id, foo, bar } = action;

  const searchResult = [];

  switch (type) {
    case ADD_ITEM:
      return [
        {
          id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          foo,
          bar
        },
        ...state
      ];
    case EDIT_ITEM:
      return state.map(item => item.id === id ? { ...item, foo, bar } : item);
    case DELETE_ITEM:
      return state.filter(item => item.id !== id);
    case SEARCH_ITEM:
      return init.filter((item) => {
        const _foo = item.foo.toLowerCase().indexOf(foo.toLowerCase());
        const _bar = item.bar.toLowerCase().indexOf(bar.toLowerCase());

        if(_foo !== -1 && _bar !== -1) {
          return searchResult.push(item);
        }
      })
    default:
      return state;
  }
}
