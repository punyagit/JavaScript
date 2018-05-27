// Promises in javascript
let promiseToCleanTheRoom = new Promise(function(resolve, reject){
    let isClean = false
    if(isClean){ 
        resolve("clean")
    }else {
        reject("not clean")
    }
});

promiseToCleanTheRoom.then(function(resolve) { // resolve value come from resolve arguments
    console.log("the room is" + resolve)
}).catch(function(fromReject){ // reject value come from reject argument ("not clean")
    //console.log("the room is " + fromReject)
})


let cleanRoom = function(){
    return new Promise(function(resolve, reject){
        //console.log("i cleaned the room")
        
        resolve('Cleaned the room')
    })
}

function removeGarbage(){
    return new Promise(function(resolve, reject){
        console.log("i removed the garbage")
        resolve("remove Garbage")
    })
}

let winIcecream = function(){
    return new Promise(function(resolve, reject){
        resolve("won icecream")
    })
}

cleanRoom().then(function(){
 return removeGarbage()
})

// removeGarbage().then(function(){
//     return cleanRoom()

// })