const getSum = require('../utility-function/sumBetween');
const { twoSum, timeTaken } = require('../utility-function/twoSum');
const isPalindrome = require('../utility-function/isPalindrome');
const util = require('../utility-function/util');
const caesarSipher = require('../dsAndAlgorithm/caesarsCipher');

test('add (1,4) to equal to 10', () => {
  expect(getSum(1, 4)).toBe(10);
});

test('add (1,5) to equal to 15', () => {
  expect(getSum(1, 5)).toBe(15);
});

// twoSum function

test('add ([2,7,9,12]) to equal to [0,1]', () => {
  expect(twoSum([2, 7, 9, 12], 9)).toEqual([0, 1]);
});

test('add ([2,2,9,12],4) to equal to [0,1]', () => {
  expect(twoSum([2, 2, 9, 12], 4)).toEqual([0, 1]);
});

// test is palindrome function

test('check palindrome (1221) to be true', () => {
  expect(isPalindrome(1221)).toBeTruthy();
});

test('check palindrome (-1221) to be False', () => {
  expect(isPalindrome(-1221)).toBeFalsy();
});

// check object
test('check palindrome (-1221) to be False', () => {
  expect(isPalindrome(-1221)).toBeFalsy();
});

test('not more than 40 millisecond', () => {
  expect(timeTaken < 40).toBeTruthy();
});

test('should be an array', () => {
  expect(util.shuffleArray([1, 9, 7, 2])).not.toBe([1, 9, 7, 2]);
});

//
