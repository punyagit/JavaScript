

let currency = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1]

function giveChange(paid, price) {
    let changeAmount = paid - price
    let changeToGive = []
    for (let i in currency) {
        while (changeAmount >= currency[i]) {
            changeToGive.push(currency[i] / 100);
            changeAmount -= currency[i];

        }

    }

    console.log(changeToGive)
    return changeToGive

}


giveChange(10000, 9230)