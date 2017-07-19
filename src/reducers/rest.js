import { ADD_ITEM, GET_LIST, EDIT_ITEM, DELETE_ITEM } from '../constants';

const init = [
  { id: 1, foo: 'Angular', bar: 'Ngrx' },
  { id: 2, foo: 'React', bar: 'Redux' },
  { id: 3, foo: 'Vue', bar: 'Vuex' },
];

export default (state = init, action) => {
  const { type, foo, bar } = action;

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
      return [...state];
    case EDIT_ITEM:
      return state;
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}
