/* eslint-disable no-lonely-if */
const { playBlackJack, playBlackJackStar, playBlackJackBust } = require('./playBlackJack');
const { shuflleCard } = require('./dealCard');
const { displayResult } = require('./printResult')


function playGames(times) {
  const arr = [];
  const arr1 = [];
  const arr2 = [];
  for (let k = 0; k < times; k += 1) {
    const deckOfCard = shuflleCard();
    arr.push(playMultipleBustGames(deckOfCard));
    arr1.push(playMultipleStarGames(deckOfCard));
    arr2.push(playMultipleGames(deckOfCard));
  }
  displayResult(arr, 'bust')
  displayResult(arr1, '3card')
  displayResult(arr2, '4card')
}

function playMultipleGames(deckOfCard) {
  let value = playBlackJack(1, deckOfCard);
  for (let i = 0; i < value.length; i += 1) {
    return value[i]
  }
}

function playMultipleStarGames(deckOfCard) {
  let value = playBlackJackStar(1, deckOfCard);
  for (let i = 0; i < value.length; i += 1) {
    return value[i];
  }
}
function playMultipleBustGames(deckOfCard) {
  let value = playBlackJackBust(1, deckOfCard);
  for (let i = 0; i < value.length; i += 1) {
    return value[i];
  }
}


playGames(200);