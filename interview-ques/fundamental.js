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




