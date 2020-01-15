const Utils = (() => ({
  shuffleArray(arr) {
    const shuffledArray = [];
    let value = arr.length;
    const newArray = [...arr];
    while (value >= 1) {
      const randomNumber = Math.floor(Math.random() * value);
      shuffledArray.push(newArray[randomNumber]);
      newArray[randomNumber] = newArray[newArray.length - 1];
      newArray.pop();
      value -= 1;
    }
    return shuffledArray;
  }
}))();

module.exports = Utils;
