//JavaScript falls under the general category of "dynamic" or "interpreted" languages, it is in
// fact a compiled language. It is not compiled well in advance, as are many
// traditionally-compiled languages, nor are the results of compilation portable among various
// distributed systems.

// define some fruits
var orange = 'orange';
var apple = 'red';
if (orange === 'orange') {
  var orange = 'blue'; // the scope is global
  let apple = 'green'; // the scope is inside the if-block

  console.log(orange);  // blue
  console.log(apple);  // green
} 

console.log(orange); // blue
console.log(apple); // red

// if you don't declared apple globlayy but used var to apple in block scope it will pass the value but 
//using let will throw error.


console.log(d)/// get undefined because it declared below and used var if you use let it will throw error
var d;


//Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain 
//the scope of parent functions even if the parent function has returned.

