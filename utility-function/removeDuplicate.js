function removeDuplicate(head) {
  // var set1 = [... new Set(head)]  /// using set to remove duplicate values
  // console.log(set1)
  const obj = {};
  let arr = [];
  // eslint-disable-next-line no-restricted-syntax
  for (i in head) {
    obj[head[i]] = '';
  }
  arr = Object.keys(obj);
  return arr;
}

console.log(removeDuplicate([1, 1, 2]));
