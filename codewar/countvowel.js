function getCount1(str) {
  let vowelsCount = 0;
  const vowel = 'aeiou';
  // enter your majic here
  for (let i = 0; i < str.length; i++) {
    if ((vowel.indexOf(str[i])) >= 0) {
      vowelsCount += 1
    }
  }
  return vowelsCount;
}

function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}

getCount('punya');
getCount1('name');
