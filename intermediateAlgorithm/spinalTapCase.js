function spinalCase(str) {
    string1 = ""
    //let newStr = str.replace(/[_\s]/g, "-")
    //console.log(newStr)
    for (let i = 0; i < str.length; i++) {
        if (/[^_-\s]/.test(str[i - 1]) && /[A-Z]/.test(str[i]) && i !== 0) {
            string1 += "-" + str[i]
        } else {
            string1 += str[i];
        }


    }
    let newStr = (string1.toLowerCase()).replace(/[_\s]/g, "-")
    console.log(string1)
}

spinalCase("This Is Spinal Tap")