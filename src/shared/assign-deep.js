/* eslint-disable no-restricted-syntax */
const isObject = item => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

const assignDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        assignDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return assignDeep(target, ...sources);
};

export default assignDeep;
