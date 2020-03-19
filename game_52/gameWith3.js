function playGame(array, valueToBet, backedNumber, secondBackedNumber) {
  let amountToRecover = 0;
  let needToBet = 0;
  let secondNeedToBet = 0;
  let displayValue = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === backedNumber || array[i] === secondBackedNumber) {
      amountToRecover = displayValue = 0;
      needToBet = 0;
    } else if (amountToRecover === 0 && array[i] !== 1) {
      amountToRecover = displayValue = valueToBet;
    } else if (amountToRecover !== 0 && array[i] !== 1) {
      // prettier-ignore
      let value = calculateNeedToBet(amountToRecover,valueToBet,backedNumber,secondBackedNumber);

      needToBet = value[1];
      secondNeedToBet = value[2];
      amountToRecover = displayValue = value[0];
    } else if (amountToRecover !== 0 && array[i] === 1) {
      // prettier-ignore
      let value = calculateNeedToBet(amountToRecover,valueToBet,backedNumber,secondBackedNumber);

      needToBet = value[1];
      secondNeedToBet = value[2];
      displayValue = value[0];
      amountToRecover = value[0] - valueToBet;
    }
    console.log(
      `amount to recover in ${i} is ${displayValue}  and value betted to recover is ${needToBet} and ${secondNeedToBet}`,
    );
  }
}

// prettier-ignore
function calculateNeedToBet(amountToRecover,valueToBet, backedNumber,secondBackedNumber) {
  let needToBet = Math.ceil((amountToRecover + valueToBet) / backedNumber);
  let secondNeedToBet =  Math.ceil((amountToRecover + valueToBet + needToBet) / secondBackedNumber);
  let value = (amountToRecover  + needToBet + secondNeedToBet)
  
  while((needToBet*(backedNumber+1) <= value) || (secondNeedToBet * (secondBackedNumber +1) <= value)) {
  
    if(needToBet*(backedNumber+1) <= value) {
      needToBet +=1;
      value +=1;
    }
    if(secondNeedToBet * (secondBackedNumber +1) <= value) {
      secondNeedToBet +=1;
      value +=1;
    }else{
      value +=1;
    }
    
  }
  
  return [value+valueToBet,needToBet,secondNeedToBet]
}

// prettier-ignore
//let array = [3,1,1,1,1,3,1,52,1,1,6.5,1,12,3,3,1,1,3,3,6.5,6.5,1,1,1,1,25,6.5,1,1,1,52,1,1,3,1,1,52,1,3,25,3,1,1,,1,3,3,3,3,1,1,1,1,1,1,1,25,3,1,3,6.5,25,1,1,1,1,6.5,1,1,1,1,1,1,3,3,1,6.5,3,3,25,3,1,12,1,1,3,1,1,1,1,3,3,1,31,12,3,1,1,
// 1,12,3,3,1,1,12,1,1,1,25,3,1,6.5,3,1,3,3,3,25,1,6.5,1,1,3,1,3,1,3,1,1,12,6.5,3,3,1,1,3,6.5,3,6.5,3,52,61,1,1,12,3,6,3,1,1,6,121,1,3,1,1,1,1,25,1,1,3,6,1,6,6,3,1,6,1,1,1,3,1,3,3,1,6,3,1,1,1,1,1,3,1]
let array = [2,1,2,2,2,2,2,2];
playGame(array, 5, 3, 6.5);
