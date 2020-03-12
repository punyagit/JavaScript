function game3(array, valueToBet, backedNumber) {
  let times = 0;
  let amountToRecover = 0;
  for (let i = 0; i < array.length; i++) {
    if (amountToRecover === 0 && array[i] !== 0) {
      amountToRecover = amountToRecover + valueToBet;
    } else if (amountToRecover !== 0 && array[i] !== 0) {
      amountToRecover = amountToRecover + valueToBet;
    } else if (amountToRecover !== 0 && array[i] === 0) {
      amountToRecover += amountToRecover;
    } else {
      amountToRecover = 0;
    }
    console.log(`amount to recover in ${i} is ${amountToRecover}`);
  }

  //console.log(amo);
}

// prettier-ignore
//let array = [0,1,0,0,6,0,12,25,6,0,0,25,52,0,0,0,0,6,12,12,0,1,25,52,0]
let array = [1,1,0]
game3(array, 2, 3);
