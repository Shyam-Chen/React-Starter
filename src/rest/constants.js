export const INITIAL = {
  dataset: [],
  addData: { text: '' },
  editData: {},
  deleteData: 0,
  searchData: { text: '' },
  deleteModalOpen: false,
  editModalOpen: false
};

export const API_LIST = 'https://web-go-demo.herokuapp.com/__/list';

export const SUCCESS = '[REST] SUCCESS';
export const FAILURE = '[REST] FAILURE';

export const SET_ADD = '[REST] SET_ADD';

export const SET_DELETE = '[REST] SET_DELETE';
export const DELETE_MODAL = '[REST] DELETE_MODAL';

export const SET_EDIT = '[REST] SET_EDIT';
export const EDIT_MODAL = '[REST] EDIT_MODAL';

export const SET_SEARCH = '[REST] SET_SEARCH';
