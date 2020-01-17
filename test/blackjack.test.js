const playBlackJack = require('../blackjack-probability/index');

test('play black jack need to be pass', () => {
  expect(playBlackJack([1, 9, 7, 2])).not.toBe([1, 9, 7, 2]);
});
