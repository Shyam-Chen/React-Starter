import { SUCCESS, FAILURE, CREATE, READ, UPDATE, DELETE } from '../constants';

export default (state = [], action) => {
  const { type, data, error } = action;

  switch (type) {
    case SUCCESS:
      return [...data];
    case FAILURE:
      return error;
    case CREATE:
      return;
    case READ:
      return [...data];
    case UPDATE:
      return;
    case DELETE:
      return;
    default:
      return state;
  }
}
