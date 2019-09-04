function myVoucher(check) {




    if (check.match(/^\(?(\d{10})?([A-Z]{2})$/)) {

        // calculating value of first five number

        let firstAlpha = (((check[0] * check[1]) + check[2] * 1) * check[3] + check[4] * 1) % 26;
        console.log(firstAlpha)
        //calculating value of second five number
        let firstAlpha1 = (((check[5] * check[6]) + check[7] * 1) * check[8] + check[9] * 1) % 26;
        console.log(firstAlpha1)
        // Converting value of A to 0 and goes on
        let textValue = (check.charCodeAt(10) - 65);

        let textValue1 = (check.charCodeAt(11) - 65);

        // Checking if my  value is valid
        if ((firstAlpha == textValue) && (firstAlpha1 == textValue1))
            return "you have a valid coupon"




    }
    return "enter a valid coupon"
}


console.log(myVoucher("3235381326WC"))