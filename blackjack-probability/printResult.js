function printResult(playerCardValueArray, dealerCardValue) {
  for (let i = 0; i < playerCardValueArray.length; i += 1) {
    if (playerCardValueArray[i] > 21) {
      return 'pb';
      // console.log(
      //   `Dealer win player${i + 1} busted with ${playerCardValueArray[i]}`,
      // );
    } else if (
      playerCardValueArray[i] <= 21 &&
      playerCardValueArray[i] === dealerCardValue
    ) {
      return 'tie';
      // console.log(
      //   `player${i + 1} tie with value ${
      //     playerCardValueArray[i]
      //   }  ${dealerCardValue}`,
      // );
    } else if (playerCardValueArray[i] <= 21 && dealerCardValue > 21) {
      return 'pw';
      // console.log(
      //   `player${i + 1} win ${playerCardValueArray[i]}  ${dealerCardValue}`,
      // );
    } else if (
      playerCardValueArray[i] <= 21 &&
      playerCardValueArray[i] > dealerCardValue
    ) {
      return 'pw';
      // console.log(
      //   `player${i + 1} win ${playerCardValueArray[i]}  ${dealerCardValue}`,
      // );
    } else {
      return 'dw';
      // console.log(`dealer win ${playerCardValueArray[i]} ${dealerCardValue}`);
    }
  }
}

module.exports = printResult;
