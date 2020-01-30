function whatIsInAName(collection, source) {
  // What's in a name?
  var newKey = [];

  for (var key in source) {
    newKey.push(key);
  }

  var arr = [];
  // Only change code below this line

  for (let i = 0; i < collection.length; i++) {
    newKey.every((key) => {
      if (
        collection[i].hasOwnProperty(key) &&
        collection[i][key] === source[key]
      ) {
        arr.push(collection[i]);
      }
    });
  }
  return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' },
);
