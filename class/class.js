

let person1 = {
    name: {first: 'John', last: 'smith'},
    fullname: function() {
        return this.name.first + " " + this.name.last
    }
}

let person2 = {
    name: {first: 'Punya', last: 'chapagain'},
}
//person2.__proto__ = person1 //  now person 2 can use function or attributes of person 1 ugly way
// object.setprototype of veey common see docs
//person2  = Object.create(person1,{name: 'jane', last: 'smith'}), // docs object.create()

//console.log(person1.fullname())
console.log(person2.fullname())