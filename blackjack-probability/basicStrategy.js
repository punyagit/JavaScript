function blackJackBasicStrategy(playerCard, dealerCard, card) {
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

module.exports = blackJackBasicStrategy;
