export const validate = ({ name }) => {
  const errors = {};

  // input
  if (!name) {
    errors.name = 'Required';
  } else if (name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  return errors;
};
