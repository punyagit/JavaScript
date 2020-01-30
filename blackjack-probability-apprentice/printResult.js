function printResult(playerCardValueArray, dealerCardValue) {
  //console.log(`player card value = ${playerCardValueArray}  dealer card value = ${dealerCardValue}`)
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

function displayResult(arr, strategy) {
  //console.log(arr)
  const combArr = [];
  let playerCount = 1;
  let pwCount = 0;
  let dwCount = 0;
  let tieCount = 0;
  let temp = '';
  let winner = '';
  let highValue = 1;
  const value = [...arr];
  for (let i = 0; i < value.length; i++) {
    if (value[i] === 'pw') pwCount += 1;
    if (value[i] === 'tie') tieCount += 1;
    if (value[i] === 'dw') dwCount += 1;

    if (value[i] === temp || value[i === 'tie']) {
      if (value[i] !== 'tie') {
        playerCount += 1;
      }
    } else {
      //if (playerCount > 1) combArr.push(playerCount + arr[k - 1]);

      playerCount = 1;
    }
    if (value[i] !== 'tie') temp = value[i];

    if (playerCount > highValue) {
      highValue = playerCount;
      //winner = arr[k - 1];
    }

  }

  //console.log(`the highest value is ${highValue} and that is ${winner} and strategy ${strategy}`);
  console.log(
    `player win = ${pwCount} --- dealer win = ${dwCount} --- tie = ${tieCount} and strategy ${strategy}`,
  );

}

module.exports = { printResult, displayResult };
