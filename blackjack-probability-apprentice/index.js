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
    let value = playBlackJack(1, deckOfCard);
    if (value.length === 2) {
      arr.push(value[0]);
      arr.push(value[1]);
    } else {
      arr.push(value[0]);
    }
    let value1 = playBlackJackStar(1, deckOfCard);
    if (value1.length === 2) {
      arr1.push(value1[0]);
      arr1.push(value1[1]);
    } else {
      arr1.push(value1[0]);
    }

    let value2 = playBlackJackBust(1, deckOfCard);
    if (value2.length === 2) {
      arr2.push(value2[0]);
      arr2.push(value2[1]);
    } else {
      arr2.push(value2[0]);
    }
  }
  displayResult(arr, '14 -----')
  displayResult(arr1, 'normal')
  displayResult(arr2, '15 ---')
}

playGames(50);