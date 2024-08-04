export const renameKeys = function (obj) {
  const keyValues = Object.keys(obj).map((key) => {
    const index = key.indexOf("_");
    const newKey =
      index > 1
        ? `${key.slice(0, index)}${key
            .slice(index + 1)[0]
            .toUpperCase()}${key.slice(index + 2)}`
        : key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};
