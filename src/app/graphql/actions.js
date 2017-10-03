import gql from 'graphql-tag';

import { CLIENT, SUCCESS, FAILURE, SET_DATA } from './constants';

export const success = data => ({ type: SUCCESS, data });
export const failure = error => ({ type: FAILURE, error });

export const searchItem = text =>
  dispatch =>
    CLIENT.query({
        query: text ? gql`{ list(text: "${text}") { _id text } }` : gql`{ list { _id text } }`
      })
      .then(response => dispatch(success(response.data)));

export const setData = data => ({ type: SET_DATA, data });
