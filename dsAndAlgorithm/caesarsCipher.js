function rot13(str) { // LBH QVQ VG!
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (!(/^[A-Z]/).test(str[i])) {
      newStr += str[i];
    } else {
      const a = ((str.charCodeAt(i) + 13) < 91) ? ((str.charCodeAt(i) + 13)) : ((str.charCodeAt(i) + 13) % (91 + 65));
      const b = String.fromCharCode(a);
      newStr += b;
    }
  }


  return newStr;
}

module.exports = rot13;

// Change the inputs below to test
rot13('SERR PBQR PNZC');
