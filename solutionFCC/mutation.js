// function mutation(arr) {
//     var str1  = arr[0].toLowerCase();
//     var str2 = arr[1].toLowerCase();
//     for(var i = 0;i < str2.length; i++){
        
//         if((str1.indexOf(str2[i])) < 0){
//             console.log(str1.indexOf(str2[i]))
//             return false;
//         }
//     }
  
//     return true;
//   }
  
//   mutation(["hello", "helokk"]);
  
  


function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var newArray = [];
    for(var i =0;i < arr.length;i++){
      if(Boolean(arr[i]) !== false){
        newArray.push(arr[i])
      }
    }
    console.log(newArray)
    return newArray;
  }
  
  bouncer([7, "ate", "", false, 9]);
  
  