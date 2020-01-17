/* eslint-disable no-lonely-if */
const { allDealCard, shuflleCard } = require('./dealCard');
const printResult = require('./printResult');
const { basicStrategy, handleAceCard } = require('./basicStrategy');

function playBlackJack(numberOfPlayer, deck) {
  const card = shuflleCard(deck);
  //console.log(card.slice(8, 15));
  const dealCard = allDealCard(numberOfPlayer, card);
  console.log(dealCard);
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
  let pwCount = 0;
  let dwCount = 0;
  let tieCount = 0;
  for (let i = 0; i < times; i += 1) {
    let value = playBlackJack(3, 3);
    //console.log(value.length);
    if (value === 'pw') pwCount += 1;
    if (value === 'tie') tieCount += 1;
    if (value === 'dw' || value === 'pb') dwCount += 1;

    arr.push(value);
  }
  console.log(arr);
  console.log(
    `player win = ${pwCount} --- dealer win = ${dwCount} --- tie = ${tieCount}`,
  );
  //return arr;
}
playMultipleGames(2);
