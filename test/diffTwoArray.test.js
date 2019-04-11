const diffArray = require('../intermediateAlgorithm/diffTwoArray')

test('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.', () => {
    expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toEqual(true);
});
