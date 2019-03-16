// var is a function scope and let is a block scope 

//--- Hoisting 

// javascript read top to buttom but


k = "puna"
var k;
console.log(k) // instead of printing undefined it print "puna" but if you use let error because
// it read as var a; and a = 2 in any case

// both function and variable are hoisted but function are hoisted first


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

function foo1() {
	var a = 1;

	function bar() {
		var b = 2;

		function baz() {
			var c = 3;

			console.log( a, b, c );	// 1 2 3
		}

		baz();
		console.log( a, b );		// 1 2
	}

	bar();
	console.log( a,b );				// 1
}

//foo1();

// let is a scope variable so it will belong to {....}
// here let and var behaved same way 

function foo2() {
	let a = 1;

	function bar() {
		let b = 2;

		function baz() {
			let c = 3;

			console.log( a, b, c );	// 1 2 3
		}

		baz();
		console.log( a, b );		// 1 2
	}

	bar();
	console.log( a);				// 1
}

foo2();