// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// console.log("please type exit to close the chat")
// let name = ""
// while (name !== "exit") {
//     readline.question(`Welcome to the chat ! Who is this `, (name) => {


//         console.log(`Hi ${name}!  How can i help you`)
//     })

// }

// readline.close()

var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function (question) {
    rl.question(question, function (answer) {
        if (answer == 'exit') //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        console.log("peter")
        recursiveAsyncReadLine(""); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine("How can i help you "); //we have to actually start our recursion somehow



