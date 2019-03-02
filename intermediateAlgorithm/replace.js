function myReplace(str, before, after) {
    return (before.charAt(0) === before.charAt(0).toUpperCase()) ?
        (str.replace(before, (after.charAt(0).toUpperCase() + after.slice(1))))
        : str.replace(before, after)


}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))