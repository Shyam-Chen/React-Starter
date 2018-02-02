export const bindSelectCreators = (selectors, state) => {
  const obj = {};
  const keys = Object.keys(selectors);

  for (let i = 0, l = keys.length; i < l; i++) {
    obj[keys[i]] = selectors[keys[i]](state);
  }

  return obj;
};
