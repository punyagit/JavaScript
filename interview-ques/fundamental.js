
// Variables that have no value currently, actually have the undefined value. Calling typeof against such 
//variables will return "undefined"
//As we asserted in Chapter 1, JavaScript has typed values, not typed variables. 
//The following built-in types are available:

String
Number
Boolean
null 
undefined
Object 
Symbol//(new to ES6)

// Except object all are primitve data types
a = null
typeof(a)//==  "object"  its a bug so take a special precaution when comparing null to object

// object array and function are type of object

//------ Falsy value list----

// undefined
// null
// false
// +0, -0, and NaN
// ""

// object is truthty event with falsy value like ar c = new String("")

    // ----- Coercion-------

    // explicit coercion when you tell what to do

    var string1 = "56";
    var changeToNumber =  Number(string1);

    // implicit coercion
    // when you use == equal to match "42" == 42 or
    var multiply = string1 * 1; // here the value will be number 56


    //-- hoisting 

    // var is a function scope and let is a block scope 

//--- Hoisting 


var a = 2;

foo();					// works because `foo()`
						// declaration is "hoisted"

function foo() {
	a = 3;

	//console.log( a );	// 3

	var a;				// declaration is "hoisted"
                        // to the top of `foo()`
}

//console.log( a );	// 2  " the value of a is is 2 here because a is hoisted in line 16"

// When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes.


///-------------Polyfilling------
// In web development, a polyfill is code that implements a feature on web browsers that do not support the feature. 

/// ====== Transpilling ----
// some syntax can't be pollyfill so you use tools to convert your newer code into older code equivalent 
// this is callde transpinlinf "transfer + compiling"

//====== Scope and lexical Scope--------


var scope = "I am global";
function whatismyscope(){
   var scope = "I am just a local";
   function func() {return scope;}
   return func;
}

//whatismyscope()()  // It will return i am local becuse it check where the variable is originally


/// ====== Array -----
  // Using delete in an arayy remove the slot but length reamin same and value become undefined
