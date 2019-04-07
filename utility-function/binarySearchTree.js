

function binarySearchTree(arr, val) {
    let length = arr.length;
    let value = Math.floor(length / 2)

    if (length < 2 && arr[0] === val) {
        console.log(1)
        return true
    }
    else if (length < 2 && arr[0] !== val) {
        console.log(2)

        return false
    }
    else if (arr[value - 1] === val) {
        console.log(3)

        return "in the middle"

    }
    else if (arr[value - 1] < val) {
        console.log(4)

        return binarySearchTree(arr.slice(value, length), val)
    } else {
        console.log(5)

        return binarySearchTree(arr.slice(0, value), val)
    }



}

console.log(binarySearchTree([1, 3, 4, 6, 7, 9, 11, 21, 23, 25, 27, 29, 31, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47], 6))