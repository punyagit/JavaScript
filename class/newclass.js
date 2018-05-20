// Every chrome doesn't understand this....
// Inheritance in javascript
//document.getElementById("dom").innerHTML = "punya";
document.getElementById('new').innerHTML='jhghjghj'
class Person{
    constructor(firstName,lastName){
        this.name = {}
        this.name.first = firstName
        this.name.last = lastName
    }

    fullName (){
        return this.name.first  + " " + this.name.last
    }
}

person = new Person('john','citizen')
person.prototype.name = "punya"
console.log(person.fullName())


// Inheritance

class Manager extends Person{
    constructor(firstName,lastName, age){
    super(firstName,lastName)
    this.age = age
    }
}

person = new Manager('john', 'Manager',26)

console.log(person.fullName())
console.log(person.age)

