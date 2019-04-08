
// function that convert number to Roman
function convertToRoman(num) {
    var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
        roman = '',
        i;
    for (i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }
    console.log(roman)
    return roman;
}



function romanToInteger(s) {
    let roman = s
    var lookup = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    let sum = 0;
    for (let i = 0; i < roman.length; i++) {
        if (roman[i + 1] === undefined) {
            return sum += lookup[roman[i]]
        }

        else if (roman[i] === roman[i + 1] || lookup[roman[i]] > lookup[roman[i + 1]]) {
            sum += lookup[roman[i]]


        } else {

            sum -= lookup[roman[i]]
        }

    }



}

console.log(romanToInteger("MDXLIII"))


