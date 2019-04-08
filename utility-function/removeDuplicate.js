function removeDuplicate(head) {
    // var set1 = [... new Set(head)]  /// using set to remove duplicate values
    // console.log(set1)
    let obj = {}
    for (i in head) {
        obj[head[i]] = ""
    }
    let b = Object.keys(obj)
    return b
}


console.log(removeDuplicate([1, 1, 2]))