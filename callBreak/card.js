
const arrayOfCard = ['C1C.png', 'D1D.png', 'H1H.png', 'S1S.png', 'C2C.png', 'D2D.png', 'H2H.png', 'S2S.png', 'C3C.png', 'D3D.png', 'H3H.png', 'S3S.png',
  'C4C.png', 'D4D.png', 'H4H.png', 'S4S.png', 'C5C.png', 'D5D.png', 'H5H.png', 'S5S.png', 'C6C.png', 'D6D.png', 'H6H.png', 'S6S.png',
  'C7C.png', 'D7D.png', 'H7H.png', 'S7S.png', 'C8C.png', 'D8D.png', 'H8H.png', 'S8S.png', 'C9C.png', 'D9D.png', 'H9H.png', 'S9S.png',
  'CIC.png', 'DID.png', 'HIH.png', 'SIS.png', 'CJC.png', 'DJD.png', 'HJH.png', 'SJS.png', 'CQC.png', 'DQD.png', 'HQH.png', 'SQS.png',
  'CRC.png', 'DRD.png', 'HRH.png', 'SRS.png'];


function shuffleArray(arr) {
  const newArray = [];
  const array = arr;
  while (arr.length >= 1) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    newArray.push(arr[randomNumber]);
    array[randomNumber] = arr[arr.length - 1];
    arr.pop();
  }
  return newArray;
}

const newShuffleCard = shuffleArray(arrayOfCard);
export default newShuffleCard;
