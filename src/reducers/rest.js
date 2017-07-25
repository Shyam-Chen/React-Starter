import { SUCCESS, FAILURE } from '../constants';

export default (state = [], action) => {
  const { type, data, error } = action;

  switch (type) {
    case SUCCESS:
      return [...data].reverse();
    case FAILURE:
      console.error(error);
      return state;
    default:
      return state;
  }
}
