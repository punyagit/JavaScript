function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    /* Alter code above this line */
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'


/// getter and setter in a class

function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
        construcor(temperature) {
            this.temperature = temperature;
        }
        get temp() {

        }

        set temp(celcius) {

        }
    }

    /* Alter code above this line */
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

