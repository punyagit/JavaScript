// function calulateDailyCompoundInterest(principal, day) {
//     for (let i = 1; i <= day; i++) {
//         let interest = (principal * 1 / 100)
//         principal = principal + interest
//         console.log("day " + i)

//         console.log(principal)
//     }
//     console.log(principal)
// }

function calulateDailyCompoundInterest(principal, day) {
  if (day > 0) {
    const interest = (principal * 1) / 100;
    const amount = principal + interest;
    const newDay = day - 1;
    return calulateDailyCompoundInterest(amount, newDay);
  }
  console.log(amount);
}

calulateDailyCompoundInterest(0.0575, 365);
