let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// change code below this line
foods["bananas"] = 13;
foods["grapes"] = 13;
foods["strawberries"] = 13;





// change code above this line

console.log(foods);

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    // change code below this line
    return (users.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan')) ? true : false;
    // change code above this line
}

console.log(isEveryoneHere(users));