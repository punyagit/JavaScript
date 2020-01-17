const { allDealCard, shuflleCard } = require('./dealCard');
const basicStrategy = require('./basicStrategy');
const printResult = require('./printResult');

function playBlackJack(numberOfPlayer, deck) {
  const card = shuflleCard(deck);
  console.log(card.slice(8, 15));
  const dealCard = allDealCard(numberOfPlayer, card);
  console.log(dealCard);
  const dealerCard = dealCard[dealCard.length - 1];
  let dealerCardValue = 0;
  let playerCardValueArray = [];
  for (let i = 0; i < numberOfPlayer; i += 1) {
    // prettier-ignore
    let playerAfterStrategy = basicStrategy(dealCard[i], dealerCard, card);
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
  dealerCardValue = handleDealerCard(dealerCard, card);

  printResult(playerCardValueArray, dealerCardValue);
}

function handleDealerCard(cardAllocated, card) {
  let value = cardAllocated.includes(11);
  let cardValue = cardAllocated[0] + cardAllocated[1];
  while (cardValue <= 16 || (cardValue > 21 && value)) {
    if (cardValue > 21) cardValue -= 10;
    let pullCard = card.shift();
    console.log(`i have pull a card ${pullCard}`);

    cardValue += pullCard;
    if (cardValue > 21 && (value || pullCard === 11)) {
      cardValue -= 10;
      console.log(cardValue);
    }
  }
  return cardValue;
}

playBlackJack(3, 6);
