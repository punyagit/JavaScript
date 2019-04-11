function isPalindrome(num) {
    if (num === 0 || num === 1) return true;
    if (num < 0) return false
    let value = 1
    while (num / value > 10) {
        value = value * 10
    }
    while (num > 0) {
        if (Math.floor(num / value) === num % 10) {
            num = Math.floor((x % value) / 10);
            value = Math.floor(value / 100)
        } else return false
    }
    return true
}

console.log(isPalindrome(1214))