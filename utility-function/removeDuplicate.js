function removeDuplicate(head) {
    // var set1 = [... new Set(head)]  /// using set to remove duplicate values
    // console.log(set1)
    let obj = {}
    let arr = []
    for (i in head) {
        obj[head[i]] = ""
    }
    let arr = Object.keys(obj)
    return arr
}


console.log(removeDuplicate([1, 1, 2]))