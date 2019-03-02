function sumAll(arr) {
    let sum = 0;
    let bigNum = (Math.max(...arr))
    let smallNum = (Math.min(...arr))

    while (smallNum <= bigNum) {
        sum += smallNum

        smallNum++;
    }
    return sum
}

sumAll([1, 4]);