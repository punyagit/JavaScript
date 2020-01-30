/* eslint-disable no-lonely-if */
const { playBlackJack, playBlackJackStar } = require('./playBlackJack');
const { shuflleCard } = require('./dealCard');


function playGames(times) {
  const deckOfCard = shuflleCard();

  playMultipleGames(times, deckOfCard);
  playMultipleStarGames(times, deckOfCard);
}

function playMultipleGames(times, deckOfCard) {


  const arr = [];
  const combArr = [];
  let playerCount = 1;
  let pwCount = 0;
  let dwCount = 0;
  let tieCount = 0;
  let temp = '';
  let winner = '';
  let highValue = 1;
  for (let k = 0; k < times; k += 1) {
    let value = playBlackJack(1, deckOfCard);
    for (let i = 0; i < value.length; i += 1) {
      if (value[i] === 'pw') pwCount += 1;
      if (value[i] === 'tie') tieCount += 1;
      if (value[i] === 'dw') dwCount += 1;
      // console.log(value[i] + '======' + temp);

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
  }
  console.log(arr);
  console.log(`the highest value is ${highValue} and that is ${winner}`);
  console.log(
    `player win = ${pwCount} --- dealer win = ${dwCount} --- tie = ${tieCount}`,
  );
  //return arr;
}

function playMultipleStarGames(times, deckOfCard) {
  const arr = [];
  const combArr = [];
  let playerCount = 1;
  let pwCount = 0;
  let dwCount = 0;
  let tieCount = 0;
  let temp = '';
  let winner = '';
  let highValue = 1;
  for (let k = 0; k < times; k += 1) {
    let value = playBlackJackStar(times, deckOfCard);
    for (let i = 0; i < value.length; i += 1) {
      //console.log(temp);
      if (value[i] === 'pw') pwCount += 1;
      if (value[i] === 'tie') tieCount += 1;
      if (value[i] === 'dw') dwCount += 1;
      // console.log(value[i] + '======' + temp);

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
  }
  console.log(arr);
  console.log(`the highest star value is ${highValue} and that is ${winner}`);
  console.log(
    `player win = ${pwCount} --- star ---dealer win = ${dwCount} --- tie = ${tieCount}`,
  );
  //return arr;
}

playGames(2)