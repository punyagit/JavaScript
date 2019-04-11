// let users = {
//     Alan: {
//         age: 27,
//         online: false
//     },
//     Jeff: {
//         age: 32,
//         online: true
//     },
//     Sarah: {
//         age: 48,
//         online: false
//     },
//     Ryan: {
//         age: 19,
//         online: true
//     }
// };

// function countOnline(obj) {
//     // change code below this line
//     let count = 0;
//     for (let user in obj) {

//         let value = obj[user]["online"];
//         if (value === true) {

//             count += 1
//         }

//     };
//     return count

//     // change code above this line
// }

// console.log(countOnline(users));



let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // change code below this line
    let arr = Object.keys(obj)

    return arr
    // change code above this line
}

console.log(getArrayOfUsers(users));