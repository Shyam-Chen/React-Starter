export const API_LIST = 'https://web-go-demo.herokuapp.com/__/list';

export const INITIAL = {
  dataset: [],

  addData: { text: '' },

  searchData: { text: '' },

  editData: {},
  editModalOpen: false,

  deleteData: 0,
  deleteModalOpen: false,

  loading: false
};

export const SUCCESS = '[REST] SUCCESS';
export const FAILURE = '[REST] FAILURE';

export const SET_ADD = '[REST] SET_ADD';

export const SET_DELETE = '[REST] SET_DELETE';
export const DELETE_MODAL = '[REST] DELETE_MODAL';

export const SET_EDIT = '[REST] SET_EDIT';
export const EDIT_MODAL = '[REST] EDIT_MODAL';

export const SET_SEARCH = '[REST] SET_SEARCH';

export const SET_DATA = '[REST] SET_DATA';
