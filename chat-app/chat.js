const myName = require('./print')
const answer = require('./answer')



let thingsToPrint =
    [
        "========================================================================================",
        "     ==========  JJJJJJJ    EEEEEEE     N       N      N       N     Y       Y  ========",
        "     ==========      JJ     EE          N N     N      N N     N       Y   Y    ========",
        "     ==========      JJ     EEEEEEE     N   N   N      N   N   N        Y Y     ========",
        "     ==========  Jj  JJ     EE          N     N N      N     N N         YY     ========",
        "     ==========  JJJJJJ     EEEEEEE     N       N      N       N         YY     ========",
        "========================================================================================",
        "=================WELCOME TO THE THE JENNY CHAT ROOM ====================================",
        "=================TYPE exit WHENEVER YOU WANT TO EXIT ===================================",
    ]



// myName(thingsToPrint).then(() => {
//     recursiveAsyncReadLine("How can i help you "); //we have to actually start our recursion somehow


// }
// );


var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function (question) {
    rl.question(question, function (input) {
        if (input == 'exit') //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        if (answer[input]) {
            console.log(answer[input])
        }
        recursiveAsyncReadLine(""); //Calling this function again to ask new question
    });
};


recursiveAsyncReadLine("How can i help you ")

