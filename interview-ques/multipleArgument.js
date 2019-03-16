// When you write a normal function you can get lengths using length properties in arguments 
function sum(x, y) {
    console.log(arguments.length)
};

//If you using arrow function argument is not provides so you can use rest operator

const sum1 = (...args) => {
    console.log(args.length)
}



sum(3, 4, 5)


/// closure here inner function can acces the variable from outer function scope as well as in closure 
// inner function can access the alue of outer function argument.
sum1(4, 5)



    !function(x){
        (function(y){
            console.log(y+ x)
        })(5)
        
    }(7);