const diffArray = require('../intermediateAlgorithm/diffTwoArray')

test(' should return an array.', () => {
    expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBeTruthy;
});

test('should return an array with one item.', () => {
    expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length).toBe(1);
});



