
// solve using hastable

let twoSum = function (nums, target) {
    let numObject = {};
    for (var i = 0; i < nums.length; i++) {
        let thisNum = nums[i];
        numObject[thisNum] = i;
    }
    for (var i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }


}


let twoSum2 = function (nums, target) {


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
// let array = Array.from(Array(10).keys())


// var t0 = performance.now();

console.log(twoSum([3, 3, 11, 15], 6))
// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');




