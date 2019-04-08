

var twoSum = function (nums, target) {


    for (let i = 0; i < nums.length; i++) {
        let number = target - nums[i]
        if (nums.slice(i + 1, nums.length).includes(number)) {
            if (i === nums.indexOf(number)) {
                let val = nums.slice(i + 1, nums.length).indexOf(number) + i + 1

                return [i, val]
            }

            return [i, nums.indexOf(number)]
        }
        //console.log(i)
    }
    return false
};
let array = Array.from(Array(1000).keys())
var t0 = performance.now();

console.log(twoSum(array, 225000))
var t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');




