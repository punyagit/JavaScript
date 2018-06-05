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




///----
for(var i = 1; i <=5; i++){
    setTimeout(function(){console.log("i:" + i);
                         },i*1000);}