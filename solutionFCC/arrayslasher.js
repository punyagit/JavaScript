function slasher(arr, howMany) {
    // it doesn't always pay to be first
    if(howMany > arr.length){
        return arr = [];
    }
    else{
        var newArray = arr.slice(howMany)
        console.log(newArray)
        return newArray
    }
    
  }
  
  slasher([1, 2, 3], 2);