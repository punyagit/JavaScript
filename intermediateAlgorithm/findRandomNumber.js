// prettier-ignore
let data = [1,52, 1, 3, 1, 3, 1, 12, 1, 6.5, 1, 3, 1, 3,1, 25, 1,6.5, 1, 3, 1,12,1 ,3, 1, 6.5, 1, 3,52, 1, 3, 1, 6.5, 1, 12, 1, 3, 1, 3, 1, 25, 1, 3, 1, 3,6.5, 1, 3, 1, 12, 1, 3, 1, 6.5];

const generateRandomNumber = (data) => {
  const value = data.length;
  //console.log(value);
  const randomNumber = Math.floor(Math.random() * value);
  console.log(data[randomNumber]);
};

generateRandomNumber(data);
