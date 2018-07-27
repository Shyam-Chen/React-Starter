export const INITIAL = {
  searchData: '',
  selected: [],

  dataset: [
    { id: 1, primary: 'Vanilla', accent: 'MobX' },
    { id: 2, primary: 'Angular', accent: 'NGXS' },
    { id: 3, primary: 'React', accent: 'Redux' },
    { id: 4, primary: 'Vue', accent: 'Vuex' },
  ],

  addData: {},
  editData: {},
  deleteData: {},

  dialogs: {
    edit: false,
    delete: false,
  },
};

export const ADD_ITEM = '[crud-operations/basic] ADD_ITEM';
export const EDIT_ITEM = '[crud-operations/basic] EDIT_ITEM';
export const DELETE_ITEM = '[crud-operations/basic] DELETE_ITEM';

export const SET_DATA = '[crud-operations/basic] SET_DATA';
