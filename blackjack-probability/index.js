const { allDealCard, shuflleCard } = require('./dealCard');
const basicStrategy = require('./basicStrategy');

function playBlackJack(numberOfPlayer, deck) {
  const card = shuflleCard(deck);
  const dealCard = allDealCard(numberOfPlayer, card);
  console.log(dealCard);
  const dealerCard = dealCard[dealCard.length - 1];
  let dealerCardValue = dealerCard[0] + dealerCard[1];
  for (let i = 0; i < numberOfPlayer; i += 1) {
    // prettier-ignore
    let playerAfterStrategy = basicStrategy(dealCard[i], i + 1, dealerCard, card);
    if (playerAfterStrategy !== []) {
      while (playerAfterStrategy <= 16 && dealerCard[0] >= 7) {
        playerAfterStrategy += card.shift();
      }
      while (dealerCardValue <= 16) {
        dealerCardValue += card.shift();
      }
      //console.log(`value of player ${playerAfterStrategy}`);
    }
    if (playerAfterStrategy > 21) {
      console.log(`player${i + 1} loose with ${playerAfterStrategy}`);
    } else if (
      playerAfterStrategy <= 21 &&
      playerAfterStrategy === dealerCardValue
    ) {
      console.log(
        `player${i +
          1} tie with value ${playerAfterStrategy}  ${dealerCardValue}`,
      );
    } else if (playerAfterStrategy <= 21 && dealerCardValue >= 21) {
      console.log(
        `player${i + 1} win ${playerAfterStrategy}  ${dealerCardValue}`,
      );
    } else if (
      playerAfterStrategy <= 21 &&
      playerAfterStrategy > dealerCardValue
    ) {
      console.log(
        `player${i + 1} win ${playerAfterStrategy}  ${dealerCardValue}`,
      );
    } else {
      console.log(`dealer win ${dealerCardValue}`);
    }
  }
}

playBlackJack(3, 4);
