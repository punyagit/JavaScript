
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

// character classes can be used to search for a literal pattern inside [] (square bracket)
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // check both upper and lower case vowel more than once
let result = quoteSample.match(vowelRegex); // Change this line

// character set like [a-e] or [a-z] or can be used

// Using caret to set what to not match 
myRegex = /[^aeiou]/ig // it wont match any vowel

// + sign is use for checking if the match is in a row 
myRegex = /a+/

// * is used to check if characters occor zero or more times

// $ sign to search end of the string.