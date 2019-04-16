//(check[0] * check[1]) + check[2] * 1) * check[3] + check[4] * 1) % 26;
function generateCoupon() {
    // generate random number of 10 digit 
    let check = Math.floor(1000000000 + (Math.random() * 9000000000)).toString()

    let value1 = (((check[0] * check[1]) + check[2] * 1) * check[3] + check[4] * 1) % 26;
    let value2 = (((check[5] * check[6]) + check[7] * 1) * check[8] + check[9] * 1) % 26;


    console.log(check + String.fromCharCode(65 + value1) + String.fromCharCode(65 + value2))

}

generateCoupon()
