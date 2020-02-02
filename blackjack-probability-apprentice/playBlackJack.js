const { allDealCard, allDealCardStar } = require('./dealCard');
const { basicStrategy, handleAceCard, handleDealerAceCard } = require('./basicStrategy');
const { printResult } = require('./printResult');


function playBlackJack(numberOfPlayer, deckOfCard) {
  const card = [...deckOfCard];
  //console.log(card.slice(0, 11))
  const dealStarCard = allDealCardStar(numberOfPlayer, card);
  const dealerCard = dealStarCard[dealStarCard.length - 1];
  let dealerCardValue = 0;
  const playerCardValueArray = [];

  for (let i = 0; i < numberOfPlayer; i += 1) {
    // prettier-ignore
    let playerAfterStrategy = basicStrategy(dealStarCard[i], dealerCard);
    if (!Array.isArray(playerAfterStrategy)) {
      while (
        playerAfterStrategy <= 11 ||
        (playerAfterStrategy <= 14 && dealerCard[0] >= 7)
      ) {
        let pullCard = card.shift();
        if (pullCard === 11) {
          if (pullCard + playerAfterStrategy > 21) {
            playerAfterStrategy += 1;
          } else {
            playerAfterStrategy += pullCard;
          }
        } else {
          playerAfterStrategy += pullCard;
        }
      }
      playerCardValueArray.push(playerAfterStrategy);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (playerAfterStrategy[0] !== playerAfterStrategy[1]) {
        playerCardValueArray.push(handleAceCard(playerAfterStrategy, card, dealerCard[0]));
      } else {
        for (let i = 0; i < 2; i += 1) {
          while (
            playerAfterStrategy[i] <= 11 ||
            (playerAfterStrategy <= 16 && dealerCard[0] >= 7)
          ) {
            playerAfterStrategy[i] += card.shift();
          }
          playerCardValueArray.push(playerAfterStrategy[i]);
        }
      }
    }
  }
  //console.log(`dealerCard is ${dealerCard}`)
  dealerCard[1] = card.shift();
  dealerCardValue = handleDealerAceCard(dealerCard, card);
  return printResult(playerCardValueArray, dealerCardValue);

}

function playBlackJackStar(numberOfPlayer, deckOfCard) {

  const card = [...deckOfCard];
  //console.log(card.slice(0, 11))
  const dealStarCard = allDealCardStar(numberOfPlayer, card);
  const dealerCard = dealStarCard[dealStarCard.length - 1];
  let dealerCardValue = 0;
  const playerCardValueArray = [];

  for (let i = 0; i < numberOfPlayer; i += 1) {
    // prettier-ignore
    let playerAfterStrategy = basicStrategy(dealStarCard[i], dealerCard);
    if (!Array.isArray(playerAfterStrategy)) {
      while (
        playerAfterStrategy <= 11 ||
        (playerAfterStrategy <= 16 && dealerCard[0] >= 7)
      ) {
        let pullCard = card.shift();
        if (pullCard === 11) {
          if (pullCard + playerAfterStrategy > 21) {
            playerAfterStrategy += 1;
          } else {
            playerAfterStrategy += pullCard;
          }
        } else {
          playerAfterStrategy += pullCard;
        }
      }
      playerCardValueArray.push(playerAfterStrategy);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (playerAfterStrategy[0] !== playerAfterStrategy[1]) {
        playerCardValueArray.push(handleAceCard(playerAfterStrategy, card, dealerCard[0]));
      } else {
        for (let i = 0; i < 2; i += 1) {
          while (
            playerAfterStrategy[i] <= 11 ||
            (playerAfterStrategy <= 16 && dealerCard[0] >= 7) || (playerAfterStrategy === 12 && dealerCard[0] <= 3)
          ) {
            playerAfterStrategy[i] += card.shift();
          }
          playerCardValueArray.push(playerAfterStrategy[i]);
        }
      }
    }
  }
  //console.log(`dealerCard is ${dealerCard}`)
  dealerCard[1] = card.shift();
  dealerCardValue = handleDealerAceCard(dealerCard, card);
  return printResult(playerCardValueArray, dealerCardValue);
}

