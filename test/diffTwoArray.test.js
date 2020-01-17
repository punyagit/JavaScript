const diffArray = require('../intermediateAlgorithm/diffTwoArray');

test(' should return an array.', () => {
  expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBeTruthy;
});

test('should return an array with one item.', () => {
  expect(
    diffArray(
      ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
      ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'],
    ).length,
  ).toBe(1);
});

test('should return an array with ["pink wool"] ', () => {
  expect(
    diffArray(
      ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
      ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'],
    ),
  ).toEqual(['pink wool']);
});

test('should return an array with 3 items ', () => {
  expect(
    diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']).length,
  ).toEqual(3);
});
console.log(diffArray.length);

test('should have two arguments ', () => {
  expect(diffArray.length).toEqual(2);
});
