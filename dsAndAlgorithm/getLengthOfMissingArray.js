function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays.length === 0)
    return 0;
  const newArray = arrayOfArrays.map(length => Number(length.length));
  newArray.sort((a, b) => { return a - b; });
  for (let i = 0; i < arrayOfArrays.length - 1; i++) {
    if (arrayOfArrays[i].length + 1 !== arrayOfArrays[i + 1].length)
      return arrayOfArrays[i].length + 1;
  }
}
