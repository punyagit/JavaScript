


const sum = (function () {
    "use strict";
    return function sum(...args) {
        //const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6


/// spread operatot to copy one value of array to another

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    "use strict";
    arr2 = [...arr1]; // change this line
})();
console.log(arr2);