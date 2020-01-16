function blackJackBasicStrategy(playerCard, playerNumber, dealerCard, card) {
  const playerCardValue = playerCard[0] + playerCard[1];

  const dealerFaceUpValue = dealerCard[0];
  if (playerCard[0] === playerCard[1]) {
    if (playerCard[0] === 8 || playerCard[0] === 11) {
      return splitCard(playerCard[0], playerNumber, card);
    }

    // prettier-ignore

    if ((playerCard[0] === 2 || playerCard[0] === 3 || playerCard[0] === 6 || playerCard[0] === 7 ||
    playerCard[0] === 9) && dealerFaceUpValue <= 6) {
      return splitCard(playerCard[0], playerNumber, card);
    }
    return playerCardValue;
  }
  if (playerCard.includes(11)) {
    return playerCardValue;
  }
  return dealHardCard(playerCardValue, card);
}

function splitCard(cardToSplit, playerNumber, card) {
  const value1 = cardToSplit + card.shift();

  const value2 = cardToSplit + card.shift();
  return [value1, value2];
}

function dealHardCard(playerCardValue, card) {
  if (playerCardValue <= 11) {
    return playerCardValue + card.shift();
  }
  return playerCardValue;
}

function dealAce(playerCardValue, dealerFaceUpValue) {}

module.exports = blackJackBasicStrategy;
