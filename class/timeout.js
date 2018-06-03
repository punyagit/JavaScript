
// function are called not one after another we are callingback
// so as dosomething should have been call first but here dosomething 
// call after done

function doSomething(callback) {
    let delay = 0 // millisecods
    let func = function() {
        let result = [1,2,3]
        console.log('dosomething()')
        callback(result)
        //return[1,2,3]
    }
    //func()
    setTimeout(func, delay)
    

}

let finished = function(result){
    console.log(result)
    console.log('done')
}

doSomething(finished)

//console.log("done")