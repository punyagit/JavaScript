
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

    return false
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
let array = Array.from(Array(600000).keys())



let start = new Date()
twoSum(array, 300)
let timeTaken = new Date() - start

console.log("time taken " + timeTaken + " Milli Second")

module.exports = { twoSum, timeTaken }
