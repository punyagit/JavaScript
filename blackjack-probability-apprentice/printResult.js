function printResult(playerCardValueArray, dealerCardValue) {
  console.log(`player card value = ${playerCardValueArray}  dealer card value = ${dealerCardValue}`)
  let winnerList = [];

  for (let i = 0; i < playerCardValueArray.length; i += 1) {
    let value = checkWinner(playerCardValueArray, dealerCardValue, i);
    if (playerCardValueArray.length > 1) {
      winnerList.push(value);
    } else {
      winnerList.push(value);
    }
  }
  return winnerList;
}

function checkWinner(playerCardValueArray, dealerCardValue, i) {
  //console.log(`player card == ${playerCardValueArray} dealer card  = ${dealerCardValue}`)
  let winnerList = '';
  if (playerCardValueArray[i] > 21) {
    winnerList = 'dw';
  } else if (
    playerCardValueArray[i] <= 21 &&
    playerCardValueArray[i] === dealerCardValue
  ) {
    winnerList = 'tie';
  } else if (playerCardValueArray[i] <= 21 && dealerCardValue > 21) {
    winnerList = 'pw';
  } else if (
    playerCardValueArray[i] <= 21 &&
    playerCardValueArray[i] > dealerCardValue
  ) {
    winnerList = 'pw';
  } else {
    winnerList = 'dw';
  }
  return winnerList;
}

module.exports = printResult;
