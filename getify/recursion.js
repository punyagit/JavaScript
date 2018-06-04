function mult(...args) {
    //console.log(...args)
    //console.log(args.length)
    if (args.length <= 2){ // it will stop for ulimited loop
        //console.log(args.length)
        return args[0] * args[1]
    }
    //console.log("here is " + args[0])
    return args[0] * mult(...args.slice(1)) // slice first number of args array
}

console.log(mult(3,4,5))
console.log(mult(3,4,5,7))
console.log(mult(3,4,5,6,7,3))


function doubleIt(v) {return v % 2}

x = [1,2,3,4,5].map(doubleIt)

console.log(x)

