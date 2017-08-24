export const GRAPHQL_URI = 'https://web-go-demo.herokuapp.com/__/graphql';

export const INITIAL = {
  dataset: [],

  addData: { text: '' },

  searchData: { text: '' },

  editData: {},
  editModalOpen: false,

  deleteData: 0,
  deleteModalOpen: false
};

export const SUCCESS = '[GraphQL] SUCCESS';
export const FAILURE = '[GraphQL] FAILURE';

export const SET_ADD = '[GraphQL] SET_ADD';

export const SET_DELETE = '[GraphQL] SET_DELETE';
export const DELETE_MODAL = '[GraphQL] DELETE_MODAL';

export const SET_EDIT = '[GraphQL] SET_EDIT';
export const EDIT_MODAL = '[GraphQL] EDIT_MODAL';

export const SET_SEARCH = '[GraphQL] SET_SEARCH';
