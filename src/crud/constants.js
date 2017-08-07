export const INITIAL = {
  dataset: [
    { id: 4, primary: 'Vanilla', accent: 'Cordova' },
    { id: 3, primary: 'Angular', accent: 'Ionic' },
    { id: 2, primary: 'React', accent: 'React Native' },
    { id: 1, primary: 'Vue', accent: 'Weex' }
  ],
  addData: { primary: '', accent: '' },
  editData: {},
  deleteData: 0,
  searchData: { primary: '', accent: '' },
  deleteModalOpen: false,
  editModalOpen: false
};

export const ADD_ITEM = '[CRUD] ADD_ITEM';
export const SET_ADD = '[CRUD] SET_ADD';

export const SEARCH_ITEM = '[CRUD] SEARCH_ITEM';
export const SET_SEARCH = '[CRUD] SET_SEARCH';

export const EDIT_ITEM = '[CRUD] EDIT_ITEM';
export const EDIT_MODAL = '[CRUD] EDIT_MODAL';
export const SET_EDIT = '[CRUD] SET_EDIT';

export const DELETE_ITEM = '[CRUD] DELETE_ITEM';
export const DELETE_MODAL = '[CRUD] DELETE_MODAL';
export const SET_DELETE = '[CRUD] SET_DELETE';
