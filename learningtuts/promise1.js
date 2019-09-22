

var firstMethod = function () {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('first method completed');
            resolve({ data: '123' });
        }, 2000);
    });
    return promise;
};


var secondMethod = function (someStuff) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('second method completed');
            resolve({ newData: someStuff.data + ' some more data' });
        }, 1000);
    });
    return promise;
};

var thirdMethod = function (someStuff) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('third method completed');
            resolve({ result: someStuff.newData });
        }, 30);
    });
    return promise;
};

function firstMethod1() {
    //setTimeout(function(){
    //console.log("fist method")
    // },2000)
    for (var i = 0; i < 10; i++) {
        console.log("fist method")
    }
}

function secondMethod2() {
    //setTimeout(function(){
    for (var i = 0; i < 10; i++) {
        console.log("fist method")
    }
    //},1000)
}

function thirdMethod3() {
    return new Promise(function (resolve, reject) {
        console.log(" Hello new ")
    })
}

function promiseMethod() {
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < 10; i++) {
            console.log("fist1111 method")
        }
    })
}

//  firstMethod1()
//  secondMethod2()
//  thirdMethod3()
// promiseMethod().then(() => {
//     return thirdMethod3()
// })
Promise.all(firstMethod1(), promiseMethod()).then(() => {
    return 2
    console.log("done")
}
).catch(err => console.log(err))