
(function(){
    for(let i = 0; i < 3; i++){
        let promise = new Promise((resolve, reject) => {
            setTimeout(() =>{
                const result = Math.random()
                if (result > 0.5){
                    resolve(result)
                }else{
                    reject("you have done something wrong")
                }
            }, 100)
        })

        promise.then(
            (value) => {
                value = value * 2 
                console.log(value)
                return value
            }

        ).then(
            (value) => {
                console.log(value * 100)
            }
        ).catch(
            (message) => {
                console.log(message)
            }
        )

        


        
    }
})()

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