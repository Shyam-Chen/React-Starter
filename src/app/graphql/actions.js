import gql from 'graphql-tag';

import { CLIENT, SUCCESS, FAILURE, SET_DATA } from './constants';

export const success = data => ({ type: SUCCESS, data });
export const failure = error => ({ type: FAILURE, error });

export const addItem = text =>
  dispatch =>
    CLIENT.mutate({
      mutation: gql`
        mutation {
          addText(text: "${text}") { _id text }
        }
      `
  })
  .then(() => dispatch(searchItem()))
  .catch(error => dispatch(failure(error)));

export const searchItem = text =>
  dispatch =>
    CLIENT.query({
        query: text
          ? gql`
              query {
                list(text: "${text}") { _id text }
              }
            `
          : gql`
              query {
                list { _id text }
              }
            `
      })
      .then(response => dispatch(success(response.data)))
      .then(() => dispatch(setData({ loading: false })))
      .catch(error => dispatch(failure(error)));

export const editItem = (id, text) =>
  dispatch =>
    CLIENT.mutate({
      mutation: gql`
        mutation {
          updateText(_id: "${id}", text: "${text}") { _id text }
        }
      `
  })
  .then(() => dispatch(searchItem()))
  .catch(error => dispatch(failure(error)));

export const deleteItem = id =>
  dispatch =>
    CLIENT.mutate({
      mutation: gql`
        mutation {
          deleteText(_id: "${id}") { _id text }
        }
      `
  })
  .then(() => dispatch(searchItem()))
  .catch(error => dispatch(failure(error)));

export const setData = data => ({ type: SET_DATA, data });
