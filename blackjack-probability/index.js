const Util = require('../utility-function/util');
// prettier-ignore
const arrayOfCard = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

let multipleArrayOfCard = [];

function shuflleCard(numberOfDeck) {
  for (let i = 0; i < numberOfDeck; i++) {
    multipleArrayOfCard = multipleArrayOfCard.concat(arrayOfCard);
  }
  const shuffleDeckOfCard = Util.shuffleArray(multipleArrayOfCard);
  return shuffleDeckOfCard;
}

function playBlackJack(numberOfPlayer, deck, numberOfGames) {
  const card = shuflleCard(deck);
  console.log(card);
}

playBlackJack(1, 2);
