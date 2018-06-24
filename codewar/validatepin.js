function validatePIN (pin) {
    //return true or false
  var num = pin
var length = num.length
 //console.log(Number(num[0]))
  if ((num.length == 4) || (num.length == 6)){
    //console.log(num.length)
    var reg = /^\d+$/;
      return (reg.test(num))
  }
  return false
  
  }
  validatePIN("0-000000")
  