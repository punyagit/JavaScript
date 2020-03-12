function game3(array) {
  let times = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (count !== 0 && array[i] === 0) {
      count = count + 1;
    }
    if (count === 0 && array[i] !== 0) {
      count = count + 2;
    }
  }

  console.log(count);
}

game3([1, 0]);
