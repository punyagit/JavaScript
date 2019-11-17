/* eslint-disable func-names */
/* eslint-disable no-use-before-define */


import newShuffleCard from './card';


(function () {
  const player1 = [];
  const player2 = [];
  const player3 = [];
  const player4 = [];

  for (let i = 0; i < newShuffleCard.length; i += 1) {
    const distCard = i % 4;
    if (distCard === 0) player1.push(newShuffleCard[i]);
    if (distCard === 1) player2.push(newShuffleCard[i]);
    if (distCard === 3) player3.push(newShuffleCard[i]);
    if (distCard === 3) player4.push(newShuffleCard[i]);
  }
  sortAndDisplayCard(player1, 'player1');
  sortAndDisplayCard(player2, 'player2');
  sortAndDisplayCard(player3, 'player3');
  sortAndDisplayCard(player4, 'player4');
}());

function sortAndDisplayCard(array, id) {
  let myImg;
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    myImg = document.createElement('img');
    myImg.src = `image/${array[i]}`;
    myImg.width = 100;
    myImg.height = 130;
    myImg.style.left = `${i * 14}px`;
    document.getElementById(id).appendChild(myImg);
    myImg.addEventListener('mouseover', scaleUp);
    myImg.addEventListener('mouseout', scaleDown);
  }
}

function scaleUp(e) {
  const x = e.currentTarget;
  x.style.transform = 'scale(1.1)';
}

function scaleDown(e) {
  const x = e.currentTarget;
  x.style.transform = 'scale(1)';
}
