const dealCard = require('./dealCard');

function playBlackJack(numberOfPlayer, deck) {
  const playerCard = dealCard(numberOfPlayer, deck);
  console.log(playerCard);
}

playBlackJack(3, 2);
