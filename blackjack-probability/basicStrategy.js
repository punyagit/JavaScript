function basicStrategy(playerCard, dealerCard, card) {
  const playerCardValue = playerCard[0] + playerCard[1];

  const dealerFaceUpValue = dealerCard[0];
  if (playerCard[0] === playerCard[1]) {
    if (playerCard[0] === 8 || playerCard[0] === 11) {
      return [playerCard[0], playerCard[1]];
    }
    // prettier-ignore
    if ((playerCard[0] === 2 || playerCard[0] === 3 || playerCard[0] === 6 || playerCard[0] === 7 ||
    playerCard[0] === 9) && dealerFaceUpValue <= 6) {
      return [playerCard[0], playerCard[1]];
    }
    return playerCardValue;
  }
  if (playerCard.includes(11)) {
    return [playerCard[0], playerCard[1]];
  }

  return playerCardValue;
}

function handleAceCard(cardAllocated, card) {
  const value = cardAllocated.includes(11);
  let cardValue = cardAllocated[0] + cardAllocated[1];
  while (cardValue <= 16 || (cardValue > 21 && value)) {
    if (cardValue > 21) cardValue -= 10;
    let pullCard = card.shift();
    cardValue += pullCard;
    if (cardValue > 21 && (value || pullCard === 11)) {
      cardValue -= 10;
    }
  }
  return cardValue;
}

module.exports = { basicStrategy, handleAceCard };
