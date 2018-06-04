function foo(x){
    return function(){
        return x;
    }
}

function add(x,y){
    return x + y
}

function add2(fn1,fn2){
    return add(fn1(),fn2())
}

console.log(add2(foo(10), foo(42)))