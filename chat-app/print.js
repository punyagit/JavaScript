function timeout(ms) {
    return new Promise(res => setTimeout(res, ms));
}



async function myName(array) {
    for (let i = 0; i < array.length; i++) {

        console.log(array[i])
        await timeout(1000);
    }
}




module.exports = myName




// const myName = () => {
//     console.log("========================================================================================")
//     setTimeout(
//         () =>
//             console.log("     ==========  JJJJJJJ    EEEEEEE     N       N      N       N     Y       Y  ========")
//         , 1000);
//     setTimeout(
//         () =>
//             console.log("     ==========      JJ     EE          N N     N      N N     N       Y   Y    ========")

//         , 2000);

//     setTimeout(
//         () =>
//             console.log("     ==========      JJ     EEEEEEE     N   N   N      N   N   N        Y Y     ========")
//         , 3000);
//     setTimeout(
//         () =>
//             console.log("     ==========  Jj  JJ     EE          N     N N      N     N N         YY     ========")
//         , 4000);
//     // setTimeout(
//     //     () =>
//     //         console.log("     ==========  JJ  JJ     EE          N      NN      N      NN         YY     ========")
//     //     , 5000);
//     setTimeout(
//         () =>
//             console.log("     ==========  JJJJJJ     EEEEEEE     N       N      N       N         YY     ========")
//         , 5000);
//     setTimeout(
//         () =>
//             console.log("     ===================================================================================")
//         , 6000);
// }

// module.exports = myName