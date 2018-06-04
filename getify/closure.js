function foo(x){
    return function(){
        return x;
    }
}

function add(x,y,z){
    return x + y + z
}

function add2(fn1,fn2,fn3){
    return add(fn1(),fn2(),fn3())
}

console.log(add2(foo(10), foo(42),foo(5)))