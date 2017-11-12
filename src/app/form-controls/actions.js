import { SET_DATA, INPUT_DATA } from './constants';

export const setData = data => ({ type: SET_DATA, data });

export const inputChange = data => ({ type: INPUT_DATA, data });
