const Util = require('../utility-function/util');
// prettier-ignore
const arrayOfCard = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

let multipleArrayOfCard = [];

function shuflleCard(numberOfDeck) {
  for (let i = 0; i < numberOfDeck; i += 1) {
    multipleArrayOfCard = multipleArrayOfCard.concat(arrayOfCard);
  }
  const shuffleDeckOfCard = Util.shuffleArray(multipleArrayOfCard);
  return shuffleDeckOfCard;
}

function dealCard(numberOfPlayer, deck) {
  const card = shuflleCard(deck);
  const cardOut = [];
  const cardToDeal = numberOfPlayer * 2 + 2;
  for (let i = 0; i < cardToDeal; i += 1) {
    let playerName = i % (numberOfPlayer + 1);
    if (cardOut[playerName] === undefined) cardOut[playerName] = [];

    cardOut[playerName].push(card.pop());
  }
  return cardOut;
}

module.exports = dealCard;
