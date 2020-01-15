// Best 0logn worst 0n
let twoSum = function(nums, target) {
  let numObject = {};
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    count += 1;
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      console.log(count);
      return [numObject[diff], i];
    }
    numObject[nums[i]] = i;
  }
  console.log(count);
  return false;
};

// solve using hastable and bettew than twoSum2 0nlogn

let twoSum1 = function(nums, target) {
  let numObject = {};
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    let thisNum = nums[i];
    numObject[thisNum] = i;
    count += 1;
  }

  for (var i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    count += 1;
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      console.log(count);
      return [i, numObject[diff]];
    }
  }
  console.log(count);
  return false;
};

// brute force way to solve 0n2
let twoSum2 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let number = target - nums[i];
    if (nums.slice(i + 1, nums.length).includes(number)) {
      if (i === nums.indexOf(number)) {
        let val = nums.slice(i + 1, nums.length).indexOf(number) + i + 1;

        return [i, val];
      }

      return [i, nums.indexOf(number)];
    }
    //console.log(i)
  }
  return false;
};
let array = Array.from(Array(2000).keys());
//let array = [2, 2, 7, 9, 5,]

let start = new Date();
console.log(twoSum(array, 5588));
let timeTaken = new Date() - start;

console.log('time taken ' + timeTaken + ' Milli Second');

module.exports = { twoSum, timeTaken };
