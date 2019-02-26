function diffArray(arr1, arr2) {

    var newArr = [];
    var length = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < length; i++) {
        if (i < arr1.length) {
            if (!arr2.includes(arr1[i])) {
                newArr.push(arr1[i])
            }
        }
        if (i < arr2.length) {
            if (!arr1.includes(arr2[i])) {
                newArr.push(arr2[i])
            }
        }
    }

    // Same, same; but different.
    console.log(newArr)
    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);