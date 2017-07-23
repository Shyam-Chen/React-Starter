import { CREATE, READ, UPDATE, DELETE } from '../constants';

export default (state = [], action) => {
  const { type, data } = action;

  switch (type) {
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
