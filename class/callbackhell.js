// callbackhell.com
function error(message) {
    console.log(`error: ${message}`)
}
// this fuction takes two callback
function doSomething(success, failure) {
    if(Math.random() > 0.5){
        success(result)
    }else{
        failure(result)
    }
}

function doSomethingElse(){

}

doSomething(
    function() {
        doSomethingElse()
    },
    error()  
)
