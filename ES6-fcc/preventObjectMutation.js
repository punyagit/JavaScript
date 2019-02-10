// object and array are not completely mutated even using const so

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // change code below this line
    // Using freeze to mutate the object completely
    Object.freeze(MATH_CONSTANTS);


    // change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();