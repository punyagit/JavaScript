


function calulateDailyCompoundInterest(principal, day) {
    for (let i = 1; i <= day; i++) {
        let interest = (principal * 1 / 100)
        principal = principal + interest
        console.log("day " + i)

        console.log(principal)
    }
    console.log(principal)
}

function calulateDailyCompoundInterest(principal, day) {
    for (let i = 1; i <= day; i++) {
        let interest = (principal * 1 / 100)
        principal = principal + interest
        console.log("day " + i)

        console.log(principal)
    }
    console.log(principal)
}


calulateDailyCompoundInterest(.0575, 365)
