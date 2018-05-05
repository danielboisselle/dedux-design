function updateAtPath(path, obj, callback) {
  if (typeof obj !== 'object') return obj;
  const newObj = Object.assign({}, obj);
  for (let key of Object.keys(obj)) {
    if (key.toUpperCase() === path) {
      newObj[key] = callback(obj[key]);
    } else {
      newObj[key] = updateAtPath(path, obj[key], callback);
    }
  }
  return newObj;
}
module.exports = updateAtPath;