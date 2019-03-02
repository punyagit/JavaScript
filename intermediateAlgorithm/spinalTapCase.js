function spinalCase(str) {
    string = ""
    let newStr = str.replace(/_/g, "-")
    for (let i = 0; i < newStr.length; i++) {
        if (i === 0 && /[A - Z]/.test(newStr[i])) {

        }
    }
}

spinalCase('This_Is_Spinal Tap');