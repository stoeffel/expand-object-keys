export function expandObjectKeys (obj) {
  if (obj == null) throw new TypeError('expandObjectKeys cannot be called with null or undefined');

  const expand = (newObj, key, idx, keys) => {
    var [head, ...rest] = key.split('.');

    return {
      ...newObj,
      [head]: rest.length <= 0 ?
        obj[keys[idx]] :
        expand(newObj[head] || {}, rest.join('.'), idx, keys)
    };
  };

  return Object
    .keys(obj)
    .reduce(expand, {});
};

