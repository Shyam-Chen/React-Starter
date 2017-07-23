import axios from 'axios';

import { CREATE, READ, UPDATE, DELETE } from '../constants';

export const onCreate = () => ({ type: CREATE });
export const onRead = () => ({ type: READ });
export const onUpdate = () => ({ type: UPDATE });
export const onDelete = () => ({ type: DELETE });

export const onSearch = () =>
  dispatch =>
    axios.get('https://web-go-demo.herokuapp.com/__/list')
      .then(response => dispatch({ type: READ, data: response.data }));
