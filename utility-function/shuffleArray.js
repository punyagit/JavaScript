// Fisher-yates shuffle algorithm // Modern method Durstenfeld's version   -- 0(n)
function shuffleArray(arr) {
  const shuffledArray = [];
  let value = arr.length;
  const newArray = [...arr];
  while (value >= 1) {
    const randomNumber = Math.floor(Math.random() * value);
    shuffledArray.push(newArray[randomNumber]);
    newArray[randomNumber] = newArray[arr.length - 1];
    arr.pop();
    value -= 1;
  }
  return shuffledArray;
}

console.log(shuffleArray([3, 'punya', 7, 'bisam', 23, 56, 62]));
