
function GetSum( a,b )
{
if(a === b) return a
  else{
    var min = Math.min(a,b)
    var max = Math.max(a,b)
    var count = 0;
    for(var i = min; i <= max; i++){
      count+=i
    }
    return count
}
   
}