function fearNotLetter(str) {
    let newStr = str[0]
    let a = ""
    for (let i = 0; i < str.length - 1; i++) {
        a = (str.charCodeAt(i) + 1 === str.charCodeAt(i + 1)) ? true : false

    }
    console.log(a)


}


fearNotLetter("abcdfjkl");