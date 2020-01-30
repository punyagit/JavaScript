/* eslint-disable no-lonely-if */
const { playBlackJack, playBlackJackStar } = require('./playBlackJack');
const { shuflleCard } = require('./dealCard');


function playGames(times) {
  const arr = [];
  const combArr = [];
  let playerCount = 1;
  let pwCount = 0;
  let dwCount = 0;
  let tieCount = 0;
  let temp = '';
  let winner = '';
  let highValue = 1;
  let allValue = { arr, combArr, playerCount, pwCount, dwCount, tieCount, temp, winner, highValue }

  const arr1 = [];
  const combArr1 = [];
  let playerCount1 = 1;
  let pwCount1 = 0;
  let dwCount1 = 0;
  let tieCount1 = 0;
  let temp1 = '';
  let winner1 = '';
  let highValue1 = 1;
  let allValue1 = { arr1, combArr1, playerCount1, pwCount1, dwCount1, tieCount1, temp1, winner1, highValue1 }

  for (let k = 0; k < times; k += 1) {
    const deckOfCard = shuflleCard();
    playMultipleGames(times, k, allValue, deckOfCard);
    playMultipleStarGames(times, k, allValue1, deckOfCard);
  }

}

function playMultipleGames(times, k, allValue, deckOfCard) {
  let { arr, combArr, playerCount, pwCount, dwCount, tieCount, temp, winner, highValue } = allValue;
  let value = playBlackJack(1, deckOfCard);
  for (let i = 0; i < value.length; i += 1) {
    if (value[i] === 'pw') pwCount += 1;
    if (value[i] === 'tie') tieCount += 1;
    if (value[i] === 'dw') dwCount += 1;

    if (value[i] === temp || value[i === 'tie']) {
      if (value[i] !== 'tie') {
        playerCount += 1;
      }
      if (k === times - 1) combArr.push(playerCount + value[i]);
    } else {
      if (playerCount > 1) combArr.push(playerCount + arr[k - 1]);

      playerCount = 1;
    }
    if (value[i] !== 'tie') temp = value[i];

    if (playerCount > highValue) {
      highValue = playerCount;
      winner = arr[k - 1];
    }
    arr.push(value[i]);
  }

  // console.log(arr);
  // console.log(`the highest value is ${highValue} and that is ${winner}`);
  // console.log(
  //   `player win = ${pwCount} --- dealer win = ${dwCount} --- tie = ${tieCount}`,
  // );
  //return arr;
}

function playMultipleStarGames(times, k, allValue1, deckOfCard) {

  let { arr1, combArr1, playerCount1, pwCount1, dwCount1, tieCount1, temp1, winner1, highValue1 } = allValue1;
  let value = playBlackJackStar(1, deckOfCard);
  for (let i = 0; i < value.length; i += 1) {
    //console.log(temp);
    if (value[i] === 'pw') pwCount1 += 1;
    if (value[i] === 'tie') tieCount1 += 1;
    if (value[i] === 'dw') dwCount1 += 1;
    // console.log(value[i] + '======' + temp);

    if (value[i] === temp1 || value[i === 'tie']) {
      if (value[i] !== 'tie') {
        playerCount1 += 1;
      }
      if (k === times - 1) combArr1.push(playerCount1 + value[i]);
    } else {
      if (playerCount1 > 1) combArr1.push(playerCount1 + arr1[k - 1]);

      playerCount1 = 1;
    }
    if (value[i] !== 'tie') temp1 = value[i];

    if (playerCount1 > highValue1) {
      highValue1 = playerCount1;
      winner1 = arr1[k - 1];
    }
    arr1.push(value[i]);
  }

  //console.log(arr1);
  //console.log(`the highest star value is ${highValue1} and that is ${winner1}`);
  // console.log(
  //   `player win = ${pwCount} --- star ---dealer win = ${dwCount} --- tie = ${tieCount}`,
  // );
  //return arr;
}

playGames(5)