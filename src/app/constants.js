export const API_LIST = `${process.env.API_URL}/__/list`;

export const INITIAL = {
  value: '',
  suggestions: [],
  touched: false,
  loading: false
};

export const MEMOIZE = app => app;

export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const SEARCH_ITEM_EPIC = 'SEARCH_ITEM_EPIC';

export const SET_DATA = 'SET_DATA';
