import {
  ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SEARCH_ITEM,
  MODAL,
  SET_DELETE
} from '../constants';

const initial = {
  dataset: [
    { id: 3, primary: 'Angular', accent: 'Ngrx' },
    { id: 2, primary: 'React', accent: 'Redux' },
    { id: 1, primary: 'Vue', accent: 'Vuex' },
  ],
  addData: {},
  editData: {},
  deleteData: 0,
  searchData: {},
  modalOpen: false
};

export default (state = initial, action) => {
  const { type, id, primary, accent, modalOpen } = action;

  const searchResult = [];

  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        dataset: [
          {
            id: state.dataset.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
            primary,
            accent
          },
          ...state.dataset
        ]
      };
    case DELETE_ITEM:
      return {
        ...state,
        dataset: [...state.dataset.filter(item => item.id !== id)]
      };
    case EDIT_ITEM:
      return {
        ...state,
        dataset: [...state.dataset.map(item => item.id === id ? { ...item, primary, accent } : item)]
      };
    case SEARCH_ITEM:
      return {
        ...state,
        dataset: initial.dataset.filter(item => {
          const _primary = item.primary.toLowerCase().indexOf(primary.toLowerCase());
          const _accent = item.accent.toLowerCase().indexOf(accent.toLowerCase());

          if(_primary !== -1 && _accent !== -1) {
            return searchResult.push(item);
          }
        })
      }

    case MODAL:
      state.modalOpen = modalOpen
      return { ...state }

    case SET_DELETE:
      state.deleteData = id
      return { ...state }

    default:
      return state;
  }
}
