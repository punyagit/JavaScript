
// Using test to match the string
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // return true


// Using OR operator to match multiple string
let myRegex1 = /dog|cat|bird|fish/;

// To Ignore case Just use i 
myRegex = /dog|cat|bird|fish/i

// You can extract the actual word using .match()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // return "coding"

//To search or extract a pattern more than once, you can use the g flag.
let testStr = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

// The wildcard character . will match any one character. 
//For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.
myregex = /hu./;
myString.match(myRegex);