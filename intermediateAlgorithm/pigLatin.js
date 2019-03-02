function translatePigLatin(str) {
    if (str.match(/[aeiou]/) === null) {
        console.log(str)
        return str;
    } else {
        if (str.search(/[aeiou]/) === 0) {
            str += "way"
        } else {
            let val = (str.search(/[aeiou]/));
            str = str.slice(val) + str.slice(0, val) + "ay"
        }

    }
    console.log(str)
    return str;
}

translatePigLatin("glove");