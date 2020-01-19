/* eslint-disable no-lonely-if */
const { allDealCard, shuflleCard } = require('./dealCard');
const printResult = require('./printResult');
const { basicStrategy, handleAceCard } = require('./basicStrategy');

function playBlackJack(numberOfPlayer, deck) {
  const card = shuflleCard(deck);
  //console.log(card.slice(8, 15));
  const dealCard = allDealCard(numberOfPlayer, card);
  // console.log(dealCard);
  const dealerCard = dealCard[dealCard.length - 1];
  let dealerCardValue = 0;
  const playerCardValueArray = [];

  for (let i = 0; i < numberOfPlayer; i += 1) {
    // prettier-ignore
    let playerAfterStrategy = basicStrategy(dealCard[i], dealerCard);
    if (!Array.isArray(playerAfterStrategy)) {
      while (
        playerAfterStrategy <= 11 ||
        (playerAfterStrategy <= 16 && dealerCard[0] >= 7)
      ) {
        let pullCard = card.shift();
        if (pullCard === 11) {
          if (pullCard + playerAfterStrategy > 21) {
            playerAfterStrategy += 1;
          } else {
            playerAfterStrategy += pullCard;
          }
        } else {
          playerAfterStrategy += pullCard;
        }
      }
      playerCardValueArray.push(playerAfterStrategy);
    } else {
      if (playerAfterStrategy[0] !== playerAfterStrategy[1]) {
        playerCardValueArray.push(handleAceCard(playerAfterStrategy, card));
      } else {
        for (let i = 0; i < 2; i += 1) {
          while (
            playerAfterStrategy[i] <= 11 ||
            (playerAfterStrategy[i] <= 16 && dealerCard[0] >= 7)
          ) {
            playerAfterStrategy[i] += card.shift();
          }
          playerCardValueArray.push(playerAfterStrategy[i]);
        }
      }
    }
  }
  dealerCardValue = handleAceCard(dealerCard, card);
  return printResult(playerCardValueArray, dealerCardValue);
}

function playMultipleGames(times) {
  const arr = [];
  const combArr = [];
  let playerCount = 1;
  let pwCount = 0;
  let dwCount = 0;
  let tieCount = 0;
  let temp = '';
  let winner = '';
  let highValue = 1;
  for (let k = 0; k < times; k += 1) {
    let value = playBlackJack(1, 8);
    for (let i = 0; i < value.length; i += 1) {
      //console.log(temp);
      if (value[i] === 'pw') pwCount += 1;
      if (value[i] === 'tie') tieCount += 1;
      if (value[i] === 'dw') dwCount += 1;
      // console.log(value[i] + '======' + temp);

      if (value[i] === temp || value[i === 'tie']) {
        if (value[i] !== 'tie') {
          playerCount += 1;
        }
        if (k === times - 1) combArr.push(playerCount + value[i]);
      } else {
        if (playerCount > 1) combArr.push(playerCount + arr[k - 1]);

        playerCount = 1;
      }
      if (value[i] !== 'tie') temp = value[i];
      if (playerCount > highValue) {
        highValue = playerCount;
        winner = arr[k - 1];
      }

      arr.push(value[i]);
    }
  }
  console.log(combArr);
  //console.log(arr);
  console.log(`the highest value is ${highValue} and that is ${winner}`);

  console.log(
    `player win = ${pwCount} --- dealer win = ${dwCount} --- tie = ${tieCount}`,
  );
  //return arr;
}
playMultipleGames(500);
