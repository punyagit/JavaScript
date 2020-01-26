function basicStrategy(playerCard, dealerCard) {
  const playerCardValue = playerCard[0] + playerCard[1];

  const dealerFaceUpValue = dealerCard[0];
  if (playerCard[0] === playerCard[1]) {
    if (playerCard[0] === 8 || playerCard[0] === 11) {
      return [playerCard[0], playerCard[1]];
    }
    // prettier-ignore
    if ((playerCard[0] === 2 || playerCard[0] === 3 || playerCard[0] === 7) && dealerFaceUpValue <= 7) {
      return [playerCard[0], playerCard[1]];
    }
    if (playerCard[0] === 6 && dealerFaceUpValue <= 6) {
      return [playerCard[0], playerCard[1]];
    }
    // prettier-ignore
    if (playerCard[0] === 4 && (dealerFaceUpValue === 5 || dealerFaceUpValue === 6)) {
      return [playerCard[0], playerCard[1]];
    }

    if (playerCard[0] === 9 && dealerFaceUpValue <= 9 && dealerFaceUpValue !== 7) {
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
  let value = cardAllocated.includes(11);
  let cardValue = cardAllocated[0] + cardAllocated[1];
  while ((cardValue <= 16 || cardValue > 21) && value) {
    if (cardValue > 21) cardValue -= 10;
    let pullCard = card.shift();
    console.log(`pull card handle ace ===${pullCard}`)
    if (cardValue === 11) value = false;
    cardValue += pullCard;
    if (cardValue > 21 && value) {
      cardValue -= 10;
    }
  }
  return cardValue;
}

module.exports = { basicStrategy, handleAceCard };
