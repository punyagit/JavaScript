(function() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random()
            if (result > 0.5) {
                console.log(`initial=${result}`)
                resolve(result)
            } else {
                reject("You fool! You've done something wrong!")
            }
        }, 1500)
    }).then((value) => {
      // Return a value; the promise returned by `then` gets resolved with
      // the returned value as its value.
      return value * 2
    }).then((value) => {
      // Return another pending promise object; the resolution/rejection of
      // the promise returned by then will be subsequent to the
      // resolution/rejection of the promise returned by the handler.
      // Also, the value of the promise returned by then will be the same as
      // the value of the promise returned by the handler.
      return new Promise((resolve, reject) => {
          // Pretend that the call to multiple a number by 10 is an
          // asynchronous operation and takes 1.5 seconds to compute.
          setTimeout(() => {
              resolve(value * 10)
          }, 1500)
      })
    }).then((value) => {
        // Return a hard-coded resolved promise.
        return Promise.resolve(value * 10)
    }).then((value) => {
        // Throw an error; the promise returned by `then` gets rejected with
        // the thrown error as its value;
        throw new Error(value)
    }).then((value) => {
      console.log("You'll never see this line printed in the console")
    }).catch((error) => {
      // Deal with the errors then return the value to continue the chain;
      // `catch` itself returns a resolved Promise. Note that this `catch`
      // catches both the `throw` immediately above as well as the reject
      // in the initial promise.
      console.log(error)
      return error.message
    }).then((value) => {
      console.log(`result=${value}`)
    })
})()








//(function() {
//    for(let i = 0; i < 3; i++){
//        let promise = new Promise((resolve, reject) => {
//            setTimeout(() =>{
//                const result = Math.random()
//                if (result > 0.5){
//                    resolve(result)
//                }else{
//                    reject("you have done something wrong")
//                }
//            }, 100)
//        })
//
//        promise.then(
//            (value) => {
//                value = value * 2 
//                console.log(value)
//                return value
//            }
//
//        ).then(
//            (value) => {
//                console.log(value * 100)
//            }
//        ).catch(
//            (message) => {
//                console.log(message)
//            }
//        )
//
//        
//
//
//        
//    }
//})()

// (function(){
//     for(let i = 0; i < 3; i++){
//         let promise = new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 const result = Math.random()
//                 if (result > 0.5){
//                     resolve(result)
//                 }else{
//                     reject("you have done something wrong")
//                 }
//             }, 1500)
//         })

//         promise.then(
//             (value) => {console.log(`resolved to ${value}`)},// result handler
//             () => {console.log('rejected')}// reject handler
//         )

//         promise.then(
//             (value) => {console.log(value * 100)},
//             // we don't have reject handler here
//             //() => {} reject handler
//         )
//         promise.catch(
//             (message) => {console.log(message)}
//         )


        
//     }
// })()