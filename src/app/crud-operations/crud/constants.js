export const INITIAL = {
  dataset: [
    { id: 1, primary: 'Vanilla', accent: 'MobX' },
    { id: 2, primary: 'Angular', accent: 'NgRx' },
    { id: 3, primary: 'React', accent: 'Redux' },
    { id: 4, primary: 'Vue', accent: 'Vuex' },
  ],
  addData: { primary: '', accent: '' },
  searchData: { primary: '', accent: '' },
  editData: { id: 0, primary: '', accent: '', dialog: false },
  deleteData: { id: 0, dialog: false },
};

export const ADD_ITEM = '[CRUD] ADD_ITEM';
export const SEARCH_ITEM = '[CRUD] SEARCH_ITEM';
export const EDIT_ITEM = '[CRUD] EDIT_ITEM';
export const DELETE_ITEM = '[CRUD] DELETE_ITEM';

export const SET_DATA = '[CRUD] SET_DATA';
