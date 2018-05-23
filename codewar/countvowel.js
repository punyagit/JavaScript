function getCount1(str) {
    var vowelsCount = 0;
    var vowel = "aeiou"
    // enter your majic here
   for(var i = 0;i < str.length;i++){
    if((vowel.indexOf(str[i])) >= 0){
        vowelsCount+=1
   }
}
    return vowelsCount;
  }

  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  getCount("punya")