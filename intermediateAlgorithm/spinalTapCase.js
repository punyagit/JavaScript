function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let nstr = ""
    for (let i = 0; i < str.length; i++) {
        if (/^[A-Z]/.test(str[i])) {
            a = str[i].toLowerCase();
            console.log(a)
        }
        nstr += a || str[i]
        a = null;

    }
    console.log(nstr)
    return str;
}

spinalCase('This Is Spinal Tap');