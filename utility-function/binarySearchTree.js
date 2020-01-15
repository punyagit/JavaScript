function binarySearchTree(arr, val) {
  const { length } = arr; // variable name is length can get you the same value as array.length
  const value = Math.floor(length / 2);

  if (length < 2 && arr[0] === val) {
    return true;
  }
  if (length < 2 && arr[0] !== val) {
    return false;
  }
  if (arr[value - 1] === val) {
    return 'in the middle';
  }
  if (arr[value - 1] < val) {
    return binarySearchTree(arr.slice(value, length), val);
  }
  return binarySearchTree(arr.slice(0, value), val);
}

// prettier-ignore
binarySearchTree([1, 3, 4, 6, 7, 9, 11, 21, 23, 25, 27, 29, 31, 36], 6);
