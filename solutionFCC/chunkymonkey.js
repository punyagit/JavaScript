

function chunkArrayInGroups(arr, size) {

    arrayLength = arr.length
    var array = [];
    var k = 0
    for(var i = 0;i < arrayLength;i+=size){
        
        sliceArray = arr.slice(i,i + size)
        array[k] = sliceArray
        k+=1
    }
    
    console.log(array);
     // Break it up.
    return array;
}
  
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
  
  