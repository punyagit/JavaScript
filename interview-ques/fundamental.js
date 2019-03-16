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




