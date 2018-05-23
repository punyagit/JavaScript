function truncateString(str, num) {
  // Clear out that junk in your trunk
  var stringLength = str.length;
  if(stringLength > num){
    var str1 = str.slice(0,num);
    return str1 + "...";
  }
  return str;
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);