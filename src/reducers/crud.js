import {
  ADD_ITEM, SET_ADD,
  SEARCH_ITEM, SET_SEARCH,
  DELETE_ITEM, DELETE_MODAL, SET_DELETE,
  EDIT_ITEM, EDIT_MODAL, SET_EDIT,
} from '../constants';

const initial = {
  dataset: [
    { id: 3, primary: 'Angular', accent: 'Ionic' },
    { id: 2, primary: 'React', accent: 'React Native' },
    { id: 1, primary: 'Vue', accent: 'Weex' },
  ],
  addData: { primary: '', accent: '' },
  editData: {},
  deleteData: 0,
  searchData: { primary: '', accent: '' },
  deleteModalOpen: false,
  editModalOpen: false
};

export default (state = initial, action) => {
  const {
    type,
    id, primary, accent,
    deleteModalOpen, editModalOpen
  } = action;

  const searchResult = [];

  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        dataset: [
          {
            id: state.dataset.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
            primary, accent
          },
          ...state.dataset
        ]
      };
    case SET_ADD:
      return { ...state, addData: { ...state.addData, primary, accent } };

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
      };
    case SET_SEARCH:
      return { ...state, searchData: { ...state.searchData, primary, accent } };

    case EDIT_ITEM:
      return {
        ...state,
        dataset: [...state.dataset.map(item => item.id === id ? { ...item, primary, accent } : item)]
      };
    case SET_EDIT:
      return { ...state, editData: { ...state.editData, id, primary, accent } };
    case EDIT_MODAL:
      return { ...state, editModalOpen };

    case DELETE_ITEM:
      return { ...state, dataset: [...state.dataset.filter(item => item.id !== id)] };
    case SET_DELETE:
      return { ...state, deleteData: id };
    case DELETE_MODAL:
      return { ...state, deleteModalOpen };

    default:
      return state;
  }
}
