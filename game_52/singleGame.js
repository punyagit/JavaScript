function game3(array, valueToBet, backedNumber) {
  let times = 0;
  let amountToRecover = 0;
  let needToBet = 0;
  let displayValue = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === backedNumber) {
      amountToRecover = displayValue = 0;
      needToBet = 0;
    } else if (amountToRecover === 0 && array[i] !== 1) {
      amountToRecover = displayValue = valueToBet;
    } else if (amountToRecover !== 0 && array[i] !== 1) {
      needToBet = Math.ceil((amountToRecover + valueToBet) / backedNumber);
      amountToRecover = amountToRecover + valueToBet + needToBet;
      displayValue = amountToRecover;
    } else if (amountToRecover !== 0 && array[i] === 1) {
      needToBet = Math.ceil((amountToRecover + valueToBet) / backedNumber);
      displayValue = amountToRecover + valueToBet + needToBet;
      amountToRecover = amountToRecover + needToBet;
      times += 1;
    }
    console.log(
      `amount to recover in ${i} is ${displayValue}  and value betted to recover is ${needToBet} `,
    );
  }

  console.log(times);
}

let array = [4, 1, 1, 4, 1, 1];

game3(array, 10, 2);
