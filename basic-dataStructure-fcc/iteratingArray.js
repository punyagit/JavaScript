// iterating through multi dimensional array to find if the given element is included

function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i].includes(elem))
        if (!arr[i].includes(elem)) {
            newArr.push(arr[i])

        }


    }
    // change code above this line

    return newArr;
}

// change code here to test different cases:

filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 1, 9]], 3);