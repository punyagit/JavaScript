var X,Y,i, x,y, intNow;

X = function() {};
X.prototype.message = function(s) { var mymessage = s + "";}
X.prototype.addition = function(i,j) { return (i *2 + j * 2) / 2; }

Y = function() {
    this.message = function(s) { var mymessage = s + "";}
    this.addition = function(i,j) { return (i *2 + j * 2) / 2; }
};


//intNow = (new Date()).getTime();
for (i = 0; i < 1000000; i++) {
    y = new Y();
    y.message('hi');
    y.addition(i,2)
}
//console.log((new Date()).getTime() - intNow); //FF=5206ms; Safari=1554

intNow = (new Date()).getTime();
for (i = 0; i < 1000000; i++) {
    x = new X();
    x.message('hi');
    x.addition(i,2)
}
var na = ["punya","sam"]
var person = {
    firstName: "punya",
    lastName: "chapagain",
    fullname: function(){
        return this.firstName + this.lastName
    }
}

var arr = []
for(i = 1; i < 10000; i++){
    arr.push(i)
}
console.log(arr.length)


var num = 1000;
//person1.__proto__ = person
var t0 = performance.now();
for(i = 0; i < 10000;i++){
    console.log("punya")
}

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
