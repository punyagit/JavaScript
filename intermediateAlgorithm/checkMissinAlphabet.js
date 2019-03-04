// function fearNotLetter(str) {
//     let newStr = str[0]
//     let a = ""
//     for (let i = 0; i < str.length - 1; i++) {
//         a = (str.charCodeAt(i) + 1 === str.charCodeAt(i + 1)) ? true : false

//     }
//     console.log(a)


// }

function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}


console.log(fearNotLetter("abdf"));