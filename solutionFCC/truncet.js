

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var stringLength = str.length
  if(stringLength > num){
      var stringLength = str.length;
      let newNum;
      for(let i = 0; i < stringLength; i++){
          if(str[i] === " "){
              if(i < num){
              newNum = i
                  
              }
              
          }
      }

      console.log(newNum)
      str1 = str.slice(0,newNum);
      var letters = /^[A-Za-z]+$/;
      if(str1[str1.length -1].match(letters)){
          console.log(str1 + "...")
          return str1 + "...";
      }
      else{
          str1 = str.slice(0,-1);
          return str1 + "..."
      }
      

  }
  
  return str;

}


var b = truncateString("A-tisket a-tasket A green and yellow basket", 11);