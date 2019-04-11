

// old way or ugly way
let person1 = {
    firstName: "punya",
    // Equivalent ---name: {firstName: 'John', last: 'smith'},
    lastName: "Chapagain",
    fullname: function () {
        return this.firstName + " " + this.lastName
    }
}

let person2 = {
    firstName: "Chris",
    // Equivalent ---name: {firstName: 'John', last: 'smith'},
    lastName: "Chang",
    // fullname: function() {
    //     return this.firstName + " " + this.lastName
    // }
}


person2.__proto__ = person1 //  now person 2 can use function or attributes of person 1

let fullName = person2.fullName()

console.log(fullName)