function playBlackJackBust(numberOfPlayer, deckOfCard) {

  const card = [...deckOfCard];
  //console.log(card.slice(0, 11))

  const dealStarCard = allDealCardStar(numberOfPlayer, card);
  const dealerCard = dealStarCard[dealStarCard.length - 1];
  let dealerCardValue = 0;
  const playerCardValueArray = [];

  for (let i = 0; i < numberOfPlayer; i += 1) {
    // prettier-ignore
    let playerAfterStrategy = basicStrategy(dealStarCard[i], dealerCard);
    if (!Array.isArray(playerAfterStrategy)) {
      while (
        playerAfterStrategy <= 11 || (playerAfterStrategy <= 15 && dealerCard[0] >= 7)
      ) {
        let pullCard = card.shift();
        if (pullCard === 11) {
          if (pullCard + playerAfterStrategy > 21) {
            playerAfterStrategy += 1;
          } else {
            playerAfterStrategy += pullCard;
          }
        } else {
          playerAfterStrategy += pullCard;
        }
      }
      playerCardValueArray.push(playerAfterStrategy);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (playerAfterStrategy[0] !== playerAfterStrategy[1]) {
        playerCardValueArray.push(handleAceCard(playerAfterStrategy, card, dealerCard[0]));
      } else {
        for (let i = 0; i < 2; i += 1) {
          while (
            playerAfterStrategy[i] <= 11 || (playerAfterStrategy <= 15 && dealerCard[0] >= 7)
          ) {
            playerAfterStrategy[i] += card.shift();
          }
          playerCardValueArray.push(playerAfterStrategy[i]);
        }
      }
    }
  }
  //console.log(`dealerCard is ${dealerCard}`)
  dealerCard[1] = card.shift();
  dealerCardValue = handleDealerAceCard(dealerCard, card);
  return printResult(playerCardValueArray, dealerCardValue);
}


module.exports = { playBlackJack, playBlackJackStar, playBlackJackBust }

// normal black jack with 4 card deal
// function playBlackJack(numberOfPlayer, deckOfCard) {

//   const card = [...deckOfCard];
//   const dealCard = allDealCard(numberOfPlayer, card);

//   const dealerCard = dealCard[dealCard.length - 1];
//   let dealerCardValue = 0;
//   const playerCardValueArray = [];

//   for (let i = 0; i < numberOfPlayer; i += 1) {
//     // prettier-ignore
//     let playerAfterStrategy = basicStrategy(dealCard[i], dealerCard);
//     if (!Array.isArray(playerAfterStrategy)) {
//       while (
//         playerAfterStrategy <= 11 ||
//         (playerAfterStrategy <= 16 && dealerCard[0] >= 7) || (playerAfterStrategy === 12 && dealerCard[0] <= 3)
//       ) {
//         let pullCard = card.shift();
//         if (pullCard === 11) {
//           if (pullCard + playerAfterStrategy > 21) {
//             playerAfterStrategy += 1;
//           } else {
//             playerAfterStrategy += pullCard;
//           }
//         } else {
//           playerAfterStrategy += pullCard;
//         }
//       }
//       playerCardValueArray.push(playerAfterStrategy);
//     } else {
//       // eslint-disable-next-line no-lonely-if
//       if (playerAfterStrategy[0] !== playerAfterStrategy[1]) {
//         playerCardValueArray.push(handleAceCard(playerAfterStrategy, card, dealerCard[0]));
//       } else {
//         for (let i = 0; i < 2; i += 1) {
//           while (
//             playerAfterStrategy[i] <= 11 ||
//             (playerAfterStrategy <= 16 && dealerCard[0] >= 7) || (playerAfterStrategy === 12 && dealerCard[0] <= 3)
//           ) {
//             playerAfterStrategy[i] += card.shift();
//           }
//           playerCardValueArray.push(playerAfterStrategy[i]);
//         }
//       }
//     }
//   }
//   dealerCardValue = handleDealerAceCard(dealerCard, card);
//   return printResult(playerCardValueArray, dealerCardValue);
// }