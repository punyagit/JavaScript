function tickets(peopleInLine) {
    var bills = [0, 0, 0]
    for (var i = 0; i < peopleInLine.length; i++) {
      switch (peopleInLine[i]) {
        case 25:
          bills[0]++
          break
          
        case 50:
          bills[0]--
          bills[1]++
          break
          
        case 100:
          bills[1] ? bills[1]-- : bills[0] -= 2
          bills[0]--
          break
      }
      
      if (bills[0] < 0) {
        return 'NO'
      }
    }
    
    return 'YES'
  }






function tickets1(peopleInLine){
    // ...

    var num = peopleInLine
    var count = 0
    var fifty = 0
    for(var i = 0; i < num.length; i++){
        if (num[i]== 50){
            fifty+=1
        }
        var divider = num[i]/25 >> 0
        if (divider ==1){
            count+=1
            console.log(count)
        }
        else{
            count+=1
            if ((num[i] == 100) && (fifty > 0)) {
                fifty-= 1
                divider-=2
            }
            count-=divider
            console.log(count)

            if (count < 0){
                return 'NO'
            }
        }

      
    }
    console.log(count)
    return 'YES'
  }



  tickets([25,25,25,100,25,25,25,100,25,25,25,100,25,50,25,100]) // => YES 
  //tickets([25, 100])

