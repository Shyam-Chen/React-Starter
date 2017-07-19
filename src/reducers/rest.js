import { ADD_ITEM, GET_LIST, EDIT_ITEM, DELETE_ITEM, SEARCH_ITEM } from '../constants';

const init = [
  { id: 1, foo: 'Angular', bar: 'Ngrx' },
  { id: 2, foo: 'React', bar: 'Redux' },
  { id: 3, foo: 'Vue', bar: 'Vuex' },
];

export default (state = init, action) => {
  const { type, id, foo, bar } = action;

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
    case GET_LIST:
      console.log(state);
      return [...init];
    case EDIT_ITEM:
      return state.map(item => item.id === id ? { ...item, foo, bar } : item);
    case DELETE_ITEM:
      return state.filter(item => item.id !== id);
    case SEARCH_ITEM:
      return state.filter((item) => {
        const _foo = item.foo.toLowerCase().indexOf(foo.toLowerCase());
        const _bar = item.bar.toLowerCase().indexOf(bar.toLowerCase());

        console.log(_foo, _bar);

        if(_foo !== -1 && _bar !== -1) {
          console.log(item);
          return state.push(item);
        }
      })
    default:
      return state;
  }
}
