function printResult(playerCardValueArray, dealerCardValue) {
  //return dealerCardValue;
  let v = [];

  for (let i = 0; i < playerCardValueArray.length; i += 1) {
    let value = checkWinner(playerCardValueArray, dealerCardValue, i);
    if (playerCardValueArray.length > 1) {
      v.push(value);
    } else {
      v.push(value);
    }
    console.log(value);
  }
  return v;
  //console.log(v);
}

function checkWinner(playerCardValueArray, dealerCardValue, i) {
  let v = '';
  if (playerCardValueArray[i] > 21) {
    v = 'pb';
  } else if (
    playerCardValueArray[i] <= 21 &&
    playerCardValueArray[i] === dealerCardValue
  ) {
    v = 'tie';
  } else if (playerCardValueArray[i] <= 21 && dealerCardValue > 21) {
    v = 'pw';
  } else if (
    playerCardValueArray[i] <= 21 &&
    playerCardValueArray[i] > dealerCardValue
  ) {
    v = 'pw';
  } else {
    v = 'dw';
  }
  return v;
}
//console.log(printResult([11], 45));

module.exports = printResult;
