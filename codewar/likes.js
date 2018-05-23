// This function will tell how manu people like this

function likes1(names) {
    // TODO
    var value = names.length
if(value < 1) console.log("no one likes this")
else if(value < 2) console.log(names + " likes this")
else if(value < 3) console.log(names[0] + " and " + names[1] + " like this")
else if(value < 4) console.log(names[0] + ", " + names[1] + " and " + names[2] + " like this")
else console.log(names[0] + ", " + names[1] + " and " + (value -2) +" others like this")

}


function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }
    
  





likes([]) // must be "no one likes this"
likes(["Peter"]) // must be "Peter likes this"
likes(["Jacob", "Alex"]) // must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"])// must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) // must be "Alex, Jacob and 2 others like this"