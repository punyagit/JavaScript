
// array destructuring to re assign value
let a = 8, b = 6;
(() => {
    "use strict";
    // change code below this l ine
    [a, b] = [6, 8]
    // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8


// array destructurint to reasslign elements in array without using slice
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    const [a, b, ...arr] = list;
    // change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];