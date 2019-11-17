/* eslint-disable func-names */
let X; let Y; let i; let x; let y;

X = function() {};
X.prototype.message = function(s) { let mymessage = `${s}`;}
X.prototype.addition = function(i,j) { return (i *2 + j * 2) / 2; }

Y = function() {
  this.message = function(s) { let mymessage = `${s}`;}
  this.addition = function(i,j) { return (i *2 + j * 2) / 2; };
};


//intNow = (new Date()).getTime();
for (i = 0; i < 1000000; i++) {
  y = new Y();
  y.message('hi');
  y.addition(i,2)
}


intNow = (new Date()).getTime();
for (i = 0; i < 1000000; i++) {
    x = new X();
    x.message('hi');
    x.addition(i,2)
}
let na = ["punya","sam"]
let person = {
    firstName: "punya",
    lastName: "chapagain",
    fullname: function(){
        return this.firstName + this.lastName
    }
}


let num = 1000;
//person1.__proto__ = person
let t0 = performance.now();
for(i = 0; i < 10;i++){
    console.log("punya")
}

let t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

console.log(performance.memory)
