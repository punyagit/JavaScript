function rot13(str) { // LBH QVQ VG!
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (!(/^[A-Z]/).test(str[i])) {
            newStr += str[i]
        } else {
            let a = ((str.charCodeAt(i) + 13) < 91) ? ((str.charCodeAt(i) + 13)) : ((str.charCodeAt(i) + 13) % 91 + 65)
            let b = String.fromCharCode(a)
            newStr += b

        }


    }


    console.log(newStr)
    return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");