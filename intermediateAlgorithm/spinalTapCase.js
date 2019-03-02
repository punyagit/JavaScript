function spinalCase(str) {
    string1 = ""

    for (let i = 0; i < str.length; i++) {
        if (/[^_-\s]/.test(str[i - 1]) && /[A-Z]/.test(str[i]) && i !== 0) {
            string1 += "-" + str[i]
        } else {
            string1 += str[i];
        }


    }
    let newStr = (string1.toLowerCase()).replace(/[_\s]/g, "-")
    console.log(newStr)
}

spinalCase("This Is Spinal Tap")

// function spinalCase(str) {
//     // Create a variable for the white space and underscores.
//     var regex = /\s+|_+/g;

//     // Replace low-upper case to low-space-uppercase
//     str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

//     // Replace space and underscore with -
//     return str.replace(regex, '-').toLowerCase();
// }

// // test here
// spinalCase('This_Is SpinalTap');