function blackJackBasicStrategy(playerCard, dealerCard, card) {
  const playerCardValue = playerCard[0] + playerCard[1];

  const dealerFaceUpValue = dealerCard[0];
  if (playerCard[0] === playerCard[1]) {
    if (playerCard[0] === 8 || playerCard[0] === 11) {
      return splitCard(playerCard[0], card);
    }

    // prettier-ignore

    if ((playerCard[0] === 2 || playerCard[0] === 3 || playerCard[0] === 6 || playerCard[0] === 7 ||
    playerCard[0] === 9) && dealerFaceUpValue <= 6) {
      return splitCard(playerCard[0], card);
    }
    return playerCardValue;
  }
  if (playerCard.includes(11)) {
    return playerCardValue;
  }

  return playerCardValue;
}

function splitCard(cardToSplit, card) {
  const value1 = cardToSplit;

  const value2 = cardToSplit;
  return [value1, value2];
}

module.exports = blackJackBasicStrategy;
