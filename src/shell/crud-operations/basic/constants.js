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
  viewData: {},
  deleteData: {},

  dialogs: {
    add: false,
    edit: false,
    view: false,
    delete: false,
  },
};

export const ADD_ITEM = '[crudOperations/basic] ADD_ITEM';
export const EDIT_ITEM = '[crudOperations/basic] EDIT_ITEM';
export const DELETE_ITEM = '[crudOperations/basic] DELETE_ITEM';

export const SET_DATA = '[crudOperations/basic] SET_DATA';
