import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SEARCH_ITEM } from '../constants';

const initial = [
  { id: 1, primary: 'Angular', accent: 'Ngrx' },
  { id: 2, primary: 'React', accent: 'Redux' },
  { id: 3, primary: 'Vue', accent: 'Vuex' },
];

export default (state = initial, action) => {
  const { type, id, primary, accent } = action;

  const searchResult = [];

  switch (type) {
    case ADD_ITEM:
      return [
        {
          id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          primary,
          accent
        },
        ...state
      ];
    case DELETE_ITEM:
      return [...state.filter(item => item.id !== id)];
    case EDIT_ITEM:
      return [...state.map(item => item.id === id ? { ...item, primary, accent } : item)];
    case SEARCH_ITEM:
      return initial.filter(item => {
        const _primary = item.primary.toLowerCase().indexOf(primary.toLowerCase());
        const _accent = item.accent.toLowerCase().indexOf(accent.toLowerCase());

        if(_primary !== -1 && _accent !== -1) {
          return searchResult.push(item);
        }
      });
    default:
      return state;
  }
}
