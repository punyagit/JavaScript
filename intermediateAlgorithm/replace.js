function myReplace(str, before, after) {
    var new1 = (before.charAt(0) === before.charAt(0).toUpperCase()) ?
        (str.replace(before, (after.charAt(0).toUpperCase() + after.slice(1))))
        : str.replace(before, after)

    console.log(new1)
    return new1;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")