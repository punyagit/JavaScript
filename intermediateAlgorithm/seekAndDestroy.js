function destroyer(...arr) {
    // Remove all the values

    let newArr = []
    let array1 = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        newArr.push(arguments[i])
    }

    var array3 = array1.filter(function (obj) { return newArr.indexOf(obj) == -1; });

    console.log(array3)
    return array3;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);